"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const utils_1 = require("./utils");
const addNestedKeysToObject = (nestedKeys, obj, finalObj, basePath) => {
    const firstKey = nestedKeys.splice(0, 1)[0];
    if (!firstKey) {
        return;
    }
    if (!obj[firstKey]) {
        obj[firstKey] = {};
    }
    if (!nestedKeys.length) {
        Object.keys(finalObj).forEach((key) => {
            obj[firstKey][key] = {
                _end: true,
                method: key,
                pathObj: finalObj[key],
                url: basePath,
            };
        });
        return;
    }
    addNestedKeysToObject(nestedKeys, obj[firstKey], finalObj, basePath);
    return;
};
const nestPathsObject = (pathsObject) => {
    const out = {};
    Object.entries(pathsObject).forEach(([path, pathObj]) => {
        const splitPath = path.split('/').filter((path) => path !== '');
        addNestedKeysToObject(splitPath, out, pathObj, path);
    });
    return out;
};
const cleanKey = (key) => {
    if (key.startsWith('{') && key.endsWith('}')) {
        key = 'by' + key[1].toUpperCase() + key.slice(2, key.length - 1);
    }
    return key;
};
const generatePaths = (schema) => __awaiter(void 0, void 0, void 0, function* () {
    const objectGenerator = yield (0, utils_1.compileHandlebarsTemplateFromFile)('./src/templates/object.txt');
    const generator = yield (0, utils_1.compileHandlebarsTemplateFromFile)('./src/templates/path.txt');
    const nestedPathsObject = nestPathsObject(schema.paths);
    const buildPaths = (paths) => {
        return generator({
            paths: Object.entries(paths).map(([key, inner]) => {
                var _a, _b, _c;
                const out = {
                    inner: '',
                    key: `'${cleanKey(key)}'`,
                };
                // eslint-disable-next-line no-underscore-dangle
                if (typeof inner === 'object' && !(inner === null || inner === void 0 ? void 0 : inner._end)) {
                    out.inner = '{' + buildPaths(inner) + '}';
                    return out;
                }
                const { pathObj } = inner;
                /*
                 * MAKE PARAMS OBJECT
                 */
                const paramsObject = (_a = pathObj.parameters) === null || _a === void 0 ? void 0 : _a.filter((param) => {
                    if (!param.in) {
                        return false;
                    }
                    param = param;
                    return param.in === 'path';
                }).reduce((t, param) => {
                    return Object.assign(Object.assign({}, t), { [param.name]: (0, utils_1.openApiTypeToTSType)(param.schema.type) });
                }, {});
                const paramsType = objectGenerator({
                    properties: Object.entries(paramsObject || {}).map(([key, value]) => ({
                        key,
                        value,
                    })),
                });
                /*
                 * MAKE QUERY OBJECT
                 */
                const queryObject = (_b = pathObj.parameters) === null || _b === void 0 ? void 0 : _b.filter((param) => {
                    if (!param.in) {
                        return false;
                    }
                    param = param;
                    return param.in === 'query';
                }).reduce((t, param) => {
                    return Object.assign(Object.assign({}, t), { [param.name]: (0, utils_1.openApiTypeToTSType)(param.schema.type) });
                }, {});
                const queryType = objectGenerator({
                    properties: Object.entries(queryObject || {}).map(([key, value]) => ({
                        key,
                        value,
                    })),
                });
                /*
                 *
                 * SET INNER
                 *
                 */
                let request = '';
                if (queryObject && Object.keys(queryObject).length) {
                    request += 'query: ' + queryType + '\n';
                }
                if (paramsObject && Object.keys(paramsObject).length) {
                    request += 'params: ' + paramsType + '\n';
                }
                if (request.length) {
                    request = '{' + request + '}';
                }
                else {
                    request = 'null';
                }
                out.inner = `generateServiceCall<${request}, any>('${((_c = schema.servers) === null || _c === void 0 ? void 0 : _c[0].url) + inner.url}', '${inner.method}')`;
                return out;
            }),
        });
    };
    return buildPaths(nestedPathsObject);
});
const generateLib = (schema) => __awaiter(void 0, void 0, void 0, function* () {
    const generator = yield (0, utils_1.compileHandlebarsTemplateFromFile)('./src/templates/clientRoot.txt');
    const methods = yield generatePaths(schema);
    return generator({
        rest: methods,
        schema,
    });
});
const readInSchema = (filePath) => __awaiter(void 0, void 0, void 0, function* () {
    const file = yield fs_1.default.readFileSync(filePath, {
        encoding: 'utf-8',
    });
    return JSON.parse(file);
});
const makeStringUnsafe = (safeString) => {
    /*
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
const processSchema = (schema) => __awaiter(void 0, void 0, void 0, function* () {
    let lib = yield generateLib(schema);
    lib = makeStringUnsafe(lib);
    yield (0, utils_1.writeLibToDisk)(process.argv[3], lib);
});
readInSchema(process.argv[2]).then(processSchema).catch(console.log);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0Q0FBb0I7QUFRcEIsbUNBSWlCO0FBU2pCLE1BQU0scUJBQXFCLEdBQUcsQ0FDNUIsVUFBeUIsRUFDekIsR0FBd0IsRUFDeEIsUUFBYSxFQUNiLFFBQWdCLEVBQ2hCLEVBQUU7SUFDRixNQUFNLFFBQVEsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1QyxJQUFJLENBQUMsUUFBUSxFQUFFO1FBQ2IsT0FBTztLQUNSO0lBRUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUNsQixHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDO0tBQ3BCO0lBRUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUU7UUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNwQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUc7Z0JBQ25CLElBQUksRUFBRSxJQUFJO2dCQUNWLE1BQU0sRUFBRSxHQUFHO2dCQUNYLE9BQU8sRUFBRSxRQUFRLENBQUMsR0FBRyxDQUFDO2dCQUN0QixHQUFHLEVBQUUsUUFBUTthQUNkLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztRQUVILE9BQU87S0FDUjtJQUVELHFCQUFxQixDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3JFLE9BQU87QUFDVCxDQUFDLENBQUM7QUFFRixNQUFNLGVBQWUsR0FBRyxDQUN0QixXQUF3QyxFQUNwQixFQUFFO0lBQ3RCLE1BQU0sR0FBRyxHQUFHLEVBQUUs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T0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gJ2ZzJztcblxuaW1wb3J0IHtcbiAgT3BlbkFwaVBhcmFtZXRlcixcbiAgT3BlbkFwaVBhdGgsXG4gIE9wZW5BcGlQYXRoc09iamVjdCxcbiAgT3BlbkFQSVNwZWMsXG59IGZyb20gJy4vbW9kZWxzJztcbmltcG9ydCB7XG4gIGNvbXBpbGVIYW5kbGViYXJzVGVtcGxhdGVGcm9tRmlsZSxcbiAgb3BlbkFwaVR5cGVUb1RTVHlwZSxcbiAgd3JpdGVMaWJUb0Rpc2ssXG59IGZyb20gJy4vdXRpbHMnO1xuXG5pbnRlcmZhY2UgUmFuZG9tQmFkTmFtZSB7XG4gIF9lbmQ6IHRydWU7XG4gIG1ldGhvZDogc3RyaW5nO1xuICBwYXRoT2JqOiBPcGVuQXBpUGF0aDtcbiAgdXJsOiBzdHJpbmc7XG59XG5cbmNvbnN0IGFkZE5lc3RlZEtleXNUb09iamVjdCA9IChcbiAgbmVzdGVkS2V5czogQXJyYXk8c3RyaW5nPixcbiAgb2JqOiBSZWNvcmQ8c3RyaW5nLCBhbnk+LFxuICBmaW5hbE9iajogYW55LFxuICBiYXNlUGF0aDogc3RyaW5nLFxuKSA9PiB7XG4gIGNvbnN0IGZpcnN0S2V5ID0gbmVzdGVkS2V5cy5zcGxpY2UoMCwgMSlbMF07XG4gIGlmICghZmlyc3RLZXkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoIW9ialtmaXJzdEtleV0pIHtcbiAgICBvYmpbZmlyc3RLZXldID0ge307XG4gIH1cblxuICBpZiAoIW5lc3RlZEtleXMubGVuZ3RoKSB7XG4gICAgT2JqZWN0LmtleXMoZmluYWxPYmopLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgb2JqW2ZpcnN0S2V5XVtrZXldID0ge1xuICAgICAgICBfZW5kOiB0cnVlLFxuICAgICAgICBtZXRob2Q6IGtleSxcbiAgICAgICAgcGF0aE9iajogZmluYWxPYmpba2V5XSxcbiAgICAgICAgdXJsOiBiYXNlUGF0aCxcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBhZGROZXN0ZWRLZXlzVG9PYmplY3QobmVzdGVkS2V5cywgb2JqW2ZpcnN0S2V5XSwgZmluYWxPYmosIGJhc2VQYXRoKTtcbiAgcmV0dXJuO1xufTtcblxuY29uc3QgbmVzdFBhdGhzT2JqZWN0ID0gKFxuICBwYXRoc09iamVjdDogUmVjb3JkPHN0cmluZywgT3BlbkFwaVBhdGg+LFxuKTogT3BlbkFwaVBhdGhzT2JqZWN0ID0+IHtcbiAgY29uc3Qgb3V0ID0ge307XG5cbiAgT2JqZWN0LmVudHJpZXMocGF0aHNPYmplY3QpLmZvckVhY2goKFtwYXRoLCBwYXRoT2JqXSkgPT4ge1xuICAgIGNvbnN0IHNwbGl0UGF0aCA9IHBhdGguc3BsaXQoJy8nKS5maWx0ZXIoKHBhdGgpID0+IHBhdGggIT09ICcnKTtcbiAgICBhZGROZXN0ZWRLZXlzVG9PYmplY3Qoc3BsaXRQYXRoLCBvdXQsIHBhdGhPYmosIHBhdGgpO1xuICB9KTtcblxuICByZXR1cm4gb3V0O1xufTtcblxuY29uc3QgY2xlYW5LZXkgPSAoa2V5OiBzdHJpbmcpID0+IHtcbiAgaWYgKGtleS5zdGFydHNXaXRoKCd7JykgJiYga2V5LmVuZHNXaXRoKCd9JykpIHtcbiAgICBrZXkgPSAnYnknICsga2V5WzFdLnRvVXBwZXJDYXNlKCkgKyBrZXkuc2xpY2UoMiwga2V5Lmxlbmd0aCAtIDEpO1xuICB9XG5cbiAgcmV0dXJuIGtleTtcbn07XG5cbmNvbnN0IGdlbmVyYXRlUGF0aHMgPSBhc3luYyAoc2NoZW1hOiBPcGVuQVBJU3BlYykgPT4ge1xuICBjb25zdCBvYmplY3RHZW5lcmF0b3IgPSBhd2FpdCBjb21waWxlSGFuZGxlYmFyc1RlbXBsYXRlRnJvbUZpbGUoXG4gICAgJy4vc3JjL3RlbXBsYXRlcy9vYmplY3QudHh0JyxcbiAgKTtcbiAgY29uc3QgZ2VuZXJhdG9yID0gYXdhaXQgY29tcGlsZUhhbmRsZWJhcnNUZW1wbGF0ZUZyb21GaWxlKFxuICAgICcuL3NyYy90ZW1wbGF0ZXMvcGF0aC50eHQnLFxuICApO1xuXG4gIGNvbnN0IG5lc3RlZFBhdGhzT2JqZWN0ID0gbmVzdFBhdGhzT2JqZWN0KHNjaGVtYS5wYXRocyk7XG5cbiAgY29uc3QgYnVpbGRQYXRocyA9IChwYXRoczogT3BlbkFwaVBhdGhzT2JqZWN0KTogc3RyaW5nID0+IHtcbiAgICByZXR1cm4gZ2VuZXJhdG9yKHtcbiAgICAgIHBhdGhzOiBPYmplY3QuZW50cmllcyhwYXRocykubWFwKChba2V5LCBpbm5lcl0pID0+IHtcbiAgICAgICAgY29uc3Qgb3V0OiB7IGtleTogc3RyaW5nOyBpbm5lcjogc3RyaW5nIH0gPSB7XG4gICAgICAgICAgaW5uZXI6ICcnLFxuICAgICAgICAgIGtleTogYCcke2NsZWFuS2V5KGtleSl9J2AsXG4gICAgICAgIH07XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZVxuICAgICAgICBpZiAodHlwZW9mIGlubmVyID09PSAnb2JqZWN0JyAmJiAhKGlubmVyIGFzIGFueSk/Ll9lbmQpIHtcbiAgICAgICAgICBvdXQuaW5uZXIgPSAneycgKyBidWlsZFBhdGhzKGlubmVyIGFzIE9wZW5BcGlQYXRoc09iamVjdCkgKyAnfSc7XG4gICAgICAgICAgcmV0dXJuIG91dDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHBhdGhPYmogfTogUmFuZG9tQmFkTmFtZSA9IGlubmVyIGFzIFJhbmRvbUJhZE5hbWU7XG5cbiAgICAgICAgLypcbiAgICAgICAgICogTUFLRSBQQVJBTVMgT0JKRUNUXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCBwYXJhbXNPYmplY3QgPSBwYXRoT2JqLnBhcmFtZXRlcnNcbiAgICAgICAgICA/LmZpbHRlcigocGFyYW0pID0+IHtcbiAgICAgICAgICAgIGlmICghKHBhcmFtIGFzIGFueSkuaW4pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGFyYW0gPSBwYXJhbSBhcyBPcGVuQXBpUGFyYW1ldGVyO1xuICAgICAgICAgICAgcmV0dXJuIHBhcmFtLmluID09PSAncGF0aCc7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAucmVkdWNlKCh0LCBwYXJhbTogYW55KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAuLi50LFxuICAgICAgICAgICAgICBbcGFyYW0ubmFtZV06IG9wZW5BcGlUeXBlVG9UU1R5cGUocGFyYW0uc2NoZW1hLnR5cGUpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9LCB7fSk7XG5cbiAgICAgICAgY29uc3QgcGFyYW1zVHlwZSA9IG9iamVjdEdlbmVyYXRvcih7XG4gICAgICAgICAgcHJvcGVydGllczogT2JqZWN0LmVudHJpZXMocGFyYW1zT2JqZWN0IHx8IHt9KS5tYXAoXG4gICAgICAgICAgICAoW2tleSwgdmFsdWVdKSA9PiAoe1xuICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgKSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLypcbiAgICAgICAgICogTUFLRSBRVUVSWSBPQkpFQ1RcbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IHF1ZXJ5T2JqZWN0ID0gcGF0aE9iai5wYXJhbWV0ZXJzXG4gICAgICAgICAgPy5maWx0ZXIoKHBhcmFtKSA9PiB7XG4gICAgICAgICAgICBpZiAoIShwYXJhbSBhcyBhbnkpLmluKSB7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhcmFtID0gcGFyYW0gYXMgT3BlbkFwaVBhcmFtZXRlcjtcbiAgICAgICAgICAgIHJldHVybiBwYXJhbS5pbiA9PT0gJ3F1ZXJ5JztcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5yZWR1Y2UoKHQsIHBhcmFtOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIC4uLnQsXG4gICAgICAgICAgICAgIFtwYXJhbS5uYW1lXTogb3BlbkFwaVR5cGVUb1RTVHlwZShwYXJhbS5zY2hlbWEudHlwZSksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0sIHt9KTtcblxuICAgICAgICBjb25zdCBxdWVyeVR5cGUgPSBvYmplY3RHZW5lcmF0b3Ioe1xuICAgICAgICAgIHByb3BlcnRpZXM6IE9iamVjdC5lbnRyaWVzKHF1ZXJ5T2JqZWN0IHx8IHt9KS5tYXAoKFtrZXksIHZhbHVlXSkgPT4gKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgIH0pKSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLypcbiAgICAgICAgICpcbiAgICAgICAgICogU0VUIElOTkVSXG4gICAgICAgICAqXG4gICAgICAgICAqL1xuXG4gICAgICAgIGxldCByZXF1ZXN0ID0gJyc7XG4gICAgICAgIGlmIChxdWVyeU9iamVjdCAmJiBPYmplY3Qua2V5cyhxdWVyeU9iamVjdCkubGVuZ3RoKSB7XG4gICAgICAgICAgcmVxdWVzdCArPSAncXVlcnk6ICcgKyBxdWVyeVR5cGUgKyAnXFxuJztcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyYW1zT2JqZWN0ICYmIE9iamVjdC5rZXlzKHBhcmFtc09iamVjdCkubGVuZ3RoKSB7XG4gICAgICAgICAgcmVxdWVzdCArPSAncGFyYW1zOiAnICsgcGFyYW1zVHlwZSArICdcXG4nO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXF1ZXN0Lmxlbmd0aCkge1xuICAgICAgICAgIHJlcXVlc3QgPSAneycgKyByZXF1ZXN0ICsgJ30nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlcXVlc3QgPSAnbnVsbCc7XG4gICAgICAgIH1cblxuICAgICAgICBvdXQuaW5uZXIgPSBgZ2VuZXJhdGVTZXJ2aWNlQ2FsbDwke1xuICAgICAgICAgIHJlcXVlc3RcbiAgICAgICAgfSwgYW55PignJHtcbiAgICAgICAgICBzY2hlbWEuc2VydmVycz8uWzBdLnVybCArIChpbm5lciBhcyBhbnkpLnVybFxuICAgICAgICB9JywgJyR7KGlubmVyIGFzIGFueSkubWV0aG9kfScpYDtcbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICAgIH0pLFxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBidWlsZFBhdGhzKG5lc3RlZFBhdGhzT2JqZWN0KTtcbn07XG5cbmNvbnN0IGdlbmVyYXRlTGliID0gYXN5bmMgKHNjaGVtYTogT3BlbkFQSVNwZWMpID0+IHtcbiAgY29uc3QgZ2VuZXJhdG9yID0gYXdhaXQgY29tcGlsZUhhbmRsZWJhcnNUZW1wbGF0ZUZyb21GaWxlKFxuICAgICcuL3NyYy90ZW1wbGF0ZXMvY2xpZW50Um9vdC50eHQnLFxuICApO1xuICBjb25zdCBtZXRob2RzID0gYXdhaXQgZ2VuZXJhdGVQYXRocyhzY2hlbWEpO1xuXG4gIHJldHVybiBnZW5lcmF0b3Ioe1xuICAgIHJlc3Q6IG1ldGhvZHMsXG4gICAgc2NoZW1hLFxuICB9KTtcbn07XG5cbmNvbnN0IHJlYWRJblNjaGVtYSA9IGFzeW5jIChmaWxlUGF0aDogc3RyaW5nKTogUHJvbWlzZTxPcGVuQVBJU3BlYz4gPT4ge1xuICBjb25zdCBmaWxlID0gYXdhaXQgZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoLCB7XG4gICAgZW5jb2Rpbmc6ICd1dGYtOCcsXG4gIH0pO1xuICByZXR1cm4gSlNPTi5wYXJzZShmaWxlKSBhcyBPcGVuQVBJU3BlYztcbn07XG5cbmNvbnN0IG1ha2VTdHJpbmdVbnNhZmUgPSAoc2FmZVN0cmluZzogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgLypcbiAgICogVGhpcyBleGlzdHMgY2F1c2UgaGFuZGxlYmFycyBpcyBtZWFudCBmb3IgaHRtbCB0ZW1wbGF0aW5nLiBJbiB0aGF0IHNpdHVhdGlvbixcbiAgICogSXQgd291bGQgYmUgYW4gaW5jcmVkaWJseSBiYWQgaWRlYSB0byBkbyB0aGlzLiBXZSBhcmUgbm90IGRvaW5nIGh0bWwgdGVtcGxhdGluZyB0aG91Z2guXG4gICAqL1xuICBzYWZlU3RyaW5nID0gc2FmZVN0cmluZy5yZXBsYWNlKC8mYW1wOy9nLCAnJicpO1xuICBzYWZlU3RyaW5nID0gc2FmZVN0cmluZy5yZXBsYWNlKC8mbHQ7L2csICc8Jyk7XG4gIHNhZmVTdHJpbmcgPSBzYWZlU3RyaW5nLnJlcGxhY2UoLyZndDsvZywgJz4nKTtcbiAgc2FmZVN0cmluZyA9IHNhZmVTdHJpbmcucmVwbGFjZSgvJnF1b3Q7L2csICdcIicpO1xuICBzYWZlU3RyaW5nID0gc2FmZVN0cmluZy5yZXBsYWNlKC8mI3gyNzsvZywgXCInXCIpO1xuICBzYWZlU3RyaW5nID0gc2FmZVN0cmluZy5yZXBsYWNlKC8mI3g2MDsvZywgJ2AnKTtcbiAgc2FmZVN0cmluZyA9IHNhZmVTdHJpbmcucmVwbGFjZSgvJiN4M0Q7L2csICc9Jyk7XG5cbiAgcmV0dXJuIHNhZmVTdHJpbmc7XG59O1xuXG5jb25zdCBwcm9jZXNzU2NoZW1hID0gYXN5bmMgKHNjaGVtYTogT3BlbkFQSVNwZWMpID0+IHtcbiAgbGV0IGxpYiA9IGF3YWl0IGdlbmVyYXRlTGliKHNjaGVtYSk7XG4gIGxpYiA9IG1ha2VTdHJpbmdVbnNhZmUobGliKTtcbiAgYXdhaXQgd3JpdGVMaWJUb0Rpc2socHJvY2Vzcy5hcmd2WzNdLCBsaWIpO1xufTtcblxucmVhZEluU2NoZW1hKHByb2Nlc3MuYXJndlsyXSkudGhlbihwcm9jZXNzU2NoZW1hKS5jYXRjaChjb25zb2xlLmxvZyk7XG4iXX0=