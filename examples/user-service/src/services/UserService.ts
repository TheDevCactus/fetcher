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

export type HTTPMethod = 'get' | 'post' | 'put' | 'patch' | 'update' | 'delete';

export type ServiceCallResponse<Response> = {
  data: Response;
  statusCode: number;
};

export type ServiceCallAdapter = <Response>(
  url: string,
  method: HTTPMethod,
  body: unknown,
) => Promise<ServiceCallResponse<Response>>;

let adapter: ServiceCallAdapter | null = null;

const generateServiceCall = <
  Request extends {
    body?: Record<string, any>;
    query?: Record<string, any>;
    params?: Record<string, any>;
  } | null,
  Response,
>(
  url: string,
  method: HTTPMethod,
  knownStatusCodes: Array<number>,
) => {
  return async (request: Request) => {
    let finalURL = url;

    if (request?.query) {
      finalURL += `?${Object.entries(request.query)
        .map(([key, value]) => `${key}=${value}`)
        .join('&')}`;
    }

    if (request?.params) {
      Object.entries(request.params).forEach(([key, value]) => {
        finalURL = finalURL.replaceAll(`{${key}}`, value);
      });
    }

    if (!adapter) {
      throw new Error(
        'Please initialize fetcher before attempting to make any network calls',
      );
    }

    const response = await adapter<Response>(finalURL, method, request?.body);

    if (!knownStatusCodes.includes(response.statusCode)) {
      throw new Error('Unexpected error occurred');
    }

    return {
      data: response.data,
      status: response.statusCode,
    };
  };
};

/**
 * @description
 */
const BoomSportsUserService = {
  api: {
    v1: {
      users: {
        get: generateServiceCall<
          {
            query: {
              userIds?: Array<string>;
              emailAddress?: string;
              username?: string;
              searchField?: string;
              page?: number;
              count?: number;
              includeDeleted?: 'true';
            };
          },
          | Array<{
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
          | null
          | { code?: string; id?: string; message?: string; details?: string }
        >(
          'https://development-api.boomfantasy.com:443/api/v1/users',
          'get',
          [200, 400, 500],
        ),
        roles: {
          get: generateServiceCall<
            null,
            | {
                roles?: Array<{
                  id?: number;
                  default?: boolean;
                  permissions?: Array<string>;
                }>;
              }
            | { code?: string; id?: string; message?: string; details?: string }
          >(
            'https://development-api.boomfantasy.com:443/api/v1/users/roles',
            'get',
            [200, 500],
          ),
        },
        ':userId': {
          get: generateServiceCall<
            {
              query: {
                includeDeleted?: 'true';
              };
              params: {
                userId?: string;
              };
            },
            | {
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
              }
            | { code?: string; id?: string; message?: string; details?: string }
          >(
            'https://development-api.boomfantasy.com:443/api/v1/users/:userId',
            'get',
            [200, 500],
          ),
          patch: generateServiceCall<
            {
              params: {
                userId?: string;
              };
              body: {
                username?: string;
                email?: string;
                imageId?: string;
                adId?: string;
                roles?: Array<number>;
                removeProfilePic?: 'true';
                consent?: {
                  marketingEmail?: boolean;
                  marketingPhone?: boolean;
                  marketingPush?: boolean;
                };
                fcmToken?: string;
                eventInfo?: {};
                details?: {};
                w9Status?: 'yes' | 'no' | 'requested';
              };
            },
            null | {
              code?: string;
              id?: string;
              message?: string;
              details?: string;
            }
          >(
            'https://development-api.boomfantasy.com:443/api/v1/users/:userId',
            'patch',
            [204, 500],
          ),
          location: {
            patch: generateServiceCall<
              {
                params: {
                  userId?: string;
                };
                body: {
                  latitude?: number;
                  longitude?: number;
                  ipAddress?: string;
                };
              },
              null | {
                code?: string;
                id?: string;
                message?: string;
                details?: string;
              }
            >(
              'https://development-api.boomfantasy.com:443/api/v1/users/:userId/location',
              'patch',
              [204, 500],
            ),
          },
          status: {
            patch: generateServiceCall<
              {
                params: {
                  userId?: string;
                };
                body: {
                  newStatus:
                    | 'banned'
                    | 'unbanned'
                    | 'closed'
                    | 'reopened'
                    | 'deleted';
                  reason?: string;
                  eventInfo?: {};
                };
              },
              null | {
                code?: string;
                id?: string;
                message?: string;
                details?: string;
              }
            >(
              'https://development-api.boomfantasy.com:443/api/v1/users/:userId/status',
              'patch',
              [204, 500],
            ),
          },
          manual_verify: {
            patch: generateServiceCall<
              {
                params: {
                  userId?: string;
                };
                body: { verified: boolean; eventInfo?: {} };
              },
              null | {
                code?: string;
                id?: string;
                message?: string;
                details?: string;
              }
            >(
              'https://development-api.boomfantasy.com:443/api/v1/users/:userId/manual_verify',
              'patch',
              [204, 500],
            ),
          },
          wallets: {
            post: generateServiceCall<
              {
                params: {
                  userId?: string;
                };
                body: { walletType: 'credits'; beginningValue?: number };
              },
              null | {
                code?: string;
                id?: string;
                message?: string;
                details?: string;
              }
            >(
              'https://development-api.boomfantasy.com:443/api/v1/users/:userId/wallets',
              'post',
              [204, 500],
            ),
            get: generateServiceCall<
              {
                query: {
                  type?: 'credits';
                };
                params: {
                  userId?: string;
                };
              },
              | { filtered?: { currentBalance?: number }; unfiltered?: {} }
              | {
                  code?: string;
                  id?: string;
                  message?: string;
                  details?: string;
                }
            >(
              'https://development-api.boomfantasy.com:443/api/v1/users/:userId/wallets',
              'get',
              [200, 404, 500],
            ),
            ':type': {
              patch: generateServiceCall<
                {
                  params: {
                    userId?: string;
                    type?: 'credits';
                  };
                  body: { delta: number };
                },
                | { currentBalance?: number }
                | {
                    code?: string;
                    id?: string;
                    message?: string;
                    details?: string;
                  }
              >(
                'https://development-api.boomfantasy.com:443/api/v1/users/:userId/wallets/:type',
                'patch',
                [200, 404, 500],
              ),
              withdrawals: {
                post: generateServiceCall<
                  {
                    params: {
                      userId?: string;
                      type?: 'credits';
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
                  null | {
                    code?: string;
                    id?: string;
                    message?: string;
                    details?: string;
                  }
                >(
                  'https://development-api.boomfantasy.com:443/api/v1/users/:userId/wallets/:type/withdrawals',
                  'post',
                  [204, 400, 401, 404, 500],
                ),
              },
            },
          },
          referral: {
            get: generateServiceCall<
              {
                params: {
                  userId?: string;
                };
              },
              | { link?: string }
              | {
                  code?: string;
                  id?: string;
                  message?: string;
                  details?: string;
                }
            >(
              'https://development-api.boomfantasy.com:443/api/v1/users/:userId/referral',
              'get',
              [200, 500],
            ),
          },
          verification: {
            get: generateServiceCall<
              {
                params: {
                  userId?: string;
                };
              },
              | {
                  identityVerification?: {
                    idologyId?: string;
                    verified?: boolean;
                    timestamp?: string;
                  };
                }
              | {
                  code?: string;
                  id?: string;
                  message?: string;
                  details?: string;
                }
            >(
              'https://development-api.boomfantasy.com:443/api/v1/users/:userId/verification',
              'get',
              [200, 404, 500],
            ),
            post: generateServiceCall<
              {
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
              null | {
                code?: string;
                id?: string;
                message?: string;
                details?: string;
              }
            >(
              'https://development-api.boomfantasy.com:443/api/v1/users/:userId/verification',
              'post',
              [204, 400, 500],
            ),
            patch: generateServiceCall<
              {
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
              null | {
                code?: string;
                id?: string;
                message?: string;
                details?: string;
              }
            >(
              'https://development-api.boomfantasy.com:443/api/v1/users/:userId/verification',
              'patch',
              [204, 400, 500],
            ),
          },
          images: {
            profile: {
              post: generateServiceCall<
                {
                  params: {
                    userId?: string;
                  };
                },
                | { publicUrl?: string }
                | {
                    code?: string;
                    id?: string;
                    message?: string;
                    details?: string;
                  }
              >(
                'https://development-api.boomfantasy.com:443/api/v1/users/:userId/images/profile',
                'post',
                [200, 500],
              ),
            },
          },
          groups: {
            post: generateServiceCall<
              {
                params: {
                  userId?: string;
                };
                body: { groupId: string };
              },
              null | {
                code?: string;
                id?: string;
                message?: string;
                details?: string;
              }
            >(
              'https://development-api.boomfantasy.com:443/api/v1/users/:userId/groups',
              'post',
              [200, 404, 500],
            ),
            ':groupId': {
              delete: generateServiceCall<
                {
                  params: {
                    userId?: string;
                    groupId?: string;
                  };
                },
                null | {
                  code?: string;
                  id?: string;
                  message?: string;
                  details?: string;
                }
              >(
                'https://development-api.boomfantasy.com:443/api/v1/users/:userId/groups/:groupId',
                'delete',
                [200, 404, 500],
              ),
            },
          },
        },
        'self-exclude': {
          post: generateServiceCall<
            {
              body: { limit: number };
            },
            null | {
              code?: string;
              id?: string;
              message?: string;
              details?: string;
            }
          >(
            'https://development-api.boomfantasy.com:443/api/v1/users/self-exclude',
            'post',
            [204, 500],
          ),
        },
        'initial-location': {
          post: generateServiceCall<
            null,
            null | {
              code?: string;
              id?: string;
              message?: string;
              details?: string;
            }
          >(
            'https://development-api.boomfantasy.com:443/api/v1/users/initial-location',
            'post',
            [204, 500],
          ),
        },
        bulk_update: {
          bestScores: {
            post: generateServiceCall<
              {
                body: {
                  action: 'updateBestScores';
                  league: string;
                  contestId: string;
                  contestMaxPossiblePoints: number;
                  scheduled: string;
                  description: string;
                  reason?: {};
                  improvedUsers: Array<{ userId: string; newScore: number }>;
                };
              },
              | { recordsReceived?: number; recordsModified?: number }
              | {
                  code?: string;
                  id?: string;
                  message?: string;
                  details?: string;
                }
            >(
              'https://development-api.boomfantasy.com:443/api/v1/users/bulk_update/bestScores',
              'post',
              [200, 500],
            ),
          },
        },
        wallets: {
          ':type': {
            withdrawals: {
              ':status': {
                get: generateServiceCall<
                  {
                    params: {
                      type?: 'credits';
                      status?:
                        | 'pending'
                        | 'completed'
                        | 'rejected'
                        | 'cancelled';
                    };
                  },
                  | {
                      withdrawals?: Array<{
                        _id?: string;
                        userId?: string;
                        emailAddress?: string;
                        firstName?: string;
                        lastName?: string;
                        createdAt?: string;
                        completedAd?: string;
                        status?:
                          | 'pending'
                          | 'completed'
                          | 'rejected'
                          | 'cancelled';
                        notes?: string;
                        hidden?: boolean;
                        amount?: number;
                        eligibleForMassPayment?: boolean;
                      }>;
                    }
                  | {
                      code?: string;
                      id?: string;
                      message?: string;
                      details?: string;
                    }
                >(
                  'https://development-api.boomfantasy.com:443/api/v1/users/wallets/:type/withdrawals/:status',
                  'get',
                  [200, 500],
                ),
              },
            },
          },
          bulk_update: {
            post: generateServiceCall<
              {
                body: {
                  updates: Array<{
                    walletType: string;
                    userIds?: Array<string>;
                    delta: number;
                  }>;
                  reason?: {};
                };
              },
              | { expectedUserUpdates?: number; modifiedRecords?: number }
              | {
                  code?: string;
                  id?: string;
                  message?: string;
                  details?: string;
                }
            >(
              'https://development-api.boomfantasy.com:443/api/v1/users/wallets/bulk_update',
              'post',
              [200, 500],
            ),
            winnings: {
              post: generateServiceCall<
                {
                  body: {
                    updates: Array<{
                      walletType: string;
                      userIds?: Array<string>;
                      delta: number;
                    }>;
                    reason?: {};
                  };
                },
                | { expectedUserUpdates?: number; modifiedRecords?: number }
                | {
                    code?: string;
                    id?: string;
                    message?: string;
                    details?: string;
                  }
              >(
                'https://development-api.boomfantasy.com:443/api/v1/users/wallets/bulk_update/winnings',
                'post',
                [200, 500],
              ),
            },
            withdrawals: {
              post: generateServiceCall<
                {
                  body: {
                    action: 'complete';
                    withdrawalRequestIds: Array<string>;
                  };
                },
                | {
                    batchId?: string;
                    expectedUpdateCount?: number;
                    attemptedUpdateCount?: number;
                    userWalletsUpdated?: number;
                    withdrawalRequestsUpdated?: number;
                  }
                | {
                    code?: string;
                    id?: string;
                    message?: string;
                    details?: string;
                  }
              >(
                'https://development-api.boomfantasy.com:443/api/v1/users/wallets/bulk_update/withdrawals',
                'post',
                [200, 500],
              ),
            },
          },
        },
        groups: {
          bulk: {
            post: generateServiceCall<
              {
                body: {
                  updates: Array<{ userId: string; groupId: string }>;
                  remove?: boolean;
                };
              },
              null | {
                code?: string;
                id?: string;
                message?: string;
                details?: string;
              }
            >(
              'https://development-api.boomfantasy.com:443/api/v1/users/groups/bulk',
              'post',
              [200, 500],
            ),
          },
        },
        names: {
          ':name': {
            get: generateServiceCall<
              {
                params: {
                  name?: string;
                };
              },
              | { hasProfanity?: boolean }
              | {
                  code?: string;
                  id?: string;
                  message?: string;
                  details?: string;
                }
            >(
              'https://development-api.boomfantasy.com:443/api/v1/users/names/:name',
              'get',
              [200, 500],
            ),
          },
        },
        emails: {
          ':email': {
            get: generateServiceCall<
              {
                params: {
                  email?: string;
                };
              },
              | { exists?: boolean }
              | {
                  code?: string;
                  id?: string;
                  message?: string;
                  details?: string;
                }
            >(
              'https://development-api.boomfantasy.com:443/api/v1/users/emails/:email',
              'get',
              [200, 500],
            ),
          },
        },
        devices: {
          allowed: {
            post: generateServiceCall<
              {
                body: { deviceId: string };
              },
              { code?: string; id?: string; message?: string; details?: string }
            >(
              'https://development-api.boomfantasy.com:443/api/v1/users/devices/allowed',
              'post',
              [500],
            ),
            delete: generateServiceCall<
              {
                body: { deviceId: string };
              },
              { code?: string; id?: string; message?: string; details?: string }
            >(
              'https://development-api.boomfantasy.com:443/api/v1/users/devices/allowed',
              'delete',
              [500],
            ),
            get: generateServiceCall<
              {
                query: {
                  page?: number;
                  count?: number;
                };
              },
              { code?: string; id?: string; message?: string; details?: string }
            >(
              'https://development-api.boomfantasy.com:443/api/v1/users/devices/allowed',
              'get',
              [500],
            ),
          },
          banned: {
            post: generateServiceCall<
              {
                body: { deviceId: string; reason?: string };
              },
              { code?: string; id?: string; message?: string; details?: string }
            >(
              'https://development-api.boomfantasy.com:443/api/v1/users/devices/banned',
              'post',
              [500],
            ),
            delete: generateServiceCall<
              {
                body: { deviceId: string };
              },
              { code?: string; id?: string; message?: string; details?: string }
            >(
              'https://development-api.boomfantasy.com:443/api/v1/users/devices/banned',
              'delete',
              [500],
            ),
            get: generateServiceCall<
              {
                query: {
                  page?: number;
                  count?: number;
                };
              },
              { code?: string; id?: string; message?: string; details?: string }
            >(
              'https://development-api.boomfantasy.com:443/api/v1/users/devices/banned',
              'get',
              [500],
            ),
          },
        },
      },
      phones: {
        ':number': {
          verification: {
            post: generateServiceCall<
              {
                params: {
                  number?: string;
                };
                body: { intent?: 'authentication' | 'addNumberToAccount' };
              },
              | { hasAccount?: boolean; message?: string; length?: number }
              | null
              | {
                  code?: string;
                  id?: string;
                  message?: string;
                  details?: string;
                }
            >(
              'https://development-api.boomfantasy.com:443/api/v1/phones/:number/verification',
              'post',
              [200, 204, 500],
            ),
            ':code': {
              patch: generateServiceCall<
                {
                  params: {
                    number?: string;
                    code?: string;
                  };
                },
                null | {
                  code?: string;
                  id?: string;
                  message?: string;
                  details?: string;
                }
              >(
                'https://development-api.boomfantasy.com:443/api/v1/phones/:number/verification/:code',
                'patch',
                [204, 500],
              ),
            },
          },
        },
      },
      sessions: {
        post: generateServiceCall<
          {
            body: {
              authentication: {
                type:
                  | 'email'
                  | 'google'
                  | 'facebook'
                  | 'apple'
                  | 'password'
                  | 'phone'
                  | 'refresh'
                  | 'invite'
                  | 'yesnetwork';
                credentials?: {};
              };
              locationServicesDenied?: boolean;
              coordinates?: { longitude?: number; latitude?: number };
              clientSessionId?: string;
              clientInfo?: {};
              eventInfo?: {};
            };
          },
          | {
              userId: string;
              accessToken: string;
              refreshToken: string;
              location?: {
                latitude?: number;
                longitude?: number;
                zipCode?: string;
              };
            }
          | { code?: string; id?: string; message?: string; details?: string }
        >(
          'https://development-api.boomfantasy.com:443/api/v1/sessions',
          'post',
          [200, 500],
        ),
      },
      usernames: {
        randomUsername: {
          post: generateServiceCall<
            {
              body: {
                options?: {
                  format?: 'kebab' | 'camel' | 'sentence' | 'lower' | 'title';
                  categories?: {
                    noun?: Array<undefined>;
                    adjective?: Array<undefined>;
                  };
                  partsOfSpeech?: Array<undefined>;
                  appendNumber?: {
                    minValue?: number;
                    maxValue?: number;
                    zeroPad?: boolean;
                  };
                };
              };
            },
            | { username?: string }
            | { code?: string; id?: string; message?: string; details?: string }
          >(
            'https://development-api.boomfantasy.com:443/api/v1/usernames/randomUsername',
            'post',
            [200, 500],
          ),
        },
        ':username': {
          get: generateServiceCall<
            {
              params: {
                username?: string;
              };
            },
            | { exists?: boolean; valid?: boolean }
            | { code?: string; id?: string; message?: string; details?: string }
          >(
            'https://development-api.boomfantasy.com:443/api/v1/usernames/:username',
            'get',
            [200, 500],
          ),
        },
      },
      groups: {
        get: generateServiceCall<
          {
            query: {
              groupIds?: Array<string>;
              statuses?: Array<'active'>;
              page?: number;
              count?: number;
            };
          },
          | Array<{
              _id?: string;
              groupName: string;
              accessLevel: 'public' | 'inviteOnly' | 'restricted';
              userIds: Array<string>;
              type?: 'public' | 'inviteOnly' | 'restricted';
              audit?: {};
            }>
          | { code?: string; id?: string; message?: string; details?: string }
        >(
          'https://development-api.boomfantasy.com:443/api/v1/groups',
          'get',
          [200, 500],
        ),
        post: generateServiceCall<
          {
            body: {
              userManaged?: boolean;
              group?: {
                groupName: string;
                accessLevel: 'public' | 'inviteOnly' | 'restricted';
                userIds?: undefined;
              };
            };
          },
          | {
              createdGroup?: {
                _id?: string;
                groupName: string;
                accessLevel: 'public' | 'inviteOnly' | 'restricted';
                userIds: Array<string>;
                type?: 'public' | 'inviteOnly' | 'restricted';
                audit?: {};
              };
              invite?: { inviteId: string; branchLink?: string; code?: string };
            }
          | { code?: string; id?: string; message?: string; details?: string }
        >(
          'https://development-api.boomfantasy.com:443/api/v1/groups',
          'post',
          [200, 500],
        ),
        ':groupId': {
          users: {
            put: generateServiceCall<
              {
                params: {
                  groupId?: string;
                };
                body: { userIds: Array<string> };
              },
              null | {
                code?: string;
                id?: string;
                message?: string;
                details?: string;
              }
            >(
              'https://development-api.boomfantasy.com:443/api/v1/groups/:groupId/users',
              'put',
              [204, 404, 500],
            ),
            ':userId': {
              delete: generateServiceCall<
                {
                  params: {
                    groupId?: string;
                    userId?: string;
                  };
                },
                null | {
                  code?: string;
                  id?: string;
                  message?: string;
                  details?: string;
                }
              >(
                'https://development-api.boomfantasy.com:443/api/v1/groups/:groupId/users/:userId',
                'delete',
                [204, 404, 500],
              ),
            },
          },
          images: {
            logo: {
              post: generateServiceCall<
                {
                  params: {
                    groupId?: string;
                  };
                },
                | { publicUrl?: string }
                | {
                    code?: string;
                    id?: string;
                    message?: string;
                    details?: string;
                  }
              >(
                'https://development-api.boomfantasy.com:443/api/v1/groups/:groupId/images/logo',
                'post',
                [200, 500],
              ),
            },
          },
        },
        users: {
          ':userId': {
            access: {
              get: generateServiceCall<
                {
                  query: {
                    groupIds?: Array<string>;
                  };
                  params: {
                    userId?: string;
                  };
                },
                null | {
                  code?: string;
                  id?: string;
                  message?: string;
                  details?: string;
                }
              >(
                'https://development-api.boomfantasy.com:443/api/v1/groups/users/:userId/access',
                'get',
                [200, 500],
              ),
            },
          },
        },
      },
    },
    v2: {
      users: {
        get: generateServiceCall<
          {
            query: {
              userIds?: Array<string>;
              emailAddress?: string;
              username?: string;
              searchField?: string;
              page?: number;
              count?: number;
              includeDeleted?: 'true';
            };
          },
          | Array<{
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
          | null
          | { code?: string; id?: string; message?: string; details?: string }
        >(
          'https://development-api.boomfantasy.com:443/api/v2/users',
          'get',
          [200, 400, 500],
        ),
        post: generateServiceCall<
          {
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
                  | 'google'
                  | 'facebook'
                  | 'apple'
                  | 'password'
                  | 'phone'
                  | 'refresh'
                  | 'invite'
                  | 'yesnetwork';
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
              acceptedTerms: 'true';
              eventInfo?: {};
              details?: {};
            };
          },
          | string
          | { code?: string; id?: string; message?: string; details?: string }
        >(
          'https://development-api.boomfantasy.com:443/api/v2/users',
          'post',
          [200, 500],
        ),
        bulk_search: {
          post: generateServiceCall<
            {
              body: { userIds: Array<string>; includeDeleted?: 'true' };
            },
            | Array<{
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
            | null
            | { code?: string; id?: string; message?: string; details?: string }
          >(
            'https://development-api.boomfantasy.com:443/api/v2/users/bulk_search',
            'post',
            [200, 400, 500],
          ),
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
