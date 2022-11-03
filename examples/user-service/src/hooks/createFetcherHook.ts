import { useQuery } from "@tanstack/react-query";
import { UserService } from "../services";
import {
  BoomSportsUserServiceMetaData,
  FetcherService,
  HTTPMethod,
  RequestType,
  ResponseType,
} from "../services/UserService";

type FetcherServiceMetadata = {
  successStatusCodes: readonly string[];
  errorStatusCodes: readonly string[];
  method: HTTPMethod;
};

type Queries<
  ServiceMap extends Record<string, FetcherService>,
  MetaDataMap extends {
    [k in keyof ServiceMap]: FetcherServiceMetadata;
  }
> = {
  [k in keyof ServiceMap]: ReturnType<
    typeof createFetcherQuery<
      SuccessStatusCodes<MetaDataMap[k]>,
      ErrorStatusCodes<MetaDataMap[k]>,
      ServiceMap[k]
    >
  >;
};

type SuccessStatusCodes<MetaData extends FetcherServiceMetadata> =
  MetaData["successStatusCodes"][number];
type ErrorStatusCodes<MetaData extends FetcherServiceMetadata> =
  MetaData["errorStatusCodes"][number];

const createFetcherQuery = <
  SuccessStatusCodes extends string,
  ErrorStatusCodes extends string,
  F extends FetcherService
>(
  queryKey: string,
  fetcherService: F,
  fetcherServiceMetadata: FetcherServiceMetadata
) => {
  return (request: RequestType<typeof fetcherService>) =>
    useQuery<
      ResponseType<typeof fetcherService, SuccessStatusCodes>,
      ResponseType<typeof fetcherService, ErrorStatusCodes>
    >([queryKey], {
      queryFn: () =>
        new Promise((resolve, reject) => {
          const callbackObject: Record<
            number | "fallback",
            typeof resolve | typeof reject
          > = { fallback: reject };

          fetcherServiceMetadata.successStatusCodes.forEach(
            (key) => (callbackObject[Number(key)] = resolve)
          );

          fetcherServiceMetadata.errorStatusCodes.forEach(
            (key) => (callbackObject[Number(key)] = reject)
          );

          fetcherService(request, callbackObject);
        }),
    });
};

const createFetcherQueries = <
  ServiceMap extends Record<string, FetcherService>,
  ServiceMetaDataMap extends { [k in keyof ServiceMap]: FetcherServiceMetadata }
>(
  services: ServiceMap,
  metaDataMap: ServiceMetaDataMap
) => {
  const queries: Queries<typeof services, typeof metaDataMap> = {} as Queries<
    typeof services,
    typeof metaDataMap
  >;

  const servicesArray = Object.entries(services);
  for (let i = 0; i < servicesArray.length; i++) {
    const servicesEntry = servicesArray[i];
    if (!servicesEntry) {
      continue;
    }

    const [serviceName, service]: [
      serviceName: keyof ServiceMap,
      service: FetcherService
    ] = servicesEntry;

    const metaData = metaDataMap[serviceName];
    if (!metaData) {
      continue;
    }

    queries[serviceName] = createFetcherQuery(serviceName, service, metaData);
  }

  return queries;
};

export const useUserQueries = createFetcherQueries(
  UserService,
  BoomSportsUserServiceMetaData
);

export default createFetcherQuery;
