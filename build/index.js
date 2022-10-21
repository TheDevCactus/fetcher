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
const handlebars_1 = __importDefault(require("handlebars"));
const loadTemplate = (filePath) => __awaiter(void 0, void 0, void 0, function* () {
    const file = yield fs_1.default.readFileSync(filePath, {
        encoding: 'utf-8',
    });
    return file;
});
const writeLib = (filePath, lib) => __awaiter(void 0, void 0, void 0, function* () {
    yield fs_1.default.writeFileSync(filePath, lib, {
        encoding: 'utf-8',
    });
});
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
                pathObj: finalObj,
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
    const template = yield loadTemplate('./src/templates/path.txt');
    const generator = handlebars_1.default.compile(template);
    const nestedPathsObject = nestPathsObject(schema.paths);
    const buildPaths = (paths) => {
        return generator({
            paths: Object.entries(paths).map(([key, inner]) => {
                var _a;
                const out = {
                    inner: '',
                    key: `'${cleanKey(key)}'`,
                };
                // eslint-disable-next-line no-underscore-dangle
                if (typeof inner === 'object' && !(inner === null || inner === void 0 ? void 0 : inner._end)) {
                    out.inner = '{' + buildPaths(inner) + '}';
                    return out;
                }
                out.inner = `generateServiceCall<{ dog: boolean }, {cat: string}, {bird: number}, any>('${((_a = schema.servers) === null || _a === void 0 ? void 0 : _a[0].url) + inner.url}', '${inner.method}')`;
                return out;
            }),
        });
    };
    return buildPaths(nestedPathsObject);
});
const generateLib = (schema) => __awaiter(void 0, void 0, void 0, function* () {
    const out = [];
    const template = yield loadTemplate('./src/templates/clientRoot.txt');
    const generator = handlebars_1.default.compile(template);
    const methods = yield generatePaths(schema);
    out.push(generator({
        rest: methods,
        schema,
    }));
    return out;
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
    const lib = yield generateLib(schema);
    lib[0] = makeStringUnsafe(lib[0]);
    yield writeLib('./goalOutputFiles/test.ts', lib[0]);
});
readInSchema(process.argv[2]).then(processSchema).catch(console.log);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0Q0FBb0I7QUFFcEIsNERBQW9DO0FBSXBDLE1BQU0sWUFBWSxHQUFHLENBQU8sUUFBZ0IsRUFBRSxFQUFFO0lBQzlDLE1BQU0sSUFBSSxHQUFHLE1BQU0sWUFBRSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUU7UUFDM0MsUUFBUSxFQUFFLE9BQU87S0FDbEIsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDLENBQUEsQ0FBQztBQUVGLE1BQU0sUUFBUSxHQUFHLENBQU8sUUFBZ0IsRUFBRSxHQUFXLEVBQUUsRUFBRTtJQUN2RCxNQUFNLFlBQUUsQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRTtRQUNwQyxRQUFRLEVBQUUsT0FBTztLQUNsQixDQUFDLENBQUM7QUFDTCxDQUFDLENBQUEsQ0FBQztBQUVGLE1BQU0scUJBQXFCLEdBQUcsQ0FDNUIsVUFBeUIsRUFDekIsR0FBd0IsRUFDeEIsUUFBYSxFQUNiLFFBQWdCLEVBQ2hCLEVBQUU7SUFDRixNQUFNLFFBQVEsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1QyxJQUFJLENBQUMsUUFBUSxFQUFFO1FBQ2IsT0FBTztLQUNSO0lBRUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUNsQixHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDO0tBQ3BCO0lBRUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUU7UUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNwQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsR0FB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QUFPLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ2hELFVBQVUsR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNoRCxVQUFVLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDaEQsVUFBVSxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBRWhELE9BQU8sVUFBVSxDQUFDO0FBQ3BCLENBQUMsQ0FBQztBQUVGLE1BQU0sYUFBYSxHQUFHLENBQU8sTUFBbUIsRUFBRSxFQUFFO0lBQ2xELE1BQU0sR0FBRyxHQUFHLE1BQU0sV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRXRDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVsQyxNQUFNLFFBQVEsQ0FBQywyQkFBMkIsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN0RCxDQUFDLENBQUEsQ0FBQztBQUVGLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSAnZnMnO1xuXG5pbXBvcnQgSGFuZGxlYmFycyBmcm9tICdoYW5kbGViYXJzJztcblxuaW1wb3J0IHsgT3BlbkFwaVBhdGgsIE9wZW5BcGlQYXRoc09iamVjdCwgT3BlbkFQSVNwZWMgfSBmcm9tICcuL21vZGVscyc7XG5cbmNvbnN0IGxvYWRUZW1wbGF0ZSA9IGFzeW5jIChmaWxlUGF0aDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IGZpbGUgPSBhd2FpdCBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgsIHtcbiAgICBlbmNvZGluZzogJ3V0Zi04JyxcbiAgfSk7XG4gIHJldHVybiBmaWxlO1xufTtcblxuY29uc3Qgd3JpdGVMaWIgPSBhc3luYyAoZmlsZVBhdGg6IHN0cmluZywgbGliOiBzdHJpbmcpID0+IHtcbiAgYXdhaXQgZnMud3JpdGVGaWxlU3luYyhmaWxlUGF0aCwgbGliLCB7XG4gICAgZW5jb2Rpbmc6ICd1dGYtOCcsXG4gIH0pO1xufTtcblxuY29uc3QgYWRkTmVzdGVkS2V5c1RvT2JqZWN0ID0gKFxuICBuZXN0ZWRLZXlzOiBBcnJheTxzdHJpbmc+LFxuICBvYmo6IFJlY29yZDxzdHJpbmcsIGFueT4sXG4gIGZpbmFsT2JqOiBhbnksXG4gIGJhc2VQYXRoOiBzdHJpbmdcbikgPT4ge1xuICBjb25zdCBmaXJzdEtleSA9IG5lc3RlZEtleXMuc3BsaWNlKDAsIDEpWzBdO1xuICBpZiAoIWZpcnN0S2V5KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKCFvYmpbZmlyc3RLZXldKSB7XG4gICAgb2JqW2ZpcnN0S2V5XSA9IHt9O1xuICB9XG5cbiAgaWYgKCFuZXN0ZWRLZXlzLmxlbmd0aCkge1xuICAgIE9iamVjdC5rZXlzKGZpbmFsT2JqKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIG9ialtmaXJzdEtleV1ba2V5XSA9IHtcbiAgICAgICAgX2VuZDogdHJ1ZSxcbiAgICAgICAgbWV0aG9kOiBrZXksXG4gICAgICAgIHBhdGhPYmo6IGZpbmFsT2JqLFxuICAgICAgICB1cmw6IGJhc2VQYXRoLFxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGFkZE5lc3RlZEtleXNUb09iamVjdChuZXN0ZWRLZXlzLCBvYmpbZmlyc3RLZXldLCBmaW5hbE9iaiwgYmFzZVBhdGgpO1xuICByZXR1cm47XG59O1xuXG5jb25zdCBuZXN0UGF0aHNPYmplY3QgPSAoXG4gIHBhdGhzT2JqZWN0OiBSZWNvcmQ8c3RyaW5nLCBPcGVuQXBpUGF0aD4sXG4pOiBPcGVuQXBpUGF0aHNPYmplY3QgPT4ge1xuICBjb25zdCBvdXQgPSB7fTtcblxuICBPYmplY3QuZW50cmllcyhwYXRoc09iamVjdCkuZm9yRWFjaCgoW3BhdGgsIHBhdGhPYmpdKSA9PiB7XG4gICAgY29uc3Qgc3BsaXRQYXRoID0gcGF0aC5zcGxpdCgnLycpLmZpbHRlcigocGF0aCkgPT4gcGF0aCAhPT0gJycpO1xuICAgIGFkZE5lc3RlZEtleXNUb09iamVjdChzcGxpdFBhdGgsIG91dCwgcGF0aE9iaiwgcGF0aCk7XG4gIH0pO1xuXG4gIHJldHVybiBvdXQ7XG59O1xuXG5jb25zdCBjbGVhbktleSA9IChrZXk6IHN0cmluZykgPT4ge1xuICBpZiAoa2V5LnN0YXJ0c1dpdGgoJ3snKSAmJiBrZXkuZW5kc1dpdGgoJ30nKSkge1xuICAgIGtleSA9ICdieScgKyBrZXlbMV0udG9VcHBlckNhc2UoKSArIGtleS5zbGljZSgyLCBrZXkubGVuZ3RoIC0gMSk7XG4gIH1cblxuICByZXR1cm4ga2V5O1xufTtcblxuXG5jb25zdCBnZW5lcmF0ZVBhdGhzID0gYXN5bmMgKHNjaGVtYTogT3BlbkFQSVNwZWMpID0+IHtcblxuICBjb25zdCB0ZW1wbGF0ZSA9IGF3YWl0IGxvYWRUZW1wbGF0ZSgnLi9zcmMvdGVtcGxhdGVzL3BhdGgudHh0Jyk7XG4gIGNvbnN0IGdlbmVyYXRvciA9IEhhbmRsZWJhcnMuY29tcGlsZSh0ZW1wbGF0ZSk7XG4gIGNvbnN0IG5lc3RlZFBhdGhzT2JqZWN0ID0gbmVzdFBhdGhzT2JqZWN0KHNjaGVtYS5wYXRocyk7XG5cbiAgY29uc3QgYnVpbGRQYXRocyA9IChwYXRoczogT3BlbkFwaVBhdGhzT2JqZWN0KTogc3RyaW5nID0+IHtcbiAgICByZXR1cm4gZ2VuZXJhdG9yKHtcbiAgICAgIHBhdGhzOiBPYmplY3QuZW50cmllcyhwYXRocykubWFwKChba2V5LCBpbm5lcl0pID0+IHtcbiAgICAgICAgY29uc3Qgb3V0OiB7a2V5OiBzdHJpbmcsIGlubmVyOiBzdHJpbmd9ID0ge1xuICAgICAgICAgIGlubmVyOiAnJyxcbiAgICAgICAgICBrZXk6IGAnJHtjbGVhbktleShrZXkpfSdgLFxuICAgICAgICB9O1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGVcbiAgICAgICAgaWYgKHR5cGVvZiBpbm5lciA9PT0gJ29iamVjdCcgJiYgIShpbm5lciBhcyBhbnkpPy5fZW5kKSB7XG4gICAgICAgICAgb3V0LmlubmVyID0gJ3snICsgYnVpbGRQYXRocyhpbm5lciBhcyBPcGVuQXBpUGF0aHNPYmplY3QpICsgJ30nXG4gICAgICAgICAgcmV0dXJuIG91dDtcbiAgICAgICAgfVxuXG4gICAgICAgIG91dC5pbm5lciA9IGBnZW5lcmF0ZVNlcnZpY2VDYWxsPHsgZG9nOiBib29sZWFuIH0sIHtjYXQ6IHN0cmluZ30sIHtiaXJkOiBudW1iZXJ9LCBhbnk+KCcke1xuICAgICAgICAgIHNjaGVtYS5zZXJ2ZXJzPy5bMF0udXJsICsgKGlubmVyIGFzIGFueSkudXJsXG4gICAgICAgIH0nLCAnJHtcbiAgICAgICAgICAoaW5uZXIgYXMgYW55KS5tZXRob2RcbiAgICAgICAgfScpYDtcbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICAgIH0pLFxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBidWlsZFBhdGhzKG5lc3RlZFBhdGhzT2JqZWN0KTtcbn07XG5cbmNvbnN0IGdlbmVyYXRlTGliID0gYXN5bmMgKHNjaGVtYTogT3BlbkFQSVNwZWMpID0+IHtcbiAgY29uc3Qgb3V0ID0gW107XG4gIGNvbnN0IHRlbXBsYXRlID0gYXdhaXQgbG9hZFRlbXBsYXRlKCcuL3NyYy90ZW1wbGF0ZXMvY2xpZW50Um9vdC50eHQnKTtcbiAgY29uc3QgZ2VuZXJhdG9yID0gSGFuZGxlYmFycy5jb21waWxlKHRlbXBsYXRlKTtcblxuICBjb25zdCBtZXRob2RzID0gYXdhaXQgZ2VuZXJhdGVQYXRocyhzY2hlbWEpO1xuXG4gIG91dC5wdXNoKFxuICAgIGdlbmVyYXRvcih7XG4gICAgICByZXN0OiBtZXRob2RzLFxuICAgICAgc2NoZW1hLFxuICAgIH0pLFxuICApO1xuXG4gIHJldHVybiBvdXQ7XG59O1xuXG5jb25zdCByZWFkSW5TY2hlbWEgPSBhc3luYyAoZmlsZVBhdGg6IHN0cmluZyk6IFByb21pc2U8T3BlbkFQSVNwZWM+ID0+IHtcbiAgY29uc3QgZmlsZSA9IGF3YWl0IGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCwge1xuICAgIGVuY29kaW5nOiAndXRmLTgnLFxuICB9KTtcbiAgcmV0dXJuIEpTT04ucGFyc2UoZmlsZSkgYXMgT3BlbkFQSVNwZWM7XG59O1xuXG5jb25zdCBtYWtlU3RyaW5nVW5zYWZlID0gKHNhZmVTdHJpbmc6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIC8qXG4gICAqIFRoaXMgZXhpc3RzIGNhdXNlIGhhbmRsZWJhcnMgaXMgbWVhbnQgZm9yIGh0bWwgdGVtcGxhdGluZy4gSW4gdGhhdCBzaXR1YXRpb24sXG4gICAqIEl0IHdvdWxkIGJlIGFuIGluY3JlZGlibHkgYmFkIGlkZWEgdG8gZG8gdGhpcy4gV2UgYXJlIG5vdCBkb2luZyBodG1sIHRlbXBsYXRpbmcgdGhvdWdoLlxuICAgKi9cbiAgc2FmZVN0cmluZyA9IHNhZmVTdHJpbmcucmVwbGFjZSgvJmFtcDsvZywgJyYnKTtcbiAgc2FmZVN0cmluZyA9IHNhZmVTdHJpbmcucmVwbGFjZSgvJmx0Oy9nLCAnPCcpO1xuICBzYWZlU3RyaW5nID0gc2FmZVN0cmluZy5yZXBsYWNlKC8mZ3Q7L2csICc+Jyk7XG4gIHNhZmVTdHJpbmcgPSBzYWZlU3RyaW5nLnJlcGxhY2UoLyZxdW90Oy9nLCAnXCInKTtcbiAgc2FmZVN0cmluZyA9IHNhZmVTdHJpbmcucmVwbGFjZSgvJiN4Mjc7L2csIFwiJ1wiKTtcbiAgc2FmZVN0cmluZyA9IHNhZmVTdHJpbmcucmVwbGFjZSgvJiN4NjA7L2csICdgJyk7XG4gIHNhZmVTdHJpbmcgPSBzYWZlU3RyaW5nLnJlcGxhY2UoLyYjeDNEOy9nLCAnPScpO1xuXG4gIHJldHVybiBzYWZlU3RyaW5nO1xufTtcblxuY29uc3QgcHJvY2Vzc1NjaGVtYSA9IGFzeW5jIChzY2hlbWE6IE9wZW5BUElTcGVjKSA9PiB7XG4gIGNvbnN0IGxpYiA9IGF3YWl0IGdlbmVyYXRlTGliKHNjaGVtYSk7XG5cbiAgbGliWzBdID0gbWFrZVN0cmluZ1Vuc2FmZShsaWJbMF0pO1xuXG4gIGF3YWl0IHdyaXRlTGliKCcuL2dvYWxPdXRwdXRGaWxlcy90ZXN0LnRzJywgbGliWzBdKTtcbn07XG5cbnJlYWRJblNjaGVtYShwcm9jZXNzLmFyZ3ZbMl0pLnRoZW4ocHJvY2Vzc1NjaGVtYSkuY2F0Y2goY29uc29sZS5sb2cpO1xuIl19