# Fetcher

<img title="what a good boy" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fa%2Fa9%2FBearded_Collie.jpg&f=1&nofb=1&ipt=2a0d91e9f1a93764c1d7093fde17eeaa7cd9653df89b5e0b4d35e9f9ae7d3982&ipo=images" height="250px"></img>

## Chassis Service Client Lib Generator

### About

This program is meant to generate client code which handles making network calls to our boom services. Writing, and maintaining network calls is a pain. Wether its the backend puts out a new api you need to utilize, or they update a response object, you now have to basically copy their work into your client codebase. There is little thought that goes into these functions most of the time. Most of the time you will look at the endpoint, request schema, and response schema, and implement a basic function wrapping it all up for use across your client. Why not just generate those functions?

### Deployed Diagram

Below is a diagram of how you could deploy this application to automatically generate new Client Lib's whenever a backend service is deployed. This application is the "Boom Client Lib Generator"

![Random scribbles of a mad man](./.vscode/typesafe-client-lib-generation.png)

### Why

- Writing network calls sucks
- Writing typed network calls sucks even more
- The backend already wrote all the types and such, lets just use it.
- Fullstack Typesaftey lets us move quickly.
- Fullstack Typesaftey lets us catch bugs before they happen.

### Tech Used

- Handlebars - For templating

### Development

#### Scripts

- `yarn build` - Build the application
- `yarn dev` - Runs the cli, generating an api lib
- `yarn test` - Run tests
- `yarn clean` - Clean the project

#### Tips

- `todo.md` in the root dir is git ignored if you need a scratch pad

## Open API Spec

https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.0.md

## Notes

We should only type types once if they are provided in the "components" section of the schema.
This way we can also provide more semantic names (assuming the schemas names for components are semantic).

Cleanup buildPaths function

Do the network calls ourself?
Or does the dev pass in something like axios which we can utilize. This would be more dynamic but might be really dumb
Something like how react query now is Tanstack query and has "adapters" for different frameworks. We could provide a default adapter for fetch, then developers can B.Y.O.A (bring your own adapter) if you wanna have more control over your network calls, or use something like axios, etc.

If we could extend the OpenAPI 3.0.0 schema to include things like "invalidates" and "cacheSettings" on operations, we could easily also generate Tanstack Query hooks for all of our network calls as well. Which would be insaneeeeeeeeeeeee. Literally all you would write is UI

Does the backend have tests for their endpoints? If so we could easily test our generated api's by matching their responses.

## Example output

```ts
/*
 *       ___
 *    __/_  `.  .-"""-.
 *    \_,` | \-'  /   )`-')
 *      "") `"`    \  ((`"`
 *     ___Y  ,    .'7 /|
 *    (_,___/...-` (_/_/      FETCHER
 *
 *  Yo this file is auto generated, no touchy.
 */

/* eslint-disable max-lines */
/* eslint-disable sort-keys */

type HTTPMethod = 'get' | 'post' | 'put' | 'patch' | 'update' | 'delete';

type ServiceCallResponse<Response> = {
  data: Response;
  statusCode: number;
};

type ServiceCallAdapter = <Response>(
  url: string,
  method: HTTPMethod,
  body: unknown,
) => Promise<ServiceCallResponse<Response>>;

let adapter: ServiceCallAdapter | null = null;

export const initializeFetcher = (newAdapter: ServiceCallAdapter) => {
  adapter = newAdapter;
};

const generateServiceCall = <
  Request extends {
    body?: Record<string, any>;
    query?: Record<string, any>;
    params?: Record<string, any>;
  } | null,
  Response,
>(
  url: string,
  method: HTTPMethod,
  knownStatusCodes: Array<number>,
) => {
  return async (request: Request) => {
    let finalURL = url;

    if (request?.query) {
      finalURL += `?${Object.entries(request.query)
        .map(([key, value]) => `${key}=${value}`)
        .join('&')}`;
    }

    if (request?.params) {
      Object.entries(request.params).forEach(([key, value]) => {
        finalURL = finalURL.replaceAll(`{${key}}`, value);
      });
    }

    if (!adapter) {
      throw new Error(
        'Please initialize fetcher before attempting to make any network calls',
      );
    }

    const response = await adapter<Response>(finalURL, method, request?.body);

    if (!knownStatusCodes.includes(response.statusCode)) {
      throw new Error('Unexpected error occurred');
    }

    return {
      data: response.data,
      status: response.statusCode,
    };
  };
};

/**
 * @description This is a sample Pet Store Server based on the OpenAPI 3.0 specification.  You can find out more about Swagger at [http://swagger.io](http://swagger.io). In the third iteration of the pet store, we've switched to the design first approach! You can now help us improve the API whether it's by making changes to the definition itself or to the code. That way, with time, we can improve the API in general, and expose some of the new features in OAS3. Some useful links: - [The Pet Store repository](https://github.com/swagger-api/swagger-petstore)- [The source API definition for the Pet Store](https://github.com/swagger-api/swagger-petstore/blob/master/src/main/resources/openapi.yaml)
 */
const Petstore = {
  pet: {
    put: generateServiceCall<
      {
        body: {
          id?: number;
          name: string;
          category?: { id?: number; name?: string };
          photoUrls: Array<string>;
          tags?: Array<{ id?: number; name?: string }>;
          status?: 'available' | 'pending' | 'sold';
        };
      },
      {
        id?: number;
        name: string;
        category?: { id?: number; name?: string };
        photoUrls: Array<string>;
        tags?: Array<{ id?: number; name?: string }>;
        status?: 'available' | 'pending' | 'sold';
      } | null
    >('https://petstore3.swagger.io/api/v3/pet', 'put', [200, 400, 404, 405]),
    post: generateServiceCall<
      {
        body: {
          id?: number;
          name: string;
          category?: { id?: number; name?: string };
          photoUrls: Array<string>;
          tags?: Array<{ id?: number; name?: string }>;
          status?: 'available' | 'pending' | 'sold';
        };
      },
      {
        id?: number;
        name: string;
        category?: { id?: number; name?: string };
        photoUrls: Array<string>;
        tags?: Array<{ id?: number; name?: string }>;
        status?: 'available' | 'pending' | 'sold';
      } | null
    >('https://petstore3.swagger.io/api/v3/pet', 'post', [200, 405]),
    findByStatus: {
      get: generateServiceCall<
        {
          query: {
            status?: 'available' | 'pending' | 'sold';
          };
        },
        Array<{
          id?: number;
          name: string;
          category?: { id?: number; name?: string };
          photoUrls: Array<string>;
          tags?: Array<{ id?: number; name?: string }>;
          status?: 'available' | 'pending' | 'sold';
        }> | null
      >(
        'https://petstore3.swagger.io/api/v3/pet/findByStatus',
        'get',
        [200, 400],
      ),
    },
    findByTags: {
      get: generateServiceCall<
        {
          query: {
            tags?: Array<string>;
          };
        },
        Array<{
          id?: number;
          name: string;
          category?: { id?: number; name?: string };
          photoUrls: Array<string>;
          tags?: Array<{ id?: number; name?: string }>;
          status?: 'available' | 'pending' | 'sold';
        }> | null
      >(
        'https://petstore3.swagger.io/api/v3/pet/findByTags',
        'get',
        [200, 400],
      ),
    },
    byPetId: {
      get: generateServiceCall<
        {
          params: {
            petId?: number;
          };
        },
        {
          id?: number;
          name: string;
          category?: { id?: number; name?: string };
          photoUrls: Array<string>;
          tags?: Array<{ id?: number; name?: string }>;
          status?: 'available' | 'pending' | 'sold';
        } | null
      >(
        'https://petstore3.swagger.io/api/v3/pet/{petId}',
        'get',
        [200, 400, 404],
      ),
      post: generateServiceCall<
        {
          query: {
            name?: string;
            status?: string;
          };
          params: {
            petId?: number;
          };
        },
        null
      >('https://petstore3.swagger.io/api/v3/pet/{petId}', 'post', [405]),
      delete: generateServiceCall<
        {
          params: {
            petId?: number;
          };
        },
        null
      >('https://petstore3.swagger.io/api/v3/pet/{petId}', 'delete', [400]),
      uploadImage: {
        post: generateServiceCall<
          {
            query: {
              additionalMetadata?: string;
            };
            params: {
              petId?: number;
            };
          },
          { code?: number; type?: string; message?: string }
        >(
          'https://petstore3.swagger.io/api/v3/pet/{petId}/uploadImage',
          'post',
          [200],
        ),
      },
    },
  },
  store: {
    inventory: {
      get: generateServiceCall<null, {}>(
        'https://petstore3.swagger.io/api/v3/store/inventory',
        'get',
        [200],
      ),
    },
    order: {
      post: generateServiceCall<
        {
          body: {
            id?: number;
            petId?: number;
            quantity?: number;
            shipDate?: string;
            status?: 'placed' | 'approved' | 'delivered';
            complete?: boolean;
          };
        },
        {
          id?: number;
          petId?: number;
          quantity?: number;
          shipDate?: string;
          status?: 'placed' | 'approved' | 'delivered';
          complete?: boolean;
        } | null
      >('https://petstore3.swagger.io/api/v3/store/order', 'post', [200, 405]),
      byOrderId: {
        get: generateServiceCall<
          {
            params: {
              orderId?: number;
            };
          },
          {
            id?: number;
            petId?: number;
            quantity?: number;
            shipDate?: string;
            status?: 'placed' | 'approved' | 'delivered';
            complete?: boolean;
          } | null
        >(
          'https://petstore3.swagger.io/api/v3/store/order/{orderId}',
          'get',
          [200, 400, 404],
        ),
        delete: generateServiceCall<
          {
            params: {
              orderId?: number;
            };
          },
          null
        >(
          'https://petstore3.swagger.io/api/v3/store/order/{orderId}',
          'delete',
          [400, 404],
        ),
      },
    },
  },
  user: {
    post: generateServiceCall<
      {
        body: {
          id?: number;
          username?: string;
          firstName?: string;
          lastName?: string;
          email?: string;
          password?: string;
          phone?: string;
          userStatus?: number;
        };
      },
      {
        id?: number;
        username?: string;
        firstName?: string;
        lastName?: string;
        email?: string;
        password?: string;
        phone?: string;
        userStatus?: number;
      }
    >('https://petstore3.swagger.io/api/v3/user', 'post', [200]),
    createWithList: {
      post: generateServiceCall<
        {
          body: Array<{
            id?: number;
            username?: string;
            firstName?: string;
            lastName?: string;
            email?: string;
            password?: string;
            phone?: string;
            userStatus?: number;
          }>;
        },
        {
          id?: number;
          username?: string;
          firstName?: string;
          lastName?: string;
          email?: string;
          password?: string;
          phone?: string;
          userStatus?: number;
        } | null
      >('https://petstore3.swagger.io/api/v3/user/createWithList', 'post', [
        200,
      ]),
    },
    login: {
      get: generateServiceCall<
        {
          query: {
            username?: string;
            password?: string;
          };
        },
        string | null
      >('https://petstore3.swagger.io/api/v3/user/login', 'get', [200, 400]),
    },
    logout: {
      get: generateServiceCall<null, null>(
        'https://petstore3.swagger.io/api/v3/user/logout',
        'get',
        [200],
      ),
    },
    byUsername: {
      get: generateServiceCall<
        {
          params: {
            username?: string;
          };
        },
        {
          id?: number;
          username?: string;
          firstName?: string;
          lastName?: string;
          email?: string;
          password?: string;
          phone?: string;
          userStatus?: number;
        } | null
      >(
        'https://petstore3.swagger.io/api/v3/user/{username}',
        'get',
        [200, 400, 404],
      ),
      put: generateServiceCall<
        {
          params: {
            username?: string;
          };
          body: {
            id?: number;
            username?: string;
            firstName?: string;
            lastName?: string;
            email?: string;
            password?: string;
            phone?: string;
            userStatus?: number;
          };
        },
        null
      >('https://petstore3.swagger.io/api/v3/user/{username}', 'put', [200]),
      delete: generateServiceCall<
        {
          params: {
            username?: string;
          };
        },
        null
      >(
        'https://petstore3.swagger.io/api/v3/user/{username}',
        'delete',
        [400, 404],
      ),
    },
  },
};

export default Petstore;
```
