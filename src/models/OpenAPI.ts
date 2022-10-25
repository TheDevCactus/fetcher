import { NetworkCallSpec } from ".";

export enum OpenApiType {
  Integer = 'integer',
  Number = 'number',
  String = 'string',
  boolean = 'boolean',
  Object = 'object',
  Array = 'array',
  Undefined = 'undefined',
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

export const ValidOpenApiTypeFormatsForOpenApiType: Record<
  OpenApiType,
  Array<OpenApiTypeFormat>
> = {
  [OpenApiType.Object]: [],
  [OpenApiType.Array]: [],
  [OpenApiType.boolean]: [],
  [OpenApiType.Integer]: [OpenApiTypeFormat.Int32, OpenApiTypeFormat.Int64],
  [OpenApiType.Number]: [OpenApiTypeFormat.Double, OpenApiTypeFormat.Float],
  [OpenApiType.String]: [
    OpenApiTypeFormat.Password,
    OpenApiTypeFormat.Binary,
    OpenApiTypeFormat.Byte,
    OpenApiTypeFormat.Date,
    OpenApiTypeFormat.DateTime,
  ],
  [OpenApiType.Undefined]: []
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
  description?: string;
  termsOfService?: string;
  contact?: OpenAPIContact;
  license?: OpenAPILicense;
  version: string;
}

export interface OpenApiServerVariable {
  enum?: Array<string>;
  default: string;
  description?: string;
}

export interface OpenApiServerObject {
  url: string;
  description?: string;
  variables?: Record<string, OpenApiServerVariable>;
}

export interface Schema {
  type: OpenApiType;
  properties?: Schema;
  required?: Array<string>;
  items?: Schema;
  additionalProperties?: Schema;
  description?: string;
  allOf: Schema;
  anyOf: Schema;
  oneOf: Schema;
  not: Schema;
  format: OpenApiTypeFormat;
  minimum?: number;
  maximum?: number;
  exclusiveMinimum?: number;
  exclusiveMaximum?: number;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  uniqueItems?: any;
}

export enum OpenApiParameterLocation {
  Query = 'query',
  Header = 'header',
  Path = 'path',
  Cookie = 'cookie'
}

export interface OpenApiParameter {
  name: string;
  in: OpenApiParameterLocation;
  description?: string;
  required: boolean;
  deprecated?: boolean;
  allowEmptyValue?: boolean;
  style?: string;
  explode?: boolean;
  allowReserved?: boolean;
  schema?: Schema;
  example?: any;
  examples?: Array<any>;
  content?: Record<string, OpenApiMediaTypeObject>;
}

export interface OpenApiReference {
  $ref: string;
}

export interface OpenApiExampleObject {
  summary?: string;
  description?: string;
  value?: any;
  externalValue?: string;
}

export interface OpenApiParameterObject {
  name: string;
  in: string;
  description?: string;
  required: boolean;
  deprecated?: boolean;
  allowEmptyValue?: boolean;
}

export type OpenApiHeaderObject = Omit<OpenApiParameter, 'name' | 'in'>;

export interface OpenApiEncodingObject {
  contentType?: string;
  headers?: Record<string, OpenApiHeaderObject>;
  style?: string;
  explode?: boolean;
  allowReserved?: boolean;
}

export interface OpenApiMediaTypeObject {
  schema?: Schema;
  example?: any;
  examples?: Record<string, OpenApiExampleObject>;
  encoding?: Record<string, OpenApiEncodingObject>;
}

export interface OpenApiRequestBody {
  description?: string;
  content: Record<string, OpenApiMediaTypeObject>;
  required?: boolean;
}

export interface OpenApiLinkObject {
  operationRef?: string;
  operationId?: string;
  parameters?: Record<string, any>;
  requestBody?: any;
  description?: string;
  server?: OpenApiServerObject;
}

export interface OpenApiResponseObject {
  description: string;
  headers?: Record<string, OpenApiHeaderObject>;
  content?: Record<string, OpenApiMediaTypeObject>;
  links?: Record<string, OpenApiLinkObject>;
}

export type OpenApiResponses = Record<
  'default' | number,
  OpenApiResponseObject
>;

export interface OpenApiOperation {
  tags?: Array<string>;
  summary?: string;
  description?: string;
  externalDocs?: OpenApiExternalDocs;
  operationId?: string;
  parameters?: Array<OpenApiParameter>;
  requestBody?: OpenApiRequestBody;
  responses: OpenApiResponses;
  callbacks?: Record<string, Record<string, OpenApiPathItemObject>>;
  deprecated?: boolean;
  security?: Array<OpenApiSecurity>;
  servers?: Array<OpenApiServerObject>;
}

export interface OpenApiTag {
  name: string;
  description?: string;
  externalDocs?: OpenApiExternalDocs;
}

export type OpenApiSecurity = Record<string, Array<string>>;

export interface OpenApiProperty {
  type: OpenApiType;
  format: OpenApiTypeFormat;
  example: any;
  enum: Array<any>;
}

export interface OpenApiSchema {
  type: OpenApiType.Object;
  properties: Record<string, OpenApiProperty>;
}

export interface OpenApiOauthFlowObject {
  authorizationUrl: string;
  tokenUrl: string;
  refreshUrl?: string;
  scopes: Record<string, string>;
}

export interface OpenApiOauthFlowsObject {
  implicit?: OpenApiOauthFlowObject;
  password?: OpenApiOauthFlowObject;
  clientCredentials?: OpenApiOauthFlowObject;
  authorizationCode?: OpenApiOauthFlowObject;
}

export interface OpenApiSecuritySchemaObject {
  type: string;
  description?: string;
  name: string;
  in: 'query' | 'header' | 'cookie';
  scheme: string;
  bearerFormat?: string;
  flows: OpenApiOauthFlowsObject;
  openIdConnectUrl: string;
}

export interface OpenApiComponents {
  schemas?: Record<string, OpenApiSchema | OpenApiReference>;
  responses?: Record<string, OpenApiResponseObject>;
  parameters?: Record<string, OpenApiParameterObject>;
  examples?: Record<string, OpenApiExampleObject>;
  requestBodies?: Record<string, OpenApiRequestBody>;
  headers?: Record<string, OpenApiHeaderObject>;
  securitySchemas?: Record<string, OpenApiSecuritySchemaObject>;
  links?: Record<string, any>;
  callbacks?: Record<string, any>;
}

// This normally wouldn't be recursively nested like this, we process the schema to be in this format
export interface OpenApiNestedPaths {
  [x: string]: NetworkCallSpec | OpenApiNestedPaths;
}

export interface OpenApiPathItemObject {
  $ref?: string;
  summary?: string;
  description?: string;
  servers?: Array<OpenApiServerObject>;
  parameters?: Array<OpenApiParameter>;
  get?: OpenApiOperation;
  put?: OpenApiOperation;
  post?: OpenApiOperation;
  delete?: OpenApiOperation;
  options?: OpenApiOperation;
  head?: OpenApiOperation;
  patch?: OpenApiOperation;
  trace?: OpenApiOperation;
}

export interface OpenApiExternalDocs {
  description?: string;
  url: string;
}

export interface OpenAPISpec {
  openapi: string;
  info: OpenAPIInfo;
  servers?: Array<OpenApiServerObject>;
  paths: Record<string, OpenApiPathItemObject>;
  components?: OpenApiComponents;
  security?: Array<OpenApiSecurity>;
  tags?: Array<OpenApiTag>;
  externalDocs?: OpenApiExternalDocs;
}
