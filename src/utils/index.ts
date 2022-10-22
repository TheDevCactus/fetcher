import fs from 'fs';

import Handlebars from 'handlebars';

import { OpenApiType } from '../models/OpenAPI';

export interface Schema {
  type: OpenApiType;
  properties?: Schema;
  required?: Array<string>;
  items?: Schema;
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
        throw new Error(`Schema type array must have an items property`);
      }
      return `Array<${buildTypeObjectFromSchema(schema.items)}>`
    case OpenApiType.Integer:
    case OpenApiType.Number:
    case OpenApiType.boolean:
    case OpenApiType.String:
      return openApiTypeToTSType(schema.type);
    case OpenApiType.Object:
      if (!schema.properties) {
        throw new Error(`Schema type object must have a properties property`);
      }
      return `{${Object.entries(schema.properties).map(([key, value]) => (
        `${key}${isParamRequired(key) ? '' : '?'}: ${buildTypeObjectFromSchema(value)}`
      ))}}`
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

export const expandRefsOnObject = (
  currentRoot: Record<string, any>,
  base?: Record<string, any>,
): Record<string, any> => {
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

  return currentRoot;
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

export const compileHandlebarsTemplateFromFile = async (
  filePath: string,
  options?: CompileOptions,
) => {
  const file = await fs.readFileSync(filePath, {
    encoding: 'utf-8',
  });
  const generator = Handlebars.compile(file, options);

  return generator;
};

export const writeLibToDisk = async (filePath: string, lib: string) => {
  return fs.writeFileSync(filePath, lib, {
    encoding: 'utf-8',
  });
};

export const makeStringUnsafe = (safeString: string): string => {
  /*
   * Make string unsafe? wtf?
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
