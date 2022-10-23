import fs from 'fs';

import commander from 'commander';

import { Operation } from './models';
import {
  OpenApiParameter,
  OpenApiPath,
  OpenApiPathsObject,
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

// CLEAN
const createEndObject = (pathObj: OpenApiPath, path: string) => {
  const endObject: Record<string, any> = {};
  Object.keys(pathObj).forEach((key) => {
    endObject[key] = {
      _end: true,
      method: key,
      pathObj: (pathObj as any)[key],
      url: path,
    };
  });
  return endObject;
};

// CLEAN
const nestPathsObject = (
  pathsObject: Record<string, OpenApiPath>,
): OpenApiPathsObject => {
  let out = {};

  Object.entries(pathsObject).forEach(([path, pathObj]) => {
    const splitPath = path.split('/').filter((path) => path !== '');
    out = buildNestedObject(splitPath, out);
    setDeepParam(out, splitPath, createEndObject(pathObj, path));
  });

  return out;
};

// ASS
const generatePaths = async (schema: OpenAPISpec) => {
  const [objectGenerator, pathGenerator, generateGenerateServiceCallMethod] =
    await Promise.all([
      useHandlebarsTemplateFromFile('./src/templates/object.txt'),
      useHandlebarsTemplateFromFile('./src/templates/path.txt'),
      useHandlebarsTemplateFromFile(
        './src/templates/generateServiceCallMethod.txt',
      ),
    ]);

  const buildPaths = (paths: OpenApiPathsObject): string => {
    return pathGenerator({
      paths: Object.entries(paths).map(([key, inner]) => {
        const out: { key: string; inner: string } = {
          inner: '',
          key: `'${paramKeyToSemanticKey(key)}'`,
        };
        // eslint-disable-next-line no-underscore-dangle
        if (typeof inner === 'object' && !(inner as any)?._end) {
          out.inner = '{' + buildPaths(inner as OpenApiPathsObject) + '}';
          return out;
        }
        const { pathObj }: Operation = inner as Operation;

        /*
         * MAKE RESPONSES ARRAY
         */
        const responses: Set<any> = new Set();
        Object.values((pathObj as any).responses).forEach((response: any) => {
          if (
            !response.content ||
            !response?.content?.['application/json']?.schema
          ) {
            responses.add('null');
            return;
          }
          responses.add(
            buildTypeObjectFromSchema(
              response.content['application/json'].schema,
            ),
          );
        });

        const responsesType = [...responses].join(' | ');

        /*
         * MAKE BODY OBJECT
         */
        let bodyType = '';
        if (
          (pathObj as any)?.requestBody?.content?.['application/json']?.schema
        ) {
          bodyType = buildTypeObjectFromSchema(
            (pathObj as any)?.requestBody?.content?.['application/json']
              ?.schema,
          );
        }

        /*
         * MAKE PARAMS OBJECT
         */
        const paramsObject = pathObj.parameters
          ?.filter((param) => {
            if (!(param as any).in) {
              // Checks if we are at the end of the nested object or something
              return false;
            }
            param = param as OpenApiParameter;
            return param.in === 'path';
          })
          .reduce((t, param: any) => {
            return {
              ...t,
              [param.name]: buildTypeObjectFromSchema(param.schema),
            };
          }, {});

        const paramsType = objectGenerator({
          properties: Object.entries(paramsObject || {}).map(
            ([key, value]) => ({
              key,
              value,
            }),
          ),
        });

        /*
         * MAKE QUERY OBJECT
         */
        const queryObject = pathObj.parameters
          ?.filter((param) => {
            if (!(param as any).in) {
              return false;
            }
            param = param as OpenApiParameter;
            return param.in === 'query';
          })
          .reduce((t, param: any) => {
            return {
              ...t,
              [param.name]: buildTypeObjectFromSchema(param.schema),
            };
          }, {});

        const queryType = objectGenerator({
          properties: Object.entries(queryObject || {}).map(([key, value]) => ({
            key,
            value,
          })),
        });

        /*
         * CREATE REQUEST TYPE
         */
        const requestProperties: Array<{
          key: string;
          required: boolean;
          value: string;
        }> = [];

        if (queryObject && Object.keys(queryObject).length) {
          requestProperties.push({
            key: 'query',
            required: true,
            value: queryType,
          });
        }

        if (paramsObject && Object.keys(paramsObject).length) {
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
        const request = requestProperties.length
          ? objectGenerator({ properties: requestProperties })
          : 'null';

        /*
         * CREATE VALID STATUS KEYS
         */
        const validResponseStatuses = [
          ...Object.keys((pathObj as any).responses).reduce<Set<number>>(
            (statusCodes, statusCode) => {
              statusCodes.add(
                statusCode === 'default' ? 200 : Number(statusCode),
              );
              return statusCodes;
            },
            new Set<number>(),
          ),
        ];

        /*
         *
         * SET INNER
         *
         */
        out.inner = generateGenerateServiceCallMethod({
          method: (inner as any).method,
          request: request,
          response: responsesType,
          url: `${schema.servers?.[0].url}${(inner as any).url}`,
          validResponseStatuses: validResponseStatuses,
        });
        return out;
      }),
    });
  };

  return buildPaths(nestPathsObject(schema.paths));
};

// CLEAN
const buildLib = async (schemaFilePath: string, outFile: string) => {
  const [generator, file] = await Promise.all([
    useHandlebarsTemplateFromFile('./src/templates/clientRoot.txt'),
    fs.readFileSync(schemaFilePath, { encoding: 'utf-8' }),
  ]);

  let schema: OpenAPISpec = JSON.parse(file);
  schema = expandRefsOnObject(schema);
  schema.info.title = schema.info.title.split(' ').join('');

  const networkCalls = await generatePaths(schema);
  const lib = generator({
    networkCalls,
    schema,
  });

  await fs.writeFileSync(outFile, lib);
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
