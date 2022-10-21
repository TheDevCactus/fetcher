"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.openApiTypeToTSType = exports.isBaseOpenApiType = void 0;
const models_1 = require("../models");
const isBaseOpenApiType = (type) => {
    return [
        models_1.OpenApiType.Boolean,
        models_1.OpenApiType.Integer,
        models_1.OpenApiType.Number,
        models_1.OpenApiType.String,
    ].includes(type);
};
exports.isBaseOpenApiType = isBaseOpenApiType;
const openApiTypeToTSType = (type) => {
    return {
        [models_1.OpenApiType.Array]: 'array',
        [models_1.OpenApiType.Integer]: 'number',
        [models_1.OpenApiType.Number]: 'number',
        [models_1.OpenApiType.String]: 'string',
        [models_1.OpenApiType.Object]: 'object',
        [models_1.OpenApiType.Boolean]: 'boolean'
    }[type];
};
exports.openApiTypeToTSType = openApiTypeToTSType;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbHMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQXdDO0FBRWpDLE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxJQUFpQixFQUFFLEVBQUU7SUFDckQsT0FBTztRQUNMLG9CQUFXLENBQUMsT0FBTztRQUNuQixvQkFBVyxDQUFDLE9BQU87UUFDbkIsb0JBQVcsQ0FBQyxNQUFNO1FBQ2xCLG9CQUFXLENBQUMsTUFBTTtLQUNuQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNuQixDQUFDLENBQUE7QUFQWSxRQUFBLGlCQUFpQixxQkFPN0I7QUFFTSxNQUFNLG1CQUFtQixHQUFHLENBQUMsSUFBaUIsRUFBRSxFQUFFO0lBRXZELE9BQU87UUFDTCxDQUFDLG9CQUFXLENBQUMsS0FBSyxDQUFDLEVBQUUsT0FBTztRQUM1QixDQUFDLG9CQUFXLENBQUMsT0FBTyxDQUFDLEVBQUUsUUFBUTtRQUMvQixDQUFDLG9CQUFXLENBQUMsTUFBTSxDQUFDLEVBQUUsUUFBUTtRQUM5QixDQUFDLG9CQUFXLENBQUMsTUFBTSxDQUFDLEVBQUUsUUFBUTtRQUM5QixDQUFDLG9CQUFXLENBQUMsTUFBTSxDQUFDLEVBQUUsUUFBUTtRQUM5QixDQUFDLG9CQUFXLENBQUMsT0FBTyxDQUFDLEVBQUUsU0FBUztLQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ1YsQ0FBQyxDQUFDO0FBVlcsUUFBQSxtQkFBbUIsdUJBVTlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3BlbkFwaVR5cGUgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XG5cbmV4cG9ydCBjb25zdCBpc0Jhc2VPcGVuQXBpVHlwZSA9ICh0eXBlOiBPcGVuQXBpVHlwZSkgPT4ge1xuICByZXR1cm4gW1xuICAgIE9wZW5BcGlUeXBlLkJvb2xlYW4sXG4gICAgT3BlbkFwaVR5cGUuSW50ZWdlcixcbiAgICBPcGVuQXBpVHlwZS5OdW1iZXIsXG4gICAgT3BlbkFwaVR5cGUuU3RyaW5nLFxuICBdLmluY2x1ZGVzKHR5cGUpO1xufVxuXG5leHBvcnQgY29uc3Qgb3BlbkFwaVR5cGVUb1RTVHlwZSA9ICh0eXBlOiBPcGVuQXBpVHlwZSkgPT4ge1xuXG4gIHJldHVybiB7XG4gICAgW09wZW5BcGlUeXBlLkFycmF5XTogJ2FycmF5JyxcbiAgICBbT3BlbkFwaVR5cGUuSW50ZWdlcl06ICdudW1iZXInLFxuICAgIFtPcGVuQXBpVHlwZS5OdW1iZXJdOiAnbnVtYmVyJyxcbiAgICBbT3BlbkFwaVR5cGUuU3RyaW5nXTogJ3N0cmluZycsXG4gICAgW09wZW5BcGlUeXBlLk9iamVjdF06ICdvYmplY3QnLFxuICAgIFtPcGVuQXBpVHlwZS5Cb29sZWFuXTogJ2Jvb2xlYW4nXG4gIH1bdHlwZV07XG59OyJdfQ==