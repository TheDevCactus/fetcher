import { OpenApiPath } from "./OpenAPI";

export interface Operation {
  _end: true;
  method: string;
  pathObj: OpenApiPath;
  url: string;
}