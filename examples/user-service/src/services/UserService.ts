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

export type ResponseType<
  Func extends (argA: any, argB: Record<string, any>) => any,
  StatusCode extends keyof Parameters<Func>[1]
> = Parameters<Parameters<Func>[1][StatusCode]>[0];

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

const initializeFetcherWarning =
  "Please initialize Fetcher before attempting to make any network calls";
const unexpectedErrorWarning = "Unexpected error occurred";

/**
 * @description
 */
const BoomSportsUserService = {
  migrateUser: async (
    request: {
      body: {
        _id: string;
        createdAt: string;
        username: string;
        email?: { address: string; verified: boolean };
        balance: number;
        marketingConsent: boolean;
        password?: string;
        phone?: string;
        deposited?: boolean;
        enteredPaidContest?: boolean;
        totalDeposited?: number;
        experience?: number;
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
    const finalURL =
      "https://development-api.boomfantasy.com:443/api/v1/users/migrate";
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, "post", request.body);
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  bulkCreateInvitesV1: async (
    request: null,
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
    const finalURL =
      "https://development-api.boomfantasy.com:443/api/v1/users/invites/bulkCreate";
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, "post");
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  bulkCreateInvitesV2: async (
    request: null,
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
    const finalURL =
      "https://development-api.boomfantasy.com:443/api/v2/users/invites/bulkCreate";
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, "post");
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  getInvitesV1: async (
    request: {
      query: {
        groupId?: string;
        type?: "celebrity" | "plebian" | "public";
      };
    },
    callbacks: Record<number, any> & {
      200?: (
        response: Array<{
          type: "celebrity" | "plebian" | "public";
          emailAddress?: string;
          username?: string;
          groupId?: string;
          code?: string;
          maxAcceptance?: number;
          expirationDate?: string;
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
      "https://development-api.boomfantasy.com:443/api/v1/users/invites";
    finalURL += `?${Object.entries(request.query)
      .map(([key, value]) => `${key}=${value}`)
      .join("&")}`;
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, "get");
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  createInviteV1: async (
    request: {
      body: {
        type: "celebrity" | "plebian" | "public";
        emailAddress?: string;
        username?: string;
        groupId?: string;
        code?: string;
        maxAcceptance?: number;
        expirationDate?: string;
      };
    },
    callbacks: Record<number, any> & {
      200?: (response: {
        inviteId?: string;
        branchLink?: string;
        code?: string;
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
    const finalURL =
      "https://development-api.boomfantasy.com:443/api/v1/users/invites";
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, "post", request.body);
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  getInvitesV2: async (
    request: {
      query: {
        groupId?: string;
        type?: "celebrity" | "plebian" | "public";
      };
    },
    callbacks: Record<number, any> & {
      200?: (
        response: Array<{
          type: "celebrity" | "plebian" | "public";
          emailAddress?: string;
          username?: string;
          groupId?: string;
          code?: string;
          maxAcceptance?: number;
          expirationDate?: string;
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
      "https://development-api.boomfantasy.com:443/api/v2/users/invites";
    finalURL += `?${Object.entries(request.query)
      .map(([key, value]) => `${key}=${value}`)
      .join("&")}`;
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, "get");
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  createInvite: async (
    request: {
      body: {
        type: "celebrity" | "plebian" | "public";
        emailAddress?: string;
        username?: string;
        groupId?: string;
        code?: string;
        maxAcceptance?: number;
        expirationDate?: string;
      };
    },
    callbacks: Record<number, any> & {
      200?: (response: {
        inviteId?: string;
        branchLink?: string;
        code?: string;
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
    const finalURL =
      "https://development-api.boomfantasy.com:443/api/v2/users/invites";
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, "post", request.body);
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  getInviteV1: async (
    request: {
      params: {
        inviteId?: string;
      };
    },
    callbacks: Record<number, any> & {
      200?: (response: {
        _id?: string;
        type?: "celebrity" | "plebian" | "public";
        groupId?: string;
        code?: string;
        details?: {
          emailAddress?: string;
          username?: string;
          viewed?: boolean;
          used?: boolean;
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
      "https://development-api.boomfantasy.com:443/api/v1/users/invites/:inviteId";
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, "get");
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  getInviteV2: async (
    request: {
      params: {
        inviteId?: string;
      };
    },
    callbacks: Record<number, any> & {
      200?: (response: {
        _id?: string;
        type?: "celebrity" | "plebian" | "public";
        groupId?: string;
        code?: string;
        details?: {
          emailAddress?: string;
          username?: string;
          viewed?: boolean;
          used?: boolean;
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
      "https://development-api.boomfantasy.com:443/api/v2/users/invites/:inviteId";
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, "get");
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  acceptInviteV1: async (
    request: {
      body: { inviteId?: string; code?: string };
    },
    callbacks: Record<number, any> & {
      200?: (response: {
        type: "celebrity" | "plebian" | "public";
        emailAddress?: string;
        username?: string;
        groupId?: string;
        code?: string;
        maxAcceptance?: number;
        expirationDate?: string;
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
    const finalURL =
      "https://development-api.boomfantasy.com:443/api/v1/users/invites/accept";
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, "post", request.body);
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  acceptInviteV2: async (
    request: {
      body: { inviteId?: string; code?: string };
    },
    callbacks: Record<number, any> & {
      200?: (response: {
        type: "celebrity" | "plebian" | "public";
        emailAddress?: string;
        username?: string;
        groupId?: string;
        code?: string;
        maxAcceptance?: number;
        expirationDate?: string;
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
    const finalURL =
      "https://development-api.boomfantasy.com:443/api/v2/users/invites/accept";
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, "post", request.body);
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  requestPasswordReset: async (
    request: {
      body: { emailAddress: string };
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
    const finalURL =
      "https://development-api.boomfantasy.com:443/api/v1/users/passwordReset";
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, "post", request.body);
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  checkPasswordResetCode: async (
    request: {
      params: {
        code?: string;
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
      "https://development-api.boomfantasy.com:443/api/v1/users/passwordReset/:code";
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, "get");
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  resetPassword: async (
    request: {
      params: {
        code?: string;
      };
      body: { newPassword: string; emailAddress?: string };
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
      "https://development-api.boomfantasy.com:443/api/v1/users/passwordReset/:code";
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, "patch", request.body);
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  sendPhoneCode: async (
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
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, "post", request.body);
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  verifyPhoneCode: async (
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
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, "patch");
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  createWaitlistEntry: async (
    request: {
      body: { emailAddress: string };
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
    const finalURL =
      "https://development-api.boomfantasy.com:443/api/v1/users/waitlist";
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, "put", request.body);
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  createSession: async (
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
          credentials?: Record<string, unknown>;
        };
        locationServicesDenied?: boolean;
        coordinates?: { longitude?: number; latitude?: number };
        clientSessionId?: string;
        clientInfo?: Record<string, unknown>;
        eventInfo?: Record<string, unknown>;
      };
    },
    callbacks: Record<number, any> & {
      200?: (response: {
        userId: string;
        accessToken: string;
        refreshToken: string;
        location?: { latitude?: number; longitude?: number; zipCode?: string };
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
    const finalURL =
      "https://development-api.boomfantasy.com:443/api/v1/sessions";
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, "post", request.body);
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  createRandomUsername: async (
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
    const finalURL =
      "https://development-api.boomfantasy.com:443/api/v1/usernames/randomUsername";
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, "post", request.body);
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  checkUsername: async (
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
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, "get");
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  getUsersV1: async (
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
            communication?: {
              fcmTokens?: Record<string, unknown>;
              idfa?: Record<string, unknown>;
            };
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
          events?: Record<string, unknown>;
          wallets?: Record<string, unknown>;
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
    let finalURL = "https://development-api.boomfantasy.com:443/api/v1/users";
    finalURL += `?${Object.entries(request.query)
      .map(([key, value]) => `${key}=${value}`)
      .join("&")}`;
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, "get");
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  getUsersV2: async (
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
            communication?: {
              fcmTokens?: Record<string, unknown>;
              idfa?: Record<string, unknown>;
            };
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
          events?: Record<string, unknown>;
          wallets?: Record<string, unknown>;
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
    let finalURL = "https://development-api.boomfantasy.com:443/api/v2/users";
    finalURL += `?${Object.entries(request.query)
      .map(([key, value]) => `${key}=${value}`)
      .join("&")}`;
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, "get");
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  createUser: async (
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
        eventInfo?: Record<string, unknown>;
        details?: Record<string, unknown>;
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
    const finalURL = "https://development-api.boomfantasy.com:443/api/v2/users";
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, "post", request.body);
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  getUsersInBulk: async (
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
            communication?: {
              fcmTokens?: Record<string, unknown>;
              idfa?: Record<string, unknown>;
            };
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
          events?: Record<string, unknown>;
          wallets?: Record<string, unknown>;
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
    const finalURL =
      "https://development-api.boomfantasy.com:443/api/v2/users/bulk_search";
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, "post", request.body);
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  getRolesForActiveUser: async (
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
    const finalURL =
      "https://development-api.boomfantasy.com:443/api/v1/users/roles";
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, "get");
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  getUserV1: async (
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
          communication?: {
            fcmTokens?: Record<string, unknown>;
            idfa?: Record<string, unknown>;
          };
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
        events?: Record<string, unknown>;
        wallets?: Record<string, unknown>;
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
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, "get");
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  updateUserV1: async (
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
        eventInfo?: Record<string, unknown>;
        details?: Record<string, unknown>;
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
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, "patch", request.body);
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  updateUserLocation: async (
    request: {
      params: {
        userId?: string;
      };
      body: { latitude?: number; longitude?: number; ipAddress?: string };
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
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, "patch", request.body);
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  updateUserStatus: async (
    request: {
      params: {
        userId?: string;
      };
      body: {
        newStatus: "banned" | "unbanned" | "closed" | "reopened" | "deleted";
        reason?: string;
        eventInfo?: Record<string, unknown>;
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
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, "patch", request.body);
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  selfExcludeUser: async (
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
    const finalURL =
      "https://development-api.boomfantasy.com:443/api/v1/users/self-exclude";
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, "post", request.body);
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  setInitialLocation: async (
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
    const finalURL =
      "https://development-api.boomfantasy.com:443/api/v1/users/initial-location";
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, "post");
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  manuallyVerifyUser: async (
    request: {
      params: {
        userId?: string;
      };
      body: { verified: boolean; eventInfo?: Record<string, unknown> };
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
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, "patch", request.body);
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  getWallets: async (
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
        unfiltered?: Record<string, unknown>;
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
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, "get");
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  createWallet: async (
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
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, "post", request.body);
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  updateWallet: async (
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
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, "patch", request.body);
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  bulkUpdateBestScores: async (
    request: {
      body: {
        action: "updateBestScores";
        league: string;
        contestId: string;
        contestMaxPossiblePoints: number;
        scheduled: string;
        description: string;
        reason?: Record<string, unknown>;
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
    const finalURL =
      "https://development-api.boomfantasy.com:443/api/v1/users/bulk_update/bestScores";
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, "post", request.body);
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  requestWithdrawal: async (
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
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, "post", request.body);
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  getWithdrawals: async (
    request: {
      params: {
        type?: "credits";
        status?: "pending" | "completed" | "rejected" | "cancelled";
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
          status?: "pending" | "completed" | "rejected" | "cancelled";
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
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, "get");
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  bulkUpdateWinnings: async (
    request: {
      body: {
        updates: Array<{
          walletType: string;
          userIds?: Array<string>;
          delta: number;
        }>;
        reason?: Record<string, unknown>;
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
    const finalURL =
      "https://development-api.boomfantasy.com:443/api/v1/users/wallets/bulk_update";
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, "post", request.body);
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  alsoBulkUpdateWinningsLol: async (
    request: {
      body: {
        updates: Array<{
          walletType: string;
          userIds?: Array<string>;
          delta: number;
        }>;
        reason?: Record<string, unknown>;
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
    const finalURL =
      "https://development-api.boomfantasy.com:443/api/v1/users/wallets/bulk_update/winnings";
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, "post", request.body);
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  bulkUpdateWithdrawals: async (
    request: {
      body: { action: "complete"; withdrawalRequestIds: Array<string> };
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
    const finalURL =
      "https://development-api.boomfantasy.com:443/api/v1/users/wallets/bulk_update/withdrawals";
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, "post", request.body);
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  generateReferral: async (
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
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, "get");
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  getIdentityVerification: async (
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
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, "get");
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  verifyIdentity: async (
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
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, "post", request.body);
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  updateVerificationInformation: async (
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
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, "patch", request.body);
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  uploadProfilePicture: async (
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
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, "post");
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  getGroup: async (
    request: {
      params: {
        groupId?: string;
      };
    },
    callbacks: Record<number, any> & {
      200?: (response: {
        _id?: string;
        groupName: string;
        accessLevel: "public" | "inviteOnly" | "restricted";
        userIds: Array<string>;
        type?: "public" | "inviteOnly" | "restricted";
        audit?: Record<string, unknown>;
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
      "https://development-api.boomfantasy.com:443/api/v1/groups/:groupId";
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, "get");
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  updateGroup: async (
    request: {
      params: {
        groupId?: string;
      };
      body: {
        groupName?: string;
        userIds?: any;
        manager?: string;
        registrationSettings?: { joinable?: boolean };
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
      "https://development-api.boomfantasy.com:443/api/v1/groups/:groupId";
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, "patch", request.body);
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  getGroups: async (
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
          audit?: Record<string, unknown>;
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
    let finalURL = "https://development-api.boomfantasy.com:443/api/v1/groups";
    finalURL += `?${Object.entries(request.query)
      .map(([key, value]) => `${key}=${value}`)
      .join("&")}`;
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, "get");
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  createGroup: async (
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
          audit?: Record<string, unknown>;
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
    const finalURL =
      "https://development-api.boomfantasy.com:443/api/v1/groups";
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, "post", request.body);
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  addUsersToGroup: async (
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
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, "put", request.body);
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  getGroupAccessForUser: async (
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
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, "get");
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  leaveGroup: async (
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
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, "delete");
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  uploadGroupImage: async (
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
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, "post");
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  addGroupToUser: async (
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
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, "post", request.body);
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  updateUsersGroupBulk: async (
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
    const finalURL =
      "https://development-api.boomfantasy.com:443/api/v1/users/groups/bulk";
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, "post", request.body);
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  removeGroupFromUser: async (
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
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, "delete");
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  checkNameForProfanity: async (
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
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, "get");
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  checkEmail: async (
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
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, "get");
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  getAllowedDevices: async (
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
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, "get");
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  allowDevice: async (
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
    const finalURL =
      "https://development-api.boomfantasy.com:443/api/v1/users/devices/allowed";
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, "post", request.body);
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  unallowDevice: async (
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
    const finalURL =
      "https://development-api.boomfantasy.com:443/api/v1/users/devices/allowed";
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, "delete", request.body);
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  getBannedDevices: async (
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
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, "get");
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  banDevice: async (
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
    const finalURL =
      "https://development-api.boomfantasy.com:443/api/v1/users/devices/banned";
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, "post", request.body);
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
  unbanDevice: async (
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
    const finalURL =
      "https://development-api.boomfantasy.com:443/api/v1/users/devices/banned";
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, "delete", request.body);
    } catch (err: any) {
      response = err.response;
    }
    if (callbacks[response.statusCode]) {
      callbacks[response.statusCode](response.data);
      return;
    }
    if (!callbacks.fallback) {
      throw new Error(unexpectedErrorWarning);
    }
    callbacks.fallback(response.data);
  },
};

const initializeLib = (newAdapter: ServiceCallAdapter) => {
  adapter = newAdapter;
  return BoomSportsUserService;
};

export default initializeLib;
