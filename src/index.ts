import fs from 'fs';

import commander from 'commander';

import { Operation, Test } from './models';
import {
  OpenApiParameter,
  OpenApiPath,
  OpenApiPathsObject,
  OpenAPISpec,
} from './models/OpenAPI';
import {
  buildTypeObjectFromSchema,
  compileHandlebarsTemplateFromFile,
  expandRefsOnObject,
  makeStringUnsafe,
  openApiTypeToTSType,
  writeLibToDisk,
} from './utils';

const addNestedKeysToObject = (
  nestedKeys: Array<string>,
  obj: Record<string, any>,
  finalObj: any,
  basePath: string,
) => {
  const firstKey = nestedKeys.splice(0, 1)[0];
  if (!firstKey) {
    return;
  }

  if (!obj[firstKey]) {
    obj[firstKey] = {};
  }

  if (!nestedKeys.length) {
    Object.keys(finalObj).forEach((key) => {
      obj[firstKey][key] = {
        _end: true,
        method: key,
        pathObj: finalObj[key],
        url: basePath,
      };
    });

    return;
  }

  addNestedKeysToObject(nestedKeys, obj[firstKey], finalObj, basePath);
  return;
};

const nestPathsObject = (
  pathsObject: Record<string, OpenApiPath>,
): OpenApiPathsObject => {
  const out = {};

  Object.entries(pathsObject).forEach(([path, pathObj]) => {
    const splitPath = path.split('/').filter((path) => path !== '');
    addNestedKeysToObject(splitPath, out, pathObj, path);
  });

  return out;
};

const cleanKey = (key: string) => {
  if (key.startsWith('{') && key.endsWith('}')) {
    key = 'by' + key[1].toUpperCase() + key.slice(2, key.length - 1);
  }

  return key;
};

const generatePaths = async (schema: OpenAPISpec) => {
  const objectGenerator = await compileHandlebarsTemplateFromFile(
    './src/templates/object.txt',
  );
  const generator = await compileHandlebarsTemplateFromFile(
    './src/templates/path.txt',
  );

  const nestedPathsObject = nestPathsObject(schema.paths);

  const buildPaths = (paths: OpenApiPathsObject): string => {
    return generator({
      paths: Object.entries(paths).map(([key, inner]) => {
        const out: { key: string; inner: string } = {
          inner: '',
          key: `'${cleanKey(key)}'`,
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
        Object.entries((pathObj as any).responses).forEach(([statusCode, response]: [string, any]) => {
          if (!response.content || !response?.content?.['application/json']?.schema) {
            responses.add('null');
            return;
          }
          responses.add(
            buildTypeObjectFromSchema(response.content['application/json'].schema)
          )
        });

        const responsesType = [...responses].join(' | ');

        /*
         * MAKE BODY OBJECT
         */
        let bodyType = '';
        if ((pathObj as any)?.requestBody?.content?.['application/json']?.schema) {
          bodyType = buildTypeObjectFromSchema((pathObj as any)?.requestBody?.content?.['application/json']?.schema);
        }

        /*
         * MAKE PARAMS OBJECT
         */
        const paramsObject = pathObj.parameters
          ?.filter((param) => {
            if (!(param as any).in) { // Checks if we are at the end of the nested object or something
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

        // This is ugly.
        let request = '';
        if (queryObject && Object.keys(queryObject).length) {
          request += 'query: ' + queryType + '\n';
        }
        if (paramsObject && Object.keys(paramsObject).length) {
          request += 'params: ' + paramsType + '\n';
        }
        if (bodyType.length) {
          request += 'body: ' + bodyType + '\n';
        }
        if (request.length) {
          request = '{' + request + '}';
        } else {
          request = 'null';
        }

        /*
         *
         * SET INNER
         *
         */
        out.inner = `generateServiceCall<${request}, ${responsesType}>('${
          schema.servers?.[0].url + (inner as any).url
        }', '${(inner as any).method}')`;
        return out;
      }),
    });
  };

  return buildPaths(nestedPathsObject);
};

const generateLib = async (schema: OpenAPISpec) => {
  const generator = await compileHandlebarsTemplateFromFile(
    './src/templates/clientRoot.txt',
  );
  const methods = await generatePaths(schema);

  return generator({
    rest: methods,
    schema,
  });
};

const readInSchema = async (filePath: string): Promise<OpenAPISpec> => {
  const file = await fs.readFileSync(filePath, {
    encoding: 'utf-8',
  });

  return JSON.parse(file) as OpenAPISpec;
};

const processSchema = async (schema: OpenAPISpec, outFile: string) => {
  let lib = await generateLib(schema);
  lib = makeStringUnsafe(lib);
  await writeLibToDisk(outFile, lib);
};

/**
 * FETCHER
 * ==================================================
 * Chassis Service Client Lib Generator
 */

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
    let schema = await readInSchema(args[0]);
    schema = expandRefsOnObject(schema) as OpenAPISpec;
    await processSchema(schema, args[1]);
  });

commander.program.parse();
