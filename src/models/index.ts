import { OpenApiOperation } from "./OpenAPI";

export interface NetworkCallSpec {
  _end: true;
  method: string;
  pathObj: OpenApiOperation;
  url: string;
}