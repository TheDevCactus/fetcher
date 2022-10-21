import { OpenApiType } from "../models";

export const isBaseOpenApiType = (type: OpenApiType) => {
  return [
    OpenApiType.boolean,
    OpenApiType.Integer,
    OpenApiType.Number,
    OpenApiType.String,
  ].includes(type);
}

export const openApiTypeToTSType = (type: OpenApiType) => {

  return {
    [OpenApiType.Array]: 'array',
    [OpenApiType.Integer]: 'number',
    [OpenApiType.Number]: 'number',
    [OpenApiType.String]: 'string',
    [OpenApiType.Object]: 'object',
    [OpenApiType.boolean]: 'boolean'
  }[type];
};