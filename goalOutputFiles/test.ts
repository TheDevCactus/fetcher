/**
 * @description This is a sample Pet Store Server based on the OpenAPI 3.0 specification.  You can find out more about Swagger at [http://swagger.io](http://swagger.io). In the third iteration of the pet store, we&#x27;ve switched to the design first approach! You can now help us improve the API whether it&#x27;s by making changes to the definition itself or to the code. That way, with time, we can improve the API in general, and expose some of the new features in OAS3. Some useful links: - [The Pet Store repository](https://github.com/swagger-api/swagger-petstore)- [The source API definition for the Pet Store](https://github.com/swagger-api/swagger-petstore/blob/master/src/main/resources/openapi.yaml)
 */
const SwaggerPetstore = {
  baseUrl: 'https://petstore3.swagger.io/api/v3',
  pet: {
    put: {
      // putNetworkCallHere!
    },
    post: {
      // putNetworkCallHere!
    },
    findByStatus: {
      get: {
        // putNetworkCallHere!
      },
    },
    findByTags: {
      get: {
        // putNetworkCallHere!
      },
    },
    byPetId: {
      get: {
        // putNetworkCallHere!
      },
      post: {
        // putNetworkCallHere!
      },
      delete: {
        // putNetworkCallHere!
      },
      uploadImage: {
        post: {
          // putNetworkCallHere!
        },
      },
    },
  },
  store: {
    inventory: {
      get: {
        // putNetworkCallHere!
      },
    },
    order: {
      post: {
        // putNetworkCallHere!
      },
      byOrderId: {
        get: {
          // putNetworkCallHere!
        },
        delete: {
          // putNetworkCallHere!
        },
      },
    },
  },
  user: {
    post: {
      // putNetworkCallHere!
    },
    createWithList: {
      post: {
        // putNetworkCallHere!
      },
    },
    login: {
      get: {
        // putNetworkCallHere!
      },
    },
    logout: {
      get: {
        // putNetworkCallHere!
      },
    },
    byUsername: {
      get: {
        // putNetworkCallHere!
      },
      put: {
        // putNetworkCallHere!
      },
      delete: {
        // putNetworkCallHere!
      },
    },
  },
};

export default SwaggerPetstore;
