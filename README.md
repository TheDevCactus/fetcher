# Fetcher
<img title="what a good boy" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fa%2Fa9%2FBearded_Collie.jpg&f=1&nofb=1&ipt=2a0d91e9f1a93764c1d7093fde17eeaa7cd9653df89b5e0b4d35e9f9ae7d3982&ipo=images" height="250px"></img>

## Chassis Service Client Lib Generator

### About

This program is meant to generate client code which handles making network calls to our boom services. Writing, and maintaining network calls is a pain. Wether its the backend puts out a new api you need to utilize, or they update a response object, you now have to basically copy their work into your client codebase. There is little thought that goes into these functions most of the time. Most of the time you will look at the endpoint, request schema, and response schema, and implement a basic function wrapping it all up for use across your client. Why not just generate those functions?

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

* `yarn build` - build the application
* `yarn test` - build and test the application with a test schema
* `yarn clean` - clean the project

## Open API Spec

https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.0.md