import fs from 'fs';

import commander from 'commander';

import {
  NetworkCallSpec,
} from './models';
import {
  OpenApiParameterLocation,
  OpenApiPathItemObject,
  OpenAPISpec,
} from './models/OpenAPI';
import {
  buildTypeObjectFromSchema,
  expandRefsOnObject,
  useHandlebarsTemplateFromFile,
} from './utils';

const makeCallbacksTypeFromNetworkCallSpec = async ({
  pathObj,
}: NetworkCallSpec): Promise<string> => {
  const objectGenerator = await useHandlebarsTemplateFromFile(
    './src/templates/object.txt',
  );

  const propertiesArray = Object.entries(pathObj.responses).map(
    ([statusCode, response]) => {
      return {
        key: statusCode,
        value: response.content?.['application/json']?.schema
          ? `(response: ${buildTypeObjectFromSchema(
              response.content['application/json'].schema,
            )}) => void`
          : `(response?: unknown) => void`,
      };
    },
  );
  propertiesArray.push({
    key: 'fallback',
    value: '(response?: unknown) => void',
  });

  return objectGenerator({
    properties: propertiesArray,
  });
};

/**
 * @name makeBodyTypeFromNetworkCallSpec
 * @description Create a Typescript type for the body of a NetworkCallSpec
 */
const makeBodyTypeFromNetworkCallSpec = ({
  pathObj,
}: NetworkCallSpec): string => {
  if (!pathObj?.requestBody?.content?.['application/json']?.schema) {
    return '';
  }
  return buildTypeObjectFromSchema(
    pathObj.requestBody.content['application/json'].schema,
  );
};

/**
 * @name makeTypeFromNetworkCallSpecParams
 * @description Create a Typescript type from the parameters of a NetworkCallSpec.
 * You have to filter by which type of parameter you want the type for, i.e. query, path, headers, etc.
 */
const makeTypeFromNetworkCallSpecParams = async (
  { pathObj }: NetworkCallSpec,
  parameterLocation: OpenApiParameterLocation,
): Promise<string> => {
  if (!pathObj.parameters) {
    return '';
  }

  const objectGenerator = await useHandlebarsTemplateFromFile(
    './src/templates/object.txt',
  );

  const propertiesArgument: Array<{ key: string; value: string }> = [];
  for (let i = 0; i < pathObj.parameters.length; i++) {
    const currentParam = pathObj.parameters[i];

    if (currentParam.in !== parameterLocation) {
      continue;
    }

    propertiesArgument.push({
      key: currentParam.name,
      value: currentParam.schema
        ? buildTypeObjectFromSchema(currentParam.schema)
        : 'unknown',
    });
  }
  return propertiesArgument.length
    ? objectGenerator({
        properties: propertiesArgument,
      })
    : '';
};

/**
 * @name generateNetworkCalls
 * @description Generates the actual network calls and object properties of the output lib
 */
const generateNetworkCalls = async (schema: OpenAPISpec) => {
  const [objectGenerator, pathGenerator, generateGenerateServiceCallMethod] =
    await Promise.all([
      useHandlebarsTemplateFromFile('./src/templates/object.txt'),
      useHandlebarsTemplateFromFile('./src/templates/path.txt'),
      useHandlebarsTemplateFromFile(
        './src/templates/generateServiceCallMethod.txt',
      ),
    ]);

  const operations: Array<{ key: string; inner: string, description?: string; }> = [];
  const pathEntries = Object.entries(schema.paths);

  for (let i = 0; i < pathEntries.length; i++) {
    const [endpoint, pathObj] = pathEntries[i];
    const validMethods: Array<
      keyof Omit<
        OpenApiPathItemObject,
        '$ref' | 'description' | 'summary' | 'servers' | 'parameters'
      >
    > = [
      'get',
      'put',
      'post',
      'update',
      'delete',
      'options',
      'head',
      'patch',
      'trace',
    ];

    for (let j = 0; j < validMethods.length; j++) {
      const method = validMethods[j];
      const operation = pathObj[method];
      if (!operation || !operation.operationId) {
        continue;
      }

      const bodyType = makeBodyTypeFromNetworkCallSpec({
        pathObj: operation,
      } as NetworkCallSpec);
      const paramsType = await makeTypeFromNetworkCallSpecParams(
        { pathObj: operation } as NetworkCallSpec,
        OpenApiParameterLocation.Path,
      );
      const queryType = await makeTypeFromNetworkCallSpecParams(
        { pathObj: operation } as NetworkCallSpec,
        OpenApiParameterLocation.Query,
      );

      const requestProperties: Array<{
        key: string;
        required: boolean;
        value: string;
      }> = [];

      if (queryType.length) {
        requestProperties.push({
          key: 'query',
          required: true,
          value: queryType,
        });
      }
      if (paramsType.length) {
        requestProperties.push({
          key: 'params',
          required: true,
          value: paramsType,
        });
      }
      if (bodyType.length) {
        requestProperties.push({
          key: 'body',
          required: true,
          value: bodyType,
        });
      }
      const callbacksType = await makeCallbacksTypeFromNetworkCallSpec({
        pathObj: operation,
      } as NetworkCallSpec);
      const operationArgs: {
        description?: string
        inner: string,
        key: string,
      } = {
        inner: generateGenerateServiceCallMethod({
          bodyRequired: bodyType.length,
          callbacks: callbacksType,
          method: `'${method}'`,
          paramsRequired: paramsType.length,
          queryRequired: queryType.length,
          request: requestProperties.length
            ? objectGenerator({ properties: requestProperties })
            : 'null',
          url: `${schema.servers?.[0].url}${endpoint}`,
        }),
        key: operation.operationId,
      }
      if (operation.description) {
        operationArgs.description = operation.description;
      }
      operations.push(operationArgs);
    }
  }
  return pathGenerator({
    paths: operations,
  });
};

const generateMetaData = async (schema: OpenAPISpec) => {
  const [objectGenerator, pathGenerator] =
    await Promise.all([
      useHandlebarsTemplateFromFile('./src/templates/object.txt'),
      useHandlebarsTemplateFromFile('./src/templates/path.txt'),
    ]);

  const operations: Array<{ key: string; inner: string, description?: string; }> = [];
  const pathEntries = Object.entries(schema.paths);

  for (let i = 0; i < pathEntries.length; i++) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [endpoint, pathObj] = pathEntries[i];
    const validMethods: Array<
      keyof Omit<
        OpenApiPathItemObject,
        '$ref' | 'description' | 'summary' | 'servers' | 'parameters'
      >
    > = [
      'get',
      'put',
      'post',
      'update',
      'delete',
      'options',
      'head',
      'patch',
      'trace',
    ];

    for (let j = 0; j < validMethods.length; j++) {
      const method = validMethods[j];
      const operation = pathObj[method];
      if (!operation || !operation.operationId) {
        continue;
      }

      const successStatusCodes = `[${Object.keys(operation.responses).filter(statusCode => Number(statusCode) >= 200 && Number(statusCode) <= 299).map(code => `"${code}"`).join(', ')}] as const`;
      const errorStatusCodes = `[${Object.keys(operation.responses).filter(statusCode => Number(statusCode) >= 400 && Number(statusCode) <= 599).map(code => `"${code}"`).join(',')}] as const`;

      const operationArgs: {
        description?: string
        inner: string,
        key: string,
      } = {
        inner: objectGenerator({
          properties: [{
            key: 'successStatusCodes',
            required: true,
            value: successStatusCodes.length ? successStatusCodes : 'null'
          },{
            key: 'errorStatusCodes',
            required: true,
            value: errorStatusCodes.length ? errorStatusCodes : 'null'
          },{
            key: 'method',
            required: true,
            value: `"${method}" as HTTPMethod`
          }]
        }),
        key: operation.operationId,
      }
      if (operation.description) {
        operationArgs.description = operation.description;
      }
      operations.push(operationArgs);
    }
  }
  return pathGenerator({
    paths: operations,
  });
}

/**
 * @name buildLib
 * @description Entry point to generating a lib from a provided OpenAPI 3.0.0 spec schema
 */
const buildLib = async (schemaFilePath: string, outFile: string) => {
  const [generator, file] = await Promise.all([
    useHandlebarsTemplateFromFile('./src/templates/clientRoot.txt'),
    fs.readFileSync(schemaFilePath, { encoding: 'utf-8' }),
  ]);

  let schema: OpenAPISpec = JSON.parse(file);
  schema = expandRefsOnObject(schema);
  schema.info.title = schema.info.title.split(' ').join('');

  const networkCalls = await generateNetworkCalls(schema);
  const metaData = await generateMetaData(schema);
  const lib = generator({
    metaData,
    networkCalls,
    schema,
  });

  return fs.writeFileSync(outFile, lib);
};

commander.program
  .name('Fetcher Generator')
  .description('CLI tool for creating Fetcher clients')
  .version(process.env.npm_package_version || '0.0.0');

commander.program
  .command('generate')
  .description('Generates a fetcher client for the provided openAPI schema.')
  .argument('schema', 'File path to the schema you would like to use.')
  .argument('output', 'File path to output your client lib to.')
  .action(async (...args) => {
    const startTime = Date.now();
    buildLib(args[0], args[1]).then(() => {
      console.log(`
        LIB GENERATED!
        Generation Time: ${Date.now() - startTime}ms
      `);
    });
  });

commander.program.parse();
