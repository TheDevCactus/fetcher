import fs from 'fs';

import Handlebars, { K } from 'handlebars';

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
  finalKeys: Array<string>,
) => {
  const firstKey = nestedKeys.splice(0, 1)[0];
  if (!firstKey) {
    return;
  }

  if (!obj[firstKey]) {
    obj[firstKey] = {};
  }

  if (!nestedKeys.length) {
    finalKeys.forEach((key) => {
      obj[firstKey][key] = () => {
        console.log('CALLING: ', key);
      };
    });

    return;
  }

  addNestedKeysToObject(nestedKeys, obj[firstKey], finalKeys);
  return;
};

const nestPathsObject = (
  pathsObject: Record<string, OpenApiPath>,
): OpenApiPathsObject => {
  const out = {};

  Object.entries(pathsObject).forEach(([path, pathObj]) => {
    const splitPath = path.split('/');
    splitPath.splice(0, 1);
    addNestedKeysToObject(splitPath, out, Object.keys(pathObj));
  });

  return out;
};

const cleanKey = (key: string) => {
  if (key.startsWith('{') && key.endsWith('}')) {
    key = 'by' + key[1].toUpperCase() + key.slice(2, key.length - 1);
  }

  return key;
}

const generatePaths = async (paths: Record<string, OpenApiPath>) => {
  const template = await loadTemplate('./src/templates/path.txt');
  const generator = Handlebars.compile(template);
  const nestedPathsObject = nestPathsObject(paths);

  const buildPaths = (paths: OpenApiPathsObject) => {
    const out = generator({
      paths: Object.entries(paths).map(([key, inner]) => ({
        inner:
          inner !== null && typeof inner === 'object'
            ? buildPaths(inner as OpenApiPathsObject)
            : '// putNetworkCallHere!',
        key: cleanKey(key),
      })),
    });

    return out;
  };

  return buildPaths(nestedPathsObject);
};

const generateLib = async (schema: OpenAPISpec) => {
  const out = [];
  const template = await loadTemplate('./src/templates/clientRoot.txt');
  const generator = Handlebars.compile(template);

  const methods = await generatePaths(schema.paths);
  console.log(methods);

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

const processSchema = async (schema: OpenAPISpec) => {
  if (!schema.components) {
    throw new Error('Schema does not have any components');
  }
  const lib = await generateLib(schema);
  await writeLib('./goalOutputFiles/test.ts', lib[0]);
};

readInSchema(process.argv[2]).then(processSchema).catch(console.log);
