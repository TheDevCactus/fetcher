import { OpenApiPath } from "./OpenAPI";

export interface Test {
  [x: string]: Test | Operation
}

export interface Operation {
  _end: true;
  method: string;
  pathObj: OpenApiPath;
  url: string;
}