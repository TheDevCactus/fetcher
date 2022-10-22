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
