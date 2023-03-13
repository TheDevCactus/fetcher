# Fetcher

<img title="what a good boy" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fa%2Fa9%2FBearded_Collie.jpg&f=1&nofb=1&ipt=2a0d91e9f1a93764c1d7093fde17eeaa7cd9653df89b5e0b4d35e9f9ae7d3982&ipo=images" height="250px"></img>

> Create typesafe, un-opinionated, client SDK's for your existing OpenAPI 3.0.0 compliant API's.

## About

W.I.P! Missing a whole bunch of stuff like ability to deal with typed headers.

This program generates client code which handles making network calls to services using your existing client http solution. Writing, and maintaining network calls is a pain. Wether its the backend puts out a new api you need to utilize, or they update a response object, you now have to basically copy their work into your client codebase. There is little thought that goes into these functions most of the time. Most of the time you will look at the endpoint, request schema, and response schema, and implement a basic function wrapping it all up for use across your client. Why not just generate those functions?

## When To Reach For Fetcher

- You have a OpenAPI 3.0.0 compliant API
- You have multiple clients which will utilize the same API
- Your API Updates frequently

## How to use

This section is living, and highly likely to change, but as of now, here is how to use this library.

### Generating Client Libraries

1. Have the open api schema json file you wish to generate from locally installed.
2. Have this repo installed, built, and running.
3. Call `node ./build/src/index.js generate {{PATH_TO_YOUR_SCHEMA}} {{DESTINATION_FOR_LIB}}`

### Using Generated Client Libraries

1. Generate your client library
2. Move the library into your project (either through node_modules, or just copy and pasting).
3. Import the setup function from the library
4. Pass your adapter to the setup function, in return for your initialized client library

### Example of initializing a client library, and calling a network call

```ts
const adapter: ServiceCallAdapter = async function (
  url: string,
  method: HTTPMethod,
  body: unknown,
) {
  const res = await axiosInstance({
    method: method,
    url: url,
    data: body ? body : null,
  });
  return {
    data: res.data,
    statusCode: res.status,
  };
};

const DogsSDK = createDogSDK(adapter);

DogsSDK.getBreeds(
  {
    query: {
      pageCount: 10,
      page: 2,
    },
  },
  {
    '200': (response) => {
      setBreeds(response.breeds);
    },
    '500': (response) => {
      alert(response.code);
    },
    fallback: (response: any) => {
      console.log('Server responded with unexpected status code', response);
    },
  },
);
```

## Why use an adapter instead of handling that internally within the library?

Utilizing adapters allows for us to stay un-opinionated. Another pro of using adapters is that by moving the actual network call execution out of our libraries and back into the hands of the developers, our libraries are very simple functions which basically just provide typesaftey, and function arguments to your actual networking solution. They do not perform any logic. We aren't here to architect your applications networking solution for you, we just want to make it easier to build. Since our CDK's are just simple functions, You can easily move on, or off of our solution.

## Why Does This Exist

- Writing network calls sucks
- Writing typed network calls sucks even more
- The backend already wrote all the types and such, lets just use it.
- Fullstack Typesaftey lets us move quickly.
- Fullstack Typesaftey lets us catch bugs before they happen.

## Deployed Diagram

Below is a diagram of how you could deploy this application to automatically generate new Client Lib's whenever a backend service is deployed.

/ MAKE NEW DIAGRAM

## Tech Used

- Handlebars
- Mocha
- Chai
- OpenApi 3.0.0 Specification
- Typescript
- Node

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
