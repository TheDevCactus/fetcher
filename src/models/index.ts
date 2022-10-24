import { OpenApiOperation, OpenApiPathItemObject } from "./OpenAPI";

export interface NetworkCallSpec {
  _end: true;
  method: string;
  pathObj: OpenApiOperation;
  url: string;
}

export type ValidNetworkCallKeys = Exclude<
  keyof OpenApiPathItemObject,
  '$ref' | 'summary' | 'description' | 'servers' | 'parameters'
>;

export type NetworkCallSpecMap = Partial<
  Record<ValidNetworkCallKeys, NetworkCallSpec>
>;