import fs from 'fs';

import commander from 'commander';

import { NetworkCallSpec, NetworkCallSpecMap, ValidNetworkCallKeys } from './models';
import {
  OpenApiNestedPaths,
  OpenApiOperation,
  OpenApiParameterLocation,
  OpenApiPathItemObject,
  OpenAPISpec,
} from './models/OpenAPI';
import {
  buildNestedObject,
  buildTypeObjectFromSchema,
  expandRefsOnObject,
  paramKeyToSemanticKey,
  setDeepParam,
  useHandlebarsTemplateFromFile,
} from './utils';


const createNetworkCallSpecMap = (
  pathObj: OpenApiPathItemObject,
  path: string,
): NetworkCallSpecMap => {
  const pathObjectKeys = Object.keys(pathObj) as Array<ValidNetworkCallKeys>;
  const out: NetworkCallSpecMap = {};

  for (let i = 0; i < pathObjectKeys.length; i++) {
    const currentKey = pathObjectKeys[i];
    out[currentKey] = {
      _end: true,
      method: currentKey,
      pathObj: pathObj[currentKey] as OpenApiOperation,
      url: path,
    };
  }

  return out;
};

const nestPathsObject = (
  pathsObject: Record<string, OpenApiPathItemObject>,
) => {
  const paths = Object.entries(pathsObject);
  let out: OpenApiNestedPaths = {};

  for (let i = 0; i < paths.length; i++) {
    const [currentPath, currentPathItemObject] = paths[i];
    const splitPath = currentPath.split('/').filter((path) => path !== '');
    out = buildNestedObject(splitPath, out);
    setDeepParam(
      out,
      splitPath,
      createNetworkCallSpecMap(currentPathItemObject, currentPath),
    );
  }

  return out;
};

const makeResponsesTypeFromNetworkCallSpec = ({
  pathObj,
}: NetworkCallSpec): string => {
  const responses: Set<any> = new Set();
  const responseObjects = Object.values(pathObj.responses);

  for (let i = 0; i < responseObjects.length; i++) {
    const currentResponse = responseObjects[i];

    if (
      !currentResponse.content ||
      !currentResponse.content?.['application/json']?.schema
    ) {
      responses.add('null');
      continue;
    }

    responses.add(
      buildTypeObjectFromSchema(
        currentResponse.content['application/json'].schema,
      ),
    );
  }

  return [...responses].join(' | ');
};

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

const makeValidStatusCodesFromNetworkCallSpec = ({
  pathObj,
}: NetworkCallSpec): Array<number> => {
  const responses = Object.keys(pathObj.responses);
  const statusCodes = new Set<number>();

  for (let i = 0; i < responses.length; i ++) {
    const codeToAdd = responses[i] === 'default' ? 200 : Number(responses[i]);
    statusCodes.add(codeToAdd);
  }

  return [...statusCodes];
};

const generateNetworkCalls = async (schema: OpenAPISpec) => {
  const [objectGenerator, pathGenerator, generateGenerateServiceCallMethod] =
    await Promise.all([
      useHandlebarsTemplateFromFile('./src/templates/object.txt'),
      useHandlebarsTemplateFromFile('./src/templates/path.txt'),
      useHandlebarsTemplateFromFile(
        './src/templates/generateServiceCallMethod.txt',
      ),
    ]);

  const buildNetworkCallsString = async (
    nestedPaths: OpenApiNestedPaths,
  ): Promise<string> => {
    const networkCallGeneratorArguments: Array<{ inner: string; key: string }> =
      [];
    const nestedPathEntries = Object.entries(nestedPaths);

    for (let i = 0; i < nestedPathEntries.length; i++) {
      const [currentKey, currentValue] = nestedPathEntries[i];
      const generatorArguments = {
        inner: '',
        key: `'${paramKeyToSemanticKey(currentKey)}'`,
      };

      // If we are not at the end of our nested path object, drill deeper
      // eslint-disable-next-line no-underscore-dangle
      if (typeof currentValue === 'object' && !currentValue._end) {
        generatorArguments.inner = `{${await buildNetworkCallsString(
          currentValue as OpenApiNestedPaths,
        )}}`;
        networkCallGeneratorArguments.push(generatorArguments);
        continue;
      }

      // We are at the end of our nested path as of now

      const responsesType = makeResponsesTypeFromNetworkCallSpec(
        currentValue as NetworkCallSpec,
      );
      const bodyType = makeBodyTypeFromNetworkCallSpec(
        currentValue as NetworkCallSpec,
      );
      const paramsType = await makeTypeFromNetworkCallSpecParams(
        currentValue as NetworkCallSpec,
        OpenApiParameterLocation.Path,
      );
      const queryType = await makeTypeFromNetworkCallSpecParams(
        currentValue as NetworkCallSpec,
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

      generatorArguments.inner = generateGenerateServiceCallMethod({
        method: currentValue.method,
        request: requestProperties.length
          ? objectGenerator({ properties: requestProperties })
          : 'null',
        response: responsesType,
        url: `${schema.servers?.[0].url}${currentValue.url}`,
        validResponseStatuses: makeValidStatusCodesFromNetworkCallSpec(
          currentValue as NetworkCallSpec,
        ),
      });

      networkCallGeneratorArguments.push(generatorArguments);
    }

    return pathGenerator({
      paths: networkCallGeneratorArguments,
    });
  };

  const nestedPathObject = nestPathsObject(schema.paths);
  return buildNetworkCallsString(nestedPathObject);
};

const buildLib = async (schemaFilePath: string, outFile: string) => {
  const [generator, file] = await Promise.all([
    useHandlebarsTemplateFromFile('./src/templates/clientRoot.txt'),
    fs.readFileSync(schemaFilePath, { encoding: 'utf-8' }),
  ]);

  let schema: OpenAPISpec = JSON.parse(file);
  schema = expandRefsOnObject(schema);
  schema.info.title = schema.info.title.split(' ').join('');

  const networkCalls = await generateNetworkCalls(schema);
  const lib = generator({
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
    buildLib(args[0], args[1]).then(() => {
      console.log(`
        LIB GENERATED!
      `);
    });
  });

commander.program.parse();
