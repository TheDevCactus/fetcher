import { useQuery } from "@tanstack/react-query";
import { UserService } from "../services";
import {
  FetcherService,
  RequestType,
  ResponseType,
} from "../services/UserService";

const createFetcherQuery = <F extends FetcherService>(
  queryKey: string,
  fetcherService: F
) => {
  return (request: RequestType<typeof fetcherService>) => {
    const args = useQuery<
      ResponseType<typeof fetcherService, "200">,
      ResponseType<typeof fetcherService, "500">
    >([queryKey], {
      queryFn: async () =>
        new Promise((resolve, reject) => {
          fetcherService(request, {
            200: resolve,
            201: resolve,
            202: resolve,
            203: resolve,
            204: resolve,
            400: reject,
            401: reject,
            402: reject,
            403: reject,
            404: reject,
            500: reject,
            501: reject,
            502: reject,
            503: reject,
          });
        }),
    });
    return args;
  };
};

const createFetcherQueries = <FM extends Record<string, FetcherService>>(
  fetcherMap: FM
) => {
  type QueriesMap = {
    [k in keyof typeof fetcherMap]: ReturnType<
      typeof createFetcherQuery<typeof fetcherMap[k]>
    >;
  };

  const queries: QueriesMap = {} as QueriesMap;
  const entries = Object.entries(fetcherMap);
  for (let i = 0; i < entries.length; i++) {
    const entry = entries[i];
    if (!entry) {
      continue;
    }
    const [serviceName, service] = entry;
    queries[serviceName as keyof typeof fetcherMap] = createFetcherQuery(
      serviceName,
      service
    );
  }
  return queries;
};

const useUserQueries = createFetcherQueries(UserService);

export default createFetcherQuery;
