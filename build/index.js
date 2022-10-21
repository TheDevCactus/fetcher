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
                 *
                 * MAKE PARAMS OBJECT
                 *
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
                 *
                 * MAKE QUERY OBJECT
                 *
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
    yield (0, utils_1.writeLibToDisk)('./goalOutputFiles/test.ts', lib);
});
readInSchema(process.argv[2]).then(processSchema).catch(console.log);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0Q0FBb0I7QUFRcEIsbUNBSWlCO0FBU2pCLE1BQU0scUJBQXFCLEdBQUcsQ0FDNUIsVUFBeUIsRUFDekIsR0FBd0IsRUFDeEIsUUFBYSxFQUNiLFFBQWdCLEVBQ2hCLEVBQUU7SUFDRixNQUFNLFFBQVEsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1QyxJQUFJLENBQUMsUUFBUSxFQUFFO1FBQ2IsT0FBTztLQUNSO0lBRUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUNsQixHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDO0tBQ3BCO0lBRUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUU7UUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNwQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUc7Z0JBQ25CLElBQUksRUFBRSxJQUFJO2dCQUNWLE1BQU0sRUFBRSxHQUFHO2dCQUNYLE9BQU8sRUFBRSxRQUFRLENBQUMsR0FBRyxDQUFDO2dCQUN0QixHQUFHLEVBQUUsUUFBUTthQUNkLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztRQUVILE9BQU87S0FDUjtJQUVELHFCQUFxQixDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3JFLE9BQU87QUFDVCxDQUFDLENBQUM7QUFFRixNQUFNLGVBQWUsR0FBRyxDQUN0QixXQUF3QyxFQUNwQixFQUFFO0lBQ3RCLE1BQU0sR0FBRyxHQUFHLEVBQUUsQ0FB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QUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSAnZnMnO1xuXG5pbXBvcnQge1xuICBPcGVuQXBpUGFyYW1ldGVyLFxuICBPcGVuQXBpUGF0aCxcbiAgT3BlbkFwaVBhdGhzT2JqZWN0LFxuICBPcGVuQVBJU3BlYyxcbn0gZnJvbSAnLi9tb2RlbHMnO1xuaW1wb3J0IHtcbiAgY29tcGlsZUhhbmRsZWJhcnNUZW1wbGF0ZUZyb21GaWxlLFxuICBvcGVuQXBpVHlwZVRvVFNUeXBlLFxuICB3cml0ZUxpYlRvRGlzayxcbn0gZnJvbSAnLi91dGlscyc7XG5cbmludGVyZmFjZSBSYW5kb21CYWROYW1lIHtcbiAgX2VuZDogdHJ1ZTtcbiAgbWV0aG9kOiBzdHJpbmc7XG4gIHBhdGhPYmo6IE9wZW5BcGlQYXRoO1xuICB1cmw6IHN0cmluZztcbn1cblxuY29uc3QgYWRkTmVzdGVkS2V5c1RvT2JqZWN0ID0gKFxuICBuZXN0ZWRLZXlzOiBBcnJheTxzdHJpbmc+LFxuICBvYmo6IFJlY29yZDxzdHJpbmcsIGFueT4sXG4gIGZpbmFsT2JqOiBhbnksXG4gIGJhc2VQYXRoOiBzdHJpbmcsXG4pID0+IHtcbiAgY29uc3QgZmlyc3RLZXkgPSBuZXN0ZWRLZXlzLnNwbGljZSgwLCAxKVswXTtcbiAgaWYgKCFmaXJzdEtleSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICghb2JqW2ZpcnN0S2V5XSkge1xuICAgIG9ialtmaXJzdEtleV0gPSB7fTtcbiAgfVxuXG4gIGlmICghbmVzdGVkS2V5cy5sZW5ndGgpIHtcbiAgICBPYmplY3Qua2V5cyhmaW5hbE9iaikuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBvYmpbZmlyc3RLZXldW2tleV0gPSB7XG4gICAgICAgIF9lbmQ6IHRydWUsXG4gICAgICAgIG1ldGhvZDoga2V5LFxuICAgICAgICBwYXRoT2JqOiBmaW5hbE9ialtrZXldLFxuICAgICAgICB1cmw6IGJhc2VQYXRoLFxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGFkZE5lc3RlZEtleXNUb09iamVjdChuZXN0ZWRLZXlzLCBvYmpbZmlyc3RLZXldLCBmaW5hbE9iaiwgYmFzZVBhdGgpO1xuICByZXR1cm47XG59O1xuXG5jb25zdCBuZXN0UGF0aHNPYmplY3QgPSAoXG4gIHBhdGhzT2JqZWN0OiBSZWNvcmQ8c3RyaW5nLCBPcGVuQXBpUGF0aD4sXG4pOiBPcGVuQXBpUGF0aHNPYmplY3QgPT4ge1xuICBjb25zdCBvdXQgPSB7fTtcblxuICBPYmplY3QuZW50cmllcyhwYXRoc09iamVjdCkuZm9yRWFjaCgoW3BhdGgsIHBhdGhPYmpdKSA9PiB7XG4gICAgY29uc3Qgc3BsaXRQYXRoID0gcGF0aC5zcGxpdCgnLycpLmZpbHRlcigocGF0aCkgPT4gcGF0aCAhPT0gJycpO1xuICAgIGFkZE5lc3RlZEtleXNUb09iamVjdChzcGxpdFBhdGgsIG91dCwgcGF0aE9iaiwgcGF0aCk7XG4gIH0pO1xuXG4gIHJldHVybiBvdXQ7XG59O1xuXG5jb25zdCBjbGVhbktleSA9IChrZXk6IHN0cmluZykgPT4ge1xuICBpZiAoa2V5LnN0YXJ0c1dpdGgoJ3snKSAmJiBrZXkuZW5kc1dpdGgoJ30nKSkge1xuICAgIGtleSA9ICdieScgKyBrZXlbMV0udG9VcHBlckNhc2UoKSArIGtleS5zbGljZSgyLCBrZXkubGVuZ3RoIC0gMSk7XG4gIH1cblxuICByZXR1cm4ga2V5O1xufTtcblxuY29uc3QgZ2VuZXJhdGVQYXRocyA9IGFzeW5jIChzY2hlbWE6IE9wZW5BUElTcGVjKSA9PiB7XG4gIGNvbnN0IG9iamVjdEdlbmVyYXRvciA9IGF3YWl0IGNvbXBpbGVIYW5kbGViYXJzVGVtcGxhdGVGcm9tRmlsZShcbiAgICAnLi9zcmMvdGVtcGxhdGVzL29iamVjdC50eHQnLFxuICApO1xuICBjb25zdCBnZW5lcmF0b3IgPSBhd2FpdCBjb21waWxlSGFuZGxlYmFyc1RlbXBsYXRlRnJvbUZpbGUoXG4gICAgJy4vc3JjL3RlbXBsYXRlcy9wYXRoLnR4dCcsXG4gICk7XG5cbiAgY29uc3QgbmVzdGVkUGF0aHNPYmplY3QgPSBuZXN0UGF0aHNPYmplY3Qoc2NoZW1hLnBhdGhzKTtcblxuICBjb25zdCBidWlsZFBhdGhzID0gKHBhdGhzOiBPcGVuQXBpUGF0aHNPYmplY3QpOiBzdHJpbmcgPT4ge1xuICAgIHJldHVybiBnZW5lcmF0b3Ioe1xuICAgICAgcGF0aHM6IE9iamVjdC5lbnRyaWVzKHBhdGhzKS5tYXAoKFtrZXksIGlubmVyXSkgPT4ge1xuICAgICAgICBjb25zdCBvdXQ6IHsga2V5OiBzdHJpbmc7IGlubmVyOiBzdHJpbmcgfSA9IHtcbiAgICAgICAgICBpbm5lcjogJycsXG4gICAgICAgICAga2V5OiBgJyR7Y2xlYW5LZXkoa2V5KX0nYCxcbiAgICAgICAgfTtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlXG4gICAgICAgIGlmICh0eXBlb2YgaW5uZXIgPT09ICdvYmplY3QnICYmICEoaW5uZXIgYXMgYW55KT8uX2VuZCkge1xuICAgICAgICAgIG91dC5pbm5lciA9ICd7JyArIGJ1aWxkUGF0aHMoaW5uZXIgYXMgT3BlbkFwaVBhdGhzT2JqZWN0KSArICd9JztcbiAgICAgICAgICByZXR1cm4gb3V0O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgcGF0aE9iaiB9OiBSYW5kb21CYWROYW1lID0gaW5uZXIgYXMgUmFuZG9tQmFkTmFtZTtcblxuICAgICAgICAvKlxuICAgICAgICAgKlxuICAgICAgICAgKiBNQUtFIFBBUkFNUyBPQkpFQ1RcbiAgICAgICAgICpcbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IHBhcmFtc09iamVjdCA9IHBhdGhPYmoucGFyYW1ldGVyc1xuICAgICAgICAgID8uZmlsdGVyKChwYXJhbSkgPT4ge1xuICAgICAgICAgICAgaWYgKCEocGFyYW0gYXMgYW55KS5pbikge1xuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXJhbSA9IHBhcmFtIGFzIE9wZW5BcGlQYXJhbWV0ZXI7XG4gICAgICAgICAgICByZXR1cm4gcGFyYW0uaW4gPT09ICdwYXRoJztcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5yZWR1Y2UoKHQsIHBhcmFtOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIC4uLnQsXG4gICAgICAgICAgICAgIFtwYXJhbS5uYW1lXTogb3BlbkFwaVR5cGVUb1RTVHlwZShwYXJhbS5zY2hlbWEudHlwZSksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0sIHt9KTtcblxuICAgICAgICBjb25zdCBwYXJhbXNUeXBlID0gb2JqZWN0R2VuZXJhdG9yKHtcbiAgICAgICAgICBwcm9wZXJ0aWVzOiBPYmplY3QuZW50cmllcyhwYXJhbXNPYmplY3QgfHwge30pLm1hcChcbiAgICAgICAgICAgIChba2V5LCB2YWx1ZV0pID0+ICh7XG4gICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICApLFxuICAgICAgICB9KTtcblxuICAgICAgICAvKlxuICAgICAgICAgKlxuICAgICAgICAgKiBNQUtFIFFVRVJZIE9CSkVDVFxuICAgICAgICAgKlxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgcXVlcnlPYmplY3QgPSBwYXRoT2JqLnBhcmFtZXRlcnNcbiAgICAgICAgICA/LmZpbHRlcigocGFyYW0pID0+IHtcbiAgICAgICAgICAgIGlmICghKHBhcmFtIGFzIGFueSkuaW4pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGFyYW0gPSBwYXJhbSBhcyBPcGVuQXBpUGFyYW1ldGVyO1xuICAgICAgICAgICAgcmV0dXJuIHBhcmFtLmluID09PSAncXVlcnknO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLnJlZHVjZSgodCwgcGFyYW06IGFueSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgLi4udCxcbiAgICAgICAgICAgICAgW3BhcmFtLm5hbWVdOiBvcGVuQXBpVHlwZVRvVFNUeXBlKHBhcmFtLnNjaGVtYS50eXBlKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSwge30pO1xuXG4gICAgICAgIGNvbnN0IHF1ZXJ5VHlwZSA9IG9iamVjdEdlbmVyYXRvcih7XG4gICAgICAgICAgcHJvcGVydGllczogT2JqZWN0LmVudHJpZXMocXVlcnlPYmplY3QgfHwge30pLm1hcCgoW2tleSwgdmFsdWVdKSA9PiAoe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgfSkpLFxuICAgICAgICB9KTtcblxuICAgICAgICAvKlxuICAgICAgICAgKlxuICAgICAgICAgKiBTRVQgSU5ORVJcbiAgICAgICAgICpcbiAgICAgICAgICovXG5cbiAgICAgICAgbGV0IHJlcXVlc3QgPSAnJztcbiAgICAgICAgaWYgKHF1ZXJ5T2JqZWN0ICYmIE9iamVjdC5rZXlzKHF1ZXJ5T2JqZWN0KS5sZW5ndGgpIHtcbiAgICAgICAgICByZXF1ZXN0ICs9ICdxdWVyeTogJyArIHF1ZXJ5VHlwZSArICdcXG4nO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJhbXNPYmplY3QgJiYgT2JqZWN0LmtleXMocGFyYW1zT2JqZWN0KS5sZW5ndGgpIHtcbiAgICAgICAgICByZXF1ZXN0ICs9ICdwYXJhbXM6ICcgKyBwYXJhbXNUeXBlICsgJ1xcbic7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlcXVlc3QubGVuZ3RoKSB7XG4gICAgICAgICAgcmVxdWVzdCA9ICd7JyArIHJlcXVlc3QgKyAnfSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVxdWVzdCA9ICdudWxsJztcbiAgICAgICAgfVxuXG4gICAgICAgIG91dC5pbm5lciA9IGBnZW5lcmF0ZVNlcnZpY2VDYWxsPCR7XG4gICAgICAgICAgcmVxdWVzdFxuICAgICAgICB9LCBhbnk+KCcke1xuICAgICAgICAgIHNjaGVtYS5zZXJ2ZXJzPy5bMF0udXJsICsgKGlubmVyIGFzIGFueSkudXJsXG4gICAgICAgIH0nLCAnJHsoaW5uZXIgYXMgYW55KS5tZXRob2R9JylgO1xuICAgICAgICByZXR1cm4gb3V0O1xuICAgICAgfSksXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIGJ1aWxkUGF0aHMobmVzdGVkUGF0aHNPYmplY3QpO1xufTtcblxuY29uc3QgZ2VuZXJhdGVMaWIgPSBhc3luYyAoc2NoZW1hOiBPcGVuQVBJU3BlYykgPT4ge1xuICBjb25zdCBnZW5lcmF0b3IgPSBhd2FpdCBjb21waWxlSGFuZGxlYmFyc1RlbXBsYXRlRnJvbUZpbGUoXG4gICAgJy4vc3JjL3RlbXBsYXRlcy9jbGllbnRSb290LnR4dCcsXG4gICk7XG4gIGNvbnN0IG1ldGhvZHMgPSBhd2FpdCBnZW5lcmF0ZVBhdGhzKHNjaGVtYSk7XG5cbiAgcmV0dXJuIGdlbmVyYXRvcih7XG4gICAgcmVzdDogbWV0aG9kcyxcbiAgICBzY2hlbWEsXG4gIH0pO1xufTtcblxuY29uc3QgcmVhZEluU2NoZW1hID0gYXN5bmMgKGZpbGVQYXRoOiBzdHJpbmcpOiBQcm9taXNlPE9wZW5BUElTcGVjPiA9PiB7XG4gIGNvbnN0IGZpbGUgPSBhd2FpdCBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgsIHtcbiAgICBlbmNvZGluZzogJ3V0Zi04JyxcbiAgfSk7XG4gIHJldHVybiBKU09OLnBhcnNlKGZpbGUpIGFzIE9wZW5BUElTcGVjO1xufTtcblxuY29uc3QgbWFrZVN0cmluZ1Vuc2FmZSA9IChzYWZlU3RyaW5nOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAvKlxuICAgKiBUaGlzIGV4aXN0cyBjYXVzZSBoYW5kbGViYXJzIGlzIG1lYW50IGZvciBodG1sIHRlbXBsYXRpbmcuIEluIHRoYXQgc2l0dWF0aW9uLFxuICAgKiBJdCB3b3VsZCBiZSBhbiBpbmNyZWRpYmx5IGJhZCBpZGVhIHRvIGRvIHRoaXMuIFdlIGFyZSBub3QgZG9pbmcgaHRtbCB0ZW1wbGF0aW5nIHRob3VnaC5cbiAgICovXG4gIHNhZmVTdHJpbmcgPSBzYWZlU3RyaW5nLnJlcGxhY2UoLyZhbXA7L2csICcmJyk7XG4gIHNhZmVTdHJpbmcgPSBzYWZlU3RyaW5nLnJlcGxhY2UoLyZsdDsvZywgJzwnKTtcbiAgc2FmZVN0cmluZyA9IHNhZmVTdHJpbmcucmVwbGFjZSgvJmd0Oy9nLCAnPicpO1xuICBzYWZlU3RyaW5nID0gc2FmZVN0cmluZy5yZXBsYWNlKC8mcXVvdDsvZywgJ1wiJyk7XG4gIHNhZmVTdHJpbmcgPSBzYWZlU3RyaW5nLnJlcGxhY2UoLyYjeDI3Oy9nLCBcIidcIik7XG4gIHNhZmVTdHJpbmcgPSBzYWZlU3RyaW5nLnJlcGxhY2UoLyYjeDYwOy9nLCAnYCcpO1xuICBzYWZlU3RyaW5nID0gc2FmZVN0cmluZy5yZXBsYWNlKC8mI3gzRDsvZywgJz0nKTtcblxuICByZXR1cm4gc2FmZVN0cmluZztcbn07XG5cbmNvbnN0IHByb2Nlc3NTY2hlbWEgPSBhc3luYyAoc2NoZW1hOiBPcGVuQVBJU3BlYykgPT4ge1xuICBsZXQgbGliID0gYXdhaXQgZ2VuZXJhdGVMaWIoc2NoZW1hKTtcbiAgbGliID0gbWFrZVN0cmluZ1Vuc2FmZShsaWIpO1xuICBhd2FpdCB3cml0ZUxpYlRvRGlzaygnLi9nb2FsT3V0cHV0RmlsZXMvdGVzdC50cycsIGxpYik7XG59O1xuXG5yZWFkSW5TY2hlbWEocHJvY2Vzcy5hcmd2WzJdKS50aGVuKHByb2Nlc3NTY2hlbWEpLmNhdGNoKGNvbnNvbGUubG9nKTtcbiJdfQ==