"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const generateServiceCall = (url, method) => {
    return (request, fetchOptions = {}) => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield fetch(url, Object.assign({ body: JSON.stringify(request), method: method.toUpperCase() }, fetchOptions));
        const result = yield response.json();
        return result;
    });
};
/**
 * @description
 */
const PokeAPI = {
    baseUrl: 'https://pokeapi.co',
    api: {
        v2: {
            ability: {
                get: generateServiceCall('https://pokeapi.co/api/v2/ability/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co/api/v2/ability/{id}/', 'get'),
                },
            },
            'berry-firmness': {
                get: generateServiceCall('https://pokeapi.co/api/v2/berry-firmness/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co/api/v2/berry-firmness/{id}/', 'get'),
                },
            },
            'berry-flavor': {
                get: generateServiceCall('https://pokeapi.co/api/v2/berry-flavor/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co/api/v2/berry-flavor/{id}/', 'get'),
                },
            },
            berry: {
                get: generateServiceCall('https://pokeapi.co/api/v2/berry/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co/api/v2/berry/{id}/', 'get'),
                },
            },
            characteristic: {
                get: generateServiceCall('https://pokeapi.co/api/v2/characteristic/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co/api/v2/characteristic/{id}/', 'get'),
                },
            },
            'contest-effect': {
                get: generateServiceCall('https://pokeapi.co/api/v2/contest-effect/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co/api/v2/contest-effect/{id}/', 'get'),
                },
            },
            'contest-type': {
                get: generateServiceCall('https://pokeapi.co/api/v2/contest-type/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co/api/v2/contest-type/{id}/', 'get'),
                },
            },
            'egg-group': {
                get: generateServiceCall('https://pokeapi.co/api/v2/egg-group/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co/api/v2/egg-group/{id}/', 'get'),
                },
            },
            'encounter-condition-value': {
                get: generateServiceCall('https://pokeapi.co/api/v2/encounter-condition-value/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co/api/v2/encounter-condition-value/{id}/', 'get'),
                },
            },
            'encounter-condition': {
                get: generateServiceCall('https://pokeapi.co/api/v2/encounter-condition/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co/api/v2/encounter-condition/{id}/', 'get'),
                },
            },
            'encounter-method': {
                get: generateServiceCall('https://pokeapi.co/api/v2/encounter-method/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co/api/v2/encounter-method/{id}/', 'get'),
                },
            },
            'evolution-chain': {
                get: generateServiceCall('https://pokeapi.co/api/v2/evolution-chain/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co/api/v2/evolution-chain/{id}/', 'get'),
                },
            },
            'evolution-trigger': {
                get: generateServiceCall('https://pokeapi.co/api/v2/evolution-trigger/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co/api/v2/evolution-trigger/{id}/', 'get'),
                },
            },
            gender: {
                get: generateServiceCall('https://pokeapi.co/api/v2/gender/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co/api/v2/gender/{id}/', 'get'),
                },
            },
            generation: {
                get: generateServiceCall('https://pokeapi.co/api/v2/generation/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co/api/v2/generation/{id}/', 'get'),
                },
            },
            'growth-rate': {
                get: generateServiceCall('https://pokeapi.co/api/v2/growth-rate/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co/api/v2/growth-rate/{id}/', 'get'),
                },
            },
            'item-attribute': {
                get: generateServiceCall('https://pokeapi.co/api/v2/item-attribute/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co/api/v2/item-attribute/{id}/', 'get'),
                },
            },
            'item-category': {
                get: generateServiceCall('https://pokeapi.co/api/v2/item-category/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co/api/v2/item-category/{id}/', 'get'),
                },
            },
            'item-fling-effect': {
                get: generateServiceCall('https://pokeapi.co/api/v2/item-fling-effect/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co/api/v2/item-fling-effect/{id}/', 'get'),
                },
            },
            'item-pocket': {
                get: generateServiceCall('https://pokeapi.co/api/v2/item-pocket/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co/api/v2/item-pocket/{id}/', 'get'),
                },
            },
            item: {
                get: generateServiceCall('https://pokeapi.co/api/v2/item/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co/api/v2/item/{id}/', 'get'),
                },
            },
            language: {
                get: generateServiceCall('https://pokeapi.co/api/v2/language/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co/api/v2/language/{id}/', 'get'),
                },
            },
            'location-area': {
                get: generateServiceCall('https://pokeapi.co/api/v2/location-area/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co/api/v2/location-area/{id}/', 'get'),
                },
            },
            location: {
                get: generateServiceCall('https://pokeapi.co/api/v2/location/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co/api/v2/location/{id}/', 'get'),
                },
            },
            machine: {
                get: generateServiceCall('https://pokeapi.co/api/v2/machine/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co/api/v2/machine/{id}/', 'get'),
                },
            },
            'move-ailment': {
                get: generateServiceCall('https://pokeapi.co/api/v2/move-ailment/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co/api/v2/move-ailment/{id}/', 'get'),
                },
            },
            'move-battle-style': {
                get: generateServiceCall('https://pokeapi.co/api/v2/move-battle-style/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co/api/v2/move-battle-style/{id}/', 'get'),
                },
            },
            'move-category': {
                get: generateServiceCall('https://pokeapi.co/api/v2/move-category/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co/api/v2/move-category/{id}/', 'get'),
                },
            },
            'move-damage-class': {
                get: generateServiceCall('https://pokeapi.co/api/v2/move-damage-class/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co/api/v2/move-damage-class/{id}/', 'get'),
                },
            },
            'move-learn-method': {
                get: generateServiceCall('https://pokeapi.co/api/v2/move-learn-method/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co/api/v2/move-learn-method/{id}/', 'get'),
                },
            },
            'move-target': {
                get: generateServiceCall('https://pokeapi.co/api/v2/move-target/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co/api/v2/move-target/{id}/', 'get'),
                },
            },
            move: {
                get: generateServiceCall('https://pokeapi.co/api/v2/move/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co/api/v2/move/{id}/', 'get'),
                },
            },
            nature: {
                get: generateServiceCall('https://pokeapi.co/api/v2/nature/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co/api/v2/nature/{id}/', 'get'),
                },
            },
            'pal-park-area': {
                get: generateServiceCall('https://pokeapi.co/api/v2/pal-park-area/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co/api/v2/pal-park-area/{id}/', 'get'),
                },
            },
            'pokeathlon-stat': {
                get: generateServiceCall('https://pokeapi.co/api/v2/pokeathlon-stat/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co/api/v2/pokeathlon-stat/{id}/', 'get'),
                },
            },
            pokedex: {
                get: generateServiceCall('https://pokeapi.co/api/v2/pokedex/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co/api/v2/pokedex/{id}/', 'get'),
                },
            },
            'pokemon-color': {
                get: generateServiceCall('https://pokeapi.co/api/v2/pokemon-color/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co/api/v2/pokemon-color/{id}/', 'get'),
                },
            },
            'pokemon-form': {
                get: generateServiceCall('https://pokeapi.co/api/v2/pokemon-form/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co/api/v2/pokemon-form/{id}/', 'get'),
                },
            },
            'pokemon-habitat': {
                get: generateServiceCall('https://pokeapi.co/api/v2/pokemon-habitat/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co/api/v2/pokemon-habitat/{id}/', 'get'),
                },
            },
            'pokemon-shape': {
                get: generateServiceCall('https://pokeapi.co/api/v2/pokemon-shape/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co/api/v2/pokemon-shape/{id}/', 'get'),
                },
            },
            'pokemon-species': {
                get: generateServiceCall('https://pokeapi.co/api/v2/pokemon-species/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co/api/v2/pokemon-species/{id}/', 'get'),
                },
            },
            pokemon: {
                get: generateServiceCall('https://pokeapi.co/api/v2/pokemon/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co/api/v2/pokemon/{id}/', 'get'),
                },
            },
            region: {
                get: generateServiceCall('https://pokeapi.co/api/v2/region/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co/api/v2/region/{id}/', 'get'),
                },
            },
            stat: {
                get: generateServiceCall('https://pokeapi.co/api/v2/stat/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co/api/v2/stat/{id}/', 'get'),
                },
            },
            'super-contest-effect': {
                get: generateServiceCall('https://pokeapi.co/api/v2/super-contest-effect/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co/api/v2/super-contest-effect/{id}/', 'get'),
                },
            },
            type: {
                get: generateServiceCall('https://pokeapi.co/api/v2/type/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co/api/v2/type/{id}/', 'get'),
                },
            },
            'version-group': {
                get: generateServiceCall('https://pokeapi.co/api/v2/version-group/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co/api/v2/version-group/{id}/', 'get'),
                },
            },
            version: {
                get: generateServiceCall('https://pokeapi.co/api/v2/version/', 'get'),
                byId: {
                    get: generateServiceCall('https://pokeapi.co/api/v2/version/{id}/', 'get'),
                },
            },
        },
    },
};
exports.default = PokeAPI;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2dvYWxPdXRwdXRGaWxlcy90ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7R0FXRzs7Ozs7Ozs7Ozs7QUFPSCxNQUFNLG1CQUFtQixHQUFHLENBQzFCLEdBQVcsRUFDWCxNQUFrQixFQUNsQixFQUFFO0lBQ0YsT0FBTyxDQUFPLE9BQWdCLEVBQUUsZUFBb0IsRUFBRSxFQUFFLEVBQUU7UUFDeEQsTUFBTSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQUMsR0FBRyxrQkFDOUIsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQzdCLE1BQU0sRUFBRSxNQUFNLENBQUMsV0FBVyxFQUFFLElBQ3pCLFlBQVksRUFDZixDQUFDO1FBQ0gsTUFBTSxNQUFNLEdBQUcsTUFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckMsT0FBTyxNQUFrQixDQUFDO0lBQzVCLENBQUMsQ0FBQSxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBR0Y7O0dBRUc7QUFDSCxNQUFNLE9BQU8sR0FBRztJQUNkLE9BQU8sRUFBRSxvQkFBb0I7SUFDN0IsR0FBRyxFQUFFO1FBQ0gsRUFBRSxFQUFFO1lBQ0YsT0FBTyxFQUFFO2dCQUNQLEdBQUcsRUFBRSxtQkFBbUIsQ0FRdEIsb0NBQW9DLEVBQUUsS0FBSyxDQUFDO2dCQUM5QyxJQUFJLEVBQUU7b0JBQ0osR0FBRyxFQUFFLG1CQUFtQixDQU90Qix5Q0FBeUMsRUFBRSxLQUFLLENBQUM7aUJBQ3BEO2FBQ0Y7WUFDRCxnQkFBZ0IsRUFBRTtnQkFDaEIsR0FBRyxFQUFFLG1CQUFtQixDQVF0QiwyQ0FBMkMsRUFBRSxLQUFLLENBQUM7Z0JBQ3JELElBQUksRUFBRTtvQkFDSixHQUFHLEVBQUUsbUJBQW1CLENBT3RCLGdEQUFnRCxFQUFFLEtBQUssQ0FBQztpQkFDM0Q7YUFDRjtZQUNELGNBQWMsRUFBRTtnQkFDZCxH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O1lBQ0QsSUFBSSxFQUFFO2dCQUNKLEdBQUcsRUFBRSxtQkFBbUIsQ0FRdEIsaUNBQWlDLEVBQUUsS0FBSyxDQUFDO2dCQUMzQyxJQUFJLEVBQUU7b0JBQ0osR0FBRyxFQUFFLG1CQUFtQixDQU90QixzQ0FBc0MsRUFBRSxLQUFLLENBQUM7aUJBQ2pEO2FBQ0Y7WUFDRCxlQUFlLEVBQUU7Z0JBQ2YsR0FBRyxFQUFFLG1CQUFtQixDQVF0QiwwQ0FBMEMsRUFBRSxLQUFLLENBQUM7Z0JBQ3BELElBQUksRUFBRTtvQkFDSixHQUFHLEVBQUUsbUJBQW1CLENBT3RCLCtDQUErQyxFQUFFLEtBQUssQ0FBQztpQkFDMUQ7YUFDRjtZQUNELE9BQU8sRUFBRTtnQkFDUCxHQUFHLEVBQUUsbUJBQW1CLENBUXRCLG9DQUFvQyxFQUFFLEtBQUssQ0FBQztnQkFDOUMsSUFBSSxFQUFFO29CQUNKLEdBQUcsRUFBRSxtQkFBbUIsQ0FPdEIseUNBQXlDLEVBQUUsS0FBSyxDQUFDO2lCQUNwRDthQUNGO1NBQ0Y7S0FDRjtDQUNGLENBQUM7QUFFRixrQkFBZSxPQUFPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogICAgX19fXG4gKiBfXy9fICBgLiAgLi1cIlwiXCItLlxuICogXFxfLGAgfCBcXC0nICAvICAgKWAtJylcbiAqICBcIlwiKSBgXCJgICAgIFxcICAoKGBcImBcbiAqICBfX19ZICAsICAgIC4nNyAvfFxuICogKF8sX19fLy4uLi1gIChfL18vICAgICAgRkVUQ0hFUlxuICpcbiAqXG4gKiAgWW8gdGhpcyBmaWxlIGlzIGF1dG8gZ2VuZXJhdGVkLCBubyB0b3VjaHkuXG4gKlxuICovXG5cbi8qIGVzbGludC1kaXNhYmxlIG1heC1saW5lcyAqL1xuLyogZXNsaW50LWRpc2FibGUgc29ydC1rZXlzICovXG5cbnR5cGUgSFRUUE1ldGhvZCA9ICdnZXQnIHwgJ3Bvc3QnIHwgJ3B1dCcgfCAncGF0Y2gnIHwgJ3VwZGF0ZScgfCAnZGVsZXRlJztcblxuY29uc3QgZ2VuZXJhdGVTZXJ2aWNlQ2FsbCA9IDxSZXF1ZXN0LCBSZXNwb25zZT4oXG4gIHVybDogc3RyaW5nLFxuICBtZXRob2Q6IEhUVFBNZXRob2QsXG4pID0+IHtcbiAgcmV0dXJuIGFzeW5jIChyZXF1ZXN0OiBSZXF1ZXN0LCBmZXRjaE9wdGlvbnM6IGFueSA9IHt9KSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcXVlc3QpLFxuICAgICAgbWV0aG9kOiBtZXRob2QudG9VcHBlckNhc2UoKSxcbiAgICAgIC4uLmZldGNoT3B0aW9ucyxcbiAgICB9KTtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIHJlc3VsdCBhcyBSZXNwb25zZTtcbiAgfTtcbn07XG5cblxuLyoqXG4gKiBAZGVzY3JpcHRpb25cbiAqL1xuY29uc3QgUG9rZUFQSSA9IHtcbiAgYmFzZVVybDogJ2h0dHBzOi8vcG9rZWFwaS5jbycsXG4gIGFwaToge1xuICAgIHYyOiB7XG4gICAgICBhYmlsaXR5OiB7XG4gICAgICAgIGdldDogZ2VuZXJhdGVTZXJ2aWNlQ2FsbDxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICBsaW1pdDogbnVtYmVyO1xuICAgICAgICAgICAgICBvZmZzZXQ6IG51bWJlcjtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSxcbiAgICAgICAgICBhbnlcbiAgICAgICAgPignaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9hYmlsaXR5LycsICdnZXQnKSxcbiAgICAgICAgYnlJZDoge1xuICAgICAgICAgIGdldDogZ2VuZXJhdGVTZXJ2aWNlQ2FsbDxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgaWQ6IG51bWJlcjtcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhbnlcbiAgICAgICAgICA+KCdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL2FiaWxpdHkve2lkfS8nLCAnZ2V0JyksXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgJ2JlcnJ5LWZpcm1uZXNzJzoge1xuICAgICAgICBnZXQ6IGdlbmVyYXRlU2VydmljZUNhbGw8XG4gICAgICAgICAge1xuICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgbGltaXQ6IG51bWJlcjtcbiAgICAgICAgICAgICAgb2Zmc2V0OiBudW1iZXI7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0sXG4gICAgICAgICAgYW55XG4gICAgICAgID4oJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvYmVycnktZmlybW5lc3MvJywgJ2dldCcpLFxuICAgICAgICBieUlkOiB7XG4gICAgICAgICAgZ2V0OiBnZW5lcmF0ZVNlcnZpY2VDYWxsPFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBpZDogbnVtYmVyO1xuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFueVxuICAgICAgICAgID4oJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvYmVycnktZmlybW5lc3Mve2lkfS8nLCAnZ2V0JyksXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgJ2JlcnJ5LWZsYXZvcic6IHtcbiAgICAgICAgZ2V0OiBnZW5lcmF0ZVNlcnZpY2VDYWxsPFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgIGxpbWl0OiBudW1iZXI7XG4gICAgICAgICAgICAgIG9mZnNldDogbnVtYmVyO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGFueVxuICAgICAgICA+KCdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL2JlcnJ5LWZsYXZvci8nLCAnZ2V0JyksXG4gICAgICAgIGJ5SWQ6IHtcbiAgICAgICAgICBnZXQ6IGdlbmVyYXRlU2VydmljZUNhbGw8XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgIGlkOiBudW1iZXI7XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYW55XG4gICAgICAgICAgPignaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9iZXJyeS1mbGF2b3Ive2lkfS8nLCAnZ2V0JyksXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgYmVycnk6IHtcbiAgICAgICAgZ2V0OiBnZW5lcmF0ZVNlcnZpY2VDYWxsPFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgIGxpbWl0OiBudW1iZXI7XG4gICAgICAgICAgICAgIG9mZnNldDogbnVtYmVyO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGFueVxuICAgICAgICA+KCdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL2JlcnJ5LycsICdnZXQnKSxcbiAgICAgICAgYnlJZDoge1xuICAgICAgICAgIGdldDogZ2VuZXJhdGVTZXJ2aWNlQ2FsbDxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgaWQ6IG51bWJlcjtcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhbnlcbiAgICAgICAgICA+KCdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL2JlcnJ5L3tpZH0vJywgJ2dldCcpLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGNoYXJhY3RlcmlzdGljOiB7XG4gICAgICAgIGdldDogZ2VuZXJhdGVTZXJ2aWNlQ2FsbDxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICBsaW1pdDogbnVtYmVyO1xuICAgICAgICAgICAgICBvZmZzZXQ6IG51bWJlcjtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSxcbiAgICAgICAgICBhbnlcbiAgICAgICAgPignaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9jaGFyYWN0ZXJpc3RpYy8nLCAnZ2V0JyksXG4gICAgICAgIGJ5SWQ6IHtcbiAgICAgICAgICBnZXQ6IGdlbmVyYXRlU2VydmljZUNhbGw8XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgIGlkOiBudW1iZXI7XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYW55XG4gICAgICAgICAgPignaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9jaGFyYWN0ZXJpc3RpYy97aWR9LycsICdnZXQnKSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICAnY29udGVzdC1lZmZlY3QnOiB7XG4gICAgICAgIGdldDogZ2VuZXJhdGVTZXJ2aWNlQ2FsbDxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICBsaW1pdDogbnVtYmVyO1xuICAgICAgICAgICAgICBvZmZzZXQ6IG51bWJlcjtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSxcbiAgICAgICAgICBhbnlcbiAgICAgICAgPignaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9jb250ZXN0LWVmZmVjdC8nLCAnZ2V0JyksXG4gICAgICAgIGJ5SWQ6IHtcbiAgICAgICAgICBnZXQ6IGdlbmVyYXRlU2VydmljZUNhbGw8XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgIGlkOiBudW1iZXI7XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYW55XG4gICAgICAgICAgPignaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9jb250ZXN0LWVmZmVjdC97aWR9LycsICdnZXQnKSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICAnY29udGVzdC10eXBlJzoge1xuICAgICAgICBnZXQ6IGdlbmVyYXRlU2VydmljZUNhbGw8XG4gICAgICAgICAge1xuICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgbGltaXQ6IG51bWJlcjtcbiAgICAgICAgICAgICAgb2Zmc2V0OiBudW1iZXI7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0sXG4gICAgICAgICAgYW55XG4gICAgICAgID4oJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvY29udGVzdC10eXBlLycsICdnZXQnKSxcbiAgICAgICAgYnlJZDoge1xuICAgICAgICAgIGdldDogZ2VuZXJhdGVTZXJ2aWNlQ2FsbDxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgaWQ6IG51bWJlcjtcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhbnlcbiAgICAgICAgICA+KCdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL2NvbnRlc3QtdHlwZS97aWR9LycsICdnZXQnKSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICAnZWdnLWdyb3VwJzoge1xuICAgICAgICBnZXQ6IGdlbmVyYXRlU2VydmljZUNhbGw8XG4gICAgICAgICAge1xuICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgbGltaXQ6IG51bWJlcjtcbiAgICAgICAgICAgICAgb2Zmc2V0OiBudW1iZXI7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0sXG4gICAgICAgICAgYW55XG4gICAgICAgID4oJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvZWdnLWdyb3VwLycsICdnZXQnKSxcbiAgICAgICAgYnlJZDoge1xuICAgICAgICAgIGdldDogZ2VuZXJhdGVTZXJ2aWNlQ2FsbDxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgaWQ6IG51bWJlcjtcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhbnlcbiAgICAgICAgICA+KCdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL2VnZy1ncm91cC97aWR9LycsICdnZXQnKSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICAnZW5jb3VudGVyLWNvbmRpdGlvbi12YWx1ZSc6IHtcbiAgICAgICAgZ2V0OiBnZW5lcmF0ZVNlcnZpY2VDYWxsPFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgIGxpbWl0OiBudW1iZXI7XG4gICAgICAgICAgICAgIG9mZnNldDogbnVtYmVyO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGFueVxuICAgICAgICA+KCdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL2VuY291bnRlci1jb25kaXRpb24tdmFsdWUvJywgJ2dldCcpLFxuICAgICAgICBieUlkOiB7XG4gICAgICAgICAgZ2V0OiBnZW5lcmF0ZVNlcnZpY2VDYWxsPFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBpZDogbnVtYmVyO1xuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFueVxuICAgICAgICAgID4oJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvZW5jb3VudGVyLWNvbmRpdGlvbi12YWx1ZS97aWR9LycsICdnZXQnKSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICAnZW5jb3VudGVyLWNvbmRpdGlvbic6IHtcbiAgICAgICAgZ2V0OiBnZW5lcmF0ZVNlcnZpY2VDYWxsPFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgIGxpbWl0OiBudW1iZXI7XG4gICAgICAgICAgICAgIG9mZnNldDogbnVtYmVyO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGFueVxuICAgICAgICA+KCdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL2VuY291bnRlci1jb25kaXRpb24vJywgJ2dldCcpLFxuICAgICAgICBieUlkOiB7XG4gICAgICAgICAgZ2V0OiBnZW5lcmF0ZVNlcnZpY2VDYWxsPFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBpZDogbnVtYmVyO1xuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFueVxuICAgICAgICAgID4oJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvZW5jb3VudGVyLWNvbmRpdGlvbi97aWR9LycsICdnZXQnKSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICAnZW5jb3VudGVyLW1ldGhvZCc6IHtcbiAgICAgICAgZ2V0OiBnZW5lcmF0ZVNlcnZpY2VDYWxsPFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgIGxpbWl0OiBudW1iZXI7XG4gICAgICAgICAgICAgIG9mZnNldDogbnVtYmVyO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGFueVxuICAgICAgICA+KCdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL2VuY291bnRlci1tZXRob2QvJywgJ2dldCcpLFxuICAgICAgICBieUlkOiB7XG4gICAgICAgICAgZ2V0OiBnZW5lcmF0ZVNlcnZpY2VDYWxsPFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBpZDogbnVtYmVyO1xuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFueVxuICAgICAgICAgID4oJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvZW5jb3VudGVyLW1ldGhvZC97aWR9LycsICdnZXQnKSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICAnZXZvbHV0aW9uLWNoYWluJzoge1xuICAgICAgICBnZXQ6IGdlbmVyYXRlU2VydmljZUNhbGw8XG4gICAgICAgICAge1xuICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgbGltaXQ6IG51bWJlcjtcbiAgICAgICAgICAgICAgb2Zmc2V0OiBudW1iZXI7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0sXG4gICAgICAgICAgYW55XG4gICAgICAgID4oJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvZXZvbHV0aW9uLWNoYWluLycsICdnZXQnKSxcbiAgICAgICAgYnlJZDoge1xuICAgICAgICAgIGdldDogZ2VuZXJhdGVTZXJ2aWNlQ2FsbDxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgaWQ6IG51bWJlcjtcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhbnlcbiAgICAgICAgICA+KCdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL2V2b2x1dGlvbi1jaGFpbi97aWR9LycsICdnZXQnKSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICAnZXZvbHV0aW9uLXRyaWdnZXInOiB7XG4gICAgICAgIGdldDogZ2VuZXJhdGVTZXJ2aWNlQ2FsbDxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICBsaW1pdDogbnVtYmVyO1xuICAgICAgICAgICAgICBvZmZzZXQ6IG51bWJlcjtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSxcbiAgICAgICAgICBhbnlcbiAgICAgICAgPignaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9ldm9sdXRpb24tdHJpZ2dlci8nLCAnZ2V0JyksXG4gICAgICAgIGJ5SWQ6IHtcbiAgICAgICAgICBnZXQ6IGdlbmVyYXRlU2VydmljZUNhbGw8XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgIGlkOiBudW1iZXI7XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYW55XG4gICAgICAgICAgPignaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9ldm9sdXRpb24tdHJpZ2dlci97aWR9LycsICdnZXQnKSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBnZW5kZXI6IHtcbiAgICAgICAgZ2V0OiBnZW5lcmF0ZVNlcnZpY2VDYWxsPFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgIGxpbWl0OiBudW1iZXI7XG4gICAgICAgICAgICAgIG9mZnNldDogbnVtYmVyO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGFueVxuICAgICAgICA+KCdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL2dlbmRlci8nLCAnZ2V0JyksXG4gICAgICAgIGJ5SWQ6IHtcbiAgICAgICAgICBnZXQ6IGdlbmVyYXRlU2VydmljZUNhbGw8XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgIGlkOiBudW1iZXI7XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYW55XG4gICAgICAgICAgPignaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9nZW5kZXIve2lkfS8nLCAnZ2V0JyksXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgZ2VuZXJhdGlvbjoge1xuICAgICAgICBnZXQ6IGdlbmVyYXRlU2VydmljZUNhbGw8XG4gICAgICAgICAge1xuICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgbGltaXQ6IG51bWJlcjtcbiAgICAgICAgICAgICAgb2Zmc2V0OiBudW1iZXI7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0sXG4gICAgICAgICAgYW55XG4gICAgICAgID4oJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvZ2VuZXJhdGlvbi8nLCAnZ2V0JyksXG4gICAgICAgIGJ5SWQ6IHtcbiAgICAgICAgICBnZXQ6IGdlbmVyYXRlU2VydmljZUNhbGw8XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgIGlkOiBudW1iZXI7XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYW55XG4gICAgICAgICAgPignaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9nZW5lcmF0aW9uL3tpZH0vJywgJ2dldCcpLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgICdncm93dGgtcmF0ZSc6IHtcbiAgICAgICAgZ2V0OiBnZW5lcmF0ZVNlcnZpY2VDYWxsPFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgIGxpbWl0OiBudW1iZXI7XG4gICAgICAgICAgICAgIG9mZnNldDogbnVtYmVyO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGFueVxuICAgICAgICA+KCdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL2dyb3d0aC1yYXRlLycsICdnZXQnKSxcbiAgICAgICAgYnlJZDoge1xuICAgICAgICAgIGdldDogZ2VuZXJhdGVTZXJ2aWNlQ2FsbDxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgaWQ6IG51bWJlcjtcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhbnlcbiAgICAgICAgICA+KCdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL2dyb3d0aC1yYXRlL3tpZH0vJywgJ2dldCcpLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgICdpdGVtLWF0dHJpYnV0ZSc6IHtcbiAgICAgICAgZ2V0OiBnZW5lcmF0ZVNlcnZpY2VDYWxsPFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgIGxpbWl0OiBudW1iZXI7XG4gICAgICAgICAgICAgIG9mZnNldDogbnVtYmVyO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGFueVxuICAgICAgICA+KCdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL2l0ZW0tYXR0cmlidXRlLycsICdnZXQnKSxcbiAgICAgICAgYnlJZDoge1xuICAgICAgICAgIGdldDogZ2VuZXJhdGVTZXJ2aWNlQ2FsbDxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgaWQ6IG51bWJlcjtcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhbnlcbiAgICAgICAgICA+KCdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL2l0ZW0tYXR0cmlidXRlL3tpZH0vJywgJ2dldCcpLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgICdpdGVtLWNhdGVnb3J5Jzoge1xuICAgICAgICBnZXQ6IGdlbmVyYXRlU2VydmljZUNhbGw8XG4gICAgICAgICAge1xuICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgbGltaXQ6IG51bWJlcjtcbiAgICAgICAgICAgICAgb2Zmc2V0OiBudW1iZXI7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0sXG4gICAgICAgICAgYW55XG4gICAgICAgID4oJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvaXRlbS1jYXRlZ29yeS8nLCAnZ2V0JyksXG4gICAgICAgIGJ5SWQ6IHtcbiAgICAgICAgICBnZXQ6IGdlbmVyYXRlU2VydmljZUNhbGw8XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgIGlkOiBudW1iZXI7XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYW55XG4gICAgICAgICAgPignaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9pdGVtLWNhdGVnb3J5L3tpZH0vJywgJ2dldCcpLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgICdpdGVtLWZsaW5nLWVmZmVjdCc6IHtcbiAgICAgICAgZ2V0OiBnZW5lcmF0ZVNlcnZpY2VDYWxsPFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgIGxpbWl0OiBudW1iZXI7XG4gICAgICAgICAgICAgIG9mZnNldDogbnVtYmVyO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGFueVxuICAgICAgICA+KCdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL2l0ZW0tZmxpbmctZWZmZWN0LycsICdnZXQnKSxcbiAgICAgICAgYnlJZDoge1xuICAgICAgICAgIGdldDogZ2VuZXJhdGVTZXJ2aWNlQ2FsbDxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgaWQ6IG51bWJlcjtcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhbnlcbiAgICAgICAgICA+KCdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL2l0ZW0tZmxpbmctZWZmZWN0L3tpZH0vJywgJ2dldCcpLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgICdpdGVtLXBvY2tldCc6IHtcbiAgICAgICAgZ2V0OiBnZW5lcmF0ZVNlcnZpY2VDYWxsPFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgIGxpbWl0OiBudW1iZXI7XG4gICAgICAgICAgICAgIG9mZnNldDogbnVtYmVyO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGFueVxuICAgICAgICA+KCdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL2l0ZW0tcG9ja2V0LycsICdnZXQnKSxcbiAgICAgICAgYnlJZDoge1xuICAgICAgICAgIGdldDogZ2VuZXJhdGVTZXJ2aWNlQ2FsbDxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgaWQ6IG51bWJlcjtcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhbnlcbiAgICAgICAgICA+KCdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL2l0ZW0tcG9ja2V0L3tpZH0vJywgJ2dldCcpLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGl0ZW06IHtcbiAgICAgICAgZ2V0OiBnZW5lcmF0ZVNlcnZpY2VDYWxsPFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgIGxpbWl0OiBudW1iZXI7XG4gICAgICAgICAgICAgIG9mZnNldDogbnVtYmVyO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGFueVxuICAgICAgICA+KCdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL2l0ZW0vJywgJ2dldCcpLFxuICAgICAgICBieUlkOiB7XG4gICAgICAgICAgZ2V0OiBnZW5lcmF0ZVNlcnZpY2VDYWxsPFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBpZDogbnVtYmVyO1xuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFueVxuICAgICAgICAgID4oJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvaXRlbS97aWR9LycsICdnZXQnKSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBsYW5ndWFnZToge1xuICAgICAgICBnZXQ6IGdlbmVyYXRlU2VydmljZUNhbGw8XG4gICAgICAgICAge1xuICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgbGltaXQ6IG51bWJlcjtcbiAgICAgICAgICAgICAgb2Zmc2V0OiBudW1iZXI7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0sXG4gICAgICAgICAgYW55XG4gICAgICAgID4oJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvbGFuZ3VhZ2UvJywgJ2dldCcpLFxuICAgICAgICBieUlkOiB7XG4gICAgICAgICAgZ2V0OiBnZW5lcmF0ZVNlcnZpY2VDYWxsPFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBpZDogbnVtYmVyO1xuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFueVxuICAgICAgICAgID4oJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvbGFuZ3VhZ2Uve2lkfS8nLCAnZ2V0JyksXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgJ2xvY2F0aW9uLWFyZWEnOiB7XG4gICAgICAgIGdldDogZ2VuZXJhdGVTZXJ2aWNlQ2FsbDxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICBsaW1pdDogbnVtYmVyO1xuICAgICAgICAgICAgICBvZmZzZXQ6IG51bWJlcjtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSxcbiAgICAgICAgICBhbnlcbiAgICAgICAgPignaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9sb2NhdGlvbi1hcmVhLycsICdnZXQnKSxcbiAgICAgICAgYnlJZDoge1xuICAgICAgICAgIGdldDogZ2VuZXJhdGVTZXJ2aWNlQ2FsbDxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgaWQ6IG51bWJlcjtcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhbnlcbiAgICAgICAgICA+KCdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL2xvY2F0aW9uLWFyZWEve2lkfS8nLCAnZ2V0JyksXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgbG9jYXRpb246IHtcbiAgICAgICAgZ2V0OiBnZW5lcmF0ZVNlcnZpY2VDYWxsPFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgIGxpbWl0OiBudW1iZXI7XG4gICAgICAgICAgICAgIG9mZnNldDogbnVtYmVyO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGFueVxuICAgICAgICA+KCdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL2xvY2F0aW9uLycsICdnZXQnKSxcbiAgICAgICAgYnlJZDoge1xuICAgICAgICAgIGdldDogZ2VuZXJhdGVTZXJ2aWNlQ2FsbDxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgaWQ6IG51bWJlcjtcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhbnlcbiAgICAgICAgICA+KCdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL2xvY2F0aW9uL3tpZH0vJywgJ2dldCcpLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIG1hY2hpbmU6IHtcbiAgICAgICAgZ2V0OiBnZW5lcmF0ZVNlcnZpY2VDYWxsPFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgIGxpbWl0OiBudW1iZXI7XG4gICAgICAgICAgICAgIG9mZnNldDogbnVtYmVyO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGFueVxuICAgICAgICA+KCdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL21hY2hpbmUvJywgJ2dldCcpLFxuICAgICAgICBieUlkOiB7XG4gICAgICAgICAgZ2V0OiBnZW5lcmF0ZVNlcnZpY2VDYWxsPFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBpZDogbnVtYmVyO1xuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFueVxuICAgICAgICAgID4oJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvbWFjaGluZS97aWR9LycsICdnZXQnKSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICAnbW92ZS1haWxtZW50Jzoge1xuICAgICAgICBnZXQ6IGdlbmVyYXRlU2VydmljZUNhbGw8XG4gICAgICAgICAge1xuICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgbGltaXQ6IG51bWJlcjtcbiAgICAgICAgICAgICAgb2Zmc2V0OiBudW1iZXI7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0sXG4gICAgICAgICAgYW55XG4gICAgICAgID4oJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvbW92ZS1haWxtZW50LycsICdnZXQnKSxcbiAgICAgICAgYnlJZDoge1xuICAgICAgICAgIGdldDogZ2VuZXJhdGVTZXJ2aWNlQ2FsbDxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgaWQ6IG51bWJlcjtcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhbnlcbiAgICAgICAgICA+KCdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL21vdmUtYWlsbWVudC97aWR9LycsICdnZXQnKSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICAnbW92ZS1iYXR0bGUtc3R5bGUnOiB7XG4gICAgICAgIGdldDogZ2VuZXJhdGVTZXJ2aWNlQ2FsbDxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICBsaW1pdDogbnVtYmVyO1xuICAgICAgICAgICAgICBvZmZzZXQ6IG51bWJlcjtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSxcbiAgICAgICAgICBhbnlcbiAgICAgICAgPignaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9tb3ZlLWJhdHRsZS1zdHlsZS8nLCAnZ2V0JyksXG4gICAgICAgIGJ5SWQ6IHtcbiAgICAgICAgICBnZXQ6IGdlbmVyYXRlU2VydmljZUNhbGw8XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgIGlkOiBudW1iZXI7XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYW55XG4gICAgICAgICAgPignaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9tb3ZlLWJhdHRsZS1zdHlsZS97aWR9LycsICdnZXQnKSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICAnbW92ZS1jYXRlZ29yeSc6IHtcbiAgICAgICAgZ2V0OiBnZW5lcmF0ZVNlcnZpY2VDYWxsPFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgIGxpbWl0OiBudW1iZXI7XG4gICAgICAgICAgICAgIG9mZnNldDogbnVtYmVyO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGFueVxuICAgICAgICA+KCdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL21vdmUtY2F0ZWdvcnkvJywgJ2dldCcpLFxuICAgICAgICBieUlkOiB7XG4gICAgICAgICAgZ2V0OiBnZW5lcmF0ZVNlcnZpY2VDYWxsPFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBpZDogbnVtYmVyO1xuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFueVxuICAgICAgICAgID4oJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvbW92ZS1jYXRlZ29yeS97aWR9LycsICdnZXQnKSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICAnbW92ZS1kYW1hZ2UtY2xhc3MnOiB7XG4gICAgICAgIGdldDogZ2VuZXJhdGVTZXJ2aWNlQ2FsbDxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICBsaW1pdDogbnVtYmVyO1xuICAgICAgICAgICAgICBvZmZzZXQ6IG51bWJlcjtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSxcbiAgICAgICAgICBhbnlcbiAgICAgICAgPignaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9tb3ZlLWRhbWFnZS1jbGFzcy8nLCAnZ2V0JyksXG4gICAgICAgIGJ5SWQ6IHtcbiAgICAgICAgICBnZXQ6IGdlbmVyYXRlU2VydmljZUNhbGw8XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgIGlkOiBudW1iZXI7XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYW55XG4gICAgICAgICAgPignaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9tb3ZlLWRhbWFnZS1jbGFzcy97aWR9LycsICdnZXQnKSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICAnbW92ZS1sZWFybi1tZXRob2QnOiB7XG4gICAgICAgIGdldDogZ2VuZXJhdGVTZXJ2aWNlQ2FsbDxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICBsaW1pdDogbnVtYmVyO1xuICAgICAgICAgICAgICBvZmZzZXQ6IG51bWJlcjtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSxcbiAgICAgICAgICBhbnlcbiAgICAgICAgPignaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9tb3ZlLWxlYXJuLW1ldGhvZC8nLCAnZ2V0JyksXG4gICAgICAgIGJ5SWQ6IHtcbiAgICAgICAgICBnZXQ6IGdlbmVyYXRlU2VydmljZUNhbGw8XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgIGlkOiBudW1iZXI7XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYW55XG4gICAgICAgICAgPignaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9tb3ZlLWxlYXJuLW1ldGhvZC97aWR9LycsICdnZXQnKSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICAnbW92ZS10YXJnZXQnOiB7XG4gICAgICAgIGdldDogZ2VuZXJhdGVTZXJ2aWNlQ2FsbDxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICBsaW1pdDogbnVtYmVyO1xuICAgICAgICAgICAgICBvZmZzZXQ6IG51bWJlcjtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSxcbiAgICAgICAgICBhbnlcbiAgICAgICAgPignaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9tb3ZlLXRhcmdldC8nLCAnZ2V0JyksXG4gICAgICAgIGJ5SWQ6IHtcbiAgICAgICAgICBnZXQ6IGdlbmVyYXRlU2VydmljZUNhbGw8XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgIGlkOiBudW1iZXI7XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYW55XG4gICAgICAgICAgPignaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9tb3ZlLXRhcmdldC97aWR9LycsICdnZXQnKSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBtb3ZlOiB7XG4gICAgICAgIGdldDogZ2VuZXJhdGVTZXJ2aWNlQ2FsbDxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICBsaW1pdDogbnVtYmVyO1xuICAgICAgICAgICAgICBvZmZzZXQ6IG51bWJlcjtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSxcbiAgICAgICAgICBhbnlcbiAgICAgICAgPignaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9tb3ZlLycsICdnZXQnKSxcbiAgICAgICAgYnlJZDoge1xuICAgICAgICAgIGdldDogZ2VuZXJhdGVTZXJ2aWNlQ2FsbDxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgaWQ6IG51bWJlcjtcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhbnlcbiAgICAgICAgICA+KCdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL21vdmUve2lkfS8nLCAnZ2V0JyksXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgbmF0dXJlOiB7XG4gICAgICAgIGdldDogZ2VuZXJhdGVTZXJ2aWNlQ2FsbDxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICBsaW1pdDogbnVtYmVyO1xuICAgICAgICAgICAgICBvZmZzZXQ6IG51bWJlcjtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSxcbiAgICAgICAgICBhbnlcbiAgICAgICAgPignaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9uYXR1cmUvJywgJ2dldCcpLFxuICAgICAgICBieUlkOiB7XG4gICAgICAgICAgZ2V0OiBnZW5lcmF0ZVNlcnZpY2VDYWxsPFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBpZDogbnVtYmVyO1xuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFueVxuICAgICAgICAgID4oJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvbmF0dXJlL3tpZH0vJywgJ2dldCcpLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgICdwYWwtcGFyay1hcmVhJzoge1xuICAgICAgICBnZXQ6IGdlbmVyYXRlU2VydmljZUNhbGw8XG4gICAgICAgICAge1xuICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgbGltaXQ6IG51bWJlcjtcbiAgICAgICAgICAgICAgb2Zmc2V0OiBudW1iZXI7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0sXG4gICAgICAgICAgYW55XG4gICAgICAgID4oJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcGFsLXBhcmstYXJlYS8nLCAnZ2V0JyksXG4gICAgICAgIGJ5SWQ6IHtcbiAgICAgICAgICBnZXQ6IGdlbmVyYXRlU2VydmljZUNhbGw8XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgIGlkOiBudW1iZXI7XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYW55XG4gICAgICAgICAgPignaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wYWwtcGFyay1hcmVhL3tpZH0vJywgJ2dldCcpLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgICdwb2tlYXRobG9uLXN0YXQnOiB7XG4gICAgICAgIGdldDogZ2VuZXJhdGVTZXJ2aWNlQ2FsbDxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICBsaW1pdDogbnVtYmVyO1xuICAgICAgICAgICAgICBvZmZzZXQ6IG51bWJlcjtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSxcbiAgICAgICAgICBhbnlcbiAgICAgICAgPignaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlYXRobG9uLXN0YXQvJywgJ2dldCcpLFxuICAgICAgICBieUlkOiB7XG4gICAgICAgICAgZ2V0OiBnZW5lcmF0ZVNlcnZpY2VDYWxsPFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBpZDogbnVtYmVyO1xuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFueVxuICAgICAgICAgID4oJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZWF0aGxvbi1zdGF0L3tpZH0vJywgJ2dldCcpLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHBva2VkZXg6IHtcbiAgICAgICAgZ2V0OiBnZW5lcmF0ZVNlcnZpY2VDYWxsPFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgIGxpbWl0OiBudW1iZXI7XG4gICAgICAgICAgICAgIG9mZnNldDogbnVtYmVyO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGFueVxuICAgICAgICA+KCdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2VkZXgvJywgJ2dldCcpLFxuICAgICAgICBieUlkOiB7XG4gICAgICAgICAgZ2V0OiBnZW5lcmF0ZVNlcnZpY2VDYWxsPFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBpZDogbnVtYmVyO1xuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFueVxuICAgICAgICAgID4oJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZWRleC97aWR9LycsICdnZXQnKSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICAncG9rZW1vbi1jb2xvcic6IHtcbiAgICAgICAgZ2V0OiBnZW5lcmF0ZVNlcnZpY2VDYWxsPFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgIGxpbWl0OiBudW1iZXI7XG4gICAgICAgICAgICAgIG9mZnNldDogbnVtYmVyO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGFueVxuICAgICAgICA+KCdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24tY29sb3IvJywgJ2dldCcpLFxuICAgICAgICBieUlkOiB7XG4gICAgICAgICAgZ2V0OiBnZW5lcmF0ZVNlcnZpY2VDYWxsPFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBpZDogbnVtYmVyO1xuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFueVxuICAgICAgICAgID4oJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbi1jb2xvci97aWR9LycsICdnZXQnKSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICAncG9rZW1vbi1mb3JtJzoge1xuICAgICAgICBnZXQ6IGdlbmVyYXRlU2VydmljZUNhbGw8XG4gICAgICAgICAge1xuICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgbGltaXQ6IG51bWJlcjtcbiAgICAgICAgICAgICAgb2Zmc2V0OiBudW1iZXI7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0sXG4gICAgICAgICAgYW55XG4gICAgICAgID4oJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbi1mb3JtLycsICdnZXQnKSxcbiAgICAgICAgYnlJZDoge1xuICAgICAgICAgIGdldDogZ2VuZXJhdGVTZXJ2aWNlQ2FsbDxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgaWQ6IG51bWJlcjtcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhbnlcbiAgICAgICAgICA+KCdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24tZm9ybS97aWR9LycsICdnZXQnKSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICAncG9rZW1vbi1oYWJpdGF0Jzoge1xuICAgICAgICBnZXQ6IGdlbmVyYXRlU2VydmljZUNhbGw8XG4gICAgICAgICAge1xuICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgbGltaXQ6IG51bWJlcjtcbiAgICAgICAgICAgICAgb2Zmc2V0OiBudW1iZXI7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0sXG4gICAgICAgICAgYW55XG4gICAgICAgID4oJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbi1oYWJpdGF0LycsICdnZXQnKSxcbiAgICAgICAgYnlJZDoge1xuICAgICAgICAgIGdldDogZ2VuZXJhdGVTZXJ2aWNlQ2FsbDxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgaWQ6IG51bWJlcjtcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhbnlcbiAgICAgICAgICA+KCdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24taGFiaXRhdC97aWR9LycsICdnZXQnKSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICAncG9rZW1vbi1zaGFwZSc6IHtcbiAgICAgICAgZ2V0OiBnZW5lcmF0ZVNlcnZpY2VDYWxsPFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgIGxpbWl0OiBudW1iZXI7XG4gICAgICAgICAgICAgIG9mZnNldDogbnVtYmVyO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGFueVxuICAgICAgICA+KCdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24tc2hhcGUvJywgJ2dldCcpLFxuICAgICAgICBieUlkOiB7XG4gICAgICAgICAgZ2V0OiBnZW5lcmF0ZVNlcnZpY2VDYWxsPFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBpZDogbnVtYmVyO1xuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFueVxuICAgICAgICAgID4oJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbi1zaGFwZS97aWR9LycsICdnZXQnKSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICAncG9rZW1vbi1zcGVjaWVzJzoge1xuICAgICAgICBnZXQ6IGdlbmVyYXRlU2VydmljZUNhbGw8XG4gICAgICAgICAge1xuICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgbGltaXQ6IG51bWJlcjtcbiAgICAgICAgICAgICAgb2Zmc2V0OiBudW1iZXI7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0sXG4gICAgICAgICAgYW55XG4gICAgICAgID4oJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbi1zcGVjaWVzLycsICdnZXQnKSxcbiAgICAgICAgYnlJZDoge1xuICAgICAgICAgIGdldDogZ2VuZXJhdGVTZXJ2aWNlQ2FsbDxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgaWQ6IG51bWJlcjtcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhbnlcbiAgICAgICAgICA+KCdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24tc3BlY2llcy97aWR9LycsICdnZXQnKSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBwb2tlbW9uOiB7XG4gICAgICAgIGdldDogZ2VuZXJhdGVTZXJ2aWNlQ2FsbDxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICBsaW1pdDogbnVtYmVyO1xuICAgICAgICAgICAgICBvZmZzZXQ6IG51bWJlcjtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSxcbiAgICAgICAgICBhbnlcbiAgICAgICAgPignaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uLycsICdnZXQnKSxcbiAgICAgICAgYnlJZDoge1xuICAgICAgICAgIGdldDogZ2VuZXJhdGVTZXJ2aWNlQ2FsbDxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgaWQ6IG51bWJlcjtcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhbnlcbiAgICAgICAgICA+KCdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24ve2lkfS8nLCAnZ2V0JyksXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgcmVnaW9uOiB7XG4gICAgICAgIGdldDogZ2VuZXJhdGVTZXJ2aWNlQ2FsbDxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICBsaW1pdDogbnVtYmVyO1xuICAgICAgICAgICAgICBvZmZzZXQ6IG51bWJlcjtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSxcbiAgICAgICAgICBhbnlcbiAgICAgICAgPignaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9yZWdpb24vJywgJ2dldCcpLFxuICAgICAgICBieUlkOiB7XG4gICAgICAgICAgZ2V0OiBnZW5lcmF0ZVNlcnZpY2VDYWxsPFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBpZDogbnVtYmVyO1xuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFueVxuICAgICAgICAgID4oJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcmVnaW9uL3tpZH0vJywgJ2dldCcpLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHN0YXQ6IHtcbiAgICAgICAgZ2V0OiBnZW5lcmF0ZVNlcnZpY2VDYWxsPFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgIGxpbWl0OiBudW1iZXI7XG4gICAgICAgICAgICAgIG9mZnNldDogbnVtYmVyO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGFueVxuICAgICAgICA+KCdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3N0YXQvJywgJ2dldCcpLFxuICAgICAgICBieUlkOiB7XG4gICAgICAgICAgZ2V0OiBnZW5lcmF0ZVNlcnZpY2VDYWxsPFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBpZDogbnVtYmVyO1xuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFueVxuICAgICAgICAgID4oJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvc3RhdC97aWR9LycsICdnZXQnKSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICAnc3VwZXItY29udGVzdC1lZmZlY3QnOiB7XG4gICAgICAgIGdldDogZ2VuZXJhdGVTZXJ2aWNlQ2FsbDxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICBsaW1pdDogbnVtYmVyO1xuICAgICAgICAgICAgICBvZmZzZXQ6IG51bWJlcjtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSxcbiAgICAgICAgICBhbnlcbiAgICAgICAgPignaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9zdXBlci1jb250ZXN0LWVmZmVjdC8nLCAnZ2V0JyksXG4gICAgICAgIGJ5SWQ6IHtcbiAgICAgICAgICBnZXQ6IGdlbmVyYXRlU2VydmljZUNhbGw8XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgIGlkOiBudW1iZXI7XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYW55XG4gICAgICAgICAgPignaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9zdXBlci1jb250ZXN0LWVmZmVjdC97aWR9LycsICdnZXQnKSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB0eXBlOiB7XG4gICAgICAgIGdldDogZ2VuZXJhdGVTZXJ2aWNlQ2FsbDxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICBsaW1pdDogbnVtYmVyO1xuICAgICAgICAgICAgICBvZmZzZXQ6IG51bWJlcjtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSxcbiAgICAgICAgICBhbnlcbiAgICAgICAgPignaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi90eXBlLycsICdnZXQnKSxcbiAgICAgICAgYnlJZDoge1xuICAgICAgICAgIGdldDogZ2VuZXJhdGVTZXJ2aWNlQ2FsbDxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgaWQ6IG51bWJlcjtcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhbnlcbiAgICAgICAgICA+KCdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3R5cGUve2lkfS8nLCAnZ2V0JyksXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgJ3ZlcnNpb24tZ3JvdXAnOiB7XG4gICAgICAgIGdldDogZ2VuZXJhdGVTZXJ2aWNlQ2FsbDxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICBsaW1pdDogbnVtYmVyO1xuICAgICAgICAgICAgICBvZmZzZXQ6IG51bWJlcjtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSxcbiAgICAgICAgICBhbnlcbiAgICAgICAgPignaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi92ZXJzaW9uLWdyb3VwLycsICdnZXQnKSxcbiAgICAgICAgYnlJZDoge1xuICAgICAgICAgIGdldDogZ2VuZXJhdGVTZXJ2aWNlQ2FsbDxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgaWQ6IG51bWJlcjtcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhbnlcbiAgICAgICAgICA+KCdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3ZlcnNpb24tZ3JvdXAve2lkfS8nLCAnZ2V0JyksXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgdmVyc2lvbjoge1xuICAgICAgICBnZXQ6IGdlbmVyYXRlU2VydmljZUNhbGw8XG4gICAgICAgICAge1xuICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgbGltaXQ6IG51bWJlcjtcbiAgICAgICAgICAgICAgb2Zmc2V0OiBudW1iZXI7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0sXG4gICAgICAgICAgYW55XG4gICAgICAgID4oJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvdmVyc2lvbi8nLCAnZ2V0JyksXG4gICAgICAgIGJ5SWQ6IHtcbiAgICAgICAgICBnZXQ6IGdlbmVyYXRlU2VydmljZUNhbGw8XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgIGlkOiBudW1iZXI7XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYW55XG4gICAgICAgICAgPignaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi92ZXJzaW9uL3tpZH0vJywgJ2dldCcpLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9rZUFQSTsiXX0=