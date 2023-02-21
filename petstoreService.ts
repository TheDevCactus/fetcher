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

export type FetcherService = <
Request extends {body: any, query: any, params: any}, Response
>(
  request: Request & null,
  callbacks: Record<string, (response: Response) => void>
) => any;

export type RequestType<F extends FetcherService> = Parameters<F>[0];
export type RequestBodyType<F extends FetcherService> = RequestType<F> extends null ? null : RequestType<F>['body'];
export type RequestQueryType<F extends FetcherService> = RequestType<F>['query'];
export type RequestParamsType<F extends FetcherService> = RequestType<F>['params'];

export type RequestStatusCodes<F extends FetcherService> = keyof Parameters<F>[1];

export type ResponseType<
  Func extends (argA: any, argB: Record<string, any>) => any,
  StatusCode extends keyof Parameters<Func>[1],
> = Parameters<Parameters<Func>[1][StatusCode]>[0];

export type HTTPMethod = 'get' | 'post' | 'put' | 'patch' | 'update' | 'delete';

export type ServiceCallResponse<Response> = {
  data: Response;
  statusCode: number;
};

export type ServiceCallAdapter = <Response>(
  url: string,
  method: HTTPMethod,
  body?: unknown,
) => Promise<ServiceCallResponse<Response>>;

let adapter: ServiceCallAdapter | null = null;

const initializeFetcherWarning =
  'Please initialize Fetcher before attempting to make any network calls';
const unexpectedErrorWarning = 'Unexpected error occurred';

export const PetstoreMetaData = {
    /**
   * @description Update an existing pet by Id
   */
  updatePet: {
  successStatusCodes: ["200"] as const,
  errorStatusCodes: ["400","404","405"] as const,
  method: "put" as HTTPMethod,
},
  /**
   * @description Add a new pet to the store
   */
  addPet: {
  successStatusCodes: ["200"] as const,
  errorStatusCodes: ["405"] as const,
  method: "post" as HTTPMethod,
},
  /**
   * @description Multiple status values can be provided with comma separated strings
   */
  findPetsByStatus: {
  successStatusCodes: ["200"] as const,
  errorStatusCodes: ["400"] as const,
  method: "get" as HTTPMethod,
},
  /**
   * @description Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
   */
  findPetsByTags: {
  successStatusCodes: ["200"] as const,
  errorStatusCodes: ["400"] as const,
  method: "get" as HTTPMethod,
},
  /**
   * @description Returns a single pet
   */
  getPetById: {
  successStatusCodes: ["200"] as const,
  errorStatusCodes: ["400","404"] as const,
  method: "get" as HTTPMethod,
},
  updatePetWithForm: {
  successStatusCodes: [] as const,
  errorStatusCodes: ["405"] as const,
  method: "post" as HTTPMethod,
},
  deletePet: {
  successStatusCodes: [] as const,
  errorStatusCodes: ["400"] as const,
  method: "delete" as HTTPMethod,
},
  uploadFile: {
  successStatusCodes: ["200"] as const,
  errorStatusCodes: [] as const,
  method: "post" as HTTPMethod,
},
  /**
   * @description Returns a map of status codes to quantities
   */
  getInventory: {
  successStatusCodes: ["200"] as const,
  errorStatusCodes: [] as const,
  method: "get" as HTTPMethod,
},
  /**
   * @description Place a new order in the store
   */
  placeOrder: {
  successStatusCodes: ["200"] as const,
  errorStatusCodes: ["405"] as const,
  method: "post" as HTTPMethod,
},
  /**
   * @description For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.
   */
  getOrderById: {
  successStatusCodes: ["200"] as const,
  errorStatusCodes: ["400","404"] as const,
  method: "get" as HTTPMethod,
},
  /**
   * @description For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
   */
  deleteOrder: {
  successStatusCodes: [] as const,
  errorStatusCodes: ["400","404"] as const,
  method: "delete" as HTTPMethod,
},
  /**
   * @description This can only be done by the logged in user.
   */
  createUser: {
  successStatusCodes: [] as const,
  errorStatusCodes: [] as const,
  method: "post" as HTTPMethod,
},
  /**
   * @description Creates list of users with given input array
   */
  createUsersWithListInput: {
  successStatusCodes: ["200"] as const,
  errorStatusCodes: [] as const,
  method: "post" as HTTPMethod,
},
  loginUser: {
  successStatusCodes: ["200"] as const,
  errorStatusCodes: ["400"] as const,
  method: "get" as HTTPMethod,
},
  logoutUser: {
  successStatusCodes: [] as const,
  errorStatusCodes: [] as const,
  method: "get" as HTTPMethod,
},
  getUserByName: {
  successStatusCodes: ["200"] as const,
  errorStatusCodes: ["400","404"] as const,
  method: "get" as HTTPMethod,
},
  /**
   * @description This can only be done by the logged in user.
   */
  updateUser: {
  successStatusCodes: [] as const,
  errorStatusCodes: [] as const,
  method: "put" as HTTPMethod,
},
  /**
   * @description This can only be done by the logged in user.
   */
  deleteUser: {
  successStatusCodes: [] as const,
  errorStatusCodes: ["400","404"] as const,
  method: "delete" as HTTPMethod,
},

}

/**
 * @description This is a sample Pet Store Server based on the OpenAPI 3.0 specification.  You can find out more about Swagger at [http://swagger.io](http://swagger.io). In the third iteration of the pet store, we've switched to the design first approach! You can now help us improve the API whether it's by making changes to the definition itself or to the code. That way, with time, we can improve the API in general, and expose some of the new features in OAS3. Some useful links: - [The Pet Store repository](https://github.com/swagger-api/swagger-petstore)- [The source API definition for the Pet Store](https://github.com/swagger-api/swagger-petstore/blob/master/src/main/resources/openapi.yaml)
 */
const Petstore = {
    /**
   * @description Update an existing pet by Id
   */
  updatePet: async (request: {
  body: {id?: number,name: string,category?: {id?: number,name?: string},photoUrls: Array<string>,tags?: Array<{id?: number,name?: string}>,status?: "available" | "pending" | "sold"},
}, callbacks: Record<number, any> & {
  200?: (response: {id?: number,name: string,category?: {id?: number,name?: string},photoUrls: Array<string>,tags?: Array<{id?: number,name?: string}>,status?: "available" | "pending" | "sold"}) => void,
  400?: (response?: unknown) => void,
  404?: (response?: unknown) => void,
  405?: (response?: unknown) => void,
  fallback?: (response?: unknown) => void,
}) => {
      const
     finalURL = 'https://petstore3.swagger.io/api/v3/pet';
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'put', request.body);
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  /**
   * @description Add a new pet to the store
   */
  addPet: async (request: {
  body: {id?: number,name: string,category?: {id?: number,name?: string},photoUrls: Array<string>,tags?: Array<{id?: number,name?: string}>,status?: "available" | "pending" | "sold"},
}, callbacks: Record<number, any> & {
  200?: (response: {id?: number,name: string,category?: {id?: number,name?: string},photoUrls: Array<string>,tags?: Array<{id?: number,name?: string}>,status?: "available" | "pending" | "sold"}) => void,
  405?: (response?: unknown) => void,
  fallback?: (response?: unknown) => void,
}) => {
      const
     finalURL = 'https://petstore3.swagger.io/api/v3/pet';
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'post', request.body);
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  /**
   * @description Multiple status values can be provided with comma separated strings
   */
  findPetsByStatus: async (request: {
  query: {
  status?: "available" | "pending" | "sold",
},
}, callbacks: Record<number, any> & {
  200?: (response: Array<{id?: number,name: string,category?: {id?: number,name?: string},photoUrls: Array<string>,tags?: Array<{id?: number,name?: string}>,status?: "available" | "pending" | "sold"}>) => void,
  400?: (response?: unknown) => void,
  fallback?: (response?: unknown) => void,
}) => {
      let
     finalURL = 'https://petstore3.swagger.io/api/v3/pet/findByStatus';
      finalURL += `?${Object.entries(request.query).map(([key, value]) => `${key}=${value}`).join('&')}`;
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'get', );
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  /**
   * @description Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
   */
  findPetsByTags: async (request: {
  query: {
  tags?: Array<string>,
},
}, callbacks: Record<number, any> & {
  200?: (response: Array<{id?: number,name: string,category?: {id?: number,name?: string},photoUrls: Array<string>,tags?: Array<{id?: number,name?: string}>,status?: "available" | "pending" | "sold"}>) => void,
  400?: (response?: unknown) => void,
  fallback?: (response?: unknown) => void,
}) => {
      let
     finalURL = 'https://petstore3.swagger.io/api/v3/pet/findByTags';
      finalURL += `?${Object.entries(request.query).map(([key, value]) => `${key}=${value}`).join('&')}`;
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'get', );
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  /**
   * @description Returns a single pet
   */
  getPetById: async (request: {
  params: {
  petId?: number,
},
}, callbacks: Record<number, any> & {
  200?: (response: {id?: number,name: string,category?: {id?: number,name?: string},photoUrls: Array<string>,tags?: Array<{id?: number,name?: string}>,status?: "available" | "pending" | "sold"}) => void,
  400?: (response?: unknown) => void,
  404?: (response?: unknown) => void,
  fallback?: (response?: unknown) => void,
}) => {

      let
     finalURL = 'https://petstore3.swagger.io/api/v3/pet/{petId}';
      Object.entries(request.params).forEach(([key, value]) => {
        finalURL = finalURL.replaceAll(`:${key}`, value);
        finalURL = finalURL.replaceAll(`{${key}}`, value);
      });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'get', );
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  updatePetWithForm: async (request: {
  query: {
  name?: string,
  status?: string,
},
  params: {
  petId?: number,
},
}, callbacks: Record<number, any> & {
  405?: (response?: unknown) => void,
  fallback?: (response?: unknown) => void,
}) => {
      let
     finalURL = 'https://petstore3.swagger.io/api/v3/pet/{petId}';
      finalURL += `?${Object.entries(request.query).map(([key, value]) => `${key}=${value}`).join('&')}`;
      Object.entries(request.params).forEach(([key, value]) => {
        finalURL = finalURL.replaceAll(`:${key}`, value);
        finalURL = finalURL.replaceAll(`{${key}}`, value);
      });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'post', );
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  deletePet: async (request: {
  params: {
  petId?: number,
},
}, callbacks: Record<number, any> & {
  400?: (response?: unknown) => void,
  fallback?: (response?: unknown) => void,
}) => {

      let
     finalURL = 'https://petstore3.swagger.io/api/v3/pet/{petId}';
      Object.entries(request.params).forEach(([key, value]) => {
        finalURL = finalURL.replaceAll(`:${key}`, value);
        finalURL = finalURL.replaceAll(`{${key}}`, value);
      });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'delete', );
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  uploadFile: async (request: {
  query: {
  additionalMetadata?: string,
},
  params: {
  petId?: number,
},
}, callbacks: Record<number, any> & {
  200?: (response: {code?: number,type?: string,message?: string}) => void,
  fallback?: (response?: unknown) => void,
}) => {
      let
     finalURL = 'https://petstore3.swagger.io/api/v3/pet/{petId}/uploadImage';
      finalURL += `?${Object.entries(request.query).map(([key, value]) => `${key}=${value}`).join('&')}`;
      Object.entries(request.params).forEach(([key, value]) => {
        finalURL = finalURL.replaceAll(`:${key}`, value);
        finalURL = finalURL.replaceAll(`{${key}}`, value);
      });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'post', );
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  /**
   * @description Returns a map of status codes to quantities
   */
  getInventory: async (request: null, callbacks: Record<number, any> & {
  200?: (response: Record<string, unknown>) => void,
  fallback?: (response?: unknown) => void,
}) => {
      const
     finalURL = 'https://petstore3.swagger.io/api/v3/store/inventory';
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'get', );
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  /**
   * @description Place a new order in the store
   */
  placeOrder: async (request: {
  body: {id?: number,petId?: number,quantity?: number,shipDate?: string,status?: "placed" | "approved" | "delivered",complete?: boolean},
}, callbacks: Record<number, any> & {
  200?: (response: {id?: number,petId?: number,quantity?: number,shipDate?: string,status?: "placed" | "approved" | "delivered",complete?: boolean}) => void,
  405?: (response?: unknown) => void,
  fallback?: (response?: unknown) => void,
}) => {
      const
     finalURL = 'https://petstore3.swagger.io/api/v3/store/order';
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'post', request.body);
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  /**
   * @description For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.
   */
  getOrderById: async (request: {
  params: {
  orderId?: number,
},
}, callbacks: Record<number, any> & {
  200?: (response: {id?: number,petId?: number,quantity?: number,shipDate?: string,status?: "placed" | "approved" | "delivered",complete?: boolean}) => void,
  400?: (response?: unknown) => void,
  404?: (response?: unknown) => void,
  fallback?: (response?: unknown) => void,
}) => {

      let
     finalURL = 'https://petstore3.swagger.io/api/v3/store/order/{orderId}';
      Object.entries(request.params).forEach(([key, value]) => {
        finalURL = finalURL.replaceAll(`:${key}`, value);
        finalURL = finalURL.replaceAll(`{${key}}`, value);
      });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'get', );
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  /**
   * @description For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
   */
  deleteOrder: async (request: {
  params: {
  orderId?: number,
},
}, callbacks: Record<number, any> & {
  400?: (response?: unknown) => void,
  404?: (response?: unknown) => void,
  fallback?: (response?: unknown) => void,
}) => {

      let
     finalURL = 'https://petstore3.swagger.io/api/v3/store/order/{orderId}';
      Object.entries(request.params).forEach(([key, value]) => {
        finalURL = finalURL.replaceAll(`:${key}`, value);
        finalURL = finalURL.replaceAll(`{${key}}`, value);
      });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'delete', );
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  /**
   * @description This can only be done by the logged in user.
   */
  createUser: async (request: {
  body: {id?: number,username?: string,firstName?: string,lastName?: string,email?: string,password?: string,phone?: string,userStatus?: number},
}, callbacks: Record<number, any> & {
  default?: (response: {id?: number,username?: string,firstName?: string,lastName?: string,email?: string,password?: string,phone?: string,userStatus?: number}) => void,
  fallback?: (response?: unknown) => void,
}) => {
      const
     finalURL = 'https://petstore3.swagger.io/api/v3/user';
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'post', request.body);
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  /**
   * @description Creates list of users with given input array
   */
  createUsersWithListInput: async (request: {
  body: Array<{id?: number,username?: string,firstName?: string,lastName?: string,email?: string,password?: string,phone?: string,userStatus?: number}>,
}, callbacks: Record<number, any> & {
  200?: (response: {id?: number,username?: string,firstName?: string,lastName?: string,email?: string,password?: string,phone?: string,userStatus?: number}) => void,
  default?: (response?: unknown) => void,
  fallback?: (response?: unknown) => void,
}) => {
      const
     finalURL = 'https://petstore3.swagger.io/api/v3/user/createWithList';
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'post', request.body);
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  loginUser: async (request: {
  query: {
  username?: string,
  password?: string,
},
}, callbacks: Record<number, any> & {
  200?: (response: string) => void,
  400?: (response?: unknown) => void,
  fallback?: (response?: unknown) => void,
}) => {
      let
     finalURL = 'https://petstore3.swagger.io/api/v3/user/login';
      finalURL += `?${Object.entries(request.query).map(([key, value]) => `${key}=${value}`).join('&')}`;
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'get', );
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  logoutUser: async (request: null, callbacks: Record<number, any> & {
  default?: (response?: unknown) => void,
  fallback?: (response?: unknown) => void,
}) => {
      const
     finalURL = 'https://petstore3.swagger.io/api/v3/user/logout';
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'get', );
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  getUserByName: async (request: {
  params: {
  username?: string,
},
}, callbacks: Record<number, any> & {
  200?: (response: {id?: number,username?: string,firstName?: string,lastName?: string,email?: string,password?: string,phone?: string,userStatus?: number}) => void,
  400?: (response?: unknown) => void,
  404?: (response?: unknown) => void,
  fallback?: (response?: unknown) => void,
}) => {

      let
     finalURL = 'https://petstore3.swagger.io/api/v3/user/{username}';
      Object.entries(request.params).forEach(([key, value]) => {
        finalURL = finalURL.replaceAll(`:${key}`, value);
        finalURL = finalURL.replaceAll(`{${key}}`, value);
      });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'get', );
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  /**
   * @description This can only be done by the logged in user.
   */
  updateUser: async (request: {
  params: {
  username?: string,
},
  body: {id?: number,username?: string,firstName?: string,lastName?: string,email?: string,password?: string,phone?: string,userStatus?: number},
}, callbacks: Record<number, any> & {
  default?: (response?: unknown) => void,
  fallback?: (response?: unknown) => void,
}) => {

      let
     finalURL = 'https://petstore3.swagger.io/api/v3/user/{username}';
      Object.entries(request.params).forEach(([key, value]) => {
        finalURL = finalURL.replaceAll(`:${key}`, value);
        finalURL = finalURL.replaceAll(`{${key}}`, value);
      });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'put', request.body);
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  /**
   * @description This can only be done by the logged in user.
   */
  deleteUser: async (request: {
  params: {
  username?: string,
},
}, callbacks: Record<number, any> & {
  400?: (response?: unknown) => void,
  404?: (response?: unknown) => void,
  fallback?: (response?: unknown) => void,
}) => {

      let
     finalURL = 'https://petstore3.swagger.io/api/v3/user/{username}';
      Object.entries(request.params).forEach(([key, value]) => {
        finalURL = finalURL.replaceAll(`:${key}`, value);
        finalURL = finalURL.replaceAll(`{${key}}`, value);
      });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'delete', );
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },

}

const initializeLib = (newAdapter: ServiceCallAdapter) => {
  adapter = newAdapter;
  return Petstore;
}

export default initializeLib;