import fs from 'fs';

import Handlebars from 'handlebars';

import { OpenApiType } from '../models';

export const openApiTypeToTSType = (type: OpenApiType): string => {
  return {
    [OpenApiType.Array]: 'array',
    [OpenApiType.Integer]: 'number',
    [OpenApiType.Number]: 'number',
    [OpenApiType.Object]: 'object',
    [OpenApiType.String]: 'string',
    [OpenApiType.boolean]: 'boolean'
  }[type];
}

export const compileHandlebarsTemplateFromFile = async (
  filePath: string,
  options?: CompileOptions,
) => {
  const file = await fs.readFileSync(filePath, {
    encoding: 'utf-8'
  });
  const generator = Handlebars.compile(file, options);

  return generator;
};

export const writeLibToDisk = async (
  filePath: string,
  lib: string
) => {
  return fs.writeFileSync(filePath, lib, {
    encoding: 'utf-8'
  });
};

