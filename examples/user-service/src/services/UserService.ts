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

export type HTTPMethod = "get" | "post" | "put" | "patch" | "update" | "delete";

export type ServiceCallResponse<Response> = {
  data: Response;
  statusCode: number;
};

export type ServiceCallAdapter = <Response>(
  url: string,
  method: HTTPMethod,
  body?: unknown
) => Promise<ServiceCallResponse<Response>>;

let adapter: ServiceCallAdapter | null = null;

/**
 * @description
 */
const BoomSportsUserService = {
  api: {
    v1: {
      users: {
        get: async (
          request: {
            query: {
              userIds?: Array<string>;
              emailAddress?: string;
              username?: string;
              searchField?: string;
              page?: number;
              count?: number;
              includeDeleted?: "true";
            };
          },
          callbacks: Record<number, any> & {
            200?: (
              response: Array<{
                _id?: string;
                profile?: {
                  username?: string;
                  displayName?: string;
                  email?: { address?: string; verified?: boolean };
                  age?: number;
                  consent?: {
                    marketingEmail?: boolean;
                    marketingPhone?: boolean;
                    marketingPush?: boolean;
                  };
                  communication?: { fcmTokens?: {}; idfa?: {} };
                };
                authenticationProviders?: {
                  refreshToken?: { token?: string };
                  password?: { password?: string };
                  google?: { profileId?: string };
                  facebook?: { profileId?: string };
                  apple?: { profileId?: string };
                  phone?: { number?: string };
                  yesnetwork?: { profileId?: string };
                };
                roles?: Array<number>;
                events?: {};
                wallets?: {};
              }>
            ) => void;
            400?: (response?: unknown) => void;
            500?: (response: {
              code?: string;
              id?: string;
              message?: string;
              details?: string;
            }) => void;
            fallback?: (response?: unknown) => void;
          }
        ) => {
          let finalURL =
            "https://development-api.boomfantasy.com:443/api/v1/users";
          finalURL += `?${Object.entries(request.query)
            .map(([key, value]) => `${key}=${value}`)
            .join("&")}`;
          if (!adapter) {
            throw new Error(
              "Please initialize Fetcher before attempting to make any network calls"
            );
          }

          try {
            const response = await adapter(finalURL, "get");

            if (callbacks[response.statusCode]) {
              callbacks[response.statusCode](response.data);
              return;
            }

            if (!callbacks.fallback) {
              throw new Error("Unexpected error occurred");
            }
            callbacks.fallback(response.data);
          } catch (err: any) {
            if (callbacks[err.response.statusCode]) {
              callbacks[err.response.statusCode](err.response.data);
              return;
            }

            if (!callbacks.fallback) {
              throw new Error("Unexpected error occurred");
            }
            callbacks.fallback(err.response.data);
          }
        },
        roles: {
          get: async (
            request: null,
            callbacks: Record<number, any> & {
              200?: (response: {
                roles?: Array<{
                  id?: number;
                  default?: boolean;
                  permissions?: Array<string>;
                }>;
              }) => void;
              500?: (response: {
                code?: string;
                id?: string;
                message?: string;
                details?: string;
              }) => void;
              fallback?: (response?: unknown) => void;
            }
          ) => {
            let finalURL =
              "https://development-api.boomfantasy.com:443/api/v1/users/roles";
            if (!adapter) {
              throw new Error(
                "Please initialize Fetcher before attempting to make any network calls"
              );
            }

            try {
              const response = await adapter(finalURL, "get");

              if (callbacks[response.statusCode]) {
                callbacks[response.statusCode](response.data);
                return;
              }

              if (!callbacks.fallback) {
                throw new Error("Unexpected error occurred");
              }
              callbacks.fallback(response.data);
            } catch (err: any) {
              if (callbacks[err.response.statusCode]) {
                callbacks[err.response.statusCode](err.response.data);
                return;
              }

              if (!callbacks.fallback) {
                throw new Error("Unexpected error occurred");
              }
              callbacks.fallback(err.response.data);
            }
          },
        },
        byUserId: {
          get: async (
            request: {
              query: {
                includeDeleted?: "true";
              };
              params: {
                userId?: string;
              };
            },
            callbacks: Record<number, any> & {
              200?: (response: {
                _id?: string;
                profile?: {
                  username?: string;
                  displayName?: string;
                  email?: { address?: string; verified?: boolean };
                  age?: number;
                  consent?: {
                    marketingEmail?: boolean;
                    marketingPhone?: boolean;
                    marketingPush?: boolean;
                  };
                  communication?: { fcmTokens?: {}; idfa?: {} };
                };
                authenticationProviders?: {
                  refreshToken?: { token?: string };
                  password?: { password?: string };
                  google?: { profileId?: string };
                  facebook?: { profileId?: string };
                  apple?: { profileId?: string };
                  phone?: { number?: string };
                  yesnetwork?: { profileId?: string };
                };
                roles?: Array<number>;
                events?: {};
                wallets?: {};
              }) => void;
              500?: (response: {
                code?: string;
                id?: string;
                message?: string;
                details?: string;
              }) => void;
              fallback?: (response?: unknown) => void;
            }
          ) => {
            let finalURL =
              "https://development-api.boomfantasy.com:443/api/v1/users/:userId";
            finalURL += `?${Object.entries(request.query)
              .map(([key, value]) => `${key}=${value}`)
              .join("&")}`;
            Object.entries(request.params).forEach(([key, value]) => {
              finalURL = finalURL.replaceAll(`{${key}}`, value);
            });
            if (!adapter) {
              throw new Error(
                "Please initialize Fetcher before attempting to make any network calls"
              );
            }

            try {
              const response = await adapter(finalURL, "get");

              if (callbacks[response.statusCode]) {
                callbacks[response.statusCode](response.data);
                return;
              }

              if (!callbacks.fallback) {
                throw new Error("Unexpected error occurred");
              }
              callbacks.fallback(response.data);
            } catch (err: any) {
              if (callbacks[err.response.statusCode]) {
                callbacks[err.response.statusCode](err.response.data);
                return;
              }

              if (!callbacks.fallback) {
                throw new Error("Unexpected error occurred");
              }
              callbacks.fallback(err.response.data);
            }
          },
          patch: async (
            request: {
              params: {
                userId?: string;
              };
              body: {
                username?: string;
                email?: string;
                imageId?: string;
                adId?: string;
                roles?: Array<number>;
                removeProfilePic?: "true";
                consent?: {
                  marketingEmail?: boolean;
                  marketingPhone?: boolean;
                  marketingPush?: boolean;
                };
                fcmToken?: string;
                eventInfo?: {};
                details?: {};
                w9Status?: "yes" | "no" | "requested";
              };
            },
            callbacks: Record<number, any> & {
              204?: (response?: unknown) => void;
              500?: (response: {
                code?: string;
                id?: string;
                message?: string;
                details?: string;
              }) => void;
              fallback?: (response?: unknown) => void;
            }
          ) => {
            let finalURL =
              "https://development-api.boomfantasy.com:443/api/v1/users/:userId";
            Object.entries(request.params).forEach(([key, value]) => {
              finalURL = finalURL.replaceAll(`{${key}}`, value);
            });
            if (!adapter) {
              throw new Error(
                "Please initialize Fetcher before attempting to make any network calls"
              );
            }

            try {
              const response = await adapter(finalURL, "patch", request.body);

              if (callbacks[response.statusCode]) {
                callbacks[response.statusCode](response.data);
                return;
              }

              if (!callbacks.fallback) {
                throw new Error("Unexpected error occurred");
              }
              callbacks.fallback(response.data);
            } catch (err: any) {
              if (callbacks[err.response.statusCode]) {
                callbacks[err.response.statusCode](err.response.data);
                return;
              }

              if (!callbacks.fallback) {
                throw new Error("Unexpected error occurred");
              }
              callbacks.fallback(err.response.data);
            }
          },
          location: {
            patch: async (
              request: {
                params: {
                  userId?: string;
                };
                body: {
                  latitude?: number;
                  longitude?: number;
                  ipAddress?: string;
                };
              },
              callbacks: Record<number, any> & {
                204?: (response?: unknown) => void;
                500?: (response: {
                  code?: string;
                  id?: string;
                  message?: string;
                  details?: string;
                }) => void;
                fallback?: (response?: unknown) => void;
              }
            ) => {
              let finalURL =
                "https://development-api.boomfantasy.com:443/api/v1/users/:userId/location";
              Object.entries(request.params).forEach(([key, value]) => {
                finalURL = finalURL.replaceAll(`{${key}}`, value);
              });
              if (!adapter) {
                throw new Error(
                  "Please initialize Fetcher before attempting to make any network calls"
                );
              }

              try {
                const response = await adapter(finalURL, "patch", request.body);

                if (callbacks[response.statusCode]) {
                  callbacks[response.statusCode](response.data);
                  return;
                }

                if (!callbacks.fallback) {
                  throw new Error("Unexpected error occurred");
                }
                callbacks.fallback(response.data);
              } catch (err: any) {
                if (callbacks[err.response.statusCode]) {
                  callbacks[err.response.statusCode](err.response.data);
                  return;
                }

                if (!callbacks.fallback) {
                  throw new Error("Unexpected error occurred");
                }
                callbacks.fallback(err.response.data);
              }
            },
          },
          status: {
            patch: async (
              request: {
                params: {
                  userId?: string;
                };
                body: {
                  newStatus:
                    | "banned"
                    | "unbanned"
                    | "closed"
                    | "reopened"
                    | "deleted";
                  reason?: string;
                  eventInfo?: {};
                };
              },
              callbacks: Record<number, any> & {
                204?: (response?: unknown) => void;
                500?: (response: {
                  code?: string;
                  id?: string;
                  message?: string;
                  details?: string;
                }) => void;
                fallback?: (response?: unknown) => void;
              }
            ) => {
              let finalURL =
                "https://development-api.boomfantasy.com:443/api/v1/users/:userId/status";
              Object.entries(request.params).forEach(([key, value]) => {
                finalURL = finalURL.replaceAll(`{${key}}`, value);
              });
              if (!adapter) {
                throw new Error(
                  "Please initialize Fetcher before attempting to make any network calls"
                );
              }

              try {
                const response = await adapter(finalURL, "patch", request.body);

                if (callbacks[response.statusCode]) {
                  callbacks[response.statusCode](response.data);
                  return;
                }

                if (!callbacks.fallback) {
                  throw new Error("Unexpected error occurred");
                }
                callbacks.fallback(response.data);
              } catch (err: any) {
                if (callbacks[err.response.statusCode]) {
                  callbacks[err.response.statusCode](err.response.data);
                  return;
                }

                if (!callbacks.fallback) {
                  throw new Error("Unexpected error occurred");
                }
                callbacks.fallback(err.response.data);
              }
            },
          },
          manual_verify: {
            patch: async (
              request: {
                params: {
                  userId?: string;
                };
                body: { verified: boolean; eventInfo?: {} };
              },
              callbacks: Record<number, any> & {
                204?: (response?: unknown) => void;
                500?: (response: {
                  code?: string;
                  id?: string;
                  message?: string;
                  details?: string;
                }) => void;
                fallback?: (response?: unknown) => void;
              }
            ) => {
              let finalURL =
                "https://development-api.boomfantasy.com:443/api/v1/users/:userId/manual_verify";
              Object.entries(request.params).forEach(([key, value]) => {
                finalURL = finalURL.replaceAll(`{${key}}`, value);
              });
              if (!adapter) {
                throw new Error(
                  "Please initialize Fetcher before attempting to make any network calls"
                );
              }

              try {
                const response = await adapter(finalURL, "patch", request.body);

                if (callbacks[response.statusCode]) {
                  callbacks[response.statusCode](response.data);
                  return;
                }

                if (!callbacks.fallback) {
                  throw new Error("Unexpected error occurred");
                }
                callbacks.fallback(response.data);
              } catch (err: any) {
                if (callbacks[err.response.statusCode]) {
                  callbacks[err.response.statusCode](err.response.data);
                  return;
                }

                if (!callbacks.fallback) {
                  throw new Error("Unexpected error occurred");
                }
                callbacks.fallback(err.response.data);
              }
            },
          },
          wallets: {
            post: async (
              request: {
                params: {
                  userId?: string;
                };
                body: { walletType: "credits"; beginningValue?: number };
              },
              callbacks: Record<number, any> & {
                204?: (response?: unknown) => void;
                500?: (response: {
                  code?: string;
                  id?: string;
                  message?: string;
                  details?: string;
                }) => void;
                fallback?: (response?: unknown) => void;
              }
            ) => {
              let finalURL =
                "https://development-api.boomfantasy.com:443/api/v1/users/:userId/wallets";
              Object.entries(request.params).forEach(([key, value]) => {
                finalURL = finalURL.replaceAll(`{${key}}`, value);
              });
              if (!adapter) {
                throw new Error(
                  "Please initialize Fetcher before attempting to make any network calls"
                );
              }

              try {
                const response = await adapter(finalURL, "post", request.body);

                if (callbacks[response.statusCode]) {
                  callbacks[response.statusCode](response.data);
                  return;
                }

                if (!callbacks.fallback) {
                  throw new Error("Unexpected error occurred");
                }
                callbacks.fallback(response.data);
              } catch (err: any) {
                if (callbacks[err.response.statusCode]) {
                  callbacks[err.response.statusCode](err.response.data);
                  return;
                }

                if (!callbacks.fallback) {
                  throw new Error("Unexpected error occurred");
                }
                callbacks.fallback(err.response.data);
              }
            },
            get: async (
              request: {
                query: {
                  type?: "credits";
                };
                params: {
                  userId?: string;
                };
              },
              callbacks: Record<number, any> & {
                200?: (response: {
                  filtered?: { currentBalance?: number };
                  unfiltered?: {};
                }) => void;
                404?: (response: {
                  code?: string;
                  id?: string;
                  message?: string;
                  details?: string;
                }) => void;
                500?: (response: {
                  code?: string;
                  id?: string;
                  message?: string;
                  details?: string;
                }) => void;
                fallback?: (response?: unknown) => void;
              }
            ) => {
              let finalURL =
                "https://development-api.boomfantasy.com:443/api/v1/users/:userId/wallets";
              finalURL += `?${Object.entries(request.query)
                .map(([key, value]) => `${key}=${value}`)
                .join("&")}`;
              Object.entries(request.params).forEach(([key, value]) => {
                finalURL = finalURL.replaceAll(`{${key}}`, value);
              });
              if (!adapter) {
                throw new Error(
                  "Please initialize Fetcher before attempting to make any network calls"
                );
              }

              try {
                const response = await adapter(finalURL, "get");

                if (callbacks[response.statusCode]) {
                  callbacks[response.statusCode](response.data);
                  return;
                }

                if (!callbacks.fallback) {
                  throw new Error("Unexpected error occurred");
                }
                callbacks.fallback(response.data);
              } catch (err: any) {
                if (callbacks[err.response.statusCode]) {
                  callbacks[err.response.statusCode](err.response.data);
                  return;
                }

                if (!callbacks.fallback) {
                  throw new Error("Unexpected error occurred");
                }
                callbacks.fallback(err.response.data);
              }
            },
            byType: {
              patch: async (
                request: {
                  params: {
                    userId?: string;
                    type?: "credits";
                  };
                  body: { delta: number };
                },
                callbacks: Record<number, any> & {
                  200?: (response: { currentBalance?: number }) => void;
                  404?: (response: {
                    code?: string;
                    id?: string;
                    message?: string;
                    details?: string;
                  }) => void;
                  500?: (response: {
                    code?: string;
                    id?: string;
                    message?: string;
                    details?: string;
                  }) => void;
                  fallback?: (response?: unknown) => void;
                }
              ) => {
                let finalURL =
                  "https://development-api.boomfantasy.com:443/api/v1/users/:userId/wallets/:type";
                Object.entries(request.params).forEach(([key, value]) => {
                  finalURL = finalURL.replaceAll(`{${key}}`, value);
                });
                if (!adapter) {
                  throw new Error(
                    "Please initialize Fetcher before attempting to make any network calls"
                  );
                }

                try {
                  const response = await adapter(
                    finalURL,
                    "patch",
                    request.body
                  );

                  if (callbacks[response.statusCode]) {
                    callbacks[response.statusCode](response.data);
                    return;
                  }

                  if (!callbacks.fallback) {
                    throw new Error("Unexpected error occurred");
                  }
                  callbacks.fallback(response.data);
                } catch (err: any) {
                  if (callbacks[err.response.statusCode]) {
                    callbacks[err.response.statusCode](err.response.data);
                    return;
                  }

                  if (!callbacks.fallback) {
                    throw new Error("Unexpected error occurred");
                  }
                  callbacks.fallback(err.response.data);
                }
              },
              withdrawals: {
                post: async (
                  request: {
                    params: {
                      userId?: string;
                      type?: "credits";
                    };
                    body: {
                      firstName: string;
                      lastName: string;
                      emailAddress: string;
                      address?: string;
                      region?: string;
                      zipCode?: string;
                      city?: string;
                    };
                  },
                  callbacks: Record<number, any> & {
                    204?: (response?: unknown) => void;
                    400?: (response?: unknown) => void;
                    401?: (response: {
                      code?: string;
                      id?: string;
                      message?: string;
                      details?: string;
                    }) => void;
                    404?: (response: {
                      code?: string;
                      id?: string;
                      message?: string;
                      details?: string;
                    }) => void;
                    500?: (response: {
                      code?: string;
                      id?: string;
                      message?: string;
                      details?: string;
                    }) => void;
                    fallback?: (response?: unknown) => void;
                  }
                ) => {
                  let finalURL =
                    "https://development-api.boomfantasy.com:443/api/v1/users/:userId/wallets/:type/withdrawals";
                  Object.entries(request.params).forEach(([key, value]) => {
                    finalURL = finalURL.replaceAll(`{${key}}`, value);
                  });
                  if (!adapter) {
                    throw new Error(
                      "Please initialize Fetcher before attempting to make any network calls"
                    );
                  }

                  try {
                    const response = await adapter(
                      finalURL,
                      "post",
                      request.body
                    );

                    if (callbacks[response.statusCode]) {
                      callbacks[response.statusCode](response.data);
                      return;
                    }

                    if (!callbacks.fallback) {
                      throw new Error("Unexpected error occurred");
                    }
                    callbacks.fallback(response.data);
                  } catch (err: any) {
                    if (callbacks[err.response.statusCode]) {
                      callbacks[err.response.statusCode](err.response.data);
                      return;
                    }

                    if (!callbacks.fallback) {
                      throw new Error("Unexpected error occurred");
                    }
                    callbacks.fallback(err.response.data);
                  }
                },
              },
            },
          },
          referral: {
            get: async (
              request: {
                params: {
                  userId?: string;
                };
              },
              callbacks: Record<number, any> & {
                200?: (response: { link?: string }) => void;
                500?: (response: {
                  code?: string;
                  id?: string;
                  message?: string;
                  details?: string;
                }) => void;
                fallback?: (response?: unknown) => void;
              }
            ) => {
              let finalURL =
                "https://development-api.boomfantasy.com:443/api/v1/users/:userId/referral";
              Object.entries(request.params).forEach(([key, value]) => {
                finalURL = finalURL.replaceAll(`{${key}}`, value);
              });
              if (!adapter) {
                throw new Error(
                  "Please initialize Fetcher before attempting to make any network calls"
                );
              }

              try {
                const response = await adapter(finalURL, "get");

                if (callbacks[response.statusCode]) {
                  callbacks[response.statusCode](response.data);
                  return;
                }

                if (!callbacks.fallback) {
                  throw new Error("Unexpected error occurred");
                }
                callbacks.fallback(response.data);
              } catch (err: any) {
                if (callbacks[err.response.statusCode]) {
                  callbacks[err.response.statusCode](err.response.data);
                  return;
                }

                if (!callbacks.fallback) {
                  throw new Error("Unexpected error occurred");
                }
                callbacks.fallback(err.response.data);
              }
            },
          },
          verification: {
            get: async (
              request: {
                params: {
                  userId?: string;
                };
              },
              callbacks: Record<number, any> & {
                200?: (response: {
                  identityVerification?: {
                    idologyId?: string;
                    verified?: boolean;
                    timestamp?: string;
                  };
                }) => void;
                404?: (response: {
                  code?: string;
                  id?: string;
                  message?: string;
                  details?: string;
                }) => void;
                500?: (response: {
                  code?: string;
                  id?: string;
                  message?: string;
                  details?: string;
                }) => void;
                fallback?: (response?: unknown) => void;
              }
            ) => {
              let finalURL =
                "https://development-api.boomfantasy.com:443/api/v1/users/:userId/verification";
              Object.entries(request.params).forEach(([key, value]) => {
                finalURL = finalURL.replaceAll(`{${key}}`, value);
              });
              if (!adapter) {
                throw new Error(
                  "Please initialize Fetcher before attempting to make any network calls"
                );
              }

              try {
                const response = await adapter(finalURL, "get");

                if (callbacks[response.statusCode]) {
                  callbacks[response.statusCode](response.data);
                  return;
                }

                if (!callbacks.fallback) {
                  throw new Error("Unexpected error occurred");
                }
                callbacks.fallback(response.data);
              } catch (err: any) {
                if (callbacks[err.response.statusCode]) {
                  callbacks[err.response.statusCode](err.response.data);
                  return;
                }

                if (!callbacks.fallback) {
                  throw new Error("Unexpected error occurred");
                }
                callbacks.fallback(err.response.data);
              }
            },
            post: async (
              request: {
                params: {
                  userId?: string;
                };
                body: {
                  firstName: string;
                  lastName: string;
                  address: string;
                  zip: string;
                  ssnLast4: string;
                  dobYear: number;
                  dobMonth: number;
                  dobDay: number;
                };
              },
              callbacks: Record<number, any> & {
                204?: (response?: unknown) => void;
                400?: (response?: unknown) => void;
                500?: (response: {
                  code?: string;
                  id?: string;
                  message?: string;
                  details?: string;
                }) => void;
                fallback?: (response?: unknown) => void;
              }
            ) => {
              let finalURL =
                "https://development-api.boomfantasy.com:443/api/v1/users/:userId/verification";
              Object.entries(request.params).forEach(([key, value]) => {
                finalURL = finalURL.replaceAll(`{${key}}`, value);
              });
              if (!adapter) {
                throw new Error(
                  "Please initialize Fetcher before attempting to make any network calls"
                );
              }

              try {
                const response = await adapter(finalURL, "post", request.body);

                if (callbacks[response.statusCode]) {
                  callbacks[response.statusCode](response.data);
                  return;
                }

                if (!callbacks.fallback) {
                  throw new Error("Unexpected error occurred");
                }
                callbacks.fallback(response.data);
              } catch (err: any) {
                if (callbacks[err.response.statusCode]) {
                  callbacks[err.response.statusCode](err.response.data);
                  return;
                }

                if (!callbacks.fallback) {
                  throw new Error("Unexpected error occurred");
                }
                callbacks.fallback(err.response.data);
              }
            },
            patch: async (
              request: {
                params: {
                  userId?: string;
                };
                body: {
                  firstName: string;
                  lastName: string;
                  address: string;
                  zip: string;
                  ssnLast4: string;
                  dobYear: number;
                  dobMonth: number;
                  dobDay: number;
                };
              },
              callbacks: Record<number, any> & {
                204?: (response?: unknown) => void;
                400?: (response?: unknown) => void;
                500?: (response: {
                  code?: string;
                  id?: string;
                  message?: string;
                  details?: string;
                }) => void;
                fallback?: (response?: unknown) => void;
              }
            ) => {
              let finalURL =
                "https://development-api.boomfantasy.com:443/api/v1/users/:userId/verification";
              Object.entries(request.params).forEach(([key, value]) => {
                finalURL = finalURL.replaceAll(`{${key}}`, value);
              });
              if (!adapter) {
                throw new Error(
                  "Please initialize Fetcher before attempting to make any network calls"
                );
              }

              try {
                const response = await adapter(finalURL, "patch", request.body);

                if (callbacks[response.statusCode]) {
                  callbacks[response.statusCode](response.data);
                  return;
                }

                if (!callbacks.fallback) {
                  throw new Error("Unexpected error occurred");
                }
                callbacks.fallback(response.data);
              } catch (err: any) {
                if (callbacks[err.response.statusCode]) {
                  callbacks[err.response.statusCode](err.response.data);
                  return;
                }

                if (!callbacks.fallback) {
                  throw new Error("Unexpected error occurred");
                }
                callbacks.fallback(err.response.data);
              }
            },
          },
          images: {
            profile: {
              post: async (
                request: {
                  params: {
                    userId?: string;
                  };
                },
                callbacks: Record<number, any> & {
                  200?: (response: { publicUrl?: string }) => void;
                  500?: (response: {
                    code?: string;
                    id?: string;
                    message?: string;
                    details?: string;
                  }) => void;
                  fallback?: (response?: unknown) => void;
                }
              ) => {
                let finalURL =
                  "https://development-api.boomfantasy.com:443/api/v1/users/:userId/images/profile";
                Object.entries(request.params).forEach(([key, value]) => {
                  finalURL = finalURL.replaceAll(`{${key}}`, value);
                });
                if (!adapter) {
                  throw new Error(
                    "Please initialize Fetcher before attempting to make any network calls"
                  );
                }

                try {
                  const response = await adapter(finalURL, "post");

                  if (callbacks[response.statusCode]) {
                    callbacks[response.statusCode](response.data);
                    return;
                  }

                  if (!callbacks.fallback) {
                    throw new Error("Unexpected error occurred");
                  }
                  callbacks.fallback(response.data);
                } catch (err: any) {
                  if (callbacks[err.response.statusCode]) {
                    callbacks[err.response.statusCode](err.response.data);
                    return;
                  }

                  if (!callbacks.fallback) {
                    throw new Error("Unexpected error occurred");
                  }
                  callbacks.fallback(err.response.data);
                }
              },
            },
          },
          groups: {
            post: async (
              request: {
                params: {
                  userId?: string;
                };
                body: { groupId: string };
              },
              callbacks: Record<number, any> & {
                200?: (response?: unknown) => void;
                404?: (response: {
                  code?: string;
                  id?: string;
                  message?: string;
                  details?: string;
                }) => void;
                500?: (response: {
                  code?: string;
                  id?: string;
                  message?: string;
                  details?: string;
                }) => void;
                fallback?: (response?: unknown) => void;
              }
            ) => {
              let finalURL =
                "https://development-api.boomfantasy.com:443/api/v1/users/:userId/groups";
              Object.entries(request.params).forEach(([key, value]) => {
                finalURL = finalURL.replaceAll(`{${key}}`, value);
              });
              if (!adapter) {
                throw new Error(
                  "Please initialize Fetcher before attempting to make any network calls"
                );
              }

              try {
                const response = await adapter(finalURL, "post", request.body);

                if (callbacks[response.statusCode]) {
                  callbacks[response.statusCode](response.data);
                  return;
                }

                if (!callbacks.fallback) {
                  throw new Error("Unexpected error occurred");
                }
                callbacks.fallback(response.data);
              } catch (err: any) {
                if (callbacks[err.response.statusCode]) {
                  callbacks[err.response.statusCode](err.response.data);
                  return;
                }

                if (!callbacks.fallback) {
                  throw new Error("Unexpected error occurred");
                }
                callbacks.fallback(err.response.data);
              }
            },
            byGroupId: {
              delete: async (
                request: {
                  params: {
                    userId?: string;
                    groupId?: string;
                  };
                },
                callbacks: Record<number, any> & {
                  200?: (response?: unknown) => void;
                  404?: (response: {
                    code?: string;
                    id?: string;
                    message?: string;
                    details?: string;
                  }) => void;
                  500?: (response: {
                    code?: string;
                    id?: string;
                    message?: string;
                    details?: string;
                  }) => void;
                  fallback?: (response?: unknown) => void;
                }
              ) => {
                let finalURL =
                  "https://development-api.boomfantasy.com:443/api/v1/users/:userId/groups/:groupId";
                Object.entries(request.params).forEach(([key, value]) => {
                  finalURL = finalURL.replaceAll(`{${key}}`, value);
                });
                if (!adapter) {
                  throw new Error(
                    "Please initialize Fetcher before attempting to make any network calls"
                  );
                }

                try {
                  const response = await adapter(finalURL, "delete");

                  if (callbacks[response.statusCode]) {
                    callbacks[response.statusCode](response.data);
                    return;
                  }

                  if (!callbacks.fallback) {
                    throw new Error("Unexpected error occurred");
                  }
                  callbacks.fallback(response.data);
                } catch (err: any) {
                  if (callbacks[err.response.statusCode]) {
                    callbacks[err.response.statusCode](err.response.data);
                    return;
                  }

                  if (!callbacks.fallback) {
                    throw new Error("Unexpected error occurred");
                  }
                  callbacks.fallback(err.response.data);
                }
              },
            },
          },
        },
        "self-exclude": {
          post: async (
            request: {
              body: { limit: number };
            },
            callbacks: Record<number, any> & {
              204?: (response?: unknown) => void;
              500?: (response: {
                code?: string;
                id?: string;
                message?: string;
                details?: string;
              }) => void;
              fallback?: (response?: unknown) => void;
            }
          ) => {
            let finalURL =
              "https://development-api.boomfantasy.com:443/api/v1/users/self-exclude";
            if (!adapter) {
              throw new Error(
                "Please initialize Fetcher before attempting to make any network calls"
              );
            }

            try {
              const response = await adapter(finalURL, "post", request.body);

              if (callbacks[response.statusCode]) {
                callbacks[response.statusCode](response.data);
                return;
              }

              if (!callbacks.fallback) {
                throw new Error("Unexpected error occurred");
              }
              callbacks.fallback(response.data);
            } catch (err: any) {
              if (callbacks[err.response.statusCode]) {
                callbacks[err.response.statusCode](err.response.data);
                return;
              }

              if (!callbacks.fallback) {
                throw new Error("Unexpected error occurred");
              }
              callbacks.fallback(err.response.data);
            }
          },
        },
        "initial-location": {
          post: async (
            request: null,
            callbacks: Record<number, any> & {
              204?: (response?: unknown) => void;
              500?: (response: {
                code?: string;
                id?: string;
                message?: string;
                details?: string;
              }) => void;
              fallback?: (response?: unknown) => void;
            }
          ) => {
            let finalURL =
              "https://development-api.boomfantasy.com:443/api/v1/users/initial-location";
            if (!adapter) {
              throw new Error(
                "Please initialize Fetcher before attempting to make any network calls"
              );
            }

            try {
              const response = await adapter(finalURL, "post");

              if (callbacks[response.statusCode]) {
                callbacks[response.statusCode](response.data);
                return;
              }

              if (!callbacks.fallback) {
                throw new Error("Unexpected error occurred");
              }
              callbacks.fallback(response.data);
            } catch (err: any) {
              if (callbacks[err.response.statusCode]) {
                callbacks[err.response.statusCode](err.response.data);
                return;
              }

              if (!callbacks.fallback) {
                throw new Error("Unexpected error occurred");
              }
              callbacks.fallback(err.response.data);
            }
          },
        },
        bulk_update: {
          bestScores: {
            post: async (
              request: {
                body: {
                  action: "updateBestScores";
                  league: string;
                  contestId: string;
                  contestMaxPossiblePoints: number;
                  scheduled: string;
                  description: string;
                  reason?: {};
                  improvedUsers: Array<{ userId: string; newScore: number }>;
                };
              },
              callbacks: Record<number, any> & {
                200?: (response: {
                  recordsReceived?: number;
                  recordsModified?: number;
                }) => void;
                500?: (response: {
                  code?: string;
                  id?: string;
                  message?: string;
                  details?: string;
                }) => void;
                fallback?: (response?: unknown) => void;
              }
            ) => {
              let finalURL =
                "https://development-api.boomfantasy.com:443/api/v1/users/bulk_update/bestScores";
              if (!adapter) {
                throw new Error(
                  "Please initialize Fetcher before attempting to make any network calls"
                );
              }

              try {
                const response = await adapter(finalURL, "post", request.body);

                if (callbacks[response.statusCode]) {
                  callbacks[response.statusCode](response.data);
                  return;
                }

                if (!callbacks.fallback) {
                  throw new Error("Unexpected error occurred");
                }
                callbacks.fallback(response.data);
              } catch (err: any) {
                if (callbacks[err.response.statusCode]) {
                  callbacks[err.response.statusCode](err.response.data);
                  return;
                }

                if (!callbacks.fallback) {
                  throw new Error("Unexpected error occurred");
                }
                callbacks.fallback(err.response.data);
              }
            },
          },
        },
        wallets: {
          byType: {
            withdrawals: {
              byStatus: {
                get: async (
                  request: {
                    params: {
                      type?: "credits";
                      status?:
                        | "pending"
                        | "completed"
                        | "rejected"
                        | "cancelled";
                    };
                  },
                  callbacks: Record<number, any> & {
                    200?: (response: {
                      withdrawals?: Array<{
                        _id?: string;
                        userId?: string;
                        emailAddress?: string;
                        firstName?: string;
                        lastName?: string;
                        createdAt?: string;
                        completedAd?: string;
                        status?:
                          | "pending"
                          | "completed"
                          | "rejected"
                          | "cancelled";
                        notes?: string;
                        hidden?: boolean;
                        amount?: number;
                        eligibleForMassPayment?: boolean;
                      }>;
                    }) => void;
                    500?: (response: {
                      code?: string;
                      id?: string;
                      message?: string;
                      details?: string;
                    }) => void;
                    fallback?: (response?: unknown) => void;
                  }
                ) => {
                  let finalURL =
                    "https://development-api.boomfantasy.com:443/api/v1/users/wallets/:type/withdrawals/:status";
                  Object.entries(request.params).forEach(([key, value]) => {
                    finalURL = finalURL.replaceAll(`{${key}}`, value);
                  });
                  if (!adapter) {
                    throw new Error(
                      "Please initialize Fetcher before attempting to make any network calls"
                    );
                  }

                  try {
                    const response = await adapter(finalURL, "get");

                    if (callbacks[response.statusCode]) {
                      callbacks[response.statusCode](response.data);
                      return;
                    }

                    if (!callbacks.fallback) {
                      throw new Error("Unexpected error occurred");
                    }
                    callbacks.fallback(response.data);
                  } catch (err: any) {
                    if (callbacks[err.response.statusCode]) {
                      callbacks[err.response.statusCode](err.response.data);
                      return;
                    }

                    if (!callbacks.fallback) {
                      throw new Error("Unexpected error occurred");
                    }
                    callbacks.fallback(err.response.data);
                  }
                },
              },
            },
          },
          bulk_update: {
            post: async (
              request: {
                body: {
                  updates: Array<{
                    walletType: string;
                    userIds?: Array<string>;
                    delta: number;
                  }>;
                  reason?: {};
                };
              },
              callbacks: Record<number, any> & {
                200?: (response: {
                  expectedUserUpdates?: number;
                  modifiedRecords?: number;
                }) => void;
                500?: (response: {
                  code?: string;
                  id?: string;
                  message?: string;
                  details?: string;
                }) => void;
                fallback?: (response?: unknown) => void;
              }
            ) => {
              let finalURL =
                "https://development-api.boomfantasy.com:443/api/v1/users/wallets/bulk_update";
              if (!adapter) {
                throw new Error(
                  "Please initialize Fetcher before attempting to make any network calls"
                );
              }

              try {
                const response = await adapter(finalURL, "post", request.body);

                if (callbacks[response.statusCode]) {
                  callbacks[response.statusCode](response.data);
                  return;
                }

                if (!callbacks.fallback) {
                  throw new Error("Unexpected error occurred");
                }
                callbacks.fallback(response.data);
              } catch (err: any) {
                if (callbacks[err.response.statusCode]) {
                  callbacks[err.response.statusCode](err.response.data);
                  return;
                }

                if (!callbacks.fallback) {
                  throw new Error("Unexpected error occurred");
                }
                callbacks.fallback(err.response.data);
              }
            },
            winnings: {
              post: async (
                request: {
                  body: {
                    updates: Array<{
                      walletType: string;
                      userIds?: Array<string>;
                      delta: number;
                    }>;
                    reason?: {};
                  };
                },
                callbacks: Record<number, any> & {
                  200?: (response: {
                    expectedUserUpdates?: number;
                    modifiedRecords?: number;
                  }) => void;
                  500?: (response: {
                    code?: string;
                    id?: string;
                    message?: string;
                    details?: string;
                  }) => void;
                  fallback?: (response?: unknown) => void;
                }
              ) => {
                let finalURL =
                  "https://development-api.boomfantasy.com:443/api/v1/users/wallets/bulk_update/winnings";
                if (!adapter) {
                  throw new Error(
                    "Please initialize Fetcher before attempting to make any network calls"
                  );
                }

                try {
                  const response = await adapter(
                    finalURL,
                    "post",
                    request.body
                  );

                  if (callbacks[response.statusCode]) {
                    callbacks[response.statusCode](response.data);
                    return;
                  }

                  if (!callbacks.fallback) {
                    throw new Error("Unexpected error occurred");
                  }
                  callbacks.fallback(response.data);
                } catch (err: any) {
                  if (callbacks[err.response.statusCode]) {
                    callbacks[err.response.statusCode](err.response.data);
                    return;
                  }

                  if (!callbacks.fallback) {
                    throw new Error("Unexpected error occurred");
                  }
                  callbacks.fallback(err.response.data);
                }
              },
            },
            withdrawals: {
              post: async (
                request: {
                  body: {
                    action: "complete";
                    withdrawalRequestIds: Array<string>;
                  };
                },
                callbacks: Record<number, any> & {
                  200?: (response: {
                    batchId?: string;
                    expectedUpdateCount?: number;
                    attemptedUpdateCount?: number;
                    userWalletsUpdated?: number;
                    withdrawalRequestsUpdated?: number;
                  }) => void;
                  500?: (response: {
                    code?: string;
                    id?: string;
                    message?: string;
                    details?: string;
                  }) => void;
                  fallback?: (response?: unknown) => void;
                }
              ) => {
                let finalURL =
                  "https://development-api.boomfantasy.com:443/api/v1/users/wallets/bulk_update/withdrawals";
                if (!adapter) {
                  throw new Error(
                    "Please initialize Fetcher before attempting to make any network calls"
                  );
                }

                try {
                  const response = await adapter(
                    finalURL,
                    "post",
                    request.body
                  );

                  if (callbacks[response.statusCode]) {
                    callbacks[response.statusCode](response.data);
                    return;
                  }

                  if (!callbacks.fallback) {
                    throw new Error("Unexpected error occurred");
                  }
                  callbacks.fallback(response.data);
                } catch (err: any) {
                  if (callbacks[err.response.statusCode]) {
                    callbacks[err.response.statusCode](err.response.data);
                    return;
                  }

                  if (!callbacks.fallback) {
                    throw new Error("Unexpected error occurred");
                  }
                  callbacks.fallback(err.response.data);
                }
              },
            },
          },
        },
        groups: {
          bulk: {
            post: async (
              request: {
                body: {
                  updates: Array<{ userId: string; groupId: string }>;
                  remove?: boolean;
                };
              },
              callbacks: Record<number, any> & {
                200?: (response?: unknown) => void;
                500?: (response: {
                  code?: string;
                  id?: string;
                  message?: string;
                  details?: string;
                }) => void;
                fallback?: (response?: unknown) => void;
              }
            ) => {
              let finalURL =
                "https://development-api.boomfantasy.com:443/api/v1/users/groups/bulk";
              if (!adapter) {
                throw new Error(
                  "Please initialize Fetcher before attempting to make any network calls"
                );
              }

              try {
                const response = await adapter(finalURL, "post", request.body);

                if (callbacks[response.statusCode]) {
                  callbacks[response.statusCode](response.data);
                  return;
                }

                if (!callbacks.fallback) {
                  throw new Error("Unexpected error occurred");
                }
                callbacks.fallback(response.data);
              } catch (err: any) {
                if (callbacks[err.response.statusCode]) {
                  callbacks[err.response.statusCode](err.response.data);
                  return;
                }

                if (!callbacks.fallback) {
                  throw new Error("Unexpected error occurred");
                }
                callbacks.fallback(err.response.data);
              }
            },
          },
        },
        names: {
          byName: {
            get: async (
              request: {
                params: {
                  name?: string;
                };
              },
              callbacks: Record<number, any> & {
                200?: (response: { hasProfanity?: boolean }) => void;
                500?: (response: {
                  code?: string;
                  id?: string;
                  message?: string;
                  details?: string;
                }) => void;
                fallback?: (response?: unknown) => void;
              }
            ) => {
              let finalURL =
                "https://development-api.boomfantasy.com:443/api/v1/users/names/:name";
              Object.entries(request.params).forEach(([key, value]) => {
                finalURL = finalURL.replaceAll(`{${key}}`, value);
              });
              if (!adapter) {
                throw new Error(
                  "Please initialize Fetcher before attempting to make any network calls"
                );
              }

              try {
                const response = await adapter(finalURL, "get");

                if (callbacks[response.statusCode]) {
                  callbacks[response.statusCode](response.data);
                  return;
                }

                if (!callbacks.fallback) {
                  throw new Error("Unexpected error occurred");
                }
                callbacks.fallback(response.data);
              } catch (err: any) {
                if (callbacks[err.response.statusCode]) {
                  callbacks[err.response.statusCode](err.response.data);
                  return;
                }

                if (!callbacks.fallback) {
                  throw new Error("Unexpected error occurred");
                }
                callbacks.fallback(err.response.data);
              }
            },
          },
        },
        emails: {
          byEmail: {
            get: async (
              request: {
                params: {
                  email?: string;
                };
              },
              callbacks: Record<number, any> & {
                200?: (response: { exists?: boolean }) => void;
                500?: (response: {
                  code?: string;
                  id?: string;
                  message?: string;
                  details?: string;
                }) => void;
                fallback?: (response?: unknown) => void;
              }
            ) => {
              let finalURL =
                "https://development-api.boomfantasy.com:443/api/v1/users/emails/:email";
              Object.entries(request.params).forEach(([key, value]) => {
                finalURL = finalURL.replaceAll(`{${key}}`, value);
              });
              if (!adapter) {
                throw new Error(
                  "Please initialize Fetcher before attempting to make any network calls"
                );
              }

              try {
                const response = await adapter(finalURL, "get");

                if (callbacks[response.statusCode]) {
                  callbacks[response.statusCode](response.data);
                  return;
                }

                if (!callbacks.fallback) {
                  throw new Error("Unexpected error occurred");
                }
                callbacks.fallback(response.data);
              } catch (err: any) {
                if (callbacks[err.response.statusCode]) {
                  callbacks[err.response.statusCode](err.response.data);
                  return;
                }

                if (!callbacks.fallback) {
                  throw new Error("Unexpected error occurred");
                }
                callbacks.fallback(err.response.data);
              }
            },
          },
        },
        devices: {
          allowed: {
            post: async (
              request: {
                body: { deviceId: string };
              },
              callbacks: Record<number, any> & {
                500?: (response: {
                  code?: string;
                  id?: string;
                  message?: string;
                  details?: string;
                }) => void;
                fallback?: (response?: unknown) => void;
              }
            ) => {
              let finalURL =
                "https://development-api.boomfantasy.com:443/api/v1/users/devices/allowed";
              if (!adapter) {
                throw new Error(
                  "Please initialize Fetcher before attempting to make any network calls"
                );
              }

              try {
                const response = await adapter(finalURL, "post", request.body);

                if (callbacks[response.statusCode]) {
                  callbacks[response.statusCode](response.data);
                  return;
                }

                if (!callbacks.fallback) {
                  throw new Error("Unexpected error occurred");
                }
                callbacks.fallback(response.data);
              } catch (err: any) {
                if (callbacks[err.response.statusCode]) {
                  callbacks[err.response.statusCode](err.response.data);
                  return;
                }

                if (!callbacks.fallback) {
                  throw new Error("Unexpected error occurred");
                }
                callbacks.fallback(err.response.data);
              }
            },
            delete: async (
              request: {
                body: { deviceId: string };
              },
              callbacks: Record<number, any> & {
                500?: (response: {
                  code?: string;
                  id?: string;
                  message?: string;
                  details?: string;
                }) => void;
                fallback?: (response?: unknown) => void;
              }
            ) => {
              let finalURL =
                "https://development-api.boomfantasy.com:443/api/v1/users/devices/allowed";
              if (!adapter) {
                throw new Error(
                  "Please initialize Fetcher before attempting to make any network calls"
                );
              }

              try {
                const response = await adapter(
                  finalURL,
                  "delete",
                  request.body
                );

                if (callbacks[response.statusCode]) {
                  callbacks[response.statusCode](response.data);
                  return;
                }

                if (!callbacks.fallback) {
                  throw new Error("Unexpected error occurred");
                }
                callbacks.fallback(response.data);
              } catch (err: any) {
                if (callbacks[err.response.statusCode]) {
                  callbacks[err.response.statusCode](err.response.data);
                  return;
                }

                if (!callbacks.fallback) {
                  throw new Error("Unexpected error occurred");
                }
                callbacks.fallback(err.response.data);
              }
            },
            get: async (
              request: {
                query: {
                  page?: number;
                  count?: number;
                };
              },
              callbacks: Record<number, any> & {
                500?: (response: {
                  code?: string;
                  id?: string;
                  message?: string;
                  details?: string;
                }) => void;
                fallback?: (response?: unknown) => void;
              }
            ) => {
              let finalURL =
                "https://development-api.boomfantasy.com:443/api/v1/users/devices/allowed";
              finalURL += `?${Object.entries(request.query)
                .map(([key, value]) => `${key}=${value}`)
                .join("&")}`;
              if (!adapter) {
                throw new Error(
                  "Please initialize Fetcher before attempting to make any network calls"
                );
              }

              try {
                const response = await adapter(finalURL, "get");

                if (callbacks[response.statusCode]) {
                  callbacks[response.statusCode](response.data);
                  return;
                }

                if (!callbacks.fallback) {
                  throw new Error("Unexpected error occurred");
                }
                callbacks.fallback(response.data);
              } catch (err: any) {
                if (callbacks[err.response.statusCode]) {
                  callbacks[err.response.statusCode](err.response.data);
                  return;
                }

                if (!callbacks.fallback) {
                  throw new Error("Unexpected error occurred");
                }
                callbacks.fallback(err.response.data);
              }
            },
          },
          banned: {
            post: async (
              request: {
                body: { deviceId: string; reason?: string };
              },
              callbacks: Record<number, any> & {
                500?: (response: {
                  code?: string;
                  id?: string;
                  message?: string;
                  details?: string;
                }) => void;
                fallback?: (response?: unknown) => void;
              }
            ) => {
              let finalURL =
                "https://development-api.boomfantasy.com:443/api/v1/users/devices/banned";
              if (!adapter) {
                throw new Error(
                  "Please initialize Fetcher before attempting to make any network calls"
                );
              }

              try {
                const response = await adapter(finalURL, "post", request.body);

                if (callbacks[response.statusCode]) {
                  callbacks[response.statusCode](response.data);
                  return;
                }

                if (!callbacks.fallback) {
                  throw new Error("Unexpected error occurred");
                }
                callbacks.fallback(response.data);
              } catch (err: any) {
                if (callbacks[err.response.statusCode]) {
                  callbacks[err.response.statusCode](err.response.data);
                  return;
                }

                if (!callbacks.fallback) {
                  throw new Error("Unexpected error occurred");
                }
                callbacks.fallback(err.response.data);
              }
            },
            delete: async (
              request: {
                body: { deviceId: string };
              },
              callbacks: Record<number, any> & {
                500?: (response: {
                  code?: string;
                  id?: string;
                  message?: string;
                  details?: string;
                }) => void;
                fallback?: (response?: unknown) => void;
              }
            ) => {
              let finalURL =
                "https://development-api.boomfantasy.com:443/api/v1/users/devices/banned";
              if (!adapter) {
                throw new Error(
                  "Please initialize Fetcher before attempting to make any network calls"
                );
              }

              try {
                const response = await adapter(
                  finalURL,
                  "delete",
                  request.body
                );

                if (callbacks[response.statusCode]) {
                  callbacks[response.statusCode](response.data);
                  return;
                }

                if (!callbacks.fallback) {
                  throw new Error("Unexpected error occurred");
                }
                callbacks.fallback(response.data);
              } catch (err: any) {
                if (callbacks[err.response.statusCode]) {
                  callbacks[err.response.statusCode](err.response.data);
                  return;
                }

                if (!callbacks.fallback) {
                  throw new Error("Unexpected error occurred");
                }
                callbacks.fallback(err.response.data);
              }
            },
            get: async (
              request: {
                query: {
                  page?: number;
                  count?: number;
                };
              },
              callbacks: Record<number, any> & {
                500?: (response: {
                  code?: string;
                  id?: string;
                  message?: string;
                  details?: string;
                }) => void;
                fallback?: (response?: unknown) => void;
              }
            ) => {
              let finalURL =
                "https://development-api.boomfantasy.com:443/api/v1/users/devices/banned";
              finalURL += `?${Object.entries(request.query)
                .map(([key, value]) => `${key}=${value}`)
                .join("&")}`;
              if (!adapter) {
                throw new Error(
                  "Please initialize Fetcher before attempting to make any network calls"
                );
              }

              try {
                const response = await adapter(finalURL, "get");

                if (callbacks[response.statusCode]) {
                  callbacks[response.statusCode](response.data);
                  return;
                }

                if (!callbacks.fallback) {
                  throw new Error("Unexpected error occurred");
                }
                callbacks.fallback(response.data);
              } catch (err: any) {
                if (callbacks[err.response.statusCode]) {
                  callbacks[err.response.statusCode](err.response.data);
                  return;
                }

                if (!callbacks.fallback) {
                  throw new Error("Unexpected error occurred");
                }
                callbacks.fallback(err.response.data);
              }
            },
          },
        },
      },
      phones: {
        byNumber: {
          verification: {
            post: async (
              request: {
                params: {
                  number?: string;
                };
                body: { intent?: "authentication" | "addNumberToAccount" };
              },
              callbacks: Record<number, any> & {
                200?: (response: {
                  hasAccount?: boolean;
                  message?: string;
                  length?: number;
                }) => void;
                204?: (response?: unknown) => void;
                500?: (response: {
                  code?: string;
                  id?: string;
                  message?: string;
                  details?: string;
                }) => void;
                fallback?: (response?: unknown) => void;
              }
            ) => {
              let finalURL =
                "https://development-api.boomfantasy.com:443/api/v1/phones/:number/verification";
              Object.entries(request.params).forEach(([key, value]) => {
                finalURL = finalURL.replaceAll(`{${key}}`, value);
              });
              if (!adapter) {
                throw new Error(
                  "Please initialize Fetcher before attempting to make any network calls"
                );
              }

              try {
                const response = await adapter(finalURL, "post", request.body);

                if (callbacks[response.statusCode]) {
                  callbacks[response.statusCode](response.data);
                  return;
                }

                if (!callbacks.fallback) {
                  throw new Error("Unexpected error occurred");
                }
                callbacks.fallback(response.data);
              } catch (err: any) {
                if (callbacks[err.response.statusCode]) {
                  callbacks[err.response.statusCode](err.response.data);
                  return;
                }

                if (!callbacks.fallback) {
                  throw new Error("Unexpected error occurred");
                }
                callbacks.fallback(err.response.data);
              }
            },
            byCode: {
              patch: async (
                request: {
                  params: {
                    number?: string;
                    code?: string;
                  };
                },
                callbacks: Record<number, any> & {
                  204?: (response?: unknown) => void;
                  500?: (response: {
                    code?: string;
                    id?: string;
                    message?: string;
                    details?: string;
                  }) => void;
                  fallback?: (response?: unknown) => void;
                }
              ) => {
                let finalURL =
                  "https://development-api.boomfantasy.com:443/api/v1/phones/:number/verification/:code";
                Object.entries(request.params).forEach(([key, value]) => {
                  finalURL = finalURL.replaceAll(`{${key}}`, value);
                });
                if (!adapter) {
                  throw new Error(
                    "Please initialize Fetcher before attempting to make any network calls"
                  );
                }

                try {
                  const response = await adapter(finalURL, "patch");

                  if (callbacks[response.statusCode]) {
                    callbacks[response.statusCode](response.data);
                    return;
                  }

                  if (!callbacks.fallback) {
                    throw new Error("Unexpected error occurred");
                  }
                  callbacks.fallback(response.data);
                } catch (err: any) {
                  if (callbacks[err.response.statusCode]) {
                    callbacks[err.response.statusCode](err.response.data);
                    return;
                  }

                  if (!callbacks.fallback) {
                    throw new Error("Unexpected error occurred");
                  }
                  callbacks.fallback(err.response.data);
                }
              },
            },
          },
        },
      },
      sessions: {
        post: async (
          request: {
            body: {
              authentication: {
                type:
                  | "email"
                  | "google"
                  | "facebook"
                  | "apple"
                  | "password"
                  | "phone"
                  | "refresh"
                  | "invite"
                  | "yesnetwork";
                credentials?: {};
              };
              locationServicesDenied?: boolean;
              coordinates?: { longitude?: number; latitude?: number };
              clientSessionId?: string;
              clientInfo?: {};
              eventInfo?: {};
            };
          },
          callbacks: Record<number, any> & {
            200?: (response: {
              userId: string;
              accessToken: string;
              refreshToken: string;
              location?: {
                latitude?: number;
                longitude?: number;
                zipCode?: string;
              };
            }) => void;
            500?: (response: {
              code?: string;
              id?: string;
              message?: string;
              details?: string;
            }) => void;
            fallback?: (response?: unknown) => void;
          }
        ) => {
          let finalURL =
            "https://development-api.boomfantasy.com:443/api/v1/sessions";
          if (!adapter) {
            throw new Error(
              "Please initialize Fetcher before attempting to make any network calls"
            );
          }

          try {
            const response = await adapter(finalURL, "post", request.body);

            if (callbacks[response.statusCode]) {
              callbacks[response.statusCode](response.data);
              return;
            }

            if (!callbacks.fallback) {
              throw new Error("Unexpected error occurred");
            }
            callbacks.fallback(response.data);
          } catch (err: any) {
            if (callbacks[err.response.statusCode]) {
              callbacks[err.response.statusCode](err.response.data);
              return;
            }

            if (!callbacks.fallback) {
              throw new Error("Unexpected error occurred");
            }
            callbacks.fallback(err.response.data);
          }
        },
      },
      usernames: {
        randomUsername: {
          post: async (
            request: {
              body: {
                options?: {
                  format?: "kebab" | "camel" | "sentence" | "lower" | "title";
                  categories?: { noun?: Array<any>; adjective?: Array<any> };
                  partsOfSpeech?: Array<any>;
                  appendNumber?: {
                    minValue?: number;
                    maxValue?: number;
                    zeroPad?: boolean;
                  };
                };
              };
            },
            callbacks: Record<number, any> & {
              200?: (response: { username?: string }) => void;
              500?: (response: {
                code?: string;
                id?: string;
                message?: string;
                details?: string;
              }) => void;
              fallback?: (response?: unknown) => void;
            }
          ) => {
            let finalURL =
              "https://development-api.boomfantasy.com:443/api/v1/usernames/randomUsername";
            if (!adapter) {
              throw new Error(
                "Please initialize Fetcher before attempting to make any network calls"
              );
            }

            try {
              const response = await adapter(finalURL, "post", request.body);

              if (callbacks[response.statusCode]) {
                callbacks[response.statusCode](response.data);
                return;
              }

              if (!callbacks.fallback) {
                throw new Error("Unexpected error occurred");
              }
              callbacks.fallback(response.data);
            } catch (err: any) {
              if (callbacks[err.response.statusCode]) {
                callbacks[err.response.statusCode](err.response.data);
                return;
              }

              if (!callbacks.fallback) {
                throw new Error("Unexpected error occurred");
              }
              callbacks.fallback(err.response.data);
            }
          },
        },
        byUsername: {
          get: async (
            request: {
              params: {
                username?: string;
              };
            },
            callbacks: Record<number, any> & {
              200?: (response: { exists?: boolean; valid?: boolean }) => void;
              500?: (response: {
                code?: string;
                id?: string;
                message?: string;
                details?: string;
              }) => void;
              fallback?: (response?: unknown) => void;
            }
          ) => {
            let finalURL =
              "https://development-api.boomfantasy.com:443/api/v1/usernames/:username";
            Object.entries(request.params).forEach(([key, value]) => {
              finalURL = finalURL.replaceAll(`{${key}}`, value);
            });
            if (!adapter) {
              throw new Error(
                "Please initialize Fetcher before attempting to make any network calls"
              );
            }

            try {
              const response = await adapter(finalURL, "get");

              if (callbacks[response.statusCode]) {
                callbacks[response.statusCode](response.data);
                return;
              }

              if (!callbacks.fallback) {
                throw new Error("Unexpected error occurred");
              }
              callbacks.fallback(response.data);
            } catch (err: any) {
              if (callbacks[err.response.statusCode]) {
                callbacks[err.response.statusCode](err.response.data);
                return;
              }

              if (!callbacks.fallback) {
                throw new Error("Unexpected error occurred");
              }
              callbacks.fallback(err.response.data);
            }
          },
        },
      },
      groups: {
        get: async (
          request: {
            query: {
              groupIds?: Array<string>;
              statuses?: Array<"active">;
              page?: number;
              count?: number;
            };
          },
          callbacks: Record<number, any> & {
            200?: (
              response: Array<{
                _id?: string;
                groupName: string;
                accessLevel: "public" | "inviteOnly" | "restricted";
                userIds: Array<string>;
                type?: "public" | "inviteOnly" | "restricted";
                audit?: {};
              }>
            ) => void;
            500?: (response: {
              code?: string;
              id?: string;
              message?: string;
              details?: string;
            }) => void;
            fallback?: (response?: unknown) => void;
          }
        ) => {
          let finalURL =
            "https://development-api.boomfantasy.com:443/api/v1/groups";
          finalURL += `?${Object.entries(request.query)
            .map(([key, value]) => `${key}=${value}`)
            .join("&")}`;
          if (!adapter) {
            throw new Error(
              "Please initialize Fetcher before attempting to make any network calls"
            );
          }

          try {
            const response = await adapter(finalURL, "get");

            if (callbacks[response.statusCode]) {
              callbacks[response.statusCode](response.data);
              return;
            }

            if (!callbacks.fallback) {
              throw new Error("Unexpected error occurred");
            }
            callbacks.fallback(response.data);
          } catch (err: any) {
            if (callbacks[err.response.statusCode]) {
              callbacks[err.response.statusCode](err.response.data);
              return;
            }

            if (!callbacks.fallback) {
              throw new Error("Unexpected error occurred");
            }
            callbacks.fallback(err.response.data);
          }
        },
        post: async (
          request: {
            body: {
              userManaged?: boolean;
              group?: {
                groupName: string;
                accessLevel: "public" | "inviteOnly" | "restricted";
                userIds?: any;
              };
            };
          },
          callbacks: Record<number, any> & {
            200?: (response: {
              createdGroup?: {
                _id?: string;
                groupName: string;
                accessLevel: "public" | "inviteOnly" | "restricted";
                userIds: Array<string>;
                type?: "public" | "inviteOnly" | "restricted";
                audit?: {};
              };
              invite?: { inviteId: string; branchLink?: string; code?: string };
            }) => void;
            500?: (response: {
              code?: string;
              id?: string;
              message?: string;
              details?: string;
            }) => void;
            fallback?: (response?: unknown) => void;
          }
        ) => {
          let finalURL =
            "https://development-api.boomfantasy.com:443/api/v1/groups";
          if (!adapter) {
            throw new Error(
              "Please initialize Fetcher before attempting to make any network calls"
            );
          }

          try {
            const response = await adapter(finalURL, "post", request.body);

            if (callbacks[response.statusCode]) {
              callbacks[response.statusCode](response.data);
              return;
            }

            if (!callbacks.fallback) {
              throw new Error("Unexpected error occurred");
            }
            callbacks.fallback(response.data);
          } catch (err: any) {
            if (callbacks[err.response.statusCode]) {
              callbacks[err.response.statusCode](err.response.data);
              return;
            }

            if (!callbacks.fallback) {
              throw new Error("Unexpected error occurred");
            }
            callbacks.fallback(err.response.data);
          }
        },
        byGroupId: {
          users: {
            put: async (
              request: {
                params: {
                  groupId?: string;
                };
                body: { userIds: Array<string> };
              },
              callbacks: Record<number, any> & {
                204?: (response?: unknown) => void;
                404?: (response: {
                  code?: string;
                  id?: string;
                  message?: string;
                  details?: string;
                }) => void;
                500?: (response: {
                  code?: string;
                  id?: string;
                  message?: string;
                  details?: string;
                }) => void;
                fallback?: (response?: unknown) => void;
              }
            ) => {
              let finalURL =
                "https://development-api.boomfantasy.com:443/api/v1/groups/:groupId/users";
              Object.entries(request.params).forEach(([key, value]) => {
                finalURL = finalURL.replaceAll(`{${key}}`, value);
              });
              if (!adapter) {
                throw new Error(
                  "Please initialize Fetcher before attempting to make any network calls"
                );
              }

              try {
                const response = await adapter(finalURL, "put", request.body);

                if (callbacks[response.statusCode]) {
                  callbacks[response.statusCode](response.data);
                  return;
                }

                if (!callbacks.fallback) {
                  throw new Error("Unexpected error occurred");
                }
                callbacks.fallback(response.data);
              } catch (err: any) {
                if (callbacks[err.response.statusCode]) {
                  callbacks[err.response.statusCode](err.response.data);
                  return;
                }

                if (!callbacks.fallback) {
                  throw new Error("Unexpected error occurred");
                }
                callbacks.fallback(err.response.data);
              }
            },
            byUserId: {
              delete: async (
                request: {
                  params: {
                    groupId?: string;
                    userId?: string;
                  };
                },
                callbacks: Record<number, any> & {
                  204?: (response?: unknown) => void;
                  404?: (response: {
                    code?: string;
                    id?: string;
                    message?: string;
                    details?: string;
                  }) => void;
                  500?: (response: {
                    code?: string;
                    id?: string;
                    message?: string;
                    details?: string;
                  }) => void;
                  fallback?: (response?: unknown) => void;
                }
              ) => {
                let finalURL =
                  "https://development-api.boomfantasy.com:443/api/v1/groups/:groupId/users/:userId";
                Object.entries(request.params).forEach(([key, value]) => {
                  finalURL = finalURL.replaceAll(`{${key}}`, value);
                });
                if (!adapter) {
                  throw new Error(
                    "Please initialize Fetcher before attempting to make any network calls"
                  );
                }

                try {
                  const response = await adapter(finalURL, "delete");

                  if (callbacks[response.statusCode]) {
                    callbacks[response.statusCode](response.data);
                    return;
                  }

                  if (!callbacks.fallback) {
                    throw new Error("Unexpected error occurred");
                  }
                  callbacks.fallback(response.data);
                } catch (err: any) {
                  if (callbacks[err.response.statusCode]) {
                    callbacks[err.response.statusCode](err.response.data);
                    return;
                  }

                  if (!callbacks.fallback) {
                    throw new Error("Unexpected error occurred");
                  }
                  callbacks.fallback(err.response.data);
                }
              },
            },
          },
          images: {
            logo: {
              post: async (
                request: {
                  params: {
                    groupId?: string;
                  };
                },
                callbacks: Record<number, any> & {
                  200?: (response: { publicUrl?: string }) => void;
                  500?: (response: {
                    code?: string;
                    id?: string;
                    message?: string;
                    details?: string;
                  }) => void;
                  fallback?: (response?: unknown) => void;
                }
              ) => {
                let finalURL =
                  "https://development-api.boomfantasy.com:443/api/v1/groups/:groupId/images/logo";
                Object.entries(request.params).forEach(([key, value]) => {
                  finalURL = finalURL.replaceAll(`{${key}}`, value);
                });
                if (!adapter) {
                  throw new Error(
                    "Please initialize Fetcher before attempting to make any network calls"
                  );
                }

                try {
                  const response = await adapter(finalURL, "post");

                  if (callbacks[response.statusCode]) {
                    callbacks[response.statusCode](response.data);
                    return;
                  }

                  if (!callbacks.fallback) {
                    throw new Error("Unexpected error occurred");
                  }
                  callbacks.fallback(response.data);
                } catch (err: any) {
                  if (callbacks[err.response.statusCode]) {
                    callbacks[err.response.statusCode](err.response.data);
                    return;
                  }

                  if (!callbacks.fallback) {
                    throw new Error("Unexpected error occurred");
                  }
                  callbacks.fallback(err.response.data);
                }
              },
            },
          },
        },
        users: {
          byUserId: {
            access: {
              get: async (
                request: {
                  query: {
                    groupIds?: Array<string>;
                  };
                  params: {
                    userId?: string;
                  };
                },
                callbacks: Record<number, any> & {
                  200?: (response?: unknown) => void;
                  500?: (response: {
                    code?: string;
                    id?: string;
                    message?: string;
                    details?: string;
                  }) => void;
                  fallback?: (response?: unknown) => void;
                }
              ) => {
                let finalURL =
                  "https://development-api.boomfantasy.com:443/api/v1/groups/users/:userId/access";
                finalURL += `?${Object.entries(request.query)
                  .map(([key, value]) => `${key}=${value}`)
                  .join("&")}`;
                Object.entries(request.params).forEach(([key, value]) => {
                  finalURL = finalURL.replaceAll(`{${key}}`, value);
                });
                if (!adapter) {
                  throw new Error(
                    "Please initialize Fetcher before attempting to make any network calls"
                  );
                }

                try {
                  const response = await adapter(finalURL, "get");

                  if (callbacks[response.statusCode]) {
                    callbacks[response.statusCode](response.data);
                    return;
                  }

                  if (!callbacks.fallback) {
                    throw new Error("Unexpected error occurred");
                  }
                  callbacks.fallback(response.data);
                } catch (err: any) {
                  if (callbacks[err.response.statusCode]) {
                    callbacks[err.response.statusCode](err.response.data);
                    return;
                  }

                  if (!callbacks.fallback) {
                    throw new Error("Unexpected error occurred");
                  }
                  callbacks.fallback(err.response.data);
                }
              },
            },
          },
        },
      },
    },
    v2: {
      users: {
        get: async (
          request: {
            query: {
              userIds?: Array<string>;
              emailAddress?: string;
              username?: string;
              searchField?: string;
              page?: number;
              count?: number;
              includeDeleted?: "true";
            };
          },
          callbacks: Record<number, any> & {
            200?: (
              response: Array<{
                _id?: string;
                profile?: {
                  username?: string;
                  displayName?: string;
                  email?: { address?: string; verified?: boolean };
                  age?: number;
                  consent?: {
                    marketingEmail?: boolean;
                    marketingPhone?: boolean;
                    marketingPush?: boolean;
                  };
                  communication?: { fcmTokens?: {}; idfa?: {} };
                };
                authenticationProviders?: {
                  refreshToken?: { token?: string };
                  password?: { password?: string };
                  google?: { profileId?: string };
                  facebook?: { profileId?: string };
                  apple?: { profileId?: string };
                  phone?: { number?: string };
                  yesnetwork?: { profileId?: string };
                };
                roles?: Array<number>;
                events?: {};
                wallets?: {};
              }>
            ) => void;
            400?: (response?: unknown) => void;
            500?: (response: {
              code?: string;
              id?: string;
              message?: string;
              details?: string;
            }) => void;
            fallback?: (response?: unknown) => void;
          }
        ) => {
          let finalURL =
            "https://development-api.boomfantasy.com:443/api/v2/users";
          finalURL += `?${Object.entries(request.query)
            .map(([key, value]) => `${key}=${value}`)
            .join("&")}`;
          if (!adapter) {
            throw new Error(
              "Please initialize Fetcher before attempting to make any network calls"
            );
          }

          try {
            const response = await adapter(finalURL, "get");

            if (callbacks[response.statusCode]) {
              callbacks[response.statusCode](response.data);
              return;
            }

            if (!callbacks.fallback) {
              throw new Error("Unexpected error occurred");
            }
            callbacks.fallback(response.data);
          } catch (err: any) {
            if (callbacks[err.response.statusCode]) {
              callbacks[err.response.statusCode](err.response.data);
              return;
            }

            if (!callbacks.fallback) {
              throw new Error("Unexpected error occurred");
            }
            callbacks.fallback(err.response.data);
          }
        },
        post: async (
          request: {
            body: {
              username?: string;
              emailAddress?: string;
              location?: {
                ipAddress?: string;
                longitude?: number;
                latitude?: number;
                zipCode?: string;
              };
              age?: number;
              consent?: {
                marketingEmail?: boolean;
                marketingPhone?: boolean;
                marketingPush?: boolean;
              };
              authentication?: {
                type:
                  | "google"
                  | "facebook"
                  | "apple"
                  | "password"
                  | "phone"
                  | "refresh"
                  | "invite"
                  | "yesnetwork";
                credentials?: {
                  email?: string;
                  password?: string;
                  providerToken?: string;
                  phone?: string;
                  code?: string;
                  inviteId?: string;
                };
              };
              fcmToken?: string;
              acceptedTerms: "true";
              eventInfo?: {};
              details?: {};
            };
          },
          callbacks: Record<number, any> & {
            200?: (response: string) => void;
            500?: (response: {
              code?: string;
              id?: string;
              message?: string;
              details?: string;
            }) => void;
            fallback?: (response?: unknown) => void;
          }
        ) => {
          let finalURL =
            "https://development-api.boomfantasy.com:443/api/v2/users";
          if (!adapter) {
            throw new Error(
              "Please initialize Fetcher before attempting to make any network calls"
            );
          }

          try {
            const response = await adapter(finalURL, "post", request.body);

            if (callbacks[response.statusCode]) {
              callbacks[response.statusCode](response.data);
              return;
            }

            if (!callbacks.fallback) {
              throw new Error("Unexpected error occurred");
            }
            callbacks.fallback(response.data);
          } catch (err: any) {
            if (callbacks[err.response.statusCode]) {
              callbacks[err.response.statusCode](err.response.data);
              return;
            }

            if (!callbacks.fallback) {
              throw new Error("Unexpected error occurred");
            }
            callbacks.fallback(err.response.data);
          }
        },
        bulk_search: {
          post: async (
            request: {
              body: { userIds: Array<string>; includeDeleted?: "true" };
            },
            callbacks: Record<number, any> & {
              200?: (
                response: Array<{
                  _id?: string;
                  profile?: {
                    username?: string;
                    displayName?: string;
                    email?: { address?: string; verified?: boolean };
                    age?: number;
                    consent?: {
                      marketingEmail?: boolean;
                      marketingPhone?: boolean;
                      marketingPush?: boolean;
                    };
                    communication?: { fcmTokens?: {}; idfa?: {} };
                  };
                  authenticationProviders?: {
                    refreshToken?: { token?: string };
                    password?: { password?: string };
                    google?: { profileId?: string };
                    facebook?: { profileId?: string };
                    apple?: { profileId?: string };
                    phone?: { number?: string };
                    yesnetwork?: { profileId?: string };
                  };
                  roles?: Array<number>;
                  events?: {};
                  wallets?: {};
                }>
              ) => void;
              400?: (response?: unknown) => void;
              500?: (response: {
                code?: string;
                id?: string;
                message?: string;
                details?: string;
              }) => void;
              fallback?: (response?: unknown) => void;
            }
          ) => {
            let finalURL =
              "https://development-api.boomfantasy.com:443/api/v2/users/bulk_search";
            if (!adapter) {
              throw new Error(
                "Please initialize Fetcher before attempting to make any network calls"
              );
            }

            try {
              const response = await adapter(finalURL, "post", request.body);

              if (callbacks[response.statusCode]) {
                callbacks[response.statusCode](response.data);
                return;
              }

              if (!callbacks.fallback) {
                throw new Error("Unexpected error occurred");
              }
              callbacks.fallback(response.data);
            } catch (err: any) {
              if (callbacks[err.response.statusCode]) {
                callbacks[err.response.statusCode](err.response.data);
                return;
              }

              if (!callbacks.fallback) {
                throw new Error("Unexpected error occurred");
              }
              callbacks.fallback(err.response.data);
            }
          },
        },
      },
    },
  },
};

const initializeLib = (newAdapter: ServiceCallAdapter) => {
  adapter = newAdapter;
  return BoomSportsUserService;
};

export default initializeLib;
