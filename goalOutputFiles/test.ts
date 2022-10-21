/*
 *    ___
 * __/_  `.  .-"""-.
 * \_,` | \-'  /   )`-')
 *  "") `"`    \  ((`"`
 *  ___Y  ,    .'7 /|
 * (_,___/...-` (_/_/      FETCHER
 *
 */

type HTTPMethod = 'get' | 'post' | 'put' | 'patch' | 'update' | 'delete';

type Request<Q, P, B> = {
  query: Q;
  params: P;
  body: B;
};

const generateServiceCall = <Query, Params, Body, Response>(
  url: string,
  method: HTTPMethod,
) => {
  return async (
    request: Request<Query, Params, Body>,
    fetchOptions: any = {},
  ) => {
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
 * @description
 */
const PokeAPI = {
  baseUrl: 'https://pokeapi.co',
  api: {
    v2: {
      ability: {
        get: generateServiceCall<
          { dog: boolean },
          { cat: string },
          { bird: number },
          any
        >('https://pokeapi.co/api/v2/ability/', 'get'),
        byId: {
          get: generateServiceCall<
            { dog: boolean },
            { cat: string },
            { bird: number },
            any
          >('https://pokeapi.co/api/v2/ability/{id}/', 'get'),
        },
      },
      'berry-firmness': {
        get: generateServiceCall<
          { dog: boolean },
          { cat: string },
          { bird: number },
          any
        >('https://pokeapi.co/api/v2/berry-firmness/', 'get'),
        byId: {
          get: generateServiceCall<
            { dog: boolean },
            { cat: string },
            { bird: number },
            any
          >('https://pokeapi.co/api/v2/berry-firmness/{id}/', 'get'),
        },
      },
      'berry-flavor': {
        get: generateServiceCall<
          { dog: boolean },
          { cat: string },
          { bird: number },
          any
        >('https://pokeapi.co/api/v2/berry-flavor/', 'get'),
        byId: {
          get: generateServiceCall<
            { dog: boolean },
            { cat: string },
            { bird: number },
            any
          >('https://pokeapi.co/api/v2/berry-flavor/{id}/', 'get'),
        },
      },
      berry: {
        get: generateServiceCall<
          { dog: boolean },
          { cat: string },
          { bird: number },
          any
        >('https://pokeapi.co/api/v2/berry/', 'get'),
        byId: {
          get: generateServiceCall<
            { dog: boolean },
            { cat: string },
            { bird: number },
            any
          >('https://pokeapi.co/api/v2/berry/{id}/', 'get'),
        },
      },
      characteristic: {
        get: generateServiceCall<
          { dog: boolean },
          { cat: string },
          { bird: number },
          any
        >('https://pokeapi.co/api/v2/characteristic/', 'get'),
        byId: {
          get: generateServiceCall<
            { dog: boolean },
            { cat: string },
            { bird: number },
            any
          >('https://pokeapi.co/api/v2/characteristic/{id}/', 'get'),
        },
      },
      'contest-effect': {
        get: generateServiceCall<
          { dog: boolean },
          { cat: string },
          { bird: number },
          any
        >('https://pokeapi.co/api/v2/contest-effect/', 'get'),
        byId: {
          get: generateServiceCall<
            { dog: boolean },
            { cat: string },
            { bird: number },
            any
          >('https://pokeapi.co/api/v2/contest-effect/{id}/', 'get'),
        },
      },
      'contest-type': {
        get: generateServiceCall<
          { dog: boolean },
          { cat: string },
          { bird: number },
          any
        >('https://pokeapi.co/api/v2/contest-type/', 'get'),
        byId: {
          get: generateServiceCall<
            { dog: boolean },
            { cat: string },
            { bird: number },
            any
          >('https://pokeapi.co/api/v2/contest-type/{id}/', 'get'),
        },
      },
      'egg-group': {
        get: generateServiceCall<
          { dog: boolean },
          { cat: string },
          { bird: number },
          any
        >('https://pokeapi.co/api/v2/egg-group/', 'get'),
        byId: {
          get: generateServiceCall<
            { dog: boolean },
            { cat: string },
            { bird: number },
            any
          >('https://pokeapi.co/api/v2/egg-group/{id}/', 'get'),
        },
      },
      'encounter-condition-value': {
        get: generateServiceCall<
          { dog: boolean },
          { cat: string },
          { bird: number },
          any
        >('https://pokeapi.co/api/v2/encounter-condition-value/', 'get'),
        byId: {
          get: generateServiceCall<
            { dog: boolean },
            { cat: string },
            { bird: number },
            any
          >('https://pokeapi.co/api/v2/encounter-condition-value/{id}/', 'get'),
        },
      },
      'encounter-condition': {
        get: generateServiceCall<
          { dog: boolean },
          { cat: string },
          { bird: number },
          any
        >('https://pokeapi.co/api/v2/encounter-condition/', 'get'),
        byId: {
          get: generateServiceCall<
            { dog: boolean },
            { cat: string },
            { bird: number },
            any
          >('https://pokeapi.co/api/v2/encounter-condition/{id}/', 'get'),
        },
      },
      'encounter-method': {
        get: generateServiceCall<
          { dog: boolean },
          { cat: string },
          { bird: number },
          any
        >('https://pokeapi.co/api/v2/encounter-method/', 'get'),
        byId: {
          get: generateServiceCall<
            { dog: boolean },
            { cat: string },
            { bird: number },
            any
          >('https://pokeapi.co/api/v2/encounter-method/{id}/', 'get'),
        },
      },
      'evolution-chain': {
        get: generateServiceCall<
          { dog: boolean },
          { cat: string },
          { bird: number },
          any
        >('https://pokeapi.co/api/v2/evolution-chain/', 'get'),
        byId: {
          get: generateServiceCall<
            { dog: boolean },
            { cat: string },
            { bird: number },
            any
          >('https://pokeapi.co/api/v2/evolution-chain/{id}/', 'get'),
        },
      },
      'evolution-trigger': {
        get: generateServiceCall<
          { dog: boolean },
          { cat: string },
          { bird: number },
          any
        >('https://pokeapi.co/api/v2/evolution-trigger/', 'get'),
        byId: {
          get: generateServiceCall<
            { dog: boolean },
            { cat: string },
            { bird: number },
            any
          >('https://pokeapi.co/api/v2/evolution-trigger/{id}/', 'get'),
        },
      },
      gender: {
        get: generateServiceCall<
          { dog: boolean },
          { cat: string },
          { bird: number },
          any
        >('https://pokeapi.co/api/v2/gender/', 'get'),
        byId: {
          get: generateServiceCall<
            { dog: boolean },
            { cat: string },
            { bird: number },
            any
          >('https://pokeapi.co/api/v2/gender/{id}/', 'get'),
        },
      },
      generation: {
        get: generateServiceCall<
          { dog: boolean },
          { cat: string },
          { bird: number },
          any
        >('https://pokeapi.co/api/v2/generation/', 'get'),
        byId: {
          get: generateServiceCall<
            { dog: boolean },
            { cat: string },
            { bird: number },
            any
          >('https://pokeapi.co/api/v2/generation/{id}/', 'get'),
        },
      },
      'growth-rate': {
        get: generateServiceCall<
          { dog: boolean },
          { cat: string },
          { bird: number },
          any
        >('https://pokeapi.co/api/v2/growth-rate/', 'get'),
        byId: {
          get: generateServiceCall<
            { dog: boolean },
            { cat: string },
            { bird: number },
            any
          >('https://pokeapi.co/api/v2/growth-rate/{id}/', 'get'),
        },
      },
      'item-attribute': {
        get: generateServiceCall<
          { dog: boolean },
          { cat: string },
          { bird: number },
          any
        >('https://pokeapi.co/api/v2/item-attribute/', 'get'),
        byId: {
          get: generateServiceCall<
            { dog: boolean },
            { cat: string },
            { bird: number },
            any
          >('https://pokeapi.co/api/v2/item-attribute/{id}/', 'get'),
        },
      },
      'item-category': {
        get: generateServiceCall<
          { dog: boolean },
          { cat: string },
          { bird: number },
          any
        >('https://pokeapi.co/api/v2/item-category/', 'get'),
        byId: {
          get: generateServiceCall<
            { dog: boolean },
            { cat: string },
            { bird: number },
            any
          >('https://pokeapi.co/api/v2/item-category/{id}/', 'get'),
        },
      },
      'item-fling-effect': {
        get: generateServiceCall<
          { dog: boolean },
          { cat: string },
          { bird: number },
          any
        >('https://pokeapi.co/api/v2/item-fling-effect/', 'get'),
        byId: {
          get: generateServiceCall<
            { dog: boolean },
            { cat: string },
            { bird: number },
            any
          >('https://pokeapi.co/api/v2/item-fling-effect/{id}/', 'get'),
        },
      },
      'item-pocket': {
        get: generateServiceCall<
          { dog: boolean },
          { cat: string },
          { bird: number },
          any
        >('https://pokeapi.co/api/v2/item-pocket/', 'get'),
        byId: {
          get: generateServiceCall<
            { dog: boolean },
            { cat: string },
            { bird: number },
            any
          >('https://pokeapi.co/api/v2/item-pocket/{id}/', 'get'),
        },
      },
      item: {
        get: generateServiceCall<
          { dog: boolean },
          { cat: string },
          { bird: number },
          any
        >('https://pokeapi.co/api/v2/item/', 'get'),
        byId: {
          get: generateServiceCall<
            { dog: boolean },
            { cat: string },
            { bird: number },
            any
          >('https://pokeapi.co/api/v2/item/{id}/', 'get'),
        },
      },
      language: {
        get: generateServiceCall<
          { dog: boolean },
          { cat: string },
          { bird: number },
          any
        >('https://pokeapi.co/api/v2/language/', 'get'),
        byId: {
          get: generateServiceCall<
            { dog: boolean },
            { cat: string },
            { bird: number },
            any
          >('https://pokeapi.co/api/v2/language/{id}/', 'get'),
        },
      },
      'location-area': {
        get: generateServiceCall<
          { dog: boolean },
          { cat: string },
          { bird: number },
          any
        >('https://pokeapi.co/api/v2/location-area/', 'get'),
        byId: {
          get: generateServiceCall<
            { dog: boolean },
            { cat: string },
            { bird: number },
            any
          >('https://pokeapi.co/api/v2/location-area/{id}/', 'get'),
        },
      },
      location: {
        get: generateServiceCall<
          { dog: boolean },
          { cat: string },
          { bird: number },
          any
        >('https://pokeapi.co/api/v2/location/', 'get'),
        byId: {
          get: generateServiceCall<
            { dog: boolean },
            { cat: string },
            { bird: number },
            any
          >('https://pokeapi.co/api/v2/location/{id}/', 'get'),
        },
      },
      machine: {
        get: generateServiceCall<
          { dog: boolean },
          { cat: string },
          { bird: number },
          any
        >('https://pokeapi.co/api/v2/machine/', 'get'),
        byId: {
          get: generateServiceCall<
            { dog: boolean },
            { cat: string },
            { bird: number },
            any
          >('https://pokeapi.co/api/v2/machine/{id}/', 'get'),
        },
      },
      'move-ailment': {
        get: generateServiceCall<
          { dog: boolean },
          { cat: string },
          { bird: number },
          any
        >('https://pokeapi.co/api/v2/move-ailment/', 'get'),
        byId: {
          get: generateServiceCall<
            { dog: boolean },
            { cat: string },
            { bird: number },
            any
          >('https://pokeapi.co/api/v2/move-ailment/{id}/', 'get'),
        },
      },
      'move-battle-style': {
        get: generateServiceCall<
          { dog: boolean },
          { cat: string },
          { bird: number },
          any
        >('https://pokeapi.co/api/v2/move-battle-style/', 'get'),
        byId: {
          get: generateServiceCall<
            { dog: boolean },
            { cat: string },
            { bird: number },
            any
          >('https://pokeapi.co/api/v2/move-battle-style/{id}/', 'get'),
        },
      },
      'move-category': {
        get: generateServiceCall<
          { dog: boolean },
          { cat: string },
          { bird: number },
          any
        >('https://pokeapi.co/api/v2/move-category/', 'get'),
        byId: {
          get: generateServiceCall<
            { dog: boolean },
            { cat: string },
            { bird: number },
            any
          >('https://pokeapi.co/api/v2/move-category/{id}/', 'get'),
        },
      },
      'move-damage-class': {
        get: generateServiceCall<
          { dog: boolean },
          { cat: string },
          { bird: number },
          any
        >('https://pokeapi.co/api/v2/move-damage-class/', 'get'),
        byId: {
          get: generateServiceCall<
            { dog: boolean },
            { cat: string },
            { bird: number },
            any
          >('https://pokeapi.co/api/v2/move-damage-class/{id}/', 'get'),
        },
      },
      'move-learn-method': {
        get: generateServiceCall<
          { dog: boolean },
          { cat: string },
          { bird: number },
          any
        >('https://pokeapi.co/api/v2/move-learn-method/', 'get'),
        byId: {
          get: generateServiceCall<
            { dog: boolean },
            { cat: string },
            { bird: number },
            any
          >('https://pokeapi.co/api/v2/move-learn-method/{id}/', 'get'),
        },
      },
      'move-target': {
        get: generateServiceCall<
          { dog: boolean },
          { cat: string },
          { bird: number },
          any
        >('https://pokeapi.co/api/v2/move-target/', 'get'),
        byId: {
          get: generateServiceCall<
            { dog: boolean },
            { cat: string },
            { bird: number },
            any
          >('https://pokeapi.co/api/v2/move-target/{id}/', 'get'),
        },
      },
      move: {
        get: generateServiceCall<
          { dog: boolean },
          { cat: string },
          { bird: number },
          any
        >('https://pokeapi.co/api/v2/move/', 'get'),
        byId: {
          get: generateServiceCall<
            { dog: boolean },
            { cat: string },
            { bird: number },
            any
          >('https://pokeapi.co/api/v2/move/{id}/', 'get'),
        },
      },
      nature: {
        get: generateServiceCall<
          { dog: boolean },
          { cat: string },
          { bird: number },
          any
        >('https://pokeapi.co/api/v2/nature/', 'get'),
        byId: {
          get: generateServiceCall<
            { dog: boolean },
            { cat: string },
            { bird: number },
            any
          >('https://pokeapi.co/api/v2/nature/{id}/', 'get'),
        },
      },
      'pal-park-area': {
        get: generateServiceCall<
          { dog: boolean },
          { cat: string },
          { bird: number },
          any
        >('https://pokeapi.co/api/v2/pal-park-area/', 'get'),
        byId: {
          get: generateServiceCall<
            { dog: boolean },
            { cat: string },
            { bird: number },
            any
          >('https://pokeapi.co/api/v2/pal-park-area/{id}/', 'get'),
        },
      },
      'pokeathlon-stat': {
        get: generateServiceCall<
          { dog: boolean },
          { cat: string },
          { bird: number },
          any
        >('https://pokeapi.co/api/v2/pokeathlon-stat/', 'get'),
        byId: {
          get: generateServiceCall<
            { dog: boolean },
            { cat: string },
            { bird: number },
            any
          >('https://pokeapi.co/api/v2/pokeathlon-stat/{id}/', 'get'),
        },
      },
      pokedex: {
        get: generateServiceCall<
          { dog: boolean },
          { cat: string },
          { bird: number },
          any
        >('https://pokeapi.co/api/v2/pokedex/', 'get'),
        byId: {
          get: generateServiceCall<
            { dog: boolean },
            { cat: string },
            { bird: number },
            any
          >('https://pokeapi.co/api/v2/pokedex/{id}/', 'get'),
        },
      },
      'pokemon-color': {
        get: generateServiceCall<
          { dog: boolean },
          { cat: string },
          { bird: number },
          any
        >('https://pokeapi.co/api/v2/pokemon-color/', 'get'),
        byId: {
          get: generateServiceCall<
            { dog: boolean },
            { cat: string },
            { bird: number },
            any
          >('https://pokeapi.co/api/v2/pokemon-color/{id}/', 'get'),
        },
      },
      'pokemon-form': {
        get: generateServiceCall<
          { dog: boolean },
          { cat: string },
          { bird: number },
          any
        >('https://pokeapi.co/api/v2/pokemon-form/', 'get'),
        byId: {
          get: generateServiceCall<
            { dog: boolean },
            { cat: string },
            { bird: number },
            any
          >('https://pokeapi.co/api/v2/pokemon-form/{id}/', 'get'),
        },
      },
      'pokemon-habitat': {
        get: generateServiceCall<
          { dog: boolean },
          { cat: string },
          { bird: number },
          any
        >('https://pokeapi.co/api/v2/pokemon-habitat/', 'get'),
        byId: {
          get: generateServiceCall<
            { dog: boolean },
            { cat: string },
            { bird: number },
            any
          >('https://pokeapi.co/api/v2/pokemon-habitat/{id}/', 'get'),
        },
      },
      'pokemon-shape': {
        get: generateServiceCall<
          { dog: boolean },
          { cat: string },
          { bird: number },
          any
        >('https://pokeapi.co/api/v2/pokemon-shape/', 'get'),
        byId: {
          get: generateServiceCall<
            { dog: boolean },
            { cat: string },
            { bird: number },
            any
          >('https://pokeapi.co/api/v2/pokemon-shape/{id}/', 'get'),
        },
      },
      'pokemon-species': {
        get: generateServiceCall<
          { dog: boolean },
          { cat: string },
          { bird: number },
          any
        >('https://pokeapi.co/api/v2/pokemon-species/', 'get'),
        byId: {
          get: generateServiceCall<
            { dog: boolean },
            { cat: string },
            { bird: number },
            any
          >('https://pokeapi.co/api/v2/pokemon-species/{id}/', 'get'),
        },
      },
      pokemon: {
        get: generateServiceCall<
          { dog: boolean },
          { cat: string },
          { bird: number },
          any
        >('https://pokeapi.co/api/v2/pokemon/', 'get'),
        byId: {
          get: generateServiceCall<
            { dog: boolean },
            { cat: string },
            { bird: number },
            any
          >('https://pokeapi.co/api/v2/pokemon/{id}/', 'get'),
        },
      },
      region: {
        get: generateServiceCall<
          { dog: boolean },
          { cat: string },
          { bird: number },
          any
        >('https://pokeapi.co/api/v2/region/', 'get'),
        byId: {
          get: generateServiceCall<
            { dog: boolean },
            { cat: string },
            { bird: number },
            any
          >('https://pokeapi.co/api/v2/region/{id}/', 'get'),
        },
      },
      stat: {
        get: generateServiceCall<
          { dog: boolean },
          { cat: string },
          { bird: number },
          any
        >('https://pokeapi.co/api/v2/stat/', 'get'),
        byId: {
          get: generateServiceCall<
            { dog: boolean },
            { cat: string },
            { bird: number },
            any
          >('https://pokeapi.co/api/v2/stat/{id}/', 'get'),
        },
      },
      'super-contest-effect': {
        get: generateServiceCall<
          { dog: boolean },
          { cat: string },
          { bird: number },
          any
        >('https://pokeapi.co/api/v2/super-contest-effect/', 'get'),
        byId: {
          get: generateServiceCall<
            { dog: boolean },
            { cat: string },
            { bird: number },
            any
          >('https://pokeapi.co/api/v2/super-contest-effect/{id}/', 'get'),
        },
      },
      type: {
        get: generateServiceCall<
          { dog: boolean },
          { cat: string },
          { bird: number },
          any
        >('https://pokeapi.co/api/v2/type/', 'get'),
        byId: {
          get: generateServiceCall<
            { dog: boolean },
            { cat: string },
            { bird: number },
            any
          >('https://pokeapi.co/api/v2/type/{id}/', 'get'),
        },
      },
      'version-group': {
        get: generateServiceCall<
          { dog: boolean },
          { cat: string },
          { bird: number },
          any
        >('https://pokeapi.co/api/v2/version-group/', 'get'),
        byId: {
          get: generateServiceCall<
            { dog: boolean },
            { cat: string },
            { bird: number },
            any
          >('https://pokeapi.co/api/v2/version-group/{id}/', 'get'),
        },
      },
      version: {
        get: generateServiceCall<
          { dog: boolean },
          { cat: string },
          { bird: number },
          any
        >('https://pokeapi.co/api/v2/version/', 'get'),
        byId: {
          get: generateServiceCall<
            { dog: boolean },
            { cat: string },
            { bird: number },
            any
          >('https://pokeapi.co/api/v2/version/{id}/', 'get'),
        },
      },
    },
  },
};

export default PokeAPI;
