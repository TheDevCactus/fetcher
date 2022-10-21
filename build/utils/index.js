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
exports.writeLibToDisk = exports.compileHandlebarsTemplateFromFile = exports.openApiTypeToTSType = void 0;
const fs_1 = __importDefault(require("fs"));
const handlebars_1 = __importDefault(require("handlebars"));
const models_1 = require("../models");
const openApiTypeToTSType = (type) => {
    return {
        [models_1.OpenApiType.Array]: 'array',
        [models_1.OpenApiType.Integer]: 'number',
        [models_1.OpenApiType.Number]: 'number',
        [models_1.OpenApiType.Object]: 'object',
        [models_1.OpenApiType.String]: 'string',
        [models_1.OpenApiType.boolean]: 'boolean'
    }[type];
};
exports.openApiTypeToTSType = openApiTypeToTSType;
const compileHandlebarsTemplateFromFile = (filePath, options) => __awaiter(void 0, void 0, void 0, function* () {
    const file = yield fs_1.default.readFileSync(filePath, {
        encoding: 'utf-8'
    });
    const generator = handlebars_1.default.compile(file, options);
    return generator;
});
exports.compileHandlebarsTemplateFromFile = compileHandlebarsTemplateFromFile;
const writeLibToDisk = (filePath, lib) => __awaiter(void 0, void 0, void 0, function* () {
    return fs_1.default.writeFileSync(filePath, lib, {
        encoding: 'utf-8'
    });
});
exports.writeLibToDisk = writeLibToDisk;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbHMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNENBQW9CO0FBRXBCLDREQUFvQztBQUVwQyxzQ0FBd0M7QUFFakMsTUFBTSxtQkFBbUIsR0FBRyxDQUFDLElBQWlCLEVBQVUsRUFBRTtJQUMvRCxPQUFPO1FBQ0wsQ0FBQyxvQkFBVyxDQUFDLEtBQUssQ0FBQyxFQUFFLE9BQU87UUFDNUIsQ0FBQyxvQkFBVyxDQUFDLE9BQU8sQ0FBQyxFQUFFLFFBQVE7UUFDL0IsQ0FBQyxvQkFBVyxDQUFDLE1BQU0sQ0FBQyxFQUFFLFFBQVE7UUFDOUIsQ0FBQyxvQkFBVyxDQUFDLE1BQU0sQ0FBQyxFQUFFLFFBQVE7UUFDOUIsQ0FBQyxvQkFBVyxDQUFDLE1BQU0sQ0FBQyxFQUFFLFFBQVE7UUFDOUIsQ0FBQyxvQkFBVyxDQUFDLE9BQU8sQ0FBQyxFQUFFLFNBQVM7S0FDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNWLENBQUMsQ0FBQTtBQVRZLFFBQUEsbUJBQW1CLHVCQVMvQjtBQUVNLE1BQU0saUNBQWlDLEdBQUcsQ0FDL0MsUUFBZ0IsRUFDaEIsT0FBd0IsRUFDeEIsRUFBRTtJQUNGLE1BQU0sSUFBSSxHQUFHLE1BQU0sWUFBRSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUU7UUFDM0MsUUFBUSxFQUFFLE9BQU87S0FDbEIsQ0FBQyxDQUFDO0lBQ0gsTUFBTSxTQUFTLEdBQUcsb0JBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBRXBELE9BQU8sU0FBUyxDQUFDO0FBQ25CLENBQUMsQ0FBQSxDQUFDO0FBVlcsUUFBQSxpQ0FBaUMscUNBVTVDO0FBRUssTUFBTSxjQUFjLEdBQUcsQ0FDNUIsUUFBZ0IsRUFDaEIsR0FBVyxFQUNYLEVBQUU7SUFDRixPQUFPLFlBQUUsQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRTtRQUNyQyxRQUFRLEVBQUUsT0FBTztLQUNsQixDQUFDLENBQUM7QUFDTCxDQUFDLENBQUEsQ0FBQztBQVBXLFFBQUEsY0FBYyxrQkFPekIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSAnZnMnO1xuXG5pbXBvcnQgSGFuZGxlYmFycyBmcm9tICdoYW5kbGViYXJzJztcblxuaW1wb3J0IHsgT3BlbkFwaVR5cGUgfSBmcm9tICcuLi9tb2RlbHMnO1xuXG5leHBvcnQgY29uc3Qgb3BlbkFwaVR5cGVUb1RTVHlwZSA9ICh0eXBlOiBPcGVuQXBpVHlwZSk6IHN0cmluZyA9PiB7XG4gIHJldHVybiB7XG4gICAgW09wZW5BcGlUeXBlLkFycmF5XTogJ2FycmF5JyxcbiAgICBbT3BlbkFwaVR5cGUuSW50ZWdlcl06ICdudW1iZXInLFxuICAgIFtPcGVuQXBpVHlwZS5OdW1iZXJdOiAnbnVtYmVyJyxcbiAgICBbT3BlbkFwaVR5cGUuT2JqZWN0XTogJ29iamVjdCcsXG4gICAgW09wZW5BcGlUeXBlLlN0cmluZ106ICdzdHJpbmcnLFxuICAgIFtPcGVuQXBpVHlwZS5ib29sZWFuXTogJ2Jvb2xlYW4nXG4gIH1bdHlwZV07XG59XG5cbmV4cG9ydCBjb25zdCBjb21waWxlSGFuZGxlYmFyc1RlbXBsYXRlRnJvbUZpbGUgPSBhc3luYyAoXG4gIGZpbGVQYXRoOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBDb21waWxlT3B0aW9ucyxcbikgPT4ge1xuICBjb25zdCBmaWxlID0gYXdhaXQgZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoLCB7XG4gICAgZW5jb2Rpbmc6ICd1dGYtOCdcbiAgfSk7XG4gIGNvbnN0IGdlbmVyYXRvciA9IEhhbmRsZWJhcnMuY29tcGlsZShmaWxlLCBvcHRpb25zKTtcblxuICByZXR1cm4gZ2VuZXJhdG9yO1xufTtcblxuZXhwb3J0IGNvbnN0IHdyaXRlTGliVG9EaXNrID0gYXN5bmMgKFxuICBmaWxlUGF0aDogc3RyaW5nLFxuICBsaWI6IHN0cmluZ1xuKSA9PiB7XG4gIHJldHVybiBmcy53cml0ZUZpbGVTeW5jKGZpbGVQYXRoLCBsaWIsIHtcbiAgICBlbmNvZGluZzogJ3V0Zi04J1xuICB9KTtcbn07XG5cbiJdfQ==