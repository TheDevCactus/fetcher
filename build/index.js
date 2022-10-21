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
const addNestedKeysToObject = (nestedKeys, obj, finalKeys) => {
    const firstKey = nestedKeys.splice(0, 1)[0];
    if (!firstKey) {
        return;
    }
    if (!obj[firstKey]) {
        obj[firstKey] = {};
    }
    if (!nestedKeys.length) {
        finalKeys.forEach((key) => {
            obj[firstKey][key] = () => {
                console.log('CALLING: ', key);
            };
        });
        return;
    }
    addNestedKeysToObject(nestedKeys, obj[firstKey], finalKeys);
    return;
};
const nestPathsObject = (pathsObject) => {
    const out = {};
    Object.entries(pathsObject).forEach(([path, pathObj]) => {
        const splitPath = path.split('/');
        splitPath.splice(0, 1);
        addNestedKeysToObject(splitPath, out, Object.keys(pathObj));
    });
    return out;
};
const cleanKey = (key) => {
    if (key.startsWith('{') && key.endsWith('}')) {
        key = 'by' + key[1].toUpperCase() + key.slice(2, key.length - 1);
    }
    return key;
};
const generatePaths = (paths) => __awaiter(void 0, void 0, void 0, function* () {
    const template = yield loadTemplate('./src/templates/path.txt');
    const generator = handlebars_1.default.compile(template);
    const nestedPathsObject = nestPathsObject(paths);
    const buildPaths = (paths) => {
        const out = generator({
            paths: Object.entries(paths).map(([key, inner]) => ({
                inner: inner !== null && typeof inner === 'object'
                    ? buildPaths(inner)
                    : '// putNetworkCallHere!',
                key: cleanKey(key),
            })),
        });
        return out;
    };
    return buildPaths(nestedPathsObject);
});
const generateLib = (schema) => __awaiter(void 0, void 0, void 0, function* () {
    const out = [];
    const template = yield loadTemplate('./src/templates/clientRoot.txt');
    const generator = handlebars_1.default.compile(template);
    const methods = yield generatePaths(schema.paths);
    console.log(methods);
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
const processSchema = (schema) => __awaiter(void 0, void 0, void 0, function* () {
    if (!schema.components) {
        throw new Error('Schema does not have any components');
    }
    const lib = yield generateLib(schema);
    yield writeLib('./goalOutputFiles/test.ts', lib[0]);
});
readInSchema(process.argv[2]).then(processSchema).catch(console.log);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0Q0FBb0I7QUFFcEIsNERBQTJDO0FBSTNDLE1BQU0sWUFBWSxHQUFHLENBQU8sUUFBZ0IsRUFBRSxFQUFFO0lBQzlDLE1BQU0sSUFBSSxHQUFHLE1BQU0sWUFBRSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUU7UUFDM0MsUUFBUSxFQUFFLE9BQU87S0FDbEIsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDLENBQUEsQ0FBQztBQUVGLE1BQU0sUUFBUSxHQUFHLENBQU8sUUFBZ0IsRUFBRSxHQUFXLEVBQUUsRUFBRTtJQUN2RCxNQUFNLFlBQUUsQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRTtRQUNwQyxRQUFRLEVBQUUsT0FBTztLQUNsQixDQUFDLENBQUM7QUFDTCxDQUFDLENBQUEsQ0FBQztBQUVGLE1BQU0scUJBQXFCLEdBQUcsQ0FDNUIsVUFBeUIsRUFDekIsR0FBd0IsRUFDeEIsU0FBd0IsRUFDeEIsRUFBRTtJQUNGLE1BQU0sUUFBUSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVDLElBQUksQ0FBQyxRQUFRLEVBQUU7UUFDYixPQUFPO0tBQ1I7SUFFRCxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQ2xCLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7S0FDcEI7SUFFRCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRTtRQUN0QixTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDeEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsRUFBRTtnQkFDeEIsT0FBTyxD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QyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFckIsR0FBRyxDQUFDLElBQUksQ0FDTixTQUFTLENBQUM7UUFDUixJQUFJLEVBQUUsT0FBTztRQUNiLE1BQU07S0FDUCxDQUFDLENBQ0gsQ0FBQztJQUVGLE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQyxDQUFBLENBQUM7QUFFRixNQUFNLFlBQVksR0FBRyxDQUFPLFFBQWdCLEVBQXdCLEVBQUU7SUFDcEUsTUFBTSxJQUFJLEdBQUcsTUFBTSxZQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRTtRQUMzQyxRQUFRLEVBQUUsT0FBTztLQUNsQixDQUFDLENBQUM7SUFDSCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFnQixDQUFDO0FBQ3pDLENBQUMsQ0FBQSxDQUFDO0FBRUYsTUFBTSxhQUFhLEdBQUcsQ0FBTyxNQUFtQixFQUFFLEVBQUU7SUFDbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUU7UUFDdEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO0tBQ3hEO0lBQ0QsTUFBTSxHQUFHLEdBQUcsTUFBTSxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEMsTUFBTSxRQUFRLENBQUMsMkJBQTJCLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdEQsQ0FBQyxDQUFBLENBQUM7QUFFRixZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gJ2ZzJztcblxuaW1wb3J0IEhhbmRsZWJhcnMsIHsgSyB9IGZyb20gJ2hhbmRsZWJhcnMnO1xuXG5pbXBvcnQgeyBPcGVuQXBpUGF0aCwgT3BlbkFwaVBhdGhzT2JqZWN0LCBPcGVuQVBJU3BlYyB9IGZyb20gJy4vbW9kZWxzJztcblxuY29uc3QgbG9hZFRlbXBsYXRlID0gYXN5bmMgKGZpbGVQYXRoOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgZmlsZSA9IGF3YWl0IGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCwge1xuICAgIGVuY29kaW5nOiAndXRmLTgnLFxuICB9KTtcbiAgcmV0dXJuIGZpbGU7XG59O1xuXG5jb25zdCB3cml0ZUxpYiA9IGFzeW5jIChmaWxlUGF0aDogc3RyaW5nLCBsaWI6IHN0cmluZykgPT4ge1xuICBhd2FpdCBmcy53cml0ZUZpbGVTeW5jKGZpbGVQYXRoLCBsaWIsIHtcbiAgICBlbmNvZGluZzogJ3V0Zi04JyxcbiAgfSk7XG59O1xuXG5jb25zdCBhZGROZXN0ZWRLZXlzVG9PYmplY3QgPSAoXG4gIG5lc3RlZEtleXM6IEFycmF5PHN0cmluZz4sXG4gIG9iajogUmVjb3JkPHN0cmluZywgYW55PixcbiAgZmluYWxLZXlzOiBBcnJheTxzdHJpbmc+LFxuKSA9PiB7XG4gIGNvbnN0IGZpcnN0S2V5ID0gbmVzdGVkS2V5cy5zcGxpY2UoMCwgMSlbMF07XG4gIGlmICghZmlyc3RLZXkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoIW9ialtmaXJzdEtleV0pIHtcbiAgICBvYmpbZmlyc3RLZXldID0ge307XG4gIH1cblxuICBpZiAoIW5lc3RlZEtleXMubGVuZ3RoKSB7XG4gICAgZmluYWxLZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgb2JqW2ZpcnN0S2V5XVtrZXldID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnQ0FMTElORzogJywga2V5KTtcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBhZGROZXN0ZWRLZXlzVG9PYmplY3QobmVzdGVkS2V5cywgb2JqW2ZpcnN0S2V5XSwgZmluYWxLZXlzKTtcbiAgcmV0dXJuO1xufTtcblxuY29uc3QgbmVzdFBhdGhzT2JqZWN0ID0gKFxuICBwYXRoc09iamVjdDogUmVjb3JkPHN0cmluZywgT3BlbkFwaVBhdGg+LFxuKTogT3BlbkFwaVBhdGhzT2JqZWN0ID0+IHtcbiAgY29uc3Qgb3V0ID0ge307XG5cbiAgT2JqZWN0LmVudHJpZXMocGF0aHNPYmplY3QpLmZvckVhY2goKFtwYXRoLCBwYXRoT2JqXSkgPT4ge1xuICAgIGNvbnN0IHNwbGl0UGF0aCA9IHBhdGguc3BsaXQoJy8nKTtcbiAgICBzcGxpdFBhdGguc3BsaWNlKDAsIDEpO1xuICAgIGFkZE5lc3RlZEtleXNUb09iamVjdChzcGxpdFBhdGgsIG91dCwgT2JqZWN0LmtleXMocGF0aE9iaikpO1xuICB9KTtcblxuICByZXR1cm4gb3V0O1xufTtcblxuY29uc3QgY2xlYW5LZXkgPSAoa2V5OiBzdHJpbmcpID0+IHtcbiAgaWYgKGtleS5zdGFydHNXaXRoKCd7JykgJiYga2V5LmVuZHNXaXRoKCd9JykpIHtcbiAgICBrZXkgPSAnYnknICsga2V5WzFdLnRvVXBwZXJDYXNlKCkgKyBrZXkuc2xpY2UoMiwga2V5Lmxlbmd0aCAtIDEpO1xuICB9XG5cbiAgcmV0dXJuIGtleTtcbn1cblxuY29uc3QgZ2VuZXJhdGVQYXRocyA9IGFzeW5jIChwYXRoczogUmVjb3JkPHN0cmluZywgT3BlbkFwaVBhdGg+KSA9PiB7XG4gIGNvbnN0IHRlbXBsYXRlID0gYXdhaXQgbG9hZFRlbXBsYXRlKCcuL3NyYy90ZW1wbGF0ZXMvcGF0aC50eHQnKTtcbiAgY29uc3QgZ2VuZXJhdG9yID0gSGFuZGxlYmFycy5jb21waWxlKHRlbXBsYXRlKTtcbiAgY29uc3QgbmVzdGVkUGF0aHNPYmplY3QgPSBuZXN0UGF0aHNPYmplY3QocGF0aHMpO1xuXG4gIGNvbnN0IGJ1aWxkUGF0aHMgPSAocGF0aHM6IE9wZW5BcGlQYXRoc09iamVjdCkgPT4ge1xuICAgIGNvbnN0IG91dCA9IGdlbmVyYXRvcih7XG4gICAgICBwYXRoczogT2JqZWN0LmVudHJpZXMocGF0aHMpLm1hcCgoW2tleSwgaW5uZXJdKSA9PiAoe1xuICAgICAgICBpbm5lcjpcbiAgICAgICAgICBpbm5lciAhPT0gbnVsbCAmJiB0eXBlb2YgaW5uZXIgPT09ICdvYmplY3QnXG4gICAgICAgICAgICA/IGJ1aWxkUGF0aHMoaW5uZXIgYXMgT3BlbkFwaVBhdGhzT2JqZWN0KVxuICAgICAgICAgICAgOiAnLy8gcHV0TmV0d29ya0NhbGxIZXJlIScsXG4gICAgICAgIGtleTogY2xlYW5LZXkoa2V5KSxcbiAgICAgIH0pKSxcbiAgICB9KTtcblxuICAgIHJldHVybiBvdXQ7XG4gIH07XG5cbiAgcmV0dXJuIGJ1aWxkUGF0aHMobmVzdGVkUGF0aHNPYmplY3QpO1xufTtcblxuY29uc3QgZ2VuZXJhdGVMaWIgPSBhc3luYyAoc2NoZW1hOiBPcGVuQVBJU3BlYykgPT4ge1xuICBjb25zdCBvdXQgPSBbXTtcbiAgY29uc3QgdGVtcGxhdGUgPSBhd2FpdCBsb2FkVGVtcGxhdGUoJy4vc3JjL3RlbXBsYXRlcy9jbGllbnRSb290LnR4dCcpO1xuICBjb25zdCBnZW5lcmF0b3IgPSBIYW5kbGViYXJzLmNvbXBpbGUodGVtcGxhdGUpO1xuXG4gIGNvbnN0IG1ldGhvZHMgPSBhd2FpdCBnZW5lcmF0ZVBhdGhzKHNjaGVtYS5wYXRocyk7XG4gIGNvbnNvbGUubG9nKG1ldGhvZHMpO1xuXG4gIG91dC5wdXNoKFxuICAgIGdlbmVyYXRvcih7XG4gICAgICByZXN0OiBtZXRob2RzLFxuICAgICAgc2NoZW1hLFxuICAgIH0pLFxuICApO1xuXG4gIHJldHVybiBvdXQ7XG59O1xuXG5jb25zdCByZWFkSW5TY2hlbWEgPSBhc3luYyAoZmlsZVBhdGg6IHN0cmluZyk6IFByb21pc2U8T3BlbkFQSVNwZWM+ID0+IHtcbiAgY29uc3QgZmlsZSA9IGF3YWl0IGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCwge1xuICAgIGVuY29kaW5nOiAndXRmLTgnLFxuICB9KTtcbiAgcmV0dXJuIEpTT04ucGFyc2UoZmlsZSkgYXMgT3BlbkFQSVNwZWM7XG59O1xuXG5jb25zdCBwcm9jZXNzU2NoZW1hID0gYXN5bmMgKHNjaGVtYTogT3BlbkFQSVNwZWMpID0+IHtcbiAgaWYgKCFzY2hlbWEuY29tcG9uZW50cykge1xuICAgIHRocm93IG5ldyBFcnJvcignU2NoZW1hIGRvZXMgbm90IGhhdmUgYW55IGNvbXBvbmVudHMnKTtcbiAgfVxuICBjb25zdCBsaWIgPSBhd2FpdCBnZW5lcmF0ZUxpYihzY2hlbWEpO1xuICBhd2FpdCB3cml0ZUxpYignLi9nb2FsT3V0cHV0RmlsZXMvdGVzdC50cycsIGxpYlswXSk7XG59O1xuXG5yZWFkSW5TY2hlbWEocHJvY2Vzcy5hcmd2WzJdKS50aGVuKHByb2Nlc3NTY2hlbWEpLmNhdGNoKGNvbnNvbGUubG9nKTtcbiJdfQ==