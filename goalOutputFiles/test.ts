/*
 *    ___
 * __/_  `.  .-"""-.
 * \_,` | \-'  /   )`-')
 *  "") `"`    \  ((`"`
 *  ___Y  ,    .'7 /|
 * (_,___/...-` (_/_/      FETCHER
 *
 *
 *  Yo this file is auto generated, no touchy.
 *
 */

/* eslint-disable max-lines */
/* eslint-disable sort-keys */

type HTTPMethod = 'get' | 'post' | 'put' | 'patch' | 'update' | 'delete';

const generateServiceCall = <Request, Response>(
  url: string,
  method: HTTPMethod,
) => {
  return async (request: Request, fetchOptions: any = {}) => {
    const response = await fetch(url, {
      body: JSON.stringify(request),
      method: method.toUpperCase(),
      ...fetchOptions,
    });
    const result = await response.json();
    return result as Response;
  };
};

/**
 * @description This is a sample Pet Store Server based on the OpenAPI 3.0 specification.  You can find out more about Swagger at [http://swagger.io](http://swagger.io). In the third iteration of the pet store, we've switched to the design first approach! You can now help us improve the API whether it's by making changes to the definition itself or to the code. That way, with time, we can improve the API in general, and expose some of the new features in OAS3. Some useful links: - [The Pet Store repository](https://github.com/swagger-api/swagger-petstore)- [The source API definition for the Pet Store](https://github.com/swagger-api/swagger-petstore/blob/master/src/main/resources/openapi.yaml)
 */
const SwaggerPetstore = {
  baseUrl: 'https://petstore3.swagger.io/api/v3',
  pet: {
    put: generateServiceCall<null, any>(
      'https://petstore3.swagger.io/api/v3/pet',
      'put',
    ),
    post: generateServiceCall<null, any>(
      'https://petstore3.swagger.io/api/v3/pet',
      'post',
    ),
    findByStatus: {
      get: generateServiceCall<
        {
          query: {
            status: string;
          };
        },
        any
      >('https://petstore3.swagger.io/api/v3/pet/findByStatus', 'get'),
    },
    findByTags: {
      get: generateServiceCall<
        {
          query: {
            tags: array;
          };
        },
        any
      >('https://petstore3.swagger.io/api/v3/pet/findByTags', 'get'),
    },
    byPetId: {
      get: generateServiceCall<
        {
          params: {
            petId: number;
          };
        },
        any
      >('https://petstore3.swagger.io/api/v3/pet/{petId}', 'get'),
      post: generateServiceCall<
        {
          query: {
            name: string;
            status: string;
          };
          params: {
            petId: number;
          };
        },
        any
      >('https://petstore3.swagger.io/api/v3/pet/{petId}', 'post'),
      delete: generateServiceCall<
        {
          params: {
            petId: number;
          };
        },
        any
      >('https://petstore3.swagger.io/api/v3/pet/{petId}', 'delete'),
      uploadImage: {
        post: generateServiceCall<
          {
            query: {
              additionalMetadata: string;
            };
            params: {
              petId: number;
            };
          },
          any
        >(
          'https://petstore3.swagger.io/api/v3/pet/{petId}/uploadImage',
          'post',
        ),
      },
    },
  },
  store: {
    inventory: {
      get: generateServiceCall<null, any>(
        'https://petstore3.swagger.io/api/v3/store/inventory',
        'get',
      ),
    },
    order: {
      post: generateServiceCall<null, any>(
        'https://petstore3.swagger.io/api/v3/store/order',
        'post',
      ),
      byOrderId: {
        get: generateServiceCall<
          {
            params: {
              orderId: number;
            };
          },
          any
        >('https://petstore3.swagger.io/api/v3/store/order/{orderId}', 'get'),
        delete: generateServiceCall<
          {
            params: {
              orderId: number;
            };
          },
          any
        >(
          'https://petstore3.swagger.io/api/v3/store/order/{orderId}',
          'delete',
        ),
      },
    },
  },
  user: {
    post: generateServiceCall<null, any>(
      'https://petstore3.swagger.io/api/v3/user',
      'post',
    ),
    createWithList: {
      post: generateServiceCall<null, any>(
        'https://petstore3.swagger.io/api/v3/user/createWithList',
        'post',
      ),
    },
    login: {
      get: generateServiceCall<
        {
          query: {
            username: string;
            password: string;
          };
        },
        any
      >('https://petstore3.swagger.io/api/v3/user/login', 'get'),
    },
    logout: {
      get: generateServiceCall<null, any>(
        'https://petstore3.swagger.io/api/v3/user/logout',
        'get',
      ),
    },
    byUsername: {
      get: generateServiceCall<
        {
          params: {
            username: string;
          };
        },
        any
      >('https://petstore3.swagger.io/api/v3/user/{username}', 'get'),
      put: generateServiceCall<
        {
          params: {
            username: string;
          };
        },
        any
      >('https://petstore3.swagger.io/api/v3/user/{username}', 'put'),
      delete: generateServiceCall<
        {
          params: {
            username: string;
          };
        },
        any
      >('https://petstore3.swagger.io/api/v3/user/{username}', 'delete'),
    },
  },
};

export default SwaggerPetstore;
