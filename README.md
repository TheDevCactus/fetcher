# Fetcher
<img title="what a good boy" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fa%2Fa9%2FBearded_Collie.jpg&f=1&nofb=1&ipt=2a0d91e9f1a93764c1d7093fde17eeaa7cd9653df89b5e0b4d35e9f9ae7d3982&ipo=images" height="250px"></img>

## Chassis Service Client Lib Generator

### About

This program is meant to generate client code which handles making network calls to our boom services. Writing, and maintaining network calls is a pain. Wether its the backend puts out a new api you need to utilize, or they update a response object, you now have to basically copy their work into your client codebase. There is little thought that goes into these functions most of the time. Most of the time you will look at the endpoint, request schema, and response schema, and implement a basic function wrapping it all up for use across your client. Why not just generate those functions?

### Deployed Diagram

Below is a diagram of how you could deploy this application to automatically generate new Client Lib's whenever a backend service is deployed. This application is the "Boom Client Lib Generator"

![Random scribbles of a mad man](./.vscode/typesafe-client-lib-generation.png)

### Why

* Writing network calls sucks
* Writing typed network calls sucks even more
* The backend already wrote all the types and such, lets just use it.
* Fullstack Typesaftey lets us move quickly.
* Fullstack Typesaftey lets us catch bugs before they happen.

### Tech Used

* Handlebars - For templating

### Development

#### Scripts

* `yarn build` - Build the application
* `yarn dev` - Runs the cli, generating an api lib
* `yarn test` - Run tests
* `yarn clean` - Clean the project

#### Tips

* `todo.md` in the root dir is git ignored if you need a scratch pad

## Open API Spec

https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.0.md

## Notes

Need to only define types once.

Cleanup code. its literally garbage right now.

Do the network calls ourself?

Or does the dev pass in something like axios which we can utilize. This would be more dynamic but might be really dumb

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
  pet: {
    put: generateServiceCall<
      {
        body: {
          id?: number;
          name: string;
          category?: { id?: number; name?: string };
          photoUrls: Array<string>;
          tags?: Array<{ id?: number; name?: string }>;
          status?: string;
        };
      },
      {
        id?: number;
        name: string;
        category?: { id?: number; name?: string };
        photoUrls: Array<string>;
        tags?: Array<{ id?: number; name?: string }>;
        status?: string;
      } | null
    >('https://petstore3.swagger.io/api/v3/pet', 'put'),
    post: generateServiceCall<
      {
        body: {
          id?: number;
          name: string;
          category?: { id?: number; name?: string };
          photoUrls: Array<string>;
          tags?: Array<{ id?: number; name?: string }>;
          status?: string;
        };
      },
      {
        id?: number;
        name: string;
        category?: { id?: number; name?: string };
        photoUrls: Array<string>;
        tags?: Array<{ id?: number; name?: string }>;
        status?: string;
      } | null
    >('https://petstore3.swagger.io/api/v3/pet', 'post'),
    findByStatus: {
      get: generateServiceCall<
        {
          query: {
            status: string;
          };
        },
        Array<{
          id?: number;
          name: string;
          category?: { id?: number; name?: string };
          photoUrls: Array<string>;
          tags?: Array<{ id?: number; name?: string }>;
          status?: string;
        }> | null
      >('https://petstore3.swagger.io/api/v3/pet/findByStatus', 'get'),
    },
    findByTags: {
      get: generateServiceCall<
        {
          query: {
            tags: Array<string>;
          };
        },
        Array<{
          id?: number;
          name: string;
          category?: { id?: number; name?: string };
          photoUrls: Array<string>;
          tags?: Array<{ id?: number; name?: string }>;
          status?: string;
        }> | null
      >('https://petstore3.swagger.io/api/v3/pet/findByTags', 'get'),
    },
    byPetId: {
      get: generateServiceCall<
        {
          params: {
            petId: number;
          };
        },
        {
          id?: number;
          name: string;
          category?: { id?: number; name?: string };
          photoUrls: Array<string>;
          tags?: Array<{ id?: number; name?: string }>;
          status?: string;
        } | null
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
        null
      >('https://petstore3.swagger.io/api/v3/pet/{petId}', 'post'),
      delete: generateServiceCall<
        {
          params: {
            petId: number;
          };
        },
        null
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
          { code?: number; type?: string; message?: string }
        >(
          'https://petstore3.swagger.io/api/v3/pet/{petId}/uploadImage',
          'post',
        ),
      },
    },
  },
  store: {
    inventory: {
      get: generateServiceCall<null, {}>(
        'https://petstore3.swagger.io/api/v3/store/inventory',
        'get',
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
            status?: string;
            complete?: boolean;
          };
        },
        {
          id?: number;
          petId?: number;
          quantity?: number;
          shipDate?: string;
          status?: string;
          complete?: boolean;
        } | null
      >('https://petstore3.swagger.io/api/v3/store/order', 'post'),
      byOrderId: {
        get: generateServiceCall<
          {
            params: {
              orderId: number;
            };
          },
          {
            id?: number;
            petId?: number;
            quantity?: number;
            shipDate?: string;
            status?: string;
            complete?: boolean;
          } | null
        >('https://petstore3.swagger.io/api/v3/store/order/{orderId}', 'get'),
        delete: generateServiceCall<
          {
            params: {
              orderId: number;
            };
          },
          null
        >(
          'https://petstore3.swagger.io/api/v3/store/order/{orderId}',
          'delete',
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
    >('https://petstore3.swagger.io/api/v3/user', 'post'),
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
      >('https://petstore3.swagger.io/api/v3/user/createWithList', 'post'),
    },
    login: {
      get: generateServiceCall<
        {
          query: {
            username: string;
            password: string;
          };
        },
        string | null
      >('https://petstore3.swagger.io/api/v3/user/login', 'get'),
    },
    logout: {
      get: generateServiceCall<null, null>(
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
      >('https://petstore3.swagger.io/api/v3/user/{username}', 'get'),
      put: generateServiceCall<
        {
          params: {
            username: string;
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
      >('https://petstore3.swagger.io/api/v3/user/{username}', 'put'),
      delete: generateServiceCall<
        {
          params: {
            username: string;
          };
        },
        null
      >('https://petstore3.swagger.io/api/v3/user/{username}', 'delete'),
    },
  },
};

export default SwaggerPetstore;
```
