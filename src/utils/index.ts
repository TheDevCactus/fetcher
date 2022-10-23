import fs from 'fs';

import Handlebars from 'handlebars';

import { OpenApiType } from '../models/OpenAPI';

export interface Schema {
  type: OpenApiType;
  properties?: Schema;
  required?: Array<string>;
  items?: Schema;
  additionalProperties?: Schema;
}
export const buildTypeObjectFromSchema = (schema: Schema): string => {
  const isParamRequired = (key: string): boolean => {
    if (!schema.required) {
      return false;
    }
    return schema.required.includes(key);
  };

  switch (schema.type) {
    case OpenApiType.Array:
      if (!schema.items) {
        throw new Error('Schema type array must have an items property');
      }
      return `Array<${buildTypeObjectFromSchema(schema.items)}>`;
    case OpenApiType.Integer:
    case OpenApiType.Number:
    case OpenApiType.boolean:
    case OpenApiType.String:
      return openApiTypeToTSType(schema.type);
    case OpenApiType.Object:
      /*
       * Put this back, but for now it isn't right
       * if (!schema.properties && !schema.additionalProperties) {
       *   throw new Error(`Schema type object must have a properties property`);
       * }
       */
      // eslint-disable-next-line no-case-declarations
      const properties = {
        ...schema.properties,
      };
      return `{${Object.entries(properties).map(
        ([key, value]) =>
          `${key}${
            isParamRequired(key) ? '' : '?'
          }: ${buildTypeObjectFromSchema(value as Schema)}`,
      )}}`;
    default:
      throw new Error(`Encountered unrecognized type: ${schema.type}`);
  }
};

export const followObjectPath = (
  path: string,
  obj: Record<string, any>,
): Record<string, any> => {
  const pathArr = path.split('/');
  if (pathArr[0] === '#') {
    pathArr.splice(0, 1);
  }

  let found = obj;
  while (pathArr.length) {
    found = found[pathArr[0]];
    if (found === undefined) {
      throw new Error('Path not valid for object');
    }
    pathArr.splice(0, 1);
  }

  return found;
};

export const expandRefsOnObject = <T>(
  currentRoot: Record<string, any>,
  base?: Record<string, any>,
): T => {
  if (!base) {
    base = currentRoot;
  }

  const keys = Object.keys(currentRoot);

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (typeof currentRoot[key] === 'object') {
      if (currentRoot[key].$ref) {
        try {
          currentRoot[key] = followObjectPath(currentRoot[key].$ref, base);
        } catch (err) {
          throw new Error('Ref not found on object');
        }
        continue;
      }
      currentRoot[key] = expandRefsOnObject(currentRoot[key], base);
    }
  }

  return currentRoot as T;
};

export const openApiTypeToTSType = (type: OpenApiType): string => {
  const found = {
    [OpenApiType.Array]: 'array',
    [OpenApiType.Integer]: 'number',
    [OpenApiType.Number]: 'number',
    [OpenApiType.Object]: 'object',
    [OpenApiType.String]: 'string',
    [OpenApiType.boolean]: 'boolean',
  }[type];

  if (!found) {
    throw new Error('Invalid type supplied');
  }

  return found;
};

export const useHandlebarsTemplateFromFile = (() => {
  const generators: Record<string, HandlebarsTemplateDelegate<any>> = {};

  return async (filePath: string, options?: CompileOptions) => {
    if (generators[filePath]) {
      return generators[filePath];
    }

    const file = await fs.readFileSync(filePath, { encoding: 'utf-8' });
    generators[filePath] = Handlebars.compile(file, options);
    return (context: any, options?: Handlebars.RuntimeOptions | undefined) => {
      return makeStringUnsafe(generators[filePath](context, options))
    };
  };
})();

export const makeStringUnsafe = (safeString: string): string => {
  /*
   * Make string unsafe? wtf?
   * This exists cause handlebars is meant for html templating. In that situation,
   * it would be an incredibly bad idea to do this. We are not doing html templating though.
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

export const paramKeyToSemanticKey = (key: string) => {
  if (!key.includes('{') && !key.includes('}')) {
    return key;
  }

  let out = 'by';
  let shouldCapitalizeNext = true;

  for (let i = 0; i < key.length; i ++) {
    if (key[i] === '{' || key[i] === '}') {
      continue;
    }

    if (shouldCapitalizeNext) {
      out += key[i].toUpperCase();
      shouldCapitalizeNext = false;
      continue;
    }

    out += key[i];
  }

  return out;
};

export const buildNestedObject = (pathToNest: Array<string>, obj: Record<string, any>): Record<string, any> => {
  const workingPathToNest = [...pathToNest];
  const firstKey = workingPathToNest.splice(0, 1)[0];

  if (!firstKey) {
    return obj;
  }

  if (!obj[firstKey]) {
    obj[firstKey] = {};
  }

  obj[firstKey] = buildNestedObject(workingPathToNest, obj[firstKey]);
  return obj;
};

export const setDeepParam = <T>(obj: Record<string, any>, pathToParam: Array<string>, value: T) => {
  const workingPathToParam = [...pathToParam];

  while (workingPathToParam.length > 1) {
    obj = obj[workingPathToParam.splice(0, 1)[0]];
    if (!obj) {
      throw new Error('Invalid path to param');
    }
  }

  obj[workingPathToParam[0]] = value;
};