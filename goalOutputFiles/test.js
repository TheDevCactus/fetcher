"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @description This is a sample Pet Store Server based on the OpenAPI 3.0 specification.  You can find out more about Swagger at [http://swagger.io](http://swagger.io). In the third iteration of the pet store, we&#x27;ve switched to the design first approach! You can now help us improve the API whether it&#x27;s by making changes to the definition itself or to the code. That way, with time, we can improve the API in general, and expose some of the new features in OAS3. Some useful links: - [The Pet Store repository](https://github.com/swagger-api/swagger-petstore)- [The source API definition for the Pet Store](https://github.com/swagger-api/swagger-petstore/blob/master/src/main/resources/openapi.yaml)
 */
const SwaggerPetstore = {
    baseUrl: 'https://petstore3.swagger.io/api/v3',
    pet: {
        put: {
            test
        },
        post: {
            test
        },
        findByStatus: {
            get: {
                test
            },
        },
        findByTags: {
            get: {
                test
            },
        },
        byPetId: {
            get: {
                test
            },
            post: {
                test
            },
            delete: {
                test
            },
            uploadImage: {
                post: {
                    test
                },
            },
        },
    },
    store: {
        inventory: {
            get: {
                test
            },
        },
        order: {
            post: {
                test
            },
            byOrderId: {
                get: {
                    test
                },
                delete: {
                    test
                },
            },
        },
    },
    user: {
        post: {
            test
        },
        createWithList: {
            post: {
                test
            },
        },
        login: {
            get: {
                test
            },
        },
        logout: {
            get: {
                test
            },
        },
        byUsername: {
            get: {
                test
            },
            put: {
                test
            },
            delete: {
                test
            },
        },
    },
};
exports.default = SwaggerPetstore;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7R0FFRztBQUNILE1BQU0sZUFBZSxHQUFHO0lBQ3RCLE9BQU8sRUFBRSxxQ0FBcUM7SUFDNUMsR0FBRyxFQUFFO1FBQ0gsR0FBRyxFQUFFO1lBQ1AsSUFBSTtTQUNMO1FBQ0QsSUFBSSxFQUFFO1lBQ0osSUFBSTtTQUNMO1FBQ0QsWUFBWSxFQUFFO1lBQ1YsR0FBRyxFQUFFO2dCQUNQLElBQUk7YUFDTDtTQUVBO1FBQ0QsVUFBVSxFQUFFO1lBQ1IsR0FBRyxFQUFFO2dCQUNQLElBQUk7YUFDTDtTQUVBO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsR0FBRyxFQUFFO2dCQUNQLElBQUk7YUFDTDtZQUNELElBQUksRUFBRTtnQkFDSixJQUFJO2FBQ0w7WUFDRCxNQUFNLEVBQUU7Z0JBQ04sSUFBSTthQUNMO1lBQ0QsV0FBVyxFQUFFO2dCQUNULElBQUksRUFBRTtvQkFDUixJQUFJO2lCQUNMO2FBRUE7U0FFQTtLQUVBO0lBQ0QsS0FBSyxFQUFFO1FBQ0gsU0FBUyxFQUFFO1lBQ1gsR0FBRyxFQUFFO2dCQUNQLElBQUk7YUFDTDtTQUVBO1FBQ0QsS0FBSyxFQUFFO1lBQ0gsSUFBSSxFQUFFO2dCQUNSLElBQUk7YUFDTDtZQUNELFNBQVMsRUFBRTtnQkFDUCxHQUFHLEVBQUU7b0JBQ1AsSUFBSTtpQkFDTDtnQkFDRCxNQUFNLEVBQUU7b0JBQ04sSUFBSTtpQkFDTDthQUVBO1NBRUE7S0FFQTtJQUNELElBQUksRUFBRTtRQUNGLElBQUksRUFBRTtZQUNSLElBQUk7U0FDTDtRQUNELGNBQWMsRUFBRTtZQUNaLElBQUksRUFBRTtnQkFDUixJQUFJO2FBQ0w7U0FFQTtRQUNELEtBQUssRUFBRTtZQUNILEdBQUcsRUFBRTtnQkFDUCxJQUFJO2FBQ0w7U0FFQTtRQUNELE1BQU0sRUFBRTtZQUNKLEdBQUcsRUFBRTtnQkFDUCxJQUFJO2FBQ0w7U0FFQTtRQUNELFVBQVUsRUFBRTtZQUNSLEdBQUcsRUFBRTtnQkFDUCxJQUFJO2FBQ0w7WUFDRCxHQUFHLEVBQUU7Z0JBQ0gsSUFBSTthQUNMO1lBQ0QsTUFBTSxFQUFFO2dCQUNOLElBQUk7YUFDTDtTQUVBO0tBRUE7Q0FFRixDQUFBO0FBRUQsa0JBQWUsZUFBZSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAZGVzY3JpcHRpb24gVGhpcyBpcyBhIHNhbXBsZSBQZXQgU3RvcmUgU2VydmVyIGJhc2VkIG9uIHRoZSBPcGVuQVBJIDMuMCBzcGVjaWZpY2F0aW9uLiAgWW91IGNhbiBmaW5kIG91dCBtb3JlIGFib3V0IFN3YWdnZXIgYXQgW2h0dHA6Ly9zd2FnZ2VyLmlvXShodHRwOi8vc3dhZ2dlci5pbykuIEluIHRoZSB0aGlyZCBpdGVyYXRpb24gb2YgdGhlIHBldCBzdG9yZSwgd2UmI3gyNzt2ZSBzd2l0Y2hlZCB0byB0aGUgZGVzaWduIGZpcnN0IGFwcHJvYWNoISBZb3UgY2FuIG5vdyBoZWxwIHVzIGltcHJvdmUgdGhlIEFQSSB3aGV0aGVyIGl0JiN4Mjc7cyBieSBtYWtpbmcgY2hhbmdlcyB0byB0aGUgZGVmaW5pdGlvbiBpdHNlbGYgb3IgdG8gdGhlIGNvZGUuIFRoYXQgd2F5LCB3aXRoIHRpbWUsIHdlIGNhbiBpbXByb3ZlIHRoZSBBUEkgaW4gZ2VuZXJhbCwgYW5kIGV4cG9zZSBzb21lIG9mIHRoZSBuZXcgZmVhdHVyZXMgaW4gT0FTMy4gU29tZSB1c2VmdWwgbGlua3M6IC0gW1RoZSBQZXQgU3RvcmUgcmVwb3NpdG9yeV0oaHR0cHM6Ly9naXRodWIuY29tL3N3YWdnZXItYXBpL3N3YWdnZXItcGV0c3RvcmUpLSBbVGhlIHNvdXJjZSBBUEkgZGVmaW5pdGlvbiBmb3IgdGhlIFBldCBTdG9yZV0oaHR0cHM6Ly9naXRodWIuY29tL3N3YWdnZXItYXBpL3N3YWdnZXItcGV0c3RvcmUvYmxvYi9tYXN0ZXIvc3JjL21haW4vcmVzb3VyY2VzL29wZW5hcGkueWFtbClcbiAqL1xuY29uc3QgU3dhZ2dlclBldHN0b3JlID0ge1xuICBiYXNlVXJsOiAnaHR0cHM6Ly9wZXRzdG9yZTMuc3dhZ2dlci5pby9hcGkvdjMnLFxuICAgIHBldDoge1xuICAgICAgcHV0OiB7XG4gICAgdGVzdFxuICB9LFxuICBwb3N0OiB7XG4gICAgdGVzdFxuICB9LFxuICBmaW5kQnlTdGF0dXM6IHtcbiAgICAgIGdldDoge1xuICAgIHRlc3RcbiAgfSxcblxuICB9LFxuICBmaW5kQnlUYWdzOiB7XG4gICAgICBnZXQ6IHtcbiAgICB0ZXN0XG4gIH0sXG5cbiAgfSxcbiAgYnlQZXRJZDoge1xuICAgICAgZ2V0OiB7XG4gICAgdGVzdFxuICB9LFxuICBwb3N0OiB7XG4gICAgdGVzdFxuICB9LFxuICBkZWxldGU6IHtcbiAgICB0ZXN0XG4gIH0sXG4gIHVwbG9hZEltYWdlOiB7XG4gICAgICBwb3N0OiB7XG4gICAgdGVzdFxuICB9LFxuXG4gIH0sXG5cbiAgfSxcblxuICB9LFxuICBzdG9yZToge1xuICAgICAgaW52ZW50b3J5OiB7XG4gICAgICBnZXQ6IHtcbiAgICB0ZXN0XG4gIH0sXG5cbiAgfSxcbiAgb3JkZXI6IHtcbiAgICAgIHBvc3Q6IHtcbiAgICB0ZXN0XG4gIH0sXG4gIGJ5T3JkZXJJZDoge1xuICAgICAgZ2V0OiB7XG4gICAgdGVzdFxuICB9LFxuICBkZWxldGU6IHtcbiAgICB0ZXN0XG4gIH0sXG5cbiAgfSxcblxuICB9LFxuXG4gIH0sXG4gIHVzZXI6IHtcbiAgICAgIHBvc3Q6IHtcbiAgICB0ZXN0XG4gIH0sXG4gIGNyZWF0ZVdpdGhMaXN0OiB7XG4gICAgICBwb3N0OiB7XG4gICAgdGVzdFxuICB9LFxuXG4gIH0sXG4gIGxvZ2luOiB7XG4gICAgICBnZXQ6IHtcbiAgICB0ZXN0XG4gIH0sXG5cbiAgfSxcbiAgbG9nb3V0OiB7XG4gICAgICBnZXQ6IHtcbiAgICB0ZXN0XG4gIH0sXG5cbiAgfSxcbiAgYnlVc2VybmFtZToge1xuICAgICAgZ2V0OiB7XG4gICAgdGVzdFxuICB9LFxuICBwdXQ6IHtcbiAgICB0ZXN0XG4gIH0sXG4gIGRlbGV0ZToge1xuICAgIHRlc3RcbiAgfSxcblxuICB9LFxuXG4gIH0sXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3dhZ2dlclBldHN0b3JlIl19