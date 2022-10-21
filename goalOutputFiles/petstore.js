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
Object.defineProperty(exports, "__esModule", { value: true });
;
;
;
;
;
;
;
/**
 * @description This is a sample Pet Store Server based on the OpenAPI 3.0 specification.  You can find out more about\nSwagger at [http://swagger.io](http://swagger.io). In the third iteration of the pet store, we've switched to the design first approach!\nYou can now help us improve the API whether it's by making changes to the definition itself or to the code.\nThat way, with time, we can improve the API in general, and expose some of the new features in OAS3.\n\nSome useful links:\n- [The Pet Store repository](https://github.com/swagger-api/swagger-petstore)\n- [The source API definition for the Pet Store](https://github.com/swagger-api/swagger-petstore/blob/master/src/main/resources/openapi.yaml)
 * @version 1.0.17
 */
const SwaggerPetstore = {
    _baseURL: "https://petstore3.swagger.io/api/v3",
    pet: {
        put: () => __awaiter(void 0, void 0, void 0, function* () {
        }),
        post: () => __awaiter(void 0, void 0, void 0, function* () {
        }),
        findByStatus: {
            get: () => __awaiter(void 0, void 0, void 0, function* () {
            })
        },
        findByTags: {
            get: () => __awaiter(void 0, void 0, void 0, function* () {
            })
        },
        byPetId: {
            get: () => __awaiter(void 0, void 0, void 0, function* () {
            }),
            post: () => __awaiter(void 0, void 0, void 0, function* () {
            }),
            delete: () => __awaiter(void 0, void 0, void 0, function* () {
            }),
            uploadImage: {
                post: () => __awaiter(void 0, void 0, void 0, function* () {
                })
            },
        }
    },
    store: {
        inventory: {
            get: () => __awaiter(void 0, void 0, void 0, function* () {
            })
        },
        order: {
            post: () => __awaiter(void 0, void 0, void 0, function* () {
            }),
            byOrderId: {
                get: () => __awaiter(void 0, void 0, void 0, function* () {
                }),
                delete: () => __awaiter(void 0, void 0, void 0, function* () {
                })
            }
        }
    },
    user: {
        post: () => __awaiter(void 0, void 0, void 0, function* () {
        }),
        createWithList: {
            post: () => __awaiter(void 0, void 0, void 0, function* () {
            })
        },
        login: {
            get: () => __awaiter(void 0, void 0, void 0, function* () {
            })
        },
        logout: {
            get: () => __awaiter(void 0, void 0, void 0, function* () {
            })
        },
        byUsername: {
            get: () => __awaiter(void 0, void 0, void 0, function* () {
            }),
            put: () => __awaiter(void 0, void 0, void 0, function* () {
            }),
            delete: () => __awaiter(void 0, void 0, void 0, function* () {
            })
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGV0c3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwZXRzdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFDLENBQUM7QUFPRCxDQUFDO0FBTUQsQ0FBQztBQWdCRCxDQUFDO0FBS0QsQ0FBQztBQVNELENBQUM7QUFNRCxDQUFDO0FBRUY7OztHQUdHO0FBQ0gsTUFBTSxlQUFlLEdBQUc7SUFDdEIsUUFBUSxFQUFFLHFDQUFxQztJQUMvQyxHQUFHLEVBQUU7UUFDSCxHQUFHLEVBQUUsR0FBUyxFQUFFO1FBRWhCLENBQUMsQ0FBQTtRQUNELElBQUksRUFBRSxHQUFTLEVBQUU7UUFFakIsQ0FBQyxDQUFBO1FBQ0QsWUFBWSxFQUFFO1lBQ1osR0FBRyxFQUFFLEdBQVMsRUFBRTtZQUVoQixDQUFDLENBQUE7U0FDRjtRQUNELFVBQVUsRUFBRTtZQUNWLEdBQUcsRUFBRSxHQUFTLEVBQUU7WUFFaEIsQ0FBQyxDQUFBO1NBQ0Y7UUFDRCxPQUFPLEVBQUU7WUFDUCxHQUFHLEVBQUUsR0FBUyxFQUFFO1lBRWhCLENBQUMsQ0FBQTtZQUNELElBQUksRUFBRSxHQUFTLEVBQUU7WUFFakIsQ0FBQyxDQUFBO1lBQ0QsTUFBTSxFQUFFLEdBQVMsRUFBRTtZQUVuQixDQUFDLENBQUE7WUFDRCxXQUFXLEVBQUU7Z0JBQ1gsSUFBSSxFQUFFLEdBQVMsRUFBRTtnQkFFakIsQ0FBQyxDQUFBO2FBQ0Y7U0FDRjtLQUNGO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsU0FBUyxFQUFFO1lBQ1QsR0FBRyxFQUFFLEdBQVMsRUFBRTtZQUVoQixDQUFDLENBQUE7U0FDRjtRQUNELEtBQUssRUFBRTtZQUNMLElBQUksRUFBRSxHQUFTLEVBQUU7WUFFakIsQ0FBQyxDQUFBO1lBQ0QsU0FBUyxFQUFFO2dCQUNULEdBQUcsRUFBRSxHQUFTLEVBQUU7Z0JBRWhCLENBQUMsQ0FBQTtnQkFDRCxNQUFNLEVBQUUsR0FBUyxFQUFFO2dCQUVuQixDQUFDLENBQUE7YUFDRjtTQUNGO0tBQ0Y7SUFDRCxJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUsR0FBUyxFQUFFO1FBRWpCLENBQUMsQ0FBQTtRQUNELGNBQWMsRUFBRTtZQUNkLElBQUksRUFBRSxHQUFTLEVBQUU7WUFFakIsQ0FBQyxDQUFBO1NBQ0Y7UUFDRCxLQUFLLEVBQUU7WUFDTCxHQUFHLEVBQUUsR0FBUyxFQUFFO1lBRWhCLENBQUMsQ0FBQTtTQUNGO1FBQ0QsTUFBTSxFQUFFO1lBQ04sR0FBRyxFQUFFLEdBQVMsRUFBRTtZQUVoQixDQUFDLENBQUE7U0FDRjtRQUNELFVBQVUsRUFBRTtZQUNWLEdBQUcsRUFBRSxHQUFTLEVBQUU7WUFFaEIsQ0FBQyxDQUFBO1lBQ0QsR0FBRyxFQUFFLEdBQVMsRUFBRTtZQUVoQixDQUFDLENBQUE7WUFDRCxNQUFNLEVBQUUsR0FBUyxFQUFFO1lBRW5CLENBQUMsQ0FBQTtTQUNGO0tBQ0Y7Q0FDRixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgaW50ZXJmYWNlIE9yZGVyIHsgLy8gcmVmZXJlbmNlcyBjb21wb25lbnRzLnNjaGVtYXMuT3JkZXJcbiAgaWQ6IG51bWJlcixcbiAgcGV0SWQ6IG51bWJlcixcbiAgcXVhbnRpdHk6IG51bWJlcixcbiAgc2hpcERhdGU6IHN0cmluZyxcbiAgc3RhdHVzOiBcInBsYWNlZFwiIHwgXCJhcHByb3ZlZFwiIHwgXCJkZWxpdmVyZWRcIixcbiAgY29tcGxldGU6IGJvb2xlYW5cbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWRkcmVzcyB7IC8vIHJlZmVyZW5jZXMgY29tcG9uZW50cy5zY2hlbWFzLkFkZHJlc3NcbiAgc3RyZWV0OiBzdHJpbmcsXG4gIGNpdHk6IHN0cmluZyxcbiAgc3RhdGU6IHN0cmluZyxcbiAgemlwOiBzdHJpbmdcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3VzdG9tZXIgeyAvLyByZWZlcmVuY2VzIGNvbXBvbmVudHMuc2NoZW1hcy5DdXN0b21lclxuICBpZDogbnVtYmVyLFxuICB1c2VybmFtZTogc3RyaW5nLFxuICBhZGRyZXNzOiBBcnJheTxBZGRyZXNzPlxufTtcblxuZXhwb3J0IGludGVyZmFjZSBDYXRlZ29yeSB7IC8vIHJlZmVyZW5jZXMgY29tcG9uZW50cy5zY2hlbWFzLkNhdGVnb3J5XG4gIGlkOiBudW1iZXIsXG4gIG5hbWU6IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVzZXIgeyAvLyByZWZlcmVuY2VzIGNvbXBvbmVudHMuc2NoZW1hcy5Vc2VyXG4gIGlkOiBudW1iZXIsXG4gIHVzZXJuYW1lOiBzdHJpbmcsXG4gIGZpcnN0TmFtZTogc3RyaW5nLFxuICBsYXN0TmFtZTogc3RyaW5nLFxuICBlbWFpbDogc3RyaW5nLFxuICBwYXNzd29yZDogc3RyaW5nLFxuICBwaG9uZTogc3RyaW5nLFxuICB1c2VyU3RhdHVzOiBudW1iZXJcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFnIHsgLy8gcmVmZXJlbmNlcyBjb21wb25lbnRzLnNjaGVtYXMuVGFnXG4gIGlkOiBudW1iZXIsXG4gIG5hbWU6IHN0cmluZ1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBQZXQgeyAvLyByZWZlcmVuY2VzIGNvbXBvbmVudHMuc2NoZW1hcy5QZXRcbiAgaWQ6IG51bWJlcixcbiAgbmFtZTogc3RyaW5nLFxuICBjYXRlZ29yeTogQ2F0ZWdvcnksXG4gIHBob3RvVXJsczogQXJyYXk8c3RyaW5nPixcbiAgdGFnczogQXJyYXk8VGFnPixcbiAgc3RhdHVzOiBcImF2YWlsYWJsZVwiIHwgXCJwZW5kaW5nXCIgfCBcInNvbGRcIlxufTtcblxuZXhwb3J0IGludGVyZmFjZSBBcGlSZXNwb25zZSB7IC8vIHJlZmVyZW5jZXMgY29tcG9uZW50cy5zY2hlbWFzLkFwaVJlc3BvbnNlXG4gIGNvZGU6IG51bWJlcixcbiAgdHlwZTogc3RyaW5nLFxuICBtZXNzYWdlOiBzdHJpbmdcbn07XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIFRoaXMgaXMgYSBzYW1wbGUgUGV0IFN0b3JlIFNlcnZlciBiYXNlZCBvbiB0aGUgT3BlbkFQSSAzLjAgc3BlY2lmaWNhdGlvbi4gIFlvdSBjYW4gZmluZCBvdXQgbW9yZSBhYm91dFxcblN3YWdnZXIgYXQgW2h0dHA6Ly9zd2FnZ2VyLmlvXShodHRwOi8vc3dhZ2dlci5pbykuIEluIHRoZSB0aGlyZCBpdGVyYXRpb24gb2YgdGhlIHBldCBzdG9yZSwgd2UndmUgc3dpdGNoZWQgdG8gdGhlIGRlc2lnbiBmaXJzdCBhcHByb2FjaCFcXG5Zb3UgY2FuIG5vdyBoZWxwIHVzIGltcHJvdmUgdGhlIEFQSSB3aGV0aGVyIGl0J3MgYnkgbWFraW5nIGNoYW5nZXMgdG8gdGhlIGRlZmluaXRpb24gaXRzZWxmIG9yIHRvIHRoZSBjb2RlLlxcblRoYXQgd2F5LCB3aXRoIHRpbWUsIHdlIGNhbiBpbXByb3ZlIHRoZSBBUEkgaW4gZ2VuZXJhbCwgYW5kIGV4cG9zZSBzb21lIG9mIHRoZSBuZXcgZmVhdHVyZXMgaW4gT0FTMy5cXG5cXG5Tb21lIHVzZWZ1bCBsaW5rczpcXG4tIFtUaGUgUGV0IFN0b3JlIHJlcG9zaXRvcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9zd2FnZ2VyLWFwaS9zd2FnZ2VyLXBldHN0b3JlKVxcbi0gW1RoZSBzb3VyY2UgQVBJIGRlZmluaXRpb24gZm9yIHRoZSBQZXQgU3RvcmVdKGh0dHBzOi8vZ2l0aHViLmNvbS9zd2FnZ2VyLWFwaS9zd2FnZ2VyLXBldHN0b3JlL2Jsb2IvbWFzdGVyL3NyYy9tYWluL3Jlc291cmNlcy9vcGVuYXBpLnlhbWwpXG4gKiBAdmVyc2lvbiAxLjAuMTdcbiAqL1xuY29uc3QgU3dhZ2dlclBldHN0b3JlID0ge1xuICBfYmFzZVVSTDogXCJodHRwczovL3BldHN0b3JlMy5zd2FnZ2VyLmlvL2FwaS92M1wiLFxuICBwZXQ6IHtcbiAgICBwdXQ6IGFzeW5jICgpID0+IHtcblxuICAgIH0sXG4gICAgcG9zdDogYXN5bmMgKCkgPT4ge1xuXG4gICAgfSxcbiAgICBmaW5kQnlTdGF0dXM6IHtcbiAgICAgIGdldDogYXN5bmMgKCkgPT4ge1xuXG4gICAgICB9XG4gICAgfSxcbiAgICBmaW5kQnlUYWdzOiB7XG4gICAgICBnZXQ6IGFzeW5jICgpID0+IHtcblxuICAgICAgfVxuICAgIH0sXG4gICAgYnlQZXRJZDogeyAvLyB0aGlzIHJlZmVyZW5jZXMgL3BldC97cGV0SWR9XG4gICAgICBnZXQ6IGFzeW5jICgpID0+IHtcblxuICAgICAgfSwgXG4gICAgICBwb3N0OiBhc3luYyAoKSA9PiB7XG5cbiAgICAgIH0sXG4gICAgICBkZWxldGU6IGFzeW5jICgpID0+IHtcblxuICAgICAgfSxcbiAgICAgIHVwbG9hZEltYWdlOiB7XG4gICAgICAgIHBvc3Q6IGFzeW5jICgpID0+IHtcblxuICAgICAgICB9XG4gICAgICB9LFxuICAgIH1cbiAgfSxcbiAgc3RvcmU6IHtcbiAgICBpbnZlbnRvcnk6IHtcbiAgICAgIGdldDogYXN5bmMgKCkgPT4ge1xuXG4gICAgICB9XG4gICAgfSxcbiAgICBvcmRlcjoge1xuICAgICAgcG9zdDogYXN5bmMgKCkgPT4ge1xuXG4gICAgICB9LFxuICAgICAgYnlPcmRlcklkOiB7IC8vIHRoaXMgcmVmZXJlbmNlcyAvc3RvcmUvb3JkZXIve29yZGVySWR9XG4gICAgICAgIGdldDogYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgIH0sXG4gICAgICAgIGRlbGV0ZTogYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHVzZXI6IHtcbiAgICBwb3N0OiBhc3luYyAoKSA9PiB7XG5cbiAgICB9LFxuICAgIGNyZWF0ZVdpdGhMaXN0OiB7XG4gICAgICBwb3N0OiBhc3luYyAoKSA9PiB7XG5cbiAgICAgIH1cbiAgICB9LFxuICAgIGxvZ2luOiB7XG4gICAgICBnZXQ6IGFzeW5jICgpID0+IHtcblxuICAgICAgfVxuICAgIH0sXG4gICAgbG9nb3V0OiB7XG4gICAgICBnZXQ6IGFzeW5jICgpID0+IHtcblxuICAgICAgfVxuICAgIH0sXG4gICAgYnlVc2VybmFtZTogeyAvLyByZWZlcmVuY2VzIC91c2VyL3t1c2VybmFtZX1cbiAgICAgIGdldDogYXN5bmMgKCkgPT4ge1xuXG4gICAgICB9LFxuICAgICAgcHV0OiBhc3luYyAoKSA9PiB7XG5cbiAgICAgIH0sXG4gICAgICBkZWxldGU6IGFzeW5jICgpID0+IHtcblxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19