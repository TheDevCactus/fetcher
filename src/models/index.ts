export enum OpenApiType {
  Integer = 'integer',
  Number = 'number',
  String = 'string',
  Boolean = 'boolean',
  Object = 'object',
  Array = 'array',
}

export enum OpenApiTypeFormat {
  Int32 = 'int32',
  Int64 = 'int64',
  Float = 'float',
  Double = 'double',
  Password = 'password',
  Byte = 'byte',
  Binary = 'binary',
  Date = 'date',
  DateTime = 'date-time',
}

export const ValidOpenApiTypeFormatsForOpenApiType: Record<OpenApiType, Array<OpenApiTypeFormat>> = {
  [OpenApiType.Object]: [],
  [OpenApiType.Array]: [],
  [OpenApiType.Boolean]: [],
  [OpenApiType.Integer]: [
    OpenApiTypeFormat.Int32,
    OpenApiTypeFormat.Int64
  ],
  [OpenApiType.Number]: [
    OpenApiTypeFormat.Double,
    OpenApiTypeFormat.Float
  ],
  [OpenApiType.String]: [
    OpenApiTypeFormat.Password,
    OpenApiTypeFormat.Binary,
    OpenApiTypeFormat.Byte,
    OpenApiTypeFormat.Date,
    OpenApiTypeFormat.DateTime,
  ],
};

export interface OpenAPIContact {
  name?: string;
  url?: string;
  email?: string;
}

export interface OpenAPILicense {
  name: string;
  url?: string;
}

export interface OpenAPIInfo {
  title: string;
  version: string;
  description?: string;
  termsOfService?: string;
  contact?: OpenAPIContact;
  license?: OpenAPILicense;
}

export interface OpenApiServerVariable {
  enum?: Array<string>;
  default: string;
  description?: string;
}

export interface OpenApiServer {
  url: string;
  description?: string;
  variables?: Record<string, OpenApiServerVariable>;
}

export interface OpenApiParameter {
  name: string;
  in: 'query' | 'header' | 'path' | 'cookie';
  description?: string;
  required: boolean;
  deprecated?: boolean;
  allowEmptyValue?: boolean;
}

export interface OpenApiReference {
  $ref: string;
  description: string;
  summary: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface OpenApiOperation {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface OpenApiTag {
  name: string,
  description?: string,
  externalDocs?: OpenApiExternalDocs
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface OpenApiSecurity {}

export interface OpenApiProperty {
  type: OpenApiType,
  format: OpenApiTypeFormat,
  example: any,
  enum: Array<any>
}

export interface OpenApiSchema {
  type: OpenApiType.Object,
  properties: Record<string, OpenApiProperty>
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface OpenApiComponents {
  schemas: Record<string, OpenApiSchema>
}

export interface OpenApiPathsObject {
  [x: string]: OpenApiPath | OpenApiPathsObject
}

export interface OpenApiPath {
  $ref?: string;
  summary?: string;
  description?: string;
  servers?: Array<OpenApiServer>;
  parameters?: Array<OpenApiParameter | OpenApiReference>;
}

export interface OpenApiExternalDocs {
  description: string,
  url: string
}

export interface OpenAPISpec {
  openapi: string;
  info: OpenAPIInfo;
  servers?: Array<OpenApiServer>;
  paths: Record<string, OpenApiPathsObject>;
  components?: OpenApiComponents;
  security?: Array<OpenApiSecurity>;
  tags?: Array<OpenApiTag>;
  externalDocs?: OpenApiExternalDocs;
}
