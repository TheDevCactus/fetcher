import fs from 'fs';

import Handlebars from 'handlebars';

import { OpenApiPath, OpenApiPathsObject, OpenAPISpec } from './models';

const loadTemplate = async (filePath: string) => {
  const file = await fs.readFileSync(filePath, {
    encoding: 'utf-8',
  });
  return file;
};

const writeLib = async (filePath: string, lib: string) => {
  await fs.writeFileSync(filePath, lib, {
    encoding: 'utf-8',
  });
};

const addNestedKeysToObject = (
  nestedKeys: Array<string>,
  obj: Record<string, any>,
  finalObj: any,
  basePath: string
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
        pathObj: finalObj,
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

  const template = await loadTemplate('./src/templates/path.txt');
  const generator = Handlebars.compile(template);
  const nestedPathsObject = nestPathsObject(schema.paths);

  const buildPaths = (paths: OpenApiPathsObject): string => {
    return generator({
      paths: Object.entries(paths).map(([key, inner]) => {
        const out: {key: string, inner: string} = {
          inner: '',
          key: `'${cleanKey(key)}'`,
        };
        // eslint-disable-next-line no-underscore-dangle
        if (typeof inner === 'object' && !(inner as any)?._end) {
          out.inner = '{' + buildPaths(inner as OpenApiPathsObject) + '}'
          return out;
        }

        out.inner = `generateServiceCall<{ dog: boolean }, {cat: string}, {bird: number}, any>('${
          schema.servers?.[0].url + (inner as any).url
        }', '${
          (inner as any).method
        }')`;
        return out;
      }),
    });
  };

  return buildPaths(nestedPathsObject);
};

const generateLib = async (schema: OpenAPISpec) => {
  const out = [];
  const template = await loadTemplate('./src/templates/clientRoot.txt');
  const generator = Handlebars.compile(template);

  const methods = await generatePaths(schema);

  out.push(
    generator({
      rest: methods,
      schema,
    }),
  );

  return out;
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
  const lib = await generateLib(schema);

  lib[0] = makeStringUnsafe(lib[0]);

  await writeLib('./goalOutputFiles/test.ts', lib[0]);
};

readInSchema(process.argv[2]).then(processSchema).catch(console.log);
