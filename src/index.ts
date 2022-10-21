import fs from 'fs';

import {
  OpenApiParameter,
  OpenApiPath,
  OpenApiPathsObject,
  OpenAPISpec,
} from './models';
import {
  compileHandlebarsTemplateFromFile,
  openApiTypeToTSType,
  writeLibToDisk,
} from './utils';

interface RandomBadName {
  _end: true;
  method: string;
  pathObj: OpenApiPath;
  url: string;
}

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
        const { pathObj }: RandomBadName = inner as RandomBadName;

        /*
         * MAKE PARAMS OBJECT
         */
        const paramsObject = pathObj.parameters
          ?.filter((param) => {
            if (!(param as any).in) {
              return false;
            }
            param = param as OpenApiParameter;
            return param.in === 'path';
          })
          .reduce((t, param: any) => {
            return {
              ...t,
              [param.name]: openApiTypeToTSType(param.schema.type),
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
              [param.name]: openApiTypeToTSType(param.schema.type),
            };
          }, {});

        const queryType = objectGenerator({
          properties: Object.entries(queryObject || {}).map(([key, value]) => ({
            key,
            value,
          })),
        });

        /*
         *
         * SET INNER
         *
         */

        let request = '';
        if (queryObject && Object.keys(queryObject).length) {
          request += 'query: ' + queryType + '\n';
        }
        if (paramsObject && Object.keys(paramsObject).length) {
          request += 'params: ' + paramsType + '\n';
        }
        if (request.length) {
          request = '{' + request + '}';
        } else {
          request = 'null';
        }

        out.inner = `generateServiceCall<${
          request
        }, any>('${
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

const makeStringUnsafe = (safeString: string): string => {
  /*
   * This exists cause handlebars is meant for html templating. In that situation,
   * It would be an incredibly bad idea to do this. We are not doing html templating though.
   */
  safeString = safeString.replace(/&amp;/g, '&');
  safeString = safeString.replace(/&lt;/g, '<');
  safeString = safeString.replace(/&gt;/g, '>');
  safeString = safeString.replace(/&quot;/g, '"');
  safeString = safeString.replace(/&#x27;/g, "'");
  safeString = safeString.replace(/&#x60;/g, '`');
  safeString = safeString.replace(/&#x3D;/g, '=');

  return safeString;
};

const processSchema = async (schema: OpenAPISpec) => {
  let lib = await generateLib(schema);
  lib = makeStringUnsafe(lib);
  await writeLibToDisk(process.argv[3], lib);
};

readInSchema(process.argv[2]).then(processSchema).catch(console.log);
