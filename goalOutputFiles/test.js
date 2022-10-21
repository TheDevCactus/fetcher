"use strict";
/* eslint-disable sort-keys */
/* eslint-disable max-lines */
/*
 *    ___
 * __/_  `.  .-"""-.
 * \_,` | \-'  /   )`-')
 *  "") `"`    \  ((`"`
 *  ___Y  ,    .'7 /|
 * (_,___/...-` (_/_/      FETCHER
 *
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var generateServiceCall = function (url, method) {
    return function (request, fetchOptions) {
        if (fetchOptions === void 0) { fetchOptions = {}; }
        return __awaiter(void 0, void 0, void 0, function () {
            var response, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(url, __assign({ body: JSON.stringify(request), method: method.toUpperCase() }, fetchOptions))];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
};
/**
 * @description
 */
var PokeAPI = {
    baseUrl: 'https://pokeapi.co/',
    api: {
        v2: {
            ability: {
                get: generateServiceCall('https://pokeapi.co//api/v2/ability/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co//api/v2/ability/{id}/', 'get')
                }
            },
            'berry-firmness': {
                get: generateServiceCall('https://pokeapi.co//api/v2/berry-firmness/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co//api/v2/berry-firmness/{id}/', 'get')
                }
            },
            'berry-flavor': {
                get: generateServiceCall('https://pokeapi.co//api/v2/berry-flavor/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co//api/v2/berry-flavor/{id}/', 'get')
                }
            },
            berry: {
                get: generateServiceCall('https://pokeapi.co//api/v2/berry/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co//api/v2/berry/{id}/', 'get')
                }
            },
            characteristic: {
                get: generateServiceCall('https://pokeapi.co//api/v2/characteristic/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co//api/v2/characteristic/{id}/', 'get')
                }
            },
            'contest-effect': {
                get: generateServiceCall('https://pokeapi.co//api/v2/contest-effect/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co//api/v2/contest-effect/{id}/', 'get')
                }
            },
            'contest-type': {
                get: generateServiceCall('https://pokeapi.co//api/v2/contest-type/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co//api/v2/contest-type/{id}/', 'get')
                }
            },
            'egg-group': {
                get: generateServiceCall('https://pokeapi.co//api/v2/egg-group/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co//api/v2/egg-group/{id}/', 'get')
                }
            },
            'encounter-condition-value': {
                get: generateServiceCall('https://pokeapi.co//api/v2/encounter-condition-value/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co//api/v2/encounter-condition-value/{id}/', 'get')
                }
            },
            'encounter-condition': {
                get: generateServiceCall('https://pokeapi.co//api/v2/encounter-condition/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co//api/v2/encounter-condition/{id}/', 'get')
                }
            },
            'encounter-method': {
                get: generateServiceCall('https://pokeapi.co//api/v2/encounter-method/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co//api/v2/encounter-method/{id}/', 'get')
                }
            },
            'evolution-chain': {
                get: generateServiceCall('https://pokeapi.co//api/v2/evolution-chain/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co//api/v2/evolution-chain/{id}/', 'get')
                }
            },
            'evolution-trigger': {
                get: generateServiceCall('https://pokeapi.co//api/v2/evolution-trigger/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co//api/v2/evolution-trigger/{id}/', 'get')
                }
            },
            gender: {
                get: generateServiceCall('https://pokeapi.co//api/v2/gender/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co//api/v2/gender/{id}/', 'get')
                }
            },
            generation: {
                get: generateServiceCall('https://pokeapi.co//api/v2/generation/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co//api/v2/generation/{id}/', 'get')
                }
            },
            'growth-rate': {
                get: generateServiceCall('https://pokeapi.co//api/v2/growth-rate/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co//api/v2/growth-rate/{id}/', 'get')
                }
            },
            'item-attribute': {
                get: generateServiceCall('https://pokeapi.co//api/v2/item-attribute/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co//api/v2/item-attribute/{id}/', 'get')
                }
            },
            'item-category': {
                get: generateServiceCall('https://pokeapi.co//api/v2/item-category/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co//api/v2/item-category/{id}/', 'get')
                }
            },
            'item-fling-effect': {
                get: generateServiceCall('https://pokeapi.co//api/v2/item-fling-effect/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co//api/v2/item-fling-effect/{id}/', 'get')
                }
            },
            'item-pocket': {
                get: generateServiceCall('https://pokeapi.co//api/v2/item-pocket/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co//api/v2/item-pocket/{id}/', 'get')
                }
            },
            item: {
                get: generateServiceCall('https://pokeapi.co//api/v2/item/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co//api/v2/item/{id}/', 'get')
                }
            },
            language: {
                get: generateServiceCall('https://pokeapi.co//api/v2/language/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co//api/v2/language/{id}/', 'get')
                }
            },
            'location-area': {
                get: generateServiceCall('https://pokeapi.co//api/v2/location-area/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co//api/v2/location-area/{id}/', 'get')
                }
            },
            location: {
                get: generateServiceCall('https://pokeapi.co//api/v2/location/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co//api/v2/location/{id}/', 'get')
                }
            },
            machine: {
                get: generateServiceCall('https://pokeapi.co//api/v2/machine/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co//api/v2/machine/{id}/', 'get')
                }
            },
            'move-ailment': {
                get: generateServiceCall('https://pokeapi.co//api/v2/move-ailment/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co//api/v2/move-ailment/{id}/', 'get')
                }
            },
            'move-battle-style': {
                get: generateServiceCall('https://pokeapi.co//api/v2/move-battle-style/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co//api/v2/move-battle-style/{id}/', 'get')
                }
            },
            'move-category': {
                get: generateServiceCall('https://pokeapi.co//api/v2/move-category/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co//api/v2/move-category/{id}/', 'get')
                }
            },
            'move-damage-class': {
                get: generateServiceCall('https://pokeapi.co//api/v2/move-damage-class/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co//api/v2/move-damage-class/{id}/', 'get')
                }
            },
            'move-learn-method': {
                get: generateServiceCall('https://pokeapi.co//api/v2/move-learn-method/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co//api/v2/move-learn-method/{id}/', 'get')
                }
            },
            'move-target': {
                get: generateServiceCall('https://pokeapi.co//api/v2/move-target/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co//api/v2/move-target/{id}/', 'get')
                }
            },
            move: {
                get: generateServiceCall('https://pokeapi.co//api/v2/move/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co//api/v2/move/{id}/', 'get')
                }
            },
            nature: {
                get: generateServiceCall('https://pokeapi.co//api/v2/nature/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co//api/v2/nature/{id}/', 'get')
                }
            },
            'pal-park-area': {
                get: generateServiceCall('https://pokeapi.co//api/v2/pal-park-area/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co//api/v2/pal-park-area/{id}/', 'get')
                }
            },
            'pokeathlon-stat': {
                get: generateServiceCall('https://pokeapi.co//api/v2/pokeathlon-stat/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co//api/v2/pokeathlon-stat/{id}/', 'get')
                }
            },
            pokedex: {
                get: generateServiceCall('https://pokeapi.co//api/v2/pokedex/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co//api/v2/pokedex/{id}/', 'get')
                }
            },
            'pokemon-color': {
                get: generateServiceCall('https://pokeapi.co//api/v2/pokemon-color/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co//api/v2/pokemon-color/{id}/', 'get')
                }
            },
            'pokemon-form': {
                get: generateServiceCall('https://pokeapi.co//api/v2/pokemon-form/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co//api/v2/pokemon-form/{id}/', 'get')
                }
            },
            'pokemon-habitat': {
                get: generateServiceCall('https://pokeapi.co//api/v2/pokemon-habitat/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co//api/v2/pokemon-habitat/{id}/', 'get')
                }
            },
            'pokemon-shape': {
                get: generateServiceCall('https://pokeapi.co//api/v2/pokemon-shape/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co//api/v2/pokemon-shape/{id}/', 'get')
                }
            },
            'pokemon-species': {
                get: generateServiceCall('https://pokeapi.co//api/v2/pokemon-species/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co//api/v2/pokemon-species/{id}/', 'get')
                }
            },
            pokemon: {
                get: generateServiceCall('https://pokeapi.co//api/v2/pokemon/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co//api/v2/pokemon/{id}/', 'get')
                }
            },
            region: {
                get: generateServiceCall('https://pokeapi.co//api/v2/region/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co//api/v2/region/{id}/', 'get')
                }
            },
            stat: {
                get: generateServiceCall('https://pokeapi.co//api/v2/stat/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co//api/v2/stat/{id}/', 'get')
                }
            },
            'super-contest-effect': {
                get: generateServiceCall('https://pokeapi.co//api/v2/super-contest-effect/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co//api/v2/super-contest-effect/{id}/', 'get')
                }
            },
            type: {
                get: generateServiceCall('https://pokeapi.co//api/v2/type/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co//api/v2/type/{id}/', 'get')
                }
            },
            'version-group': {
                get: generateServiceCall('https://pokeapi.co//api/v2/version-group/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co//api/v2/version-group/{id}/', 'get')
                }
            },
            version: {
                get: generateServiceCall('https://pokeapi.co//api/v2/version/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co//api/v2/version/{id}/', 'get')
                }
            }
        }
    }
};
console.log('!!!', 'HI MOM');
exports["default"] = PokeAPI;
