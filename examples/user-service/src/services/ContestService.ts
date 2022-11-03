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

export type FetcherService = <
  Request extends { body: any; query: any; params: any },
  Response,
>(
  request: Request & null,
  callbacks: Record<string, (response: Response) => void>,
) => any;

export type RequestType<F extends FetcherService> = Parameters<F>[0];
export type RequestBodyType<F extends FetcherService> =
  RequestType<F> extends null ? null : RequestType<F>['body'];
export type RequestQueryType<F extends FetcherService> =
  RequestType<F>['query'];
export type RequestParamsType<F extends FetcherService> =
  RequestType<F>['params'];

export type RequestStatusCodes<F extends FetcherService> =
  keyof Parameters<F>[1];

export type ResponseType<
  Func extends (argA: any, argB: Record<string, any>) => any,
  StatusCode extends keyof Parameters<Func>[1],
> = Parameters<Parameters<Func>[1][StatusCode]>[0];

export type HTTPMethod = 'get' | 'post' | 'put' | 'patch' | 'update' | 'delete';

export type ServiceCallResponse<Response> = {
  data: Response;
  statusCode: number;
};

export type ServiceCallAdapter = <Response>(
  url: string,
  method: HTTPMethod,
  body?: unknown,
) => Promise<ServiceCallResponse<Response>>;

let adapter: ServiceCallAdapter | null = null;

const initializeFetcherWarning =
  'Please initialize Fetcher before attempting to make any network calls';
const unexpectedErrorWarning = 'Unexpected error occurred';

export const BoomSportsContestServiceMetaData = {
  /**
   * @description Get a list of composite entries for a given user and composite contest.
   */
  GetCompositeEntriesForUser: {
    successStatusCodes: ['200'] as const,
    errorStatusCodes: ['404', '500'] as const,
    method: 'get' as HTTPMethod,
  },
  /**
   * @description Get a list of the composite contest's entries for each given user.
   */
  GetCompositeContestEntriesforUsers: {
    successStatusCodes: ['200'] as const,
    errorStatusCodes: ['404', '500'] as const,
    method: 'post' as HTTPMethod,
  },
  /**
   * @description Get a list of standard contest entries for a given user
   */
  GetStandardContestEntriesForUserv2: {
    successStatusCodes: ['200'] as const,
    errorStatusCodes: ['404', '500'] as const,
    method: 'get' as HTTPMethod,
  },
  /**
   * @description Get a contest entry
   */
  GetEntry: {
    successStatusCodes: ['200'] as const,
    errorStatusCodes: ['404', '500'] as const,
    method: 'get' as HTTPMethod,
  },
  /**
   * @description Get a list of available entries for a given user. These entries are still in Redis and have not been persisted to MongoDB.
   */
  GetAvailableEntriesForUser: {
    successStatusCodes: ['200'] as const,
    errorStatusCodes: ['500'] as const,
    method: 'get' as HTTPMethod,
  },
  /**
   * @description Get the paginated entry history, a list of finalized entries, for a given user. These entries have been persisted to MongoDB.
   */
  GetEntryHistoryForUser: {
    successStatusCodes: ['200'] as const,
    errorStatusCodes: ['500'] as const,
    method: 'get' as HTTPMethod,
  },
  /**
   * @description Get a list of standard entries for a given user
   */
  GetStandardEntriesForUser: {
    successStatusCodes: ['200'] as const,
    errorStatusCodes: ['404', '500'] as const,
    method: 'get' as HTTPMethod,
  },
  /**
   * @description Patch standard contest entries for a user
   */
  PatchStandardEntriesForUser: {
    successStatusCodes: ['204'] as const,
    errorStatusCodes: ['404', '500'] as const,
    method: 'patch' as HTTPMethod,
  },
  /**
   * @description Get a list of subContest entries for a given user
   */
  GetsubContestEntriesForUser: {
    successStatusCodes: ['200'] as const,
    errorStatusCodes: ['404', '500'] as const,
    method: 'get' as HTTPMethod,
  },
  /**
   * @description Get standard contest entries for a list of groups
   */
  GetStandardContestEntriesForGroups: {
    successStatusCodes: ['200'] as const,
    errorStatusCodes: ['404', '500'] as const,
    method: 'post' as HTTPMethod,
  },
  /**
   * @description Bulk add groups to user standard entries and wagers
   */
  Bulkaddgroupstostandardentries: {
    successStatusCodes: ['204'] as const,
    errorStatusCodes: ['500'] as const,
    method: 'patch' as HTTPMethod,
  },
  /**
   * @description Delete a standard contest entry
   */
  DeleteStandardEntryV2: {
    successStatusCodes: ['204'] as const,
    errorStatusCodes: ['404', '500'] as const,
    method: 'delete' as HTTPMethod,
  },
  /**
   * @description Patch a standard contest entry
   */
  PatchStandardEntryV4: {
    successStatusCodes: ['204'] as const,
    errorStatusCodes: ['404', '500'] as const,
    method: 'patch' as HTTPMethod,
  },
  /**
   * @description Create a standard contest entry
   */
  CreateStandardEntryV4: {
    successStatusCodes: ['200'] as const,
    errorStatusCodes: ['404', '500'] as const,
    method: 'post' as HTTPMethod,
  },
  /**
   * @description Create a standard contest entry
   */
  CreateStandardEntryV5: {
    successStatusCodes: ['200'] as const,
    errorStatusCodes: ['404', '500'] as const,
    method: 'post' as HTTPMethod,
  },
  /**
   * @description Create additional wagers for an existing contest entry
   */
  CreateWagers: {
    successStatusCodes: ['200'] as const,
    errorStatusCodes: ['404', '500'] as const,
    method: 'post' as HTTPMethod,
  },
  /**
   * @description Utility endpoint to rebuild a contest's entry cache
   */
  RebuildEntriesCache: {
    successStatusCodes: ['204'] as const,
    errorStatusCodes: ['500'] as const,
    method: 'post' as HTTPMethod,
  },
  /**
   * @description Admin endpoint to add a balance adjustment to all wagering entries in the contest.  And update the contest default balance for now
   */
  AddBalanceAdjustmentToWageringEntries: {
    successStatusCodes: ['200'] as const,
    errorStatusCodes: ['404', '500'] as const,
    method: 'post' as HTTPMethod,
  },
  /**
   * @description Admin endpoint to rebuild the list of entryIds who answered each question
   */
  RebuildQuestionAnswerLists: {
    successStatusCodes: ['204'] as const,
    errorStatusCodes: ['500'] as const,
    method: 'post' as HTTPMethod,
  },
  /**
   * @description Admin endpoint to rebuild the list of entryIds for each batch
   */
  RebuildEntriesPerBatchLists: {
    successStatusCodes: ['204'] as const,
    errorStatusCodes: ['500'] as const,
    method: 'post' as HTTPMethod,
  },
  /**
   * @description Admin endpoint to verify that wagering entries have been scored correctly
   */
  VerifyWageringEntries: {
    successStatusCodes: ['200'] as const,
    errorStatusCodes: ['404', '500'] as const,
    method: 'get' as HTTPMethod,
  },
  /**
   * @description Get all Contests filtered by query params
   */
  GetContestsv3: {
    successStatusCodes: ['200'] as const,
    errorStatusCodes: ['500'] as const,
    method: 'get' as HTTPMethod,
  },
  /**
   * @description Get all Contests filtered by query params
   */
  GetContestsv4: {
    successStatusCodes: ['200'] as const,
    errorStatusCodes: ['500'] as const,
    method: 'get' as HTTPMethod,
  },
  /**
   * @description Get a Contest by contestId v1
   */
  GetContestv1: {
    successStatusCodes: ['200'] as const,
    errorStatusCodes: ['404', '500'] as const,
    method: 'get' as HTTPMethod,
  },
  /**
   * @description Delete a Contest
   */
  DeleteContest: {
    successStatusCodes: ['204'] as const,
    errorStatusCodes: ['404', '500'] as const,
    method: 'delete' as HTTPMethod,
  },
  /**
   * @description Update a Contest
   */
  PatchContest: {
    successStatusCodes: ['204'] as const,
    errorStatusCodes: ['404', '500'] as const,
    method: 'patch' as HTTPMethod,
  },
  /**
   * @description Get a Contest by contestId v2
   */
  GetContestv2: {
    successStatusCodes: ['200'] as const,
    errorStatusCodes: ['404', '500'] as const,
    method: 'get' as HTTPMethod,
  },
  /**
   * @description Debugging endpoint to get a contest and all of its related data
   */
  GetContestinDebugMode: {
    successStatusCodes: ['200'] as const,
    errorStatusCodes: ['404', '500'] as const,
    method: 'get' as HTTPMethod,
  },
  /**
   * @description Update a composite contest.
   */
  PatchCompositeContest: {
    successStatusCodes: ['204'] as const,
    errorStatusCodes: ['400', '404', '500'] as const,
    method: 'patch' as HTTPMethod,
  },
  /**
   * @description Create a Contest
   */
  CreateContest: {
    successStatusCodes: ['200'] as const,
    errorStatusCodes: ['404', '500'] as const,
    method: 'post' as HTTPMethod,
  },
  /**
   * @description Create a composite contest.
   */
  CreateCompositeContest: {
    successStatusCodes: ['200'] as const,
    errorStatusCodes: ['400', '500'] as const,
    method: 'post' as HTTPMethod,
  },
  /**
   * @description Create all shell contests for a given league for the current year
   */
  CreateShellContests: {
    successStatusCodes: ['200'] as const,
    errorStatusCodes: ['404', '500'] as const,
    method: 'post' as HTTPMethod,
  },
  /**
   * @description Get a contest's status change eligibility.
   */
  GetContestStatusChangeEligibility: {
    successStatusCodes: ['200'] as const,
    errorStatusCodes: ['404', '500'] as const,
    method: 'get' as HTTPMethod,
  },
  /**
   * @description Update a contest's status
   */
  UpdateContestStatus: {
    successStatusCodes: ['200'] as const,
    errorStatusCodes: ['404', '500'] as const,
    method: 'patch' as HTTPMethod,
  },
  /**
   * @description Get Entries Counts For Groups
   */
  GetEntriesCountsForGroups: {
    successStatusCodes: ['204'] as const,
    errorStatusCodes: ['404', '500'] as const,
    method: 'get' as HTTPMethod,
  },
  /**
   * @description Publish a message to an SSE channel.  This is likely temporary and may need to be in chassis eventually.  For now it is used to prove out the sse channel change
   */
  PublishtoSSE: {
    successStatusCodes: [] as const,
    errorStatusCodes: ['500'] as const,
    method: 'post' as HTTPMethod,
  },
  /**
   * @description Resets a contest and associated questions, entries, choices, and scoreboards to their initialized states.
   */
  ResetContest: {
    successStatusCodes: ['204'] as const,
    errorStatusCodes: ['500'] as const,
    method: 'patch' as HTTPMethod,
  },
  /**
   * @description Backup a Contest
   */
  BackupContest: {
    successStatusCodes: ['204'] as const,
    errorStatusCodes: ['404', '500'] as const,
    method: 'post' as HTTPMethod,
  },
  /**
   * @description Restore a Contest
   */
  RestoreContest: {
    successStatusCodes: ['204'] as const,
    errorStatusCodes: ['404', '500'] as const,
    method: 'post' as HTTPMethod,
  },
  /**
   * @description Get a contest leaderboard
   */
  GetLeaderboardV4: {
    successStatusCodes: ['200'] as const,
    errorStatusCodes: ['404', '500'] as const,
    method: 'get' as HTTPMethod,
  },
  /**
   * @description Get a contest leaderboard local to given score
   */
  GetLocalLeaderboard: {
    successStatusCodes: ['200'] as const,
    errorStatusCodes: ['404', '500'] as const,
    method: 'get' as HTTPMethod,
  },
  /**
   * @description Utility endpoint to force a persist of a contest leaderboard for a given groupId
   */
  PersistLeaderboardForGroup: {
    successStatusCodes: ['204'] as const,
    errorStatusCodes: ['404', '500'] as const,
    method: 'patch' as HTTPMethod,
  },
  /**
   * @description Utility endpoint to force a persist of a contest leaderboard for all groups
   */
  PersistLeaderboardForAllGroups: {
    successStatusCodes: ['204'] as const,
    errorStatusCodes: ['404', '500'] as const,
    method: 'patch' as HTTPMethod,
  },
  /**
   * @description Clears the leaderboard user cache data in redis when a username or profile picture change, so the next pass uses the updated values
   */
  ClearLeaderboardUserData: {
    successStatusCodes: ['204'] as const,
    errorStatusCodes: ['404', '500'] as const,
    method: 'patch' as HTTPMethod,
  },
  /**
   * @description Persist score group leaderboards for persisting in mongo
   */
  Persistscoregroupleaderboards: {
    successStatusCodes: ['200'] as const,
    errorStatusCodes: ['404', '500'] as const,
    method: 'patch' as HTTPMethod,
  },
  /**
   * @description Get the current weekly global entry limit for a user
   */
  GetGlobalEntryLimit: {
    successStatusCodes: ['200'] as const,
    errorStatusCodes: ['500'] as const,
    method: 'get' as HTTPMethod,
  },
  /**
   * @description Set the current weekly global entry limit for a user
   */
  SetGlobalEntryLimit: {
    successStatusCodes: ['200'] as const,
    errorStatusCodes: ['500'] as const,
    method: 'post' as HTTPMethod,
  },
  /**
   * @description Get the current global entry fee limit for a user
   */
  GetGlobalEntryFeeLimit: {
    successStatusCodes: ['200'] as const,
    errorStatusCodes: ['500'] as const,
    method: 'get' as HTTPMethod,
  },
  /**
   * @description Set the current global entry limit fee for a user
   */
  SetGlobalEntryFeeLimit: {
    successStatusCodes: ['200'] as const,
    errorStatusCodes: ['500'] as const,
    method: 'post' as HTTPMethod,
  },
  /**
   * @description Get questions for a contest
   */
  GetQuestionsforContest: {
    successStatusCodes: ['200'] as const,
    errorStatusCodes: ['404', '500'] as const,
    method: 'get' as HTTPMethod,
  },
  /**
   * @description Get the paginated question history, a list of finalized questions for a given contest. These questions entries have been persisted to MongoDB
   */
  GetQuestionHistoryForContest: {
    successStatusCodes: ['200'] as const,
    errorStatusCodes: ['404', '500'] as const,
    method: 'get' as HTTPMethod,
  },
  /**
   * @description Get a question for a contest
   */
  GetQuestion: {
    successStatusCodes: ['200'] as const,
    errorStatusCodes: ['404', '500'] as const,
    method: 'get' as HTTPMethod,
  },
  /**
   * @description Delete a question
   */
  DeleteQuestion: {
    successStatusCodes: ['204'] as const,
    errorStatusCodes: ['404', '500'] as const,
    method: 'delete' as HTTPMethod,
  },
  /**
   * @description Get a question for a contest and pass
   */
  GetQuestionForPass: {
    successStatusCodes: ['200'] as const,
    errorStatusCodes: ['404', '500'] as const,
    method: 'get' as HTTPMethod,
  },
  /**
   * @description Update a question for a contest
   */
  PatchQuestionV3: {
    successStatusCodes: ['204'] as const,
    errorStatusCodes: ['404', '500'] as const,
    method: 'patch' as HTTPMethod,
  },
  /**
   * @description Update a question's status
   */
  UpdateQuestionStatus: {
    successStatusCodes: ['204'] as const,
    errorStatusCodes: ['404', '500'] as const,
    method: 'patch' as HTTPMethod,
  },
  /**
   * @description Sort a question's choices if applicable
   */
  SortQuestionChoices: {
    successStatusCodes: ['204'] as const,
    errorStatusCodes: ['404', '500'] as const,
    method: 'patch' as HTTPMethod,
  },
  /**
   * @description Update Choice States for a question if applicable
   */
  UpdateChoiceStates: {
    successStatusCodes: ['204'] as const,
    errorStatusCodes: ['404', '500'] as const,
    method: 'patch' as HTTPMethod,
  },
  /**
   * @description Create a question for a contest
   */
  CreateQuestionV3: {
    successStatusCodes: ['200'] as const,
    errorStatusCodes: ['404', '500'] as const,
    method: 'post' as HTTPMethod,
  },
  /**
   * @description Admin endpoint to rebuild the question completed times
   */
  RebuildQuestionCompletedTimes: {
    successStatusCodes: ['204'] as const,
    errorStatusCodes: ['500'] as const,
    method: 'post' as HTTPMethod,
  },
  /**
   * @description Get a choice for a question
   */
  GetChoice: {
    successStatusCodes: ['200'] as const,
    errorStatusCodes: ['404', '500'] as const,
    method: 'get' as HTTPMethod,
  },
  /**
   * @description Delete a choice for a question
   */
  DeleteChoice: {
    successStatusCodes: ['204'] as const,
    errorStatusCodes: ['404', '500'] as const,
    method: 'delete' as HTTPMethod,
  },
  /**
   * @description Update a choice for a question
   */
  PatchChoice: {
    successStatusCodes: ['204'] as const,
    errorStatusCodes: ['404', '500'] as const,
    method: 'patch' as HTTPMethod,
  },
  /**
   * @description Get all choices for a question
   */
  GetChoicesForQuestion: {
    successStatusCodes: ['200'] as const,
    errorStatusCodes: ['404', '500'] as const,
    method: 'get' as HTTPMethod,
  },
  /**
   * @description Create a choice for a question
   */
  CreateChoice: {
    successStatusCodes: ['200'] as const,
    errorStatusCodes: ['404', '500'] as const,
    method: 'post' as HTTPMethod,
  },
  /**
   * @description Get all choices for a contest
   */
  GetChoicesForContest: {
    successStatusCodes: ['200'] as const,
    errorStatusCodes: ['404', '500'] as const,
    method: 'get' as HTTPMethod,
  },
  /**
   * @description Get a prize
   */
  GetPrize: {
    successStatusCodes: ['200'] as const,
    errorStatusCodes: ['404', '500'] as const,
    method: 'get' as HTTPMethod,
  },
  /**
   * @description Delete a prize
   */
  DeletePrize: {
    successStatusCodes: ['200'] as const,
    errorStatusCodes: ['404', '500'] as const,
    method: 'delete' as HTTPMethod,
  },
  /**
   * @description Update a prize
   */
  UpdatePrize: {
    successStatusCodes: ['200'] as const,
    errorStatusCodes: ['404', '500'] as const,
    method: 'patch' as HTTPMethod,
  },
  /**
   * @description Get a list of prizes given a list of prizeIds
   */
  Getallprizes: {
    successStatusCodes: ['200'] as const,
    errorStatusCodes: ['500'] as const,
    method: 'get' as HTTPMethod,
  },
  /**
   * @description Create a prize
   */
  CreatePrize: {
    successStatusCodes: ['200'] as const,
    errorStatusCodes: ['500'] as const,
    method: 'post' as HTTPMethod,
  },
  /**
   * @description Get a scoreboard for a game
   */
  GetScoreboard: {
    successStatusCodes: ['200'] as const,
    errorStatusCodes: ['404', '500'] as const,
    method: 'get' as HTTPMethod,
  },
  /**
   * @description Get a scoreboard for a game
   */
  GetScoreboardforGame: {
    successStatusCodes: ['200'] as const,
    errorStatusCodes: ['404', '500'] as const,
    method: 'get' as HTTPMethod,
  },
  /**
   * @description Get all scoreboards for a contest
   */
  GetScoreboardsForContest: {
    successStatusCodes: ['200'] as const,
    errorStatusCodes: ['404', '500'] as const,
    method: 'get' as HTTPMethod,
  },
  /**
   * @description Get all Wagers specified
   */
  GetanoptionallypaginatedlistofwagersspecifiedbyID: {
    successStatusCodes: ['200'] as const,
    errorStatusCodes: ['500'] as const,
    method: 'post' as HTTPMethod,
  },
  /**
   * @description Get all Wagers filtered by params
   */
  GetpaginatedlistofwagersforentryId: {
    successStatusCodes: ['200'] as const,
    errorStatusCodes: ['500'] as const,
    method: 'get' as HTTPMethod,
  },
  /**
   * @description Get paginated list of wagers grouped by question
   */
  Getpaginatedlistofwagersgroupedbyquestion: {
    successStatusCodes: ['200'] as const,
    errorStatusCodes: ['500'] as const,
    method: 'get' as HTTPMethod,
  },
  /**
   * @description Get pending wagers for user
   */
  Getpendingwagersforthisuser: {
    successStatusCodes: ['200'] as const,
    errorStatusCodes: ['500'] as const,
    method: 'get' as HTTPMethod,
  },
  /**
   * @description Get completed wagers for user
   */
  Getcompletedwagersforthisuser: {
    successStatusCodes: ['200'] as const,
    errorStatusCodes: ['500'] as const,
    method: 'get' as HTTPMethod,
  },
  /**
   * @description Get wagers for this question created before the requested pass filtered by params
   */
  Getwagersforthisquestionfilteredbyparams: {
    successStatusCodes: ['200'] as const,
    errorStatusCodes: ['500'] as const,
    method: 'get' as HTTPMethod,
  },
  /**
   * @description Get wagers for this user created since the pass
   */
  Getwagersforthisusercreatedsincethepass: {
    successStatusCodes: ['200'] as const,
    errorStatusCodes: ['500'] as const,
    method: 'get' as HTTPMethod,
  },
  /**
   * @description Admin endpoint to rebuild the wagers per question lists
   */
  RebuildWagersPerQuestionLists: {
    successStatusCodes: ['204'] as const,
    errorStatusCodes: ['500'] as const,
    method: 'post' as HTTPMethod,
  },
  /**
   * @description Admin endpoint to rebuild the wagered questionIds
   */
  RebuildWageredQuestionIds: {
    successStatusCodes: ['204'] as const,
    errorStatusCodes: ['500'] as const,
    method: 'post' as HTTPMethod,
  },
  /**
   * @description Get a list of players and teams for any contest with this game
   */
  GetGameParticipants: {
    successStatusCodes: ['200'] as const,
    errorStatusCodes: ['404', '500'] as const,
    method: 'get' as HTTPMethod,
  },
  /**
   * @description Bulk update best scores for users in this contest
   */
  BulkUpdateBestScores: {
    successStatusCodes: ['200'] as const,
    errorStatusCodes: ['404', '500'] as const,
    method: 'post' as HTTPMethod,
  },
  /**
   * @description Process updates corresponding to this group status update
   */
  ProcessGroupStatusUpdated: {
    successStatusCodes: ['200'] as const,
    errorStatusCodes: ['404', '500'] as const,
    method: 'patch' as HTTPMethod,
  },
  /**
   * @description Get a list of games to process from the given criteria
   */
  GetGamesToProcess: {
    successStatusCodes: ['200'] as const,
    errorStatusCodes: ['404', '500'] as const,
    method: 'get' as HTTPMethod,
  },
  /**
   * @description Get a list of question Ids grouped by contestId from the given criteria
   */
  GetQuestionsInScope: {
    successStatusCodes: ['200'] as const,
    errorStatusCodes: ['404', '500'] as const,
    method: 'get' as HTTPMethod,
  },
  /**
   * @description Process leaderboard computations for a group
   */
  Processleaderboardsforagroup: {
    successStatusCodes: ['204'] as const,
    errorStatusCodes: ['404', '500'] as const,
    method: 'patch' as HTTPMethod,
  },
  /**
   * @description Process Winnings and Leaderboards for all groups
   */
  ProcessWinningsandLeaderboardsforallgroups: {
    successStatusCodes: ['204'] as const,
    errorStatusCodes: ['404', '500'] as const,
    method: 'patch' as HTTPMethod,
  },
  /**
   * @description Score all entries in a batch
   */
  ScoreEntriesInBatch: {
    successStatusCodes: ['200'] as const,
    errorStatusCodes: ['404', '500'] as const,
    method: 'patch' as HTTPMethod,
  },
  /**
   * @description Persist Standard Overlaid Entries Into Mongo
   */
  PersistStandardOverlaidEntriesIntoMongo: {
    successStatusCodes: ['204'] as const,
    errorStatusCodes: ['404', '500'] as const,
    method: 'post' as HTTPMethod,
  },
  /**
   * @description Manually run a contest pass
   */
  ManuallyTrackContestV2: {
    successStatusCodes: ['204'] as const,
    errorStatusCodes: ['404', '500'] as const,
    method: 'patch' as HTTPMethod,
  },
  /**
   * @description Manually run a child contest rollup pass.
   */
  ManuallyRollupChildContest: {
    successStatusCodes: ['204'] as const,
    errorStatusCodes: ['404', '500'] as const,
    method: 'patch' as HTTPMethod,
  },
  /**
   * @description Redo all child contest roll-up passes for parent contest.
   */
  RedoChildContestRollups: {
    successStatusCodes: ['204'] as const,
    errorStatusCodes: ['404', '500'] as const,
    method: 'patch' as HTTPMethod,
  },
  /**
   * @description Sportdata for the game has updated
   */
  SportdataforGameUpdated: {
    successStatusCodes: ['204'] as const,
    errorStatusCodes: ['404', '500'] as const,
    method: 'patch' as HTTPMethod,
  },
  /**
   * @description Processing a list of games for the stats that have updated
   */
  ProcessGameStatsUpdated: {
    successStatusCodes: ['200'] as const,
    errorStatusCodes: ['404', '500'] as const,
    method: 'patch' as HTTPMethod,
  },
};

/**
 * @description
 */
const BoomSportsContestService = {
  /**
   * @description Get a list of composite entries for a given user and composite contest.
   */
  GetCompositeEntriesForUser: async (
    request: {
      query: {
        contestIds?: Array<string>;
        statuses?: Array<'open' | 'closed'>;
        labels?: Array<string>;
        labelsFilterMethod?: 'any' | 'all';
        scope?: 'basic' | 'full';
      };
      params: {
        userId?: string;
      };
    },
    callbacks: Record<number, any> & {
      200?: (response: {
        basic?: {
          entries?: Array<{
            _id?: string;
            userId?: string;
            contestId?: string;
            type?: 'composite';
            groupIds?: Array<string>;
            entryData?: any;
            scoring?: Record<string, unknown>;
            winnings?: Record<string, unknown>;
            extendedFields?: Record<string, unknown>;
            audit?: {
              createdDate?: string;
              updatedDate?: string;
              deletedDate?: string;
              userId?: string;
            };
          }>;
        };
        full?: {
          entries?: Array<{
            _id?: string;
            userId?: string;
            contestId?: string;
            type?: 'composite';
            groupIds?: Array<string>;
            entryData?: any;
            scoring?: Record<string, unknown>;
            winnings?: Record<string, unknown>;
            extendedFields?: Record<string, unknown>;
            audit?: {
              createdDate?: string;
              updatedDate?: string;
              deletedDate?: string;
              userId?: string;
            };
          }>;
          contests?: Array<{
            _id?: string;
            type?: 'composite';
            status?: 'open' | 'closed';
            feedStatus?: 'inactive';
            feedStatusBehavior?: {
              type?: 'changeIndependently';
              details?: Record<string, unknown>;
            };
            productIds?: Array<string>;
            leagues?: Array<
              | 'custom'
              | 'epl'
              | 'finance'
              | 'mlb'
              | 'mls'
              | 'nascar'
              | 'nba'
              | 'ncaafb'
              | 'nfl'
              | 'nhl'
              | 'pga'
              | 'roughNRowdy'
              | 'stoolStreams'
              | 'xfl'
            >;
            title?: string;
            description?: string;
            version?: number;
            contestData?: {
              scoringMode?: 'best';
              streakScores?: Array<number>;
              leaderboardConfigurations?: {
                tiebreakerDataset?: 'scoreOnly' | 'timHortons';
                minContestsBeforeTiebreak?: '0';
                maxTiesToProcess?: '0' | '-1';
                userLimit?: '0' | '-1';
              };
              numChildren?: '0';
              contestMaxPossiblePoints?: '0';
              contestCurrentPossiblePoints?: '0';
              childContestsCompleted?: '0';
              jackpotTrackerData?: Record<string, unknown>;
            };
            labels?: Array<string>;
            leaderboardTypes?: Array<'aggregate'>;
            priority?: number;
            restrictions?: Array<{
              type?: 'visibility' | 'entrance';
              permissionOverrides: Array<
                | 'CanOverrideStateRestrictions'
                | 'CanOverrideDistanceVisibilityRestrictions'
                | 'CanCreateUnlimitedEntries'
                | 'CanBuildLeaderboard'
                | 'CanUpdateGames'
                | 'CanUpdateContestData'
                | 'CanViewContestData'
                | 'CanCreateEntries'
                | 'CanUpdateEntries'
                | 'CanPreviewContests'
                | 'CanSetContestStatus'
                | 'CanSetQuestionStatus'
                | 'CanUpdateEntryWallets'
                | 'CanBulkUpdateBestScores'
                | 'CanBulkUpdateContestEntries'
                | 'CanDeleteContestEntry'
                | 'CanDeleteOtherUsersEntries'
                | 'CanPublishSSE'
                | 'CanResetContest'
                | 'CanUpdateChoiceStates'
                | 'CanUpdateEntryLimits'
                | 'CanLogIn'
                | 'CanBackupContestData'
                | 'CanRestoreContestData'
              >;
              implementation: { type: any; details: any };
            }>;
            contestPrizes?: Record<string, unknown>;
            extendedFields?: Record<string, unknown>;
            lastCompletedPass?: string;
            audit?: {
              createdDate?: string;
              updatedDate?: string;
              deletedDate?: string;
              userId?: string;
            };
          }>;
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
    },
  ) => {
    let finalURL = 'undefined/api/v1/contests/composite/entries/users/:userId';
    finalURL += `?${Object.entries(request.query)
      .map(([key, value]) => `${key}=${value}`)
      .join('&')}`;
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'get');
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
  /**
   * @description Get a list of the composite contest's entries for each given user.
   */
  GetCompositeContestEntriesforUsers: async (
    request: {
      params: {
        contestId?: string;
      };
      body: { userIds: Array<string> };
    },
    callbacks: Record<number, any> & {
      200?: (response: { entriesByUser?: Record<string, unknown> }) => void;
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
    },
  ) => {
    let finalURL =
      'undefined/api/v1/contests/composite/:contestId/entries/users';
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'post', request.body);
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
  /**
   * @description Get a list of standard contest entries for a given user
   */
  GetStandardContestEntriesForUserv2: async (
    request: {
      query: {
        status?: 'upcoming' | 'active' | 'closed';
        pass?: string;
        scope?: 'basic' | 'full';
        labels?: Array<string>;
      };
      params: {
        contestId?: string;
        userId?: string;
      };
    },
    callbacks: Record<number, any> & {
      200?: (response: {
        basic?: {
          entries?: Array<{
            _id?: string;
            parentEntryIds?: Array<string>;
            userId?: string;
            contestId?: string;
            type?: 'pickEm' | 'wagering' | 'subContest';
            entryStatus?: 'reserved' | 'closed';
            groupIds?: Array<string>;
            entryData?: any;
            selections?: any;
            scoring?: Record<string, unknown>;
            winnings?: Record<string, unknown>;
            batchNumber?: number;
            extendedFields?: Record<string, unknown>;
            audit?: {
              createdDate?: string;
              updatedDate?: string;
              deletedDate?: string;
              userId?: string;
            };
          }>;
        };
        full?: {
          entries?: Array<{
            _id?: string;
            parentEntryIds?: Array<string>;
            userId?: string;
            contestId?: string;
            type?: 'pickEm' | 'wagering' | 'subContest';
            entryStatus?: 'reserved' | 'closed';
            groupIds?: Array<string>;
            entryData?: any;
            selections?: any;
            scoring?: Record<string, unknown>;
            winnings?: Record<string, unknown>;
            batchNumber?: number;
            extendedFields?: Record<string, unknown>;
            audit?: {
              createdDate?: string;
              updatedDate?: string;
              deletedDate?: string;
              userId?: string;
            };
          }>;
          contests?: Array<{
            _id?: string;
            status?: 'shell' | 'reserved' | 'upcoming' | 'active' | 'closed';
            feedStatus?: 'active' | 'inactive';
            feedStatusBehavior?: {
              type: 'changeIndependently' | 'syncWithContest';
              details: Record<string, unknown>;
            };
            type?:
              | 'pickEm'
              | 'wagering'
              | 'progressiveElimination'
              | 'evergreen';
            parentContestIds?: Array<string>;
            title?: string;
            version?: number;
            description?: string;
            labels?: Array<string>;
            gameTypes?: Array<string>;
            settings?: {
              addGroupIdToActiveEntries?: boolean;
              includeOnMatchupSchedule?: boolean;
              autoLockContest?: boolean;
            };
            productIds?: Array<string>;
            scheduled?: string;
            league?:
              | 'custom'
              | 'epl'
              | 'finance'
              | 'mlb'
              | 'mls'
              | 'nascar'
              | 'nba'
              | 'ncaafb'
              | 'nfl'
              | 'nhl'
              | 'pga'
              | 'roughNRowdy'
              | 'stoolStreams'
              | 'xfl';
            gameIds?: Array<string>;
            venues?: Array<{
              gameId?: string;
              venueId?: string;
              name?: string;
              coordinates?: Record<string, unknown>;
            }>;
            restrictions?: Array<Record<string, unknown>>;
            entriesCountByGroup?: Record<string, unknown>;
            contestData?: {
              pickEm?: { contestMaxPossiblePoints?: number };
              wagering?: {
                defaultBalance?: number;
                turboLiveDefaultBalance?: number;
              };
              progressiveElimination?: Record<string, unknown>;
            };
            showLiveTracking?: boolean;
            priority?: number;
            mustAnswerAllQuestions?: boolean;
            evaluateScoresBeforeQuestionsResolve?: boolean;
            requireQuestionVerification?: boolean;
            questionIds?: Array<string>;
            displayQuestionIds?: Array<string>;
            waitingRoom?: { startTime?: string; enabled?: boolean };
            extendedFields?: Record<string, unknown>;
            contestPrizes?: Record<string, unknown>;
            leaderboardTypes?: Array<'entryList' | 'scoreGroups'>;
            lastCompletedPass?: string;
            lastScoreboardPass?: string;
            audit?: {
              createdDate?: string;
              updatedDate?: string;
              deletedDate?: string;
              userId?: string;
            };
          }>;
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
    },
  ) => {
    let finalURL = 'undefined/api/v2/contests/:contestId/entries/users/:userId';
    finalURL += `?${Object.entries(request.query)
      .map(([key, value]) => `${key}=${value}`)
      .join('&')}`;
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'get');
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
  /**
   * @description Get a contest entry
   */
  GetEntry: async (
    request: {
      query: {
        pass?: string;
        scope?: 'basic' | 'full';
      };
      params: {
        contestId?: string;
        entryId?: string;
      };
    },
    callbacks: Record<number, any> & {
      200?: (response: {
        basic?: { entry?: Record<string, unknown> };
        full?: {
          entry?: Record<string, unknown>;
          contest?: Record<string, unknown>;
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
    },
  ) => {
    let finalURL = 'undefined/api/v1/contests/:contestId/entries/:entryId';
    finalURL += `?${Object.entries(request.query)
      .map(([key, value]) => `${key}=${value}`)
      .join('&')}`;
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'get');
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
  /**
   * @description Get a list of available entries for a given user. These entries are still in Redis and have not been persisted to MongoDB.
   */
  GetAvailableEntriesForUser: async (
    request: {
      query: {
        entryTypes?: Array<'evergreen'>;
        entryStatuses?: Array<any>;
        scope?: 'basic' | 'full';
      };
      params: {
        userId?: string;
      };
    },
    callbacks: Record<number, any> & {
      200?: (response: {
        basic?: {
          entries?: Array<{
            _id?: string;
            parentEntryIds?: Array<string>;
            userId?: string;
            contestId?: string;
            type?: 'evergreen';
            entryStatus?: 'pending' | 'open' | 'active';
            groupIds?: Array<string>;
            entryData?: Record<string, unknown>;
            selections?: Record<string, unknown>;
            scoring?: Record<string, unknown>;
            winnings?: Record<string, unknown>;
            batchNumber?: number;
            entryFee?: number;
            extendedFields?: Record<string, unknown>;
            audit?: {
              createdDate?: string;
              updatedDate?: string;
              deletedDate?: string;
              userId?: string;
            };
          }>;
        };
        full?: {
          entries?: Array<{
            _id?: string;
            parentEntryIds?: Array<string>;
            userId?: string;
            contestId?: string;
            type?: 'evergreen';
            entryStatus?: 'pending' | 'open' | 'active';
            groupIds?: Array<string>;
            entryData?: Record<string, unknown>;
            selections?: Record<string, unknown>;
            scoring?: Record<string, unknown>;
            winnings?: Record<string, unknown>;
            batchNumber?: number;
            entryFee?: number;
            extendedFields?: Record<string, unknown>;
            audit?: {
              createdDate?: string;
              updatedDate?: string;
              deletedDate?: string;
              userId?: string;
            };
          }>;
          contests?: Array<Record<string, unknown>>;
        };
      }) => void;
      500?: (response: {
        code?: string;
        id?: string;
        message?: string;
        details?: string;
      }) => void;
      fallback?: (response?: unknown) => void;
    },
  ) => {
    let finalURL = 'undefined/api/v1/contests/entries/users/:userId/available';
    finalURL += `?${Object.entries(request.query)
      .map(([key, value]) => `${key}=${value}`)
      .join('&')}`;
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'get');
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
  /**
   * @description Get the paginated entry history, a list of finalized entries, for a given user. These entries have been persisted to MongoDB.
   */
  GetEntryHistoryForUser: async (
    request: {
      query: {
        entryTypes?: Array<'evergreen'>;
        entryStatuses?: Array<any>;
        scope?: 'basic' | 'full';
        page?: number;
        count?: number;
      };
      params: {
        userId?: string;
      };
    },
    callbacks: Record<number, any> & {
      200?: (response: {
        basic?: {
          entries?: Array<{
            _id?: string;
            parentEntryIds?: Array<string>;
            userId?: string;
            contestId?: string;
            type?: 'evergreen';
            entryStatus?: 'closed' | 'canceled' | 'rejected';
            groupIds?: Array<string>;
            entryData?: Record<string, unknown>;
            selections?: Record<string, unknown>;
            scoring?: Record<string, unknown>;
            winnings?: Record<string, unknown>;
            batchNumber?: number;
            entryFee?: number;
            extendedFields?: Record<string, unknown>;
            audit?: {
              createdDate?: string;
              updatedDate?: string;
              deletedDate?: string;
              userId?: string;
            };
          }>;
        };
        full?: {
          entries?: Array<{
            _id?: string;
            parentEntryIds?: Array<string>;
            userId?: string;
            contestId?: string;
            type?: 'evergreen';
            entryStatus?: 'closed' | 'canceled' | 'rejected';
            groupIds?: Array<string>;
            entryData?: Record<string, unknown>;
            selections?: Record<string, unknown>;
            scoring?: Record<string, unknown>;
            winnings?: Record<string, unknown>;
            batchNumber?: number;
            entryFee?: number;
            extendedFields?: Record<string, unknown>;
            audit?: {
              createdDate?: string;
              updatedDate?: string;
              deletedDate?: string;
              userId?: string;
            };
          }>;
          contests?: Array<Record<string, unknown>>;
        };
      }) => void;
      500?: (response: {
        code?: string;
        id?: string;
        message?: string;
        details?: string;
      }) => void;
      fallback?: (response?: unknown) => void;
    },
  ) => {
    let finalURL = 'undefined/api/v1/contests/entries/users/:userId/history';
    finalURL += `?${Object.entries(request.query)
      .map(([key, value]) => `${key}=${value}`)
      .join('&')}`;
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'get');
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
  /**
   * @description Get a list of standard entries for a given user
   */
  GetStandardEntriesForUser: async (
    request: {
      query: {
        status?: 'upcoming' | 'active' | 'closed';
        statuses?: Array<'upcoming' | 'active' | 'closed'>;
        scope?: 'basic' | 'full';
        contestIds?: Array<string>;
        labels?: Array<string>;
        entryTypes?: Array<'pickEm' | 'wagering' | 'subContest'>;
      };
      params: {
        userId?: string;
      };
    },
    callbacks: Record<number, any> & {
      200?: (response: {
        basic?: {
          entries?: Array<{
            _id?: string;
            parentEntryIds?: Array<string>;
            userId?: string;
            contestId?: string;
            type?: 'pickEm' | 'wagering' | 'subContest';
            entryStatus?: 'reserved' | 'closed';
            groupIds?: Array<string>;
            entryData?: any;
            selections?: any;
            scoring?: Record<string, unknown>;
            winnings?: Record<string, unknown>;
            batchNumber?: number;
            extendedFields?: Record<string, unknown>;
            audit?: {
              createdDate?: string;
              updatedDate?: string;
              deletedDate?: string;
              userId?: string;
            };
          }>;
        };
        full?: {
          entries?: Array<{
            _id?: string;
            parentEntryIds?: Array<string>;
            userId?: string;
            contestId?: string;
            type?: 'pickEm' | 'wagering' | 'subContest';
            entryStatus?: 'reserved' | 'closed';
            groupIds?: Array<string>;
            entryData?: any;
            selections?: any;
            scoring?: Record<string, unknown>;
            winnings?: Record<string, unknown>;
            batchNumber?: number;
            extendedFields?: Record<string, unknown>;
            audit?: {
              createdDate?: string;
              updatedDate?: string;
              deletedDate?: string;
              userId?: string;
            };
          }>;
          contests?: Array<{
            _id?: string;
            status?: 'shell' | 'reserved' | 'upcoming' | 'active' | 'closed';
            feedStatus?: 'active' | 'inactive';
            feedStatusBehavior?: {
              type: 'changeIndependently' | 'syncWithContest';
              details: Record<string, unknown>;
            };
            type?:
              | 'pickEm'
              | 'wagering'
              | 'progressiveElimination'
              | 'evergreen';
            parentContestIds?: Array<string>;
            title?: string;
            version?: number;
            description?: string;
            labels?: Array<string>;
            gameTypes?: Array<string>;
            settings?: {
              addGroupIdToActiveEntries?: boolean;
              includeOnMatchupSchedule?: boolean;
              autoLockContest?: boolean;
            };
            productIds?: Array<string>;
            scheduled?: string;
            league?:
              | 'custom'
              | 'epl'
              | 'finance'
              | 'mlb'
              | 'mls'
              | 'nascar'
              | 'nba'
              | 'ncaafb'
              | 'nfl'
              | 'nhl'
              | 'pga'
              | 'roughNRowdy'
              | 'stoolStreams'
              | 'xfl';
            gameIds?: Array<string>;
            venues?: Array<{
              gameId?: string;
              venueId?: string;
              name?: string;
              coordinates?: Record<string, unknown>;
            }>;
            restrictions?: Array<Record<string, unknown>>;
            entriesCountByGroup?: Record<string, unknown>;
            contestData?: {
              pickEm?: { contestMaxPossiblePoints?: number };
              wagering?: {
                defaultBalance?: number;
                turboLiveDefaultBalance?: number;
              };
              progressiveElimination?: Record<string, unknown>;
            };
            showLiveTracking?: boolean;
            priority?: number;
            mustAnswerAllQuestions?: boolean;
            evaluateScoresBeforeQuestionsResolve?: boolean;
            requireQuestionVerification?: boolean;
            questionIds?: Array<string>;
            displayQuestionIds?: Array<string>;
            waitingRoom?: { startTime?: string; enabled?: boolean };
            extendedFields?: Record<string, unknown>;
            contestPrizes?: Record<string, unknown>;
            leaderboardTypes?: Array<'entryList' | 'scoreGroups'>;
            lastCompletedPass?: string;
            lastScoreboardPass?: string;
            audit?: {
              createdDate?: string;
              updatedDate?: string;
              deletedDate?: string;
              userId?: string;
            };
          }>;
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
    },
  ) => {
    let finalURL = 'undefined/api/v1/contests/entries/users/:userId';
    finalURL += `?${Object.entries(request.query)
      .map(([key, value]) => `${key}=${value}`)
      .join('&')}`;
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value.toString());
      finalURL = finalURL.replaceAll(`{${key}}`, value.toString());
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'get');
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
  /**
   * @description Patch standard contest entries for a user
   */
  PatchStandardEntriesForUser: async (
    request: {
      params: {
        userId?: string;
      };
      body: {
        statuses?: Array<'shell' | 'reserved' | 'upcoming' | 'active'>;
        groupId?: string;
        groupIdToAdd?: string;
        groupIdToRemove?: string;
        productId: string;
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
    },
  ) => {
    let finalURL = 'undefined/api/v1/contests/entries/users/:userId';
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'patch', request.body);
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
  
  /**
   * @description Get a list of subContest entries for a given user
   */
  GetsubContestEntriesForUser: async (
    request: {
      query: {
        entryStatus?: 'reserved' | 'closed' | 'none';
        contestIds?: Array<string>;
        labels?: Array<string>;
        scope?: 'basic' | 'full';
      };
      params: {
        userId?: string;
      };
    },
    callbacks: Record<number, any> & {
      200?: (response: {
        basic?: {
          entries?: Array<{
            _id?: string;
            parentEntryIds?: Array<string>;
            userId?: string;
            contestId?: string;
            type?: 'pickEm' | 'wagering' | 'subContest';
            entryStatus?: 'reserved' | 'closed';
            groupIds?: Array<string>;
            entryData?: any;
            selections?: any;
            scoring?: Record<string, unknown>;
            winnings?: Record<string, unknown>;
            batchNumber?: number;
            extendedFields?: Record<string, unknown>;
            audit?: {
              createdDate?: string;
              updatedDate?: string;
              deletedDate?: string;
              userId?: string;
            };
          }>;
        };
        full?: {
          entries?: Array<{
            _id?: string;
            parentEntryIds?: Array<string>;
            userId?: string;
            contestId?: string;
            type?: 'pickEm' | 'wagering' | 'subContest';
            entryStatus?: 'reserved' | 'closed';
            groupIds?: Array<string>;
            entryData?: any;
            selections?: any;
            scoring?: Record<string, unknown>;
            winnings?: Record<string, unknown>;
            batchNumber?: number;
            extendedFields?: Record<string, unknown>;
            audit?: {
              createdDate?: string;
              updatedDate?: string;
              deletedDate?: string;
              userId?: string;
            };
          }>;
          contests?: Array<{
            _id?: string;
            status?: 'shell' | 'reserved' | 'upcoming' | 'active' | 'closed';
            feedStatus?: 'active' | 'inactive';
            feedStatusBehavior?: {
              type: 'changeIndependently' | 'syncWithContest';
              details: Record<string, unknown>;
            };
            type?:
              | 'pickEm'
              | 'wagering'
              | 'progressiveElimination'
              | 'evergreen';
            parentContestIds?: Array<string>;
            title?: string;
            version?: number;
            description?: string;
            labels?: Array<string>;
            gameTypes?: Array<string>;
            settings?: {
              addGroupIdToActiveEntries?: boolean;
              includeOnMatchupSchedule?: boolean;
              autoLockContest?: boolean;
            };
            productIds?: Array<string>;
            scheduled?: string;
            league?:
              | 'custom'
              | 'epl'
              | 'finance'
              | 'mlb'
              | 'mls'
              | 'nascar'
              | 'nba'
              | 'ncaafb'
              | 'nfl'
              | 'nhl'
              | 'pga'
              | 'roughNRowdy'
              | 'stoolStreams'
              | 'xfl';
            gameIds?: Array<string>;
            venues?: Array<{
              gameId?: string;
              venueId?: string;
              name?: string;
              coordinates?: Record<string, unknown>;
            }>;
            restrictions?: Array<Record<string, unknown>>;
            entriesCountByGroup?: Record<string, unknown>;
            contestData?: {
              pickEm?: { contestMaxPossiblePoints?: number };
              wagering?: {
                defaultBalance?: number;
                turboLiveDefaultBalance?: number;
              };
              progressiveElimination?: Record<string, unknown>;
            };
            showLiveTracking?: boolean;
            priority?: number;
            mustAnswerAllQuestions?: boolean;
            evaluateScoresBeforeQuestionsResolve?: boolean;
            requireQuestionVerification?: boolean;
            questionIds?: Array<string>;
            displayQuestionIds?: Array<string>;
            waitingRoom?: { startTime?: string; enabled?: boolean };
            extendedFields?: Record<string, unknown>;
            contestPrizes?: Record<string, unknown>;
            leaderboardTypes?: Array<'entryList' | 'scoreGroups'>;
            lastCompletedPass?: string;
            lastScoreboardPass?: string;
            audit?: {
              createdDate?: string;
              updatedDate?: string;
              deletedDate?: string;
              userId?: string;
            };
          }>;
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
    },
  ) => {
    let finalURL =
      'undefined/api/v2/contests/entries/subContests/users/:userId';
    finalURL += `?${Object.entries(request.query)
      .map(([key, value]) => `${key}=${value}`)
      .join('&')}`;
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'get');
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
  /**
   * @description Get standard contest entries for a list of groups
   */
  GetStandardContestEntriesForGroups: async (
    request: {
      params: {
        contestId?: string;
      };
      body: { groupIds: Array<string> };
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
    },
  ) => {
    let finalURL =
      'undefined/api/v1/contests/:contestId/groups/entries/bulk_search';
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'post', request.body);
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
  /**
   * @description Bulk add groups to user standard entries and wagers
   */
  Bulkaddgroupstostandardentries: async (
    request: {
      body: {
        updates: Array<{ userId: string; groupId: string }>;
        statuses?: Array<'shell' | 'reserved' | 'upcoming' | 'active'>;
        contestId?: string;
        remove?: boolean;
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
    },
  ) => {
    const finalURL = 'undefined/api/v1/contests/entries/users/bulk';
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'patch', request.body);
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
  /**
   * @description Delete a standard contest entry
   */
  DeleteStandardEntryV2: async (
    request: {
      params: {
        contestId?: string;
        entryId?: string;
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
    },
  ) => {
    let finalURL = 'undefined/api/v2/contests/:contestId/entries/:entryId';
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'delete');
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
  /**
   * @description Patch a standard contest entry
   */
  PatchStandardEntryV4: async (
    request: {
      params: {
        contestId?: string;
        entryId?: string;
      };
      body: {
        parentEntryIds?: Array<string>;
        selections?: any;
        eventInfo?: Record<string, unknown>;
        extendedFields?: Record<string, unknown>;
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
    },
  ) => {
    let finalURL = 'undefined/api/v4/contests/:contestId/entries/:entryId';
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'patch', request.body);
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
  /**
   * @description Create a standard contest entry
   */
  CreateStandardEntryV4: async (
    request: {
      params: {
        contestId?: string;
      };
      body: {
        groupIds: Array<string>;
        selections: any;
        eventInfo?: Record<string, unknown>;
        extendedFields?: Record<string, unknown>;
      };
    },
    callbacks: Record<number, any> & {
      200?: (response: {
        _id?: string;
        parentEntryIds?: Array<string>;
        userId?: string;
        contestId?: string;
        type?: 'pickEm' | 'wagering' | 'subContest';
        entryStatus?: 'reserved' | 'closed';
        groupIds?: Array<string>;
        entryData?: any;
        selections?: any;
        scoring?: Record<string, unknown>;
        winnings?: Record<string, unknown>;
        batchNumber?: number;
        extendedFields?: Record<string, unknown>;
        audit?: {
          createdDate?: string;
          updatedDate?: string;
          deletedDate?: string;
          userId?: string;
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
    },
  ) => {
    let finalURL = 'undefined/api/v4/contests/:contestId/entries';
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'post', request.body);
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
  /**
   * @description Create a standard contest entry
   */
  CreateStandardEntryV5: async (
    request: {
      params: {
        contestId?: string;
      };
      body: {
        groupIds: Array<string>;
        selections?: any;
        eventInfo?: Record<string, unknown>;
        entryFee?: number;
        extendedFields?: Record<string, unknown>;
      };
    },
    callbacks: Record<number, any> & {
      200?: (response: {
        _id?: string;
        parentEntryIds?: Array<string>;
        userId?: string;
        contestId?: string;
        type?: 'pickEm' | 'wagering' | 'subContest';
        entryStatus?: 'reserved' | 'closed';
        groupIds?: Array<string>;
        entryData?: any;
        selections?: any;
        scoring?: Record<string, unknown>;
        winnings?: Record<string, unknown>;
        batchNumber?: number;
        extendedFields?: Record<string, unknown>;
        audit?: {
          createdDate?: string;
          updatedDate?: string;
          deletedDate?: string;
          userId?: string;
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
    },
  ) => {
    let finalURL = 'undefined/api/v5/contests/:contestId/entries';
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'post', request.body);
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
  /**
   * @description Create additional wagers for an existing contest entry
   */
  CreateWagers: async (
    request: {
      params: {
        contestId?: string;
        entryId?: string;
      };
      body: {
        selections: Array<{
          questionId: string;
          choiceId: string;
          amountRisked: number;
          odds: { num: number; denom: number };
        }>;
        eventInfo?: Record<string, unknown>;
      };
    },
    callbacks: Record<number, any> & {
      200?: (response: {
        _id?: string;
        scoring?: Record<string, unknown>;
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
    },
  ) => {
    let finalURL =
      'undefined/api/v1/contests/:contestId/entries/:entryId/wagers';
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'post', request.body);
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
  /**
   * @description Utility endpoint to rebuild a contest's entry cache
   */
  RebuildEntriesCache: async (
    request: {
      params: {
        contestId?: string;
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
    },
  ) => {
    let finalURL = 'undefined/api/v1/contests/:contestId/entries/rebuildCache';
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'post');
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
  /**
   * @description Admin endpoint to add a balance adjustment to all wagering entries in the contest.  And update the contest default balance for now
   */
  AddBalanceAdjustmentToWageringEntries: async (
    request: {
      params: {
        contestId?: string;
      };
      body: { amount: number; reason: string };
    },
    callbacks: Record<number, any> & {
      200?: (response: {
        results?: {
          entriesUpdated?: number;
          newContestDefaultBalance?: number;
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
    },
  ) => {
    let finalURL =
      'undefined/api/v1/contests/:contestId/entries/balanceAdjustment';
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'post', request.body);
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
  /**
   * @description Admin endpoint to rebuild the list of entryIds who answered each question
   */
  RebuildQuestionAnswerLists: async (
    request: {
      params: {
        contestId?: string;
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
    },
  ) => {
    let finalURL =
      'undefined/api/v1/contests/:contestId/entries/questionsAnswerLists';
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'post');
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
  /**
   * @description Admin endpoint to rebuild the list of entryIds for each batch
   */
  RebuildEntriesPerBatchLists: async (
    request: {
      params: {
        contestId?: string;
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
    },
  ) => {
    let finalURL =
      'undefined/api/v1/contests/:contestId/entries/entriesPerBatchLists';
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'post');
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
  /**
   * @description Admin endpoint to verify that wagering entries have been scored correctly
   */
  VerifyWageringEntries: async (
    request: {
      params: {
        contestId?: string;
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
    },
  ) => {
    let finalURL = 'undefined/api/v1/contests/:contestId/verify-entries';
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'get');
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
  /**
   * @description Get all Contests filtered by query params
   */
  GetContestsv3: async (
    request: {
      query: {
        contestIds?: Array<string>;
        statuses?: Array<
          'reserved' | 'shell' | 'upcoming' | 'active' | 'open' | 'closed'
        >;
        labels?: Array<string>;
      };
    },
    callbacks: Record<number, any> & {
      200?: (response: Array<any>) => void;
      500?: (response: {
        code?: string;
        id?: string;
        message?: string;
        details?: string;
      }) => void;
      fallback?: (response?: unknown) => void;
    },
  ) => {
    let finalURL = 'undefined/api/v3/contests';
    finalURL += `?${Object.entries(request.query)
      .map(([key, value]) => `${key}=${value}`)
      .join('&')}`;
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'get');
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
  /**
   * @description Get all Contests filtered by query params
   */
  GetContestsv4: async (
    request: {
      query: {
        contestIds?: Array<string>;
        statuses?: Array<
          'reserved' | 'shell' | 'upcoming' | 'active' | 'open' | 'closed'
        >;
        labels?: Array<string>;
        labelsFilterMethod?: 'any' | 'all';
        leagues?: Array<
          | 'custom'
          | 'epl'
          | 'finance'
          | 'mlb'
          | 'mls'
          | 'nascar'
          | 'nba'
          | 'ncaafb'
          | 'nfl'
          | 'nhl'
          | 'pga'
          | 'roughNRowdy'
          | 'stoolStreams'
          | 'xfl'
        >;
        league?:
          | 'custom'
          | 'epl'
          | 'finance'
          | 'mlb'
          | 'mls'
          | 'nascar'
          | 'nba'
          | 'ncaafb'
          | 'nfl'
          | 'nhl'
          | 'pga'
          | 'roughNRowdy'
          | 'stoolStreams'
          | 'xfl';
        gameTypes?: Array<string>;
        types?: Array<
          | 'composite'
          | 'pickEm'
          | 'progressiveElimination'
          | 'wagering'
          | 'evergreen'
        >;
        closedDate?: string;
      };
    },
    callbacks: Record<number, any> & {
      200?: (response: Array<any>) => void;
      500?: (response: {
        code?: string;
        id?: string;
        message?: string;
        details?: string;
      }) => void;
      fallback?: (response?: unknown) => void;
    },
  ) => {
    let finalURL = 'undefined/api/v4/contests';
    finalURL += `?${Object.entries(request.query)
      .map(([key, value]) => `${key}=${value}`)
      .join('&')}`;
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'get');
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
  /**
   * @description Get a Contest by contestId v1
   */
  GetContestv1: async (
    request: {
      query: {
        pass?: string;
      };
      params: {
        contestId?: string;
      };
    },
    callbacks: Record<number, any> & {
      200?: (response: Record<string, unknown>) => void;
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
    },
  ) => {
    let finalURL = 'undefined/api/v1/contests/:contestId';
    finalURL += `?${Object.entries(request.query)
      .map(([key, value]) => `${key}=${value}`)
      .join('&')}`;
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'get');
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
  /**
   * @description Delete a Contest
   */
  DeleteContest: async (
    request: {
      params: {
        contestId?: string;
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
    },
  ) => {
    let finalURL = 'undefined/api/v1/contests/:contestId';
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'delete');
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
  /**
   * @description Update a Contest
   */
  PatchContest: async (
    request: {
      params: {
        contestId?: string;
      };
      body: {
        feedStatus?: 'active' | 'inactive';
        feedStatusBehavior?: {
          type: 'changeIndependently' | 'syncWithContest';
          details: Record<string, unknown>;
        };
        title?: string;
        description?: string;
        parentContestIds?: Array<string>;
        version?: number;
        labels?: Array<string>;
        productIds?: Array<string>;
        scheduled?: string;
        league?:
          | 'custom'
          | 'epl'
          | 'finance'
          | 'mlb'
          | 'mls'
          | 'nascar'
          | 'nba'
          | 'ncaafb'
          | 'nfl'
          | 'nhl'
          | 'pga'
          | 'roughNRowdy'
          | 'stoolStreams'
          | 'xfl';
        leagues?: Array<
          | 'custom'
          | 'epl'
          | 'finance'
          | 'mlb'
          | 'mls'
          | 'nascar'
          | 'nba'
          | 'ncaafb'
          | 'nfl'
          | 'nhl'
          | 'pga'
          | 'roughNRowdy'
          | 'stoolStreams'
          | 'xfl'
        >;
        contestData?: any;
        restrictions?: Array<{
          type?: 'visibility' | 'entrance';
          permissionOverrides: Array<
            | 'CanOverrideStateRestrictions'
            | 'CanOverrideDistanceVisibilityRestrictions'
            | 'CanCreateUnlimitedEntries'
            | 'CanBuildLeaderboard'
            | 'CanUpdateGames'
            | 'CanUpdateContestData'
            | 'CanViewContestData'
            | 'CanCreateEntries'
            | 'CanUpdateEntries'
            | 'CanPreviewContests'
            | 'CanSetContestStatus'
            | 'CanSetQuestionStatus'
            | 'CanUpdateEntryWallets'
            | 'CanBulkUpdateBestScores'
            | 'CanBulkUpdateContestEntries'
            | 'CanDeleteContestEntry'
            | 'CanDeleteOtherUsersEntries'
            | 'CanPublishSSE'
            | 'CanResetContest'
            | 'CanUpdateChoiceStates'
            | 'CanUpdateEntryLimits'
            | 'CanLogIn'
            | 'CanBackupContestData'
            | 'CanRestoreContestData'
          >;
          implementation: { type: any; details: any };
        }>;
        gameIds?: Array<string>;
        settings?: Record<string, unknown>;
        priority?: number;
        showLiveTracking?: boolean;
        mustAnswerAllQuestions?: boolean;
        evaluateScoresBeforeQuestionsResolve?: boolean;
        requireQuestionVerification?: boolean;
        sponsors?: Array<{
          sponsorId: string;
          location: { type: 'state' | 'zipcode'; value: string };
        }>;
        waitingRoom?: { startTime?: string; enabled?: boolean };
        questionIds?: Array<string>;
        displayQuestionIds?: Array<string>;
        sections?: Array<any>;
        contestPrizes?: Record<string, unknown>;
        leaderboardTypes?: Array<'entryList' | 'scoreGroups'>;
        extendedFields?: Record<string, unknown>;
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
    },
  ) => {
    let finalURL = 'undefined/api/v1/contests/:contestId';
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'patch', request.body);
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
  /**
   * @description Get a Contest by contestId v2
   */
  GetContestv2: async (
    request: {
      query: {
        pass?: string;
      };
      params: {
        contestId?: string;
      };
    },
    callbacks: Record<number, any> & {
      200?: (response: Record<string, unknown>) => void;
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
    },
  ) => {
    let finalURL = 'undefined/api/v2/contests/:contestId';
    finalURL += `?${Object.entries(request.query)
      .map(([key, value]) => `${key}=${value}`)
      .join('&')}`;
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'get');
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
  /**
   * @description Debugging endpoint to get a contest and all of its related data
   */
  GetContestinDebugMode: async (
    request: {
      query: {
        pass?: string;
      };
      params: {
        contestId?: string;
      };
    },
    callbacks: Record<number, any> & {
      200?: (response: Record<string, unknown>) => void;
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
    },
  ) => {
    let finalURL = 'undefined/api/v1/contests/:contestId/debug';
    finalURL += `?${Object.entries(request.query)
      .map(([key, value]) => `${key}=${value}`)
      .join('&')}`;
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'get');
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
  /**
   * @description Update a composite contest.
   */
  PatchCompositeContest: async (
    request: {
      params: {
        contestId?: string;
      };
      body: {
        title?: string;
        description?: string;
        contestData?: {
          scoringMode?: 'best';
          streakScores?: Array<number>;
          leaderboardConfigurations?: {
            tiebreakerDataset?: 'scoreOnly' | 'timHortons';
            minContestsBeforeTiebreak?: '0';
            maxTiesToProcess?: '0' | '-1';
            userLimit?: '0' | '-1';
          };
        };
        labels?: Array<string>;
        leaderboardTypes?: Array<'aggregate'>;
        priority?: number;
        restrictions?: Array<{
          type?: 'visibility' | 'entrance';
          permissionOverrides: Array<
            | 'CanOverrideStateRestrictions'
            | 'CanOverrideDistanceVisibilityRestrictions'
            | 'CanCreateUnlimitedEntries'
            | 'CanBuildLeaderboard'
            | 'CanUpdateGames'
            | 'CanUpdateContestData'
            | 'CanViewContestData'
            | 'CanCreateEntries'
            | 'CanUpdateEntries'
            | 'CanPreviewContests'
            | 'CanSetContestStatus'
            | 'CanSetQuestionStatus'
            | 'CanUpdateEntryWallets'
            | 'CanBulkUpdateBestScores'
            | 'CanBulkUpdateContestEntries'
            | 'CanDeleteContestEntry'
            | 'CanDeleteOtherUsersEntries'
            | 'CanPublishSSE'
            | 'CanResetContest'
            | 'CanUpdateChoiceStates'
            | 'CanUpdateEntryLimits'
            | 'CanLogIn'
            | 'CanBackupContestData'
            | 'CanRestoreContestData'
          >;
          implementation: { type: any; details: any };
        }>;
        contestPrizes?: Record<string, unknown>;
        extendedFields?: Record<string, unknown>;
      };
    },
    callbacks: Record<number, any> & {
      204?: (response?: unknown) => void;
      400?: (response?: unknown) => void;
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
    },
  ) => {
    let finalURL = 'undefined/api/v1/contests/composite/:contestId';
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'patch', request.body);
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
  /**
   * @description Create a Contest
   */
  CreateContest: async (
    request: {
      body: {
        feedStatus?: 'active' | 'inactive';
        feedStatusBehavior?: {
          type: 'changeIndependently' | 'syncWithContest';
          details: Record<string, unknown>;
        };
        title: string;
        description: string;
        type: 'pickEm' | 'wagering' | 'progressiveElimination' | 'evergreen';
        parentContestIds?: Array<string>;
        version: number;
        labels?: Array<string>;
        gameTypes?: Array<string>;
        productIds: Array<string>;
        scheduled?: any;
        leagues?: any;
        league?: any;
        contestData: any;
        restrictions: Array<{
          type?: 'visibility' | 'entrance';
          permissionOverrides: Array<
            | 'CanOverrideStateRestrictions'
            | 'CanOverrideDistanceVisibilityRestrictions'
            | 'CanCreateUnlimitedEntries'
            | 'CanBuildLeaderboard'
            | 'CanUpdateGames'
            | 'CanUpdateContestData'
            | 'CanViewContestData'
            | 'CanCreateEntries'
            | 'CanUpdateEntries'
            | 'CanPreviewContests'
            | 'CanSetContestStatus'
            | 'CanSetQuestionStatus'
            | 'CanUpdateEntryWallets'
            | 'CanBulkUpdateBestScores'
            | 'CanBulkUpdateContestEntries'
            | 'CanDeleteContestEntry'
            | 'CanDeleteOtherUsersEntries'
            | 'CanPublishSSE'
            | 'CanResetContest'
            | 'CanUpdateChoiceStates'
            | 'CanUpdateEntryLimits'
            | 'CanLogIn'
            | 'CanBackupContestData'
            | 'CanRestoreContestData'
          >;
          implementation: { type: any; details: any };
        }>;
        gameIds?: any;
        settings?: {
          addGroupIdToActiveEntries?: boolean;
          includeOnMatchupSchedule?: boolean;
          autoLockContest?: boolean;
        };
        priority?: number;
        showLiveTracking: boolean;
        mustAnswerAllQuestions: boolean;
        evaluateScoresBeforeQuestionsResolve?: any;
        requireQuestionVerification?: any;
        status?: 'upcoming' | 'reserved';
        sponsors?: Array<{
          sponsorId: string;
          location: { type: 'state' | 'zipcode'; value: string };
        }>;
        waitingRoom?: { startTime: string; enabled?: boolean };
        sections?: Array<any>;
        contestPrizes?: Record<string, unknown>;
        leaderboardTypes?: Array<'entryList' | 'scoreGroups'>;
        extendedFields?: Record<string, unknown>;
      };
    },
    callbacks: Record<number, any> & {
      200?: (response: {
        _id?: string;
        status?: 'shell' | 'reserved' | 'upcoming' | 'active' | 'closed';
        feedStatus?: 'active' | 'inactive';
        feedStatusBehavior?: {
          type: 'changeIndependently' | 'syncWithContest';
          details: Record<string, unknown>;
        };
        type?: 'pickEm' | 'wagering' | 'progressiveElimination' | 'evergreen';
        parentContestIds?: Array<string>;
        title?: string;
        version?: number;
        description?: string;
        labels?: Array<string>;
        gameTypes?: Array<string>;
        settings?: {
          addGroupIdToActiveEntries?: boolean;
          includeOnMatchupSchedule?: boolean;
          autoLockContest?: boolean;
        };
        productIds?: Array<string>;
        scheduled?: string;
        league?:
          | 'custom'
          | 'epl'
          | 'finance'
          | 'mlb'
          | 'mls'
          | 'nascar'
          | 'nba'
          | 'ncaafb'
          | 'nfl'
          | 'nhl'
          | 'pga'
          | 'roughNRowdy'
          | 'stoolStreams'
          | 'xfl';
        gameIds?: Array<string>;
        venues?: Array<{
          gameId?: string;
          venueId?: string;
          name?: string;
          coordinates?: Record<string, unknown>;
        }>;
        restrictions?: Array<Record<string, unknown>>;
        entriesCountByGroup?: Record<string, unknown>;
        contestData?: {
          pickEm?: { contestMaxPossiblePoints?: number };
          wagering?: {
            defaultBalance?: number;
            turboLiveDefaultBalance?: number;
          };
          progressiveElimination?: Record<string, unknown>;
        };
        showLiveTracking?: boolean;
        priority?: number;
        mustAnswerAllQuestions?: boolean;
        evaluateScoresBeforeQuestionsResolve?: boolean;
        requireQuestionVerification?: boolean;
        questionIds?: Array<string>;
        displayQuestionIds?: Array<string>;
        waitingRoom?: { startTime?: string; enabled?: boolean };
        extendedFields?: Record<string, unknown>;
        contestPrizes?: Record<string, unknown>;
        leaderboardTypes?: Array<'entryList' | 'scoreGroups'>;
        lastCompletedPass?: string;
        lastScoreboardPass?: string;
        audit?: {
          createdDate?: string;
          updatedDate?: string;
          deletedDate?: string;
          userId?: string;
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
    },
  ) => {
    const finalURL = 'undefined/api/v2/contests';
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'post', request.body);
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
  /**
   * @description Create a composite contest.
   */
  CreateCompositeContest: async (
    request: {
      body: {
        title: string;
        description: string;
        version: number;
        contestData: {
          scoringMode?: 'best';
          streakScores?: Array<number>;
          leaderboardConfigurations?: {
            tiebreakerDataset?: 'scoreOnly' | 'timHortons';
            minContestsBeforeTiebreak?: '0';
            maxTiesToProcess?: '0' | '-1';
            userLimit?: '0' | '-1';
          };
        };
        labels?: Array<string>;
        leaderboardTypes?: Array<'aggregate'>;
        priority?: number;
        restrictions?: Array<{
          type?: 'visibility' | 'entrance';
          permissionOverrides: Array<
            | 'CanOverrideStateRestrictions'
            | 'CanOverrideDistanceVisibilityRestrictions'
            | 'CanCreateUnlimitedEntries'
            | 'CanBuildLeaderboard'
            | 'CanUpdateGames'
            | 'CanUpdateContestData'
            | 'CanViewContestData'
            | 'CanCreateEntries'
            | 'CanUpdateEntries'
            | 'CanPreviewContests'
            | 'CanSetContestStatus'
            | 'CanSetQuestionStatus'
            | 'CanUpdateEntryWallets'
            | 'CanBulkUpdateBestScores'
            | 'CanBulkUpdateContestEntries'
            | 'CanDeleteContestEntry'
            | 'CanDeleteOtherUsersEntries'
            | 'CanPublishSSE'
            | 'CanResetContest'
            | 'CanUpdateChoiceStates'
            | 'CanUpdateEntryLimits'
            | 'CanLogIn'
            | 'CanBackupContestData'
            | 'CanRestoreContestData'
          >;
          implementation: { type: any; details: any };
        }>;
        contestPrizes?: Record<string, unknown>;
        extendedFields?: Record<string, unknown>;
      };
    },
    callbacks: Record<number, any> & {
      200?: (response: {
        createdContest?: {
          _id?: string;
          type?: 'composite';
          status?: 'open' | 'closed';
          feedStatus?: 'inactive';
          feedStatusBehavior?: {
            type?: 'changeIndependently';
            details?: Record<string, unknown>;
          };
          productIds?: Array<string>;
          leagues?: Array<
            | 'custom'
            | 'epl'
            | 'finance'
            | 'mlb'
            | 'mls'
            | 'nascar'
            | 'nba'
            | 'ncaafb'
            | 'nfl'
            | 'nhl'
            | 'pga'
            | 'roughNRowdy'
            | 'stoolStreams'
            | 'xfl'
          >;
          title?: string;
          description?: string;
          version?: number;
          contestData?: {
            scoringMode?: 'best';
            streakScores?: Array<number>;
            leaderboardConfigurations?: {
              tiebreakerDataset?: 'scoreOnly' | 'timHortons';
              minContestsBeforeTiebreak?: '0';
              maxTiesToProcess?: '0' | '-1';
              userLimit?: '0' | '-1';
            };
            numChildren?: '0';
            contestMaxPossiblePoints?: '0';
            contestCurrentPossiblePoints?: '0';
            childContestsCompleted?: '0';
            jackpotTrackerData?: Record<string, unknown>;
          };
          labels?: Array<string>;
          leaderboardTypes?: Array<'aggregate'>;
          priority?: number;
          restrictions?: Array<{
            type?: 'visibility' | 'entrance';
            permissionOverrides: Array<
              | 'CanOverrideStateRestrictions'
              | 'CanOverrideDistanceVisibilityRestrictions'
              | 'CanCreateUnlimitedEntries'
              | 'CanBuildLeaderboard'
              | 'CanUpdateGames'
              | 'CanUpdateContestData'
              | 'CanViewContestData'
              | 'CanCreateEntries'
              | 'CanUpdateEntries'
              | 'CanPreviewContests'
              | 'CanSetContestStatus'
              | 'CanSetQuestionStatus'
              | 'CanUpdateEntryWallets'
              | 'CanBulkUpdateBestScores'
              | 'CanBulkUpdateContestEntries'
              | 'CanDeleteContestEntry'
              | 'CanDeleteOtherUsersEntries'
              | 'CanPublishSSE'
              | 'CanResetContest'
              | 'CanUpdateChoiceStates'
              | 'CanUpdateEntryLimits'
              | 'CanLogIn'
              | 'CanBackupContestData'
              | 'CanRestoreContestData'
            >;
            implementation: { type: any; details: any };
          }>;
          contestPrizes?: Record<string, unknown>;
          extendedFields?: Record<string, unknown>;
          lastCompletedPass?: string;
          audit?: {
            createdDate?: string;
            updatedDate?: string;
            deletedDate?: string;
            userId?: string;
          };
        };
      }) => void;
      400?: (response?: unknown) => void;
      500?: (response: {
        code?: string;
        id?: string;
        message?: string;
        details?: string;
      }) => void;
      fallback?: (response?: unknown) => void;
    },
  ) => {
    const finalURL = 'undefined/api/v2/contests/composite';
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'post', request.body);
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
  /**
   * @description Create all shell contests for a given league for the current year
   */
  CreateShellContests: async (
    request: {
      body: {
        feedStatus?: 'active' | 'inactive';
        feedStatusBehavior?: {
          type: 'changeIndependently' | 'syncWithContest';
          details: Record<string, unknown>;
        };
        type: 'pickEm' | 'wagering' | 'progressiveElimination';
        parentContestIds?: Array<string>;
        version: number;
        labels?: Array<string>;
        productIds: Array<string>;
        league: 'pga';
        restrictions: Array<{
          type?: 'visibility' | 'entrance';
          permissionOverrides: Array<
            | 'CanOverrideStateRestrictions'
            | 'CanOverrideDistanceVisibilityRestrictions'
            | 'CanCreateUnlimitedEntries'
            | 'CanBuildLeaderboard'
            | 'CanUpdateGames'
            | 'CanUpdateContestData'
            | 'CanViewContestData'
            | 'CanCreateEntries'
            | 'CanUpdateEntries'
            | 'CanPreviewContests'
            | 'CanSetContestStatus'
            | 'CanSetQuestionStatus'
            | 'CanUpdateEntryWallets'
            | 'CanBulkUpdateBestScores'
            | 'CanBulkUpdateContestEntries'
            | 'CanDeleteContestEntry'
            | 'CanDeleteOtherUsersEntries'
            | 'CanPublishSSE'
            | 'CanResetContest'
            | 'CanUpdateChoiceStates'
            | 'CanUpdateEntryLimits'
            | 'CanLogIn'
            | 'CanBackupContestData'
            | 'CanRestoreContestData'
          >;
          implementation: { type: any; details: any };
        }>;
        showLiveTracking: boolean;
        mustAnswerAllQuestions: boolean;
        evaluateScoresBeforeQuestionsResolve?: any;
        requireQuestionVerification?: boolean;
        contestPrizes?: Record<string, unknown>;
        leaderboardTypes?: Array<'entryList' | 'scoreGroups'>;
        extendedFields?: Record<string, unknown>;
      };
    },
    callbacks: Record<number, any> & {
      200?: (
        response: Array<{
          _id?: string;
          status?: 'shell' | 'reserved' | 'upcoming' | 'active' | 'closed';
          feedStatus?: 'active' | 'inactive';
          feedStatusBehavior?: {
            type: 'changeIndependently' | 'syncWithContest';
            details: Record<string, unknown>;
          };
          type?: 'pickEm' | 'wagering' | 'progressiveElimination' | 'evergreen';
          parentContestIds?: Array<string>;
          title?: string;
          version?: number;
          description?: string;
          labels?: Array<string>;
          gameTypes?: Array<string>;
          settings?: {
            addGroupIdToActiveEntries?: boolean;
            includeOnMatchupSchedule?: boolean;
            autoLockContest?: boolean;
          };
          productIds?: Array<string>;
          scheduled?: string;
          league?:
            | 'custom'
            | 'epl'
            | 'finance'
            | 'mlb'
            | 'mls'
            | 'nascar'
            | 'nba'
            | 'ncaafb'
            | 'nfl'
            | 'nhl'
            | 'pga'
            | 'roughNRowdy'
            | 'stoolStreams'
            | 'xfl';
          gameIds?: Array<string>;
          venues?: Array<{
            gameId?: string;
            venueId?: string;
            name?: string;
            coordinates?: Record<string, unknown>;
          }>;
          restrictions?: Array<Record<string, unknown>>;
          entriesCountByGroup?: Record<string, unknown>;
          contestData?: {
            pickEm?: { contestMaxPossiblePoints?: number };
            wagering?: {
              defaultBalance?: number;
              turboLiveDefaultBalance?: number;
            };
            progressiveElimination?: Record<string, unknown>;
          };
          showLiveTracking?: boolean;
          priority?: number;
          mustAnswerAllQuestions?: boolean;
          evaluateScoresBeforeQuestionsResolve?: boolean;
          requireQuestionVerification?: boolean;
          questionIds?: Array<string>;
          displayQuestionIds?: Array<string>;
          waitingRoom?: { startTime?: string; enabled?: boolean };
          extendedFields?: Record<string, unknown>;
          contestPrizes?: Record<string, unknown>;
          leaderboardTypes?: Array<'entryList' | 'scoreGroups'>;
          lastCompletedPass?: string;
          lastScoreboardPass?: string;
          audit?: {
            createdDate?: string;
            updatedDate?: string;
            deletedDate?: string;
            userId?: string;
          };
        }>,
      ) => void;
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
    },
  ) => {
    const finalURL = 'undefined/api/v2/contests/shellContests';
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'post', request.body);
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
  /**
   * @description Get a contest's status change eligibility.
   */
  GetContestStatusChangeEligibility: async (
    request: {
      query: {
        newStatus?: 'reserved' | 'upcoming' | 'active' | 'closed';
      };
      params: {
        contestId?: string;
      };
    },
    callbacks: Record<number, any> & {
      200?: (response: {
        eligible?: boolean;
        reason?: string;
        details?: Record<string, unknown>;
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
    },
  ) => {
    let finalURL = 'undefined/api/v1/contests/:contestId/statusEligibility';
    finalURL += `?${Object.entries(request.query)
      .map(([key, value]) => `${key}=${value}`)
      .join('&')}`;
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'get');
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
  /**
   * @description Update a contest's status
   */
  UpdateContestStatus: async (
    request: {
      params: {
        contestId?: string;
      };
      body: { newStatus: 'reserved' | 'upcoming' | 'active' | 'closed' };
    },
    callbacks: Record<number, any> & {
      200?: (response: {
        reserved?: { result?: string };
        upcoming?: { result?: string };
        active?: { result?: string };
        closed?: {
          result?: string;
          walletUpdates?: Array<Record<string, unknown>>;
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
    },
  ) => {
    let finalURL = 'undefined/api/v1/contests/:contestId/status';
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'patch', request.body);
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
  /**
   * @description Get Entries Counts For Groups
   */
  GetEntriesCountsForGroups: async (
    request: {
      query: {
        groupIds?: Array<'totalCount'>;
      };
      params: {
        contestId?: string;
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
    },
  ) => {
    let finalURL = 'undefined/api/v1/contests/:contestId/entriesCounts';
    finalURL += `?${Object.entries(request.query)
      .map(([key, value]) => `${key}=${value}`)
      .join('&')}`;
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'get');
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
  /**
   * @description Publish a message to an SSE channel.  This is likely temporary and may need to be in chassis eventually.  For now it is used to prove out the sse channel change
   */
  PublishtoSSE: async (
    request: {
      body: { channel: string; event?: string; data?: string };
    },
    callbacks: Record<number, any> & {
      500?: (response: {
        code?: string;
        id?: string;
        message?: string;
        details?: string;
      }) => void;
      fallback?: (response?: unknown) => void;
    },
  ) => {
    const finalURL = 'undefined/api/v1/contests/updates';
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'post', request.body);
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
  /**
   * @description Resets a contest and associated questions, entries, choices, and scoreboards to their initialized states.
   */
  ResetContest: async (
    request: {
      params: {
        contestId?: string;
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
    },
  ) => {
    let finalURL = 'undefined/api/v1/contests/:contestId/reset';
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'patch');
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
  /**
   * @description Backup a Contest
   */
  BackupContest: async (
    request: {
      params: {
        contestId?: string;
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
    },
  ) => {
    let finalURL = 'undefined/api/v1/contests/:contestId/backup';
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'post');
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
  /**
   * @description Restore a Contest
   */
  RestoreContest: async (
    request: {
      params: {
        parentContestId?: string;
        contestId?: string;
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
    },
  ) => {
    let finalURL =
      'undefined/api/v1/contests/:parentContestId/restore/:contestId';
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'post');
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
  /**
   * @description Get a contest leaderboard
   */
  GetLeaderboardV4: async (
    request: {
      params: {
        contestId?: string;
        type?: 'aggregate' | 'entryList' | 'scoreGroups';
        groupId?: string;
        pass?: string;
      };
    },
    callbacks: Record<number, any> & {
      200?: (response: {
        aggregate?: {
          contestId?: string;
          groupId?: string;
          pass?: string;
          type?: 'aggregate';
          createdDate?: string;
          users?: Array<{
            userId?: string;
            entryId?: string;
            profile?: {
              username?: string;
              image?: { source?: string; path?: string; status?: string };
            };
            extendedFields?: Record<string, unknown>;
            place?: '0';
            previousPlace?: '0';
            score?: number;
            contestsEntered?: '0';
            maxPossibleEnteredScore?: number;
            scoreMap?: Record<string, unknown>;
          }>;
        };
        scoreGroups?: {
          contestId?: string;
          groupId?: string;
          pass?: string;
          type?: 'scoreGroups';
          createdDate?: string;
          scoreGroups?: {
            score?: {
              winnings?: number;
              count?: number;
              users?: Array<{
                userId?: string;
                entryId?: string;
                profile?: {
                  username?: string;
                  image?: { source?: string; path?: string; status?: string };
                };
              }>;
            };
          };
        };
        entryList?: {
          contestId?: string;
          groupId?: string;
          pass?: string;
          type?: 'scoreGroups';
          createdDate?: string;
          users?: Array<{
            entryId?: string;
            userId?: string;
            score?: number;
            place?: number;
            profile?: {
              username?: string;
              image?: { source?: string; path?: string; status?: string };
            };
            winnings?: {
              winnings?: number;
              winningsBySchema?: Record<string, unknown>;
            };
            extendedFields?: Record<string, unknown>;
          }>;
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
    },
  ) => {
    let finalURL =
      'undefined/api/v4/contests/:contestId/leaderboards/:type/:groupId/:pass/p/*leaderboard.json';
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'get');
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
  /**
   * @description Get a contest leaderboard local to given score
   */
  GetLocalLeaderboard: async (
    request: {
      params: {
        contestId?: string;
        entryId?: string;
        leaderboardSize?: number;
      };
    },
    callbacks: Record<number, any> & {
      200?: (response: {
        leaderboard?: {
          contestId?: string;
          type?: 'local';
          createdDate?: string;
          users?: Array<{
            userId?: string;
            entryId?: string;
            profile?: {
              username?: string;
              image?: { source?: string; path?: string; status?: string };
            };
            place?: number;
            score?: number;
            contestsEntered?: '0';
            maxPossibleEnteredScore?: number;
            scoreMap?: Record<string, unknown>;
          }>;
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
    },
  ) => {
    let finalURL =
      'undefined/api/v1/contests/:contestId/leaderboards/local/:entryId/:leaderboardSize';
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value.toString());
      finalURL = finalURL.replaceAll(`{${key}}`, value.toString());
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'get');
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
  /**
   * @description Utility endpoint to force a persist of a contest leaderboard for a given groupId
   */
  PersistLeaderboardForGroup: async (
    request: {
      params: {
        contestId?: string;
        groupId?: string;
        pass?: string;
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
    },
  ) => {
    let finalURL =
      'undefined/api/v1/contests/:contestId/leaderboards/:groupId/:pass/persist';
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'patch');
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
  /**
   * @description Utility endpoint to force a persist of a contest leaderboard for all groups
   */
  PersistLeaderboardForAllGroups: async (
    request: {
      params: {
        contestId?: string;
        pass?: string;
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
    },
  ) => {
    let finalURL =
      'undefined/api/v1/contests/:contestId/leaderboards/:pass/persist';
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'patch');
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
  /**
   * @description Clears the leaderboard user cache data in redis when a username or profile picture change, so the next pass uses the updated values
   */
  ClearLeaderboardUserData: async (
    request: {
      params: {
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
    },
  ) => {
    let finalURL = 'undefined/api/v1/contests/users/:userId/leaderboardData';
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'patch');
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
  /**
   * @description Persist score group leaderboards for persisting in mongo
   */
  Persistscoregroupleaderboards: async (
    request: {
      params: {
        contestId?: string;
        pass?: string;
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
    },
  ) => {
    let finalURL =
      'undefined/api/v1/contests/:contestId/leaderboards/:pass/persistSingle';
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'patch');
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
  /**
   * @description Get the current weekly global entry limit for a user
   */
  GetGlobalEntryLimit: async (
    request: {
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
    },
  ) => {
    let finalURL =
      'undefined/api/v1/contests/users/:userId/global-weekly-entry-limit';
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'get');
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
  /**
   * @description Set the current weekly global entry limit for a user
   */
  SetGlobalEntryLimit: async (
    request: {
      params: {
        userId?: string;
      };
      body: { limit: number };
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
    },
  ) => {
    let finalURL =
      'undefined/api/v1/contests/users/:userId/global-weekly-entry-limit';
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'post', request.body);
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
  /**
   * @description Get the current global entry fee limit for a user
   */
  GetGlobalEntryFeeLimit: async (
    request: {
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
    },
  ) => {
    let finalURL =
      'undefined/api/v1/contests/users/:userId/global-entry-fee-limit';
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'get');
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
  /**
   * @description Set the current global entry limit fee for a user
   */
  SetGlobalEntryFeeLimit: async (
    request: {
      params: {
        userId?: string;
      };
      body: { limit: number };
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
    },
  ) => {
    let finalURL =
      'undefined/api/v1/contests/users/:userId/global-entry-fee-limit';
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'post', request.body);
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
  /**
   * @description Get questions for a contest
   */
  GetQuestionsforContest: async (
    request: {
      query: {
        questionIds?: Array<string>;
        scope?: 'basic' | 'full';
        pass?: string;
        labels?: Array<string>;
        statuses?: Array<
          | 'readyToResolve'
          | 'created'
          | 'available'
          | 'suspended'
          | 'locked'
          | 'resolved'
          | 'verified'
          | 'canceled'
        >;
      };
      params: {
        contestId?: string;
      };
    },
    callbacks: Record<number, any> & {
      200?: (response: {
        basic?: {
          questions?: Array<{
            _id?: string;
            type?:
              | 'atLeastPosition'
              | 'atLeastStat'
              | 'bestPosition'
              | 'composite'
              | 'eventWinnerWagering'
              | 'exactStat'
              | 'gameScore'
              | 'gameScoreboard'
              | 'gameWinner'
              | 'genericMultipleChoice'
              | 'genericMultipleChoiceWagering'
              | 'leastStat'
              | 'linkedEventPositions'
              | 'margin'
              | 'matchupWagering'
              | 'mostStat'
              | 'mostStatRankedScoring'
              | 'rangeStat'
              | 'timedOccurrence'
              | 'timedStat';
            status?:
              | 'created'
              | 'available'
              | 'suspended'
              | 'locked'
              | 'resolved'
              | 'verified'
              | 'canceled';
            title?: string;
            choiceIds?: Array<string>;
            gameIds?: Array<string>;
            questionData?: any;
            lockBehavior?: {
              type:
                | 'changeIndependently'
                | 'changeAtFutureDate'
                | 'changeRightNow'
                | 'syncWithContest';
              details?: any;
            };
            autoGenerateChoices?: {
              type: 'cloneFromLinkedQuestions' | 'entireField' | 'playerRank';
              details: any;
            };
            choiceSortOrders?: Array<
              'isPlaying' | 'computedOdds' | 'playerRank' | 'lastName'
            >;
            parentQuestionId?: string;
            settings?: {
              autoUpdateChoiceStates?: boolean;
              autoImportGameStats?: boolean;
            };
            extendedFields?: Record<string, unknown>;
            audit?: {
              createdDate?: string;
              updatedDate?: string;
              deletedDate?: string;
              userId?: string;
            };
          }>;
        };
        full?: {
          questions?: Array<{
            _id?: string;
            type?:
              | 'atLeastPosition'
              | 'atLeastStat'
              | 'bestPosition'
              | 'composite'
              | 'eventWinnerWagering'
              | 'exactStat'
              | 'gameScore'
              | 'gameScoreboard'
              | 'gameWinner'
              | 'genericMultipleChoice'
              | 'genericMultipleChoiceWagering'
              | 'leastStat'
              | 'linkedEventPositions'
              | 'margin'
              | 'matchupWagering'
              | 'mostStat'
              | 'mostStatRankedScoring'
              | 'rangeStat'
              | 'timedOccurrence'
              | 'timedStat';
            status?:
              | 'created'
              | 'available'
              | 'suspended'
              | 'locked'
              | 'resolved'
              | 'verified'
              | 'canceled';
            title?: string;
            choiceIds?: Array<string>;
            gameIds?: Array<string>;
            questionData?: any;
            lockBehavior?: {
              type:
                | 'changeIndependently'
                | 'changeAtFutureDate'
                | 'changeRightNow'
                | 'syncWithContest';
              details?: any;
            };
            autoGenerateChoices?: {
              type: 'cloneFromLinkedQuestions' | 'entireField' | 'playerRank';
              details: any;
            };
            choiceSortOrders?: Array<
              'isPlaying' | 'computedOdds' | 'playerRank' | 'lastName'
            >;
            parentQuestionId?: string;
            settings?: {
              autoUpdateChoiceStates?: boolean;
              autoImportGameStats?: boolean;
            };
            extendedFields?: Record<string, unknown>;
            audit?: {
              createdDate?: string;
              updatedDate?: string;
              deletedDate?: string;
              userId?: string;
            };
          }>;
          choices?: Array<{
            _id?: string;
            type?:
              | 'gameScore'
              | 'noOccurrence'
              | 'otherOccurrence'
              | 'otherPlayerFromTeam'
              | 'otherPlayerFromTeams'
              | 'player'
              | 'playerExpiring'
              | 'playerOccurrence'
              | 'playerRange'
              | 'playerWagering'
              | 'players'
              | 'team'
              | 'teamOccurrence'
              | 'teamRange'
              | 'teams'
              | 'teamsMargin'
              | 'teamsRange'
              | 'text'
              | 'textRange'
              | 'textWagering';
            title?: string;
            choiceData?: any;
            extendedFields?: Record<string, unknown>;
            audit?: {
              createdDate?: string;
              updatedDate?: string;
              deletedDate?: string;
              userId?: string;
            };
          }>;
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
    },
  ) => {
    let finalURL = 'undefined/api/v2/contests/:contestId/questions';
    finalURL += `?${Object.entries(request.query)
      .map(([key, value]) => `${key}=${value}`)
      .join('&')}`;
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'get');
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
  /**
   * @description Get the paginated question history, a list of finalized questions for a given contest. These questions entries have been persisted to MongoDB
   */
  GetQuestionHistoryForContest: async (
    request: {
      query: {
        scope?: 'basic' | 'full';
        statuses?: Array<'verified' | 'canceled'>;
        page?: number;
        count?: number;
      };
      params: {
        contestId?: string;
      };
    },
    callbacks: Record<number, any> & {
      200?: (response: {
        basic?: {
          questions?: Array<{
            _id?: string;
            type?:
              | 'atLeastPosition'
              | 'atLeastStat'
              | 'bestPosition'
              | 'composite'
              | 'eventWinnerWagering'
              | 'exactStat'
              | 'gameScore'
              | 'gameScoreboard'
              | 'gameWinner'
              | 'genericMultipleChoice'
              | 'genericMultipleChoiceWagering'
              | 'leastStat'
              | 'linkedEventPositions'
              | 'margin'
              | 'matchupWagering'
              | 'mostStat'
              | 'mostStatRankedScoring'
              | 'rangeStat'
              | 'timedOccurrence'
              | 'timedStat';
            status?:
              | 'created'
              | 'available'
              | 'suspended'
              | 'locked'
              | 'resolved'
              | 'verified'
              | 'canceled';
            title?: string;
            choiceIds?: Array<string>;
            gameIds?: Array<string>;
            questionData?: any;
            lockBehavior?: {
              type:
                | 'changeIndependently'
                | 'changeAtFutureDate'
                | 'changeRightNow'
                | 'syncWithContest';
              details?: any;
            };
            autoGenerateChoices?: {
              type: 'cloneFromLinkedQuestions' | 'entireField' | 'playerRank';
              details: any;
            };
            choiceSortOrders?: Array<
              'isPlaying' | 'computedOdds' | 'playerRank' | 'lastName'
            >;
            parentQuestionId?: string;
            settings?: {
              autoUpdateChoiceStates?: boolean;
              autoImportGameStats?: boolean;
            };
            extendedFields?: Record<string, unknown>;
            audit?: {
              createdDate?: string;
              updatedDate?: string;
              deletedDate?: string;
              userId?: string;
            };
          }>;
        };
        full?: {
          questions?: Array<{
            _id?: string;
            type?:
              | 'atLeastPosition'
              | 'atLeastStat'
              | 'bestPosition'
              | 'composite'
              | 'eventWinnerWagering'
              | 'exactStat'
              | 'gameScore'
              | 'gameScoreboard'
              | 'gameWinner'
              | 'genericMultipleChoice'
              | 'genericMultipleChoiceWagering'
              | 'leastStat'
              | 'linkedEventPositions'
              | 'margin'
              | 'matchupWagering'
              | 'mostStat'
              | 'mostStatRankedScoring'
              | 'rangeStat'
              | 'timedOccurrence'
              | 'timedStat';
            status?:
              | 'created'
              | 'available'
              | 'suspended'
              | 'locked'
              | 'resolved'
              | 'verified'
              | 'canceled';
            title?: string;
            choiceIds?: Array<string>;
            gameIds?: Array<string>;
            questionData?: any;
            lockBehavior?: {
              type:
                | 'changeIndependently'
                | 'changeAtFutureDate'
                | 'changeRightNow'
                | 'syncWithContest';
              details?: any;
            };
            autoGenerateChoices?: {
              type: 'cloneFromLinkedQuestions' | 'entireField' | 'playerRank';
              details: any;
            };
            choiceSortOrders?: Array<
              'isPlaying' | 'computedOdds' | 'playerRank' | 'lastName'
            >;
            parentQuestionId?: string;
            settings?: {
              autoUpdateChoiceStates?: boolean;
              autoImportGameStats?: boolean;
            };
            extendedFields?: Record<string, unknown>;
            audit?: {
              createdDate?: string;
              updatedDate?: string;
              deletedDate?: string;
              userId?: string;
            };
          }>;
          choices?: Array<{
            _id?: string;
            type?:
              | 'gameScore'
              | 'noOccurrence'
              | 'otherOccurrence'
              | 'otherPlayerFromTeam'
              | 'otherPlayerFromTeams'
              | 'player'
              | 'playerExpiring'
              | 'playerOccurrence'
              | 'playerRange'
              | 'playerWagering'
              | 'players'
              | 'team'
              | 'teamOccurrence'
              | 'teamRange'
              | 'teams'
              | 'teamsMargin'
              | 'teamsRange'
              | 'text'
              | 'textRange'
              | 'textWagering';
            title?: string;
            choiceData?: any;
            extendedFields?: Record<string, unknown>;
            audit?: {
              createdDate?: string;
              updatedDate?: string;
              deletedDate?: string;
              userId?: string;
            };
          }>;
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
    },
  ) => {
    let finalURL = 'undefined/api/v1/contests/:contestId/questions/history';
    finalURL += `?${Object.entries(request.query)
      .map(([key, value]) => `${key}=${value}`)
      .join('&')}`;
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'get');
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
  /**
   * @description Get a question for a contest
   */
  GetQuestion: async (
    request: {
      params: {
        contestId?: string;
        questionId?: string;
      };
    },
    callbacks: Record<number, any> & {
      200?: (response: {
        _id?: string;
        type?:
          | 'atLeastPosition'
          | 'atLeastStat'
          | 'bestPosition'
          | 'composite'
          | 'eventWinnerWagering'
          | 'exactStat'
          | 'gameScore'
          | 'gameScoreboard'
          | 'gameWinner'
          | 'genericMultipleChoice'
          | 'genericMultipleChoiceWagering'
          | 'leastStat'
          | 'linkedEventPositions'
          | 'margin'
          | 'matchupWagering'
          | 'mostStat'
          | 'mostStatRankedScoring'
          | 'rangeStat'
          | 'timedOccurrence'
          | 'timedStat';
        status?:
          | 'created'
          | 'available'
          | 'suspended'
          | 'locked'
          | 'resolved'
          | 'verified'
          | 'canceled';
        title?: string;
        choiceIds?: Array<string>;
        gameIds?: Array<string>;
        questionData?: any;
        lockBehavior?: {
          type:
            | 'changeIndependently'
            | 'changeAtFutureDate'
            | 'changeRightNow'
            | 'syncWithContest';
          details?: any;
        };
        autoGenerateChoices?: {
          type: 'cloneFromLinkedQuestions' | 'entireField' | 'playerRank';
          details: any;
        };
        choiceSortOrders?: Array<
          'isPlaying' | 'computedOdds' | 'playerRank' | 'lastName'
        >;
        parentQuestionId?: string;
        settings?: {
          autoUpdateChoiceStates?: boolean;
          autoImportGameStats?: boolean;
        };
        extendedFields?: Record<string, unknown>;
        audit?: {
          createdDate?: string;
          updatedDate?: string;
          deletedDate?: string;
          userId?: string;
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
    },
  ) => {
    let finalURL = 'undefined/api/v2/contests/:contestId/questions/:questionId';
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'get');
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
  /**
   * @description Delete a question
   */
  DeleteQuestion: async (
    request: {
      params: {
        contestId?: string;
        questionId?: string;
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
    },
  ) => {
    let finalURL = 'undefined/api/v2/contests/:contestId/questions/:questionId';
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'delete');
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
  /**
   * @description Get a question for a contest and pass
   */
  GetQuestionForPass: async (
    request: {
      params: {
        contestId?: string;
        questionId?: string;
        pass?: string;
      };
    },
    callbacks: Record<number, any> & {
      200?: (response: {
        _id?: string;
        type?:
          | 'atLeastPosition'
          | 'atLeastStat'
          | 'bestPosition'
          | 'composite'
          | 'eventWinnerWagering'
          | 'exactStat'
          | 'gameScore'
          | 'gameScoreboard'
          | 'gameWinner'
          | 'genericMultipleChoice'
          | 'genericMultipleChoiceWagering'
          | 'leastStat'
          | 'linkedEventPositions'
          | 'margin'
          | 'matchupWagering'
          | 'mostStat'
          | 'mostStatRankedScoring'
          | 'rangeStat'
          | 'timedOccurrence'
          | 'timedStat';
        status?:
          | 'created'
          | 'available'
          | 'suspended'
          | 'locked'
          | 'resolved'
          | 'verified'
          | 'canceled';
        title?: string;
        choiceIds?: Array<string>;
        gameIds?: Array<string>;
        questionData?: any;
        lockBehavior?: {
          type:
            | 'changeIndependently'
            | 'changeAtFutureDate'
            | 'changeRightNow'
            | 'syncWithContest';
          details?: any;
        };
        autoGenerateChoices?: {
          type: 'cloneFromLinkedQuestions' | 'entireField' | 'playerRank';
          details: any;
        };
        choiceSortOrders?: Array<
          'isPlaying' | 'computedOdds' | 'playerRank' | 'lastName'
        >;
        parentQuestionId?: string;
        settings?: {
          autoUpdateChoiceStates?: boolean;
          autoImportGameStats?: boolean;
        };
        extendedFields?: Record<string, unknown>;
        audit?: {
          createdDate?: string;
          updatedDate?: string;
          deletedDate?: string;
          userId?: string;
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
    },
  ) => {
    let finalURL =
      'undefined/api/v2/contests/:contestId/questions/:questionId/:pass/p/*question.json';
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'get');
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
  /**
   * @description Update a question for a contest
   */
  PatchQuestionV3: async (
    request: {
      params: {
        contestId?: string;
        questionId?: string;
      };
      body: {
        title?: string;
        hashable?: boolean;
        choiceIds?: Array<string>;
        gameIds?: Array<string>;
        labels?: Array<string>;
        questionData?: Record<string, unknown>;
        lockBehavior?: {
          type:
            | 'changeIndependently'
            | 'changeAtFutureDate'
            | 'changeRightNow'
            | 'syncWithContest';
          details?: any;
        };
        autoGenerateChoices?: Record<string, unknown>;
        choiceSortOrders?: Array<string>;
        settings?: Record<string, unknown>;
        extendedFields?: Record<string, unknown>;
        choiceOverrides?: Record<string, unknown>;
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
    },
  ) => {
    let finalURL = 'undefined/api/v3/contests/:contestId/questions/:questionId';
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'patch', request.body);
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
  /**
   * @description Update a question's status
   */
  UpdateQuestionStatus: async (
    request: {
      params: {
        contestId?: string;
        questionId?: string;
      };
      body: {
        newStatus?: 'available' | 'suspended' | 'locked';
        newTrackingStatus?:
          | 'readyToResolve'
          | 'readyToReResolve'
          | 'readyToUnresolve'
          | 'readyToCancel'
          | 'readyToVerify';
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
    },
  ) => {
    let finalURL =
      'undefined/api/v3/contests/:contestId/questions/:questionId/status';
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'patch', request.body);
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
  /**
   * @description Sort a question's choices if applicable
   */
  SortQuestionChoices: async (
    request: {
      params: {
        contestId?: string;
        questionId?: string;
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
    },
  ) => {
    let finalURL =
      'undefined/api/v3/contests/:contestId/questions/:questionId/sortChoices';
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'patch');
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
  /**
   * @description Update Choice States for a question if applicable
   */
  UpdateChoiceStates: async (
    request: {
      params: {
        contestId?: string;
        questionId?: string;
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
    },
  ) => {
    let finalURL =
      'undefined/api/v3/contests/:contestId/questions/:questionId/choiceStates';
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'patch');
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
  /**
   * @description Create a question for a contest
   */
  CreateQuestionV3: async (
    request: {
      params: {
        contestId?: string;
      };
      body: {
        type:
          | 'atLeastPosition'
          | 'atLeastStat'
          | 'bestPosition'
          | 'composite'
          | 'eventWinnerWagering'
          | 'exactStat'
          | 'gameScore'
          | 'gameScoreboard'
          | 'gameWinner'
          | 'genericMultipleChoice'
          | 'genericMultipleChoiceWagering'
          | 'leastStat'
          | 'linkedEventPositions'
          | 'margin'
          | 'matchupWagering'
          | 'mostStat'
          | 'mostStatRankedScoring'
          | 'rangeStat'
          | 'timedOccurrence'
          | 'timedStat';
        title: string;
        hashable?: boolean;
        choiceIds?: Array<string>;
        gameIds?: Array<string>;
        labels?: Array<string>;
        questionData: any;
        lockBehavior: {
          type:
            | 'changeIndependently'
            | 'changeAtFutureDate'
            | 'changeRightNow'
            | 'syncWithContest';
          details?: any;
        };
        choicesToGenerate?: Array<{
          type:
            | 'gameScore'
            | 'noOccurrence'
            | 'otherOccurrence'
            | 'otherPlayerFromTeam'
            | 'otherPlayerFromTeams'
            | 'player'
            | 'playerExpiring'
            | 'playerOccurrence'
            | 'playerRange'
            | 'playerWagering'
            | 'players'
            | 'team'
            | 'teamOccurrence'
            | 'teamRange'
            | 'teams'
            | 'teamsMargin'
            | 'teamsRange'
            | 'text'
            | 'textRange'
            | 'textWagering';
          title: string;
          choiceData: any;
          extendedFields?: Record<string, unknown>;
        }>;
        autoGenerateChoices?: {
          type: 'cloneFromLinkedQuestions' | 'entireField' | 'playerRank';
          details: any;
        };
        choiceSortOrders?: Array<
          'isPlaying' | 'computedOdds' | 'playerRank' | 'lastName'
        >;
        parentQuestionId?: string;
        settings?: {
          autoUpdateChoiceStates?: boolean;
          autoImportGameStats?: boolean;
        };
        extendedFields?: Record<string, unknown>;
      };
    },
    callbacks: Record<number, any> & {
      200?: (response: {
        _id?: string;
        type?:
          | 'atLeastPosition'
          | 'atLeastStat'
          | 'bestPosition'
          | 'composite'
          | 'eventWinnerWagering'
          | 'exactStat'
          | 'gameScore'
          | 'gameScoreboard'
          | 'gameWinner'
          | 'genericMultipleChoice'
          | 'genericMultipleChoiceWagering'
          | 'leastStat'
          | 'linkedEventPositions'
          | 'margin'
          | 'matchupWagering'
          | 'mostStat'
          | 'mostStatRankedScoring'
          | 'rangeStat'
          | 'timedOccurrence'
          | 'timedStat';
        status?:
          | 'created'
          | 'available'
          | 'suspended'
          | 'locked'
          | 'resolved'
          | 'verified'
          | 'canceled';
        title?: string;
        choiceIds?: Array<string>;
        gameIds?: Array<string>;
        questionData?: any;
        lockBehavior?: {
          type:
            | 'changeIndependently'
            | 'changeAtFutureDate'
            | 'changeRightNow'
            | 'syncWithContest';
          details?: any;
        };
        autoGenerateChoices?: {
          type: 'cloneFromLinkedQuestions' | 'entireField' | 'playerRank';
          details: any;
        };
        choiceSortOrders?: Array<
          'isPlaying' | 'computedOdds' | 'playerRank' | 'lastName'
        >;
        parentQuestionId?: string;
        settings?: {
          autoUpdateChoiceStates?: boolean;
          autoImportGameStats?: boolean;
        };
        extendedFields?: Record<string, unknown>;
        audit?: {
          createdDate?: string;
          updatedDate?: string;
          deletedDate?: string;
          userId?: string;
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
    },
  ) => {
    let finalURL = 'undefined/api/v3/contests/:contestId/questions';
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'post', request.body);
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
  /**
   * @description Admin endpoint to rebuild the question completed times
   */
  RebuildQuestionCompletedTimes: async (
    request: {
      params: {
        contestId?: string;
        pass?: string;
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
    },
  ) => {
    let finalURL =
      'undefined/api/v1/contests/:contestId/passes/:pass/questions/rebuildQuestionCompletedTimes';
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'post');
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
  /**
   * @description Get a choice for a question
   */
  GetChoice: async (
    request: {
      params: {
        contestId?: string;
        questionId?: string;
        choiceId?: string;
      };
    },
    callbacks: Record<number, any> & {
      200?: (response: {
        _id?: string;
        type?:
          | 'gameScore'
          | 'noOccurrence'
          | 'otherOccurrence'
          | 'otherPlayerFromTeam'
          | 'otherPlayerFromTeams'
          | 'player'
          | 'playerExpiring'
          | 'playerOccurrence'
          | 'playerRange'
          | 'playerWagering'
          | 'players'
          | 'team'
          | 'teamOccurrence'
          | 'teamRange'
          | 'teams'
          | 'teamsMargin'
          | 'teamsRange'
          | 'text'
          | 'textRange'
          | 'textWagering';
        title?: string;
        choiceData?: any;
        extendedFields?: Record<string, unknown>;
        audit?: {
          createdDate?: string;
          updatedDate?: string;
          deletedDate?: string;
          userId?: string;
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
    },
  ) => {
    let finalURL =
      'undefined/api/v2/contests/:contestId/questions/:questionId/choices/:choiceId';
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'get');
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
  /**
   * @description Delete a choice for a question
   */
  DeleteChoice: async (
    request: {
      params: {
        contestId?: string;
        questionId?: string;
        choiceId?: string;
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
    },
  ) => {
    let finalURL =
      'undefined/api/v2/contests/:contestId/questions/:questionId/choices/:choiceId';
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'delete');
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
  /**
   * @description Update a choice for a question
   */
  PatchChoice: async (
    request: {
      params: {
        contestId?: string;
        questionId?: string;
        choiceId?: string;
      };
      body: {
        title?: string;
        choiceData?: Record<string, unknown>;
        extendedFields?: Record<string, unknown>;
        state?: 'cut' | 'notAvailable' | 'out' | 'withdrawn';
        sortInfo?: Record<string, unknown>;
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
    },
  ) => {
    let finalURL =
      'undefined/api/v2/contests/:contestId/questions/:questionId/choices/:choiceId';
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'patch', request.body);
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
  /**
   * @description Get all choices for a question
   */
  GetChoicesForQuestion: async (
    request: {
      params: {
        contestId?: string;
        questionId?: string;
      };
    },
    callbacks: Record<number, any> & {
      200?: (response: {
        choices?: Array<{
          _id?: string;
          type?:
            | 'gameScore'
            | 'noOccurrence'
            | 'otherOccurrence'
            | 'otherPlayerFromTeam'
            | 'otherPlayerFromTeams'
            | 'player'
            | 'playerExpiring'
            | 'playerOccurrence'
            | 'playerRange'
            | 'playerWagering'
            | 'players'
            | 'team'
            | 'teamOccurrence'
            | 'teamRange'
            | 'teams'
            | 'teamsMargin'
            | 'teamsRange'
            | 'text'
            | 'textRange'
            | 'textWagering';
          title?: string;
          choiceData?: any;
          extendedFields?: Record<string, unknown>;
          audit?: {
            createdDate?: string;
            updatedDate?: string;
            deletedDate?: string;
            userId?: string;
          };
        }>;
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
    },
  ) => {
    let finalURL =
      'undefined/api/v2/contests/:contestId/questions/:questionId/choices';
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'get');
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
  /**
   * @description Create a choice for a question
   */
  CreateChoice: async (
    request: {
      params: {
        contestId?: string;
        questionId?: string;
      };
      body: {
        type:
          | 'gameScore'
          | 'noOccurrence'
          | 'otherOccurrence'
          | 'otherPlayerFromTeam'
          | 'otherPlayerFromTeams'
          | 'player'
          | 'playerExpiring'
          | 'playerOccurrence'
          | 'playerRange'
          | 'playerWagering'
          | 'players'
          | 'team'
          | 'teamOccurrence'
          | 'teamRange'
          | 'teams'
          | 'teamsMargin'
          | 'teamsRange'
          | 'text'
          | 'textRange'
          | 'textWagering';
        title: string;
        choiceData: any;
        extendedFields?: Record<string, unknown>;
      };
    },
    callbacks: Record<number, any> & {
      200?: (response: {
        _id?: string;
        type?:
          | 'gameScore'
          | 'noOccurrence'
          | 'otherOccurrence'
          | 'otherPlayerFromTeam'
          | 'otherPlayerFromTeams'
          | 'player'
          | 'playerExpiring'
          | 'playerOccurrence'
          | 'playerRange'
          | 'playerWagering'
          | 'players'
          | 'team'
          | 'teamOccurrence'
          | 'teamRange'
          | 'teams'
          | 'teamsMargin'
          | 'teamsRange'
          | 'text'
          | 'textRange'
          | 'textWagering';
        title?: string;
        choiceData?: any;
        extendedFields?: Record<string, unknown>;
        audit?: {
          createdDate?: string;
          updatedDate?: string;
          deletedDate?: string;
          userId?: string;
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
    },
  ) => {
    let finalURL =
      'undefined/api/v2/contests/:contestId/questions/:questionId/choices';
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'post', request.body);
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
  /**
   * @description Get all choices for a contest
   */
  GetChoicesForContest: async (
    request: {
      query: {
        choiceIds?: Array<string>;
        pass?: string;
      };
      params: {
        contestId?: string;
      };
    },
    callbacks: Record<number, any> & {
      200?: (response: {
        choices?: Array<{
          _id?: string;
          type?:
            | 'gameScore'
            | 'noOccurrence'
            | 'otherOccurrence'
            | 'otherPlayerFromTeam'
            | 'otherPlayerFromTeams'
            | 'player'
            | 'playerExpiring'
            | 'playerOccurrence'
            | 'playerRange'
            | 'playerWagering'
            | 'players'
            | 'team'
            | 'teamOccurrence'
            | 'teamRange'
            | 'teams'
            | 'teamsMargin'
            | 'teamsRange'
            | 'text'
            | 'textRange'
            | 'textWagering';
          title?: string;
          choiceData?: any;
          extendedFields?: Record<string, unknown>;
          audit?: {
            createdDate?: string;
            updatedDate?: string;
            deletedDate?: string;
            userId?: string;
          };
        }>;
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
    },
  ) => {
    let finalURL = 'undefined/api/v2/contests/:contestId/choices';
    finalURL += `?${Object.entries(request.query)
      .map(([key, value]) => `${key}=${value}`)
      .join('&')}`;
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'get');
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
  /**
   * @description Get a prize
   */
  GetPrize: async (
    request: {
      params: {
        prizeId?: string;
      };
    },
    callbacks: Record<number, any> & {
      200?: (response: {
        _id?: string;
        type?:
          | 'evergreen'
          | 'tournament'
          | 'jackpot'
          | 'tournamentGiveaway'
          | 'giveaway';
        options?: any;
        description: string;
        audit?: {
          createdDate?: string;
          updatedDate?: string;
          deletedDate?: string;
          userId?: string;
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
    },
  ) => {
    let finalURL = 'undefined/api/v1/prizes/:prizeId';
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'get');
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
  /**
   * @description Delete a prize
   */
  DeletePrize: async (
    request: {
      params: {
        prizeId?: string;
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
    },
  ) => {
    let finalURL = 'undefined/api/v1/prizes/:prizeId';
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'delete');
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
  /**
   * @description Update a prize
   */
  UpdatePrize: async (
    request: {
      params: {
        prizeId?: string;
      };
      body: {
        description?: string;
        options?: any;
        extendedFields?: Record<string, unknown>;
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
    },
  ) => {
    let finalURL = 'undefined/api/v1/prizes/:prizeId';
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'patch', request.body);
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
  /**
   * @description Get a list of prizes given a list of prizeIds
   */
  Getallprizes: async (
    request: {
      query: {
        prizeIds?: Array<string>;
      };
    },
    callbacks: Record<number, any> & {
      200?: (response: {
        prizes?: Array<{
          _id?: string;
          type?:
            | 'evergreen'
            | 'tournament'
            | 'jackpot'
            | 'tournamentGiveaway'
            | 'giveaway';
          options?: any;
          description: string;
          audit?: {
            createdDate?: string;
            updatedDate?: string;
            deletedDate?: string;
            userId?: string;
          };
        }>;
      }) => void;
      500?: (response: {
        code?: string;
        id?: string;
        message?: string;
        details?: string;
      }) => void;
      fallback?: (response?: unknown) => void;
    },
  ) => {
    let finalURL = 'undefined/api/v1/prizes';
    finalURL += `?${Object.entries(request.query)
      .map(([key, value]) => `${key}=${value}`)
      .join('&')}`;
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'get');
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
  /**
   * @description Create a prize
   */
  CreatePrize: async (
    request: {
      body: {
        type:
          | 'evergreen'
          | 'tournament'
          | 'jackpot'
          | 'tournamentGiveaway'
          | 'giveaway';
        description: string;
        options: any;
        extendedFields?: Record<string, unknown>;
      };
    },
    callbacks: Record<number, any> & {
      200?: (response: {
        _id?: string;
        type?:
          | 'evergreen'
          | 'tournament'
          | 'jackpot'
          | 'tournamentGiveaway'
          | 'giveaway';
        options?: any;
        description: string;
        audit?: {
          createdDate?: string;
          updatedDate?: string;
          deletedDate?: string;
          userId?: string;
        };
      }) => void;
      500?: (response: {
        code?: string;
        id?: string;
        message?: string;
        details?: string;
      }) => void;
      fallback?: (response?: unknown) => void;
    },
  ) => {
    const finalURL = 'undefined/api/v1/prizes';
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'post', request.body);
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
  /**
   * @description Get a scoreboard for a game
   */
  GetScoreboard: async (
    request: {
      query: {
        pass?: string;
      };
      params: {
        gameId?: string;
      };
    },
    callbacks: Record<number, any> & {
      200?: (response: {
        nascar?: {
          _id?: string;
          gameId?: string;
          lastCompletedPass?: string;
          scoreboard?: Record<string, unknown>;
        };
        xfl?: {
          _id?: string;
          gameId?: string;
          lastCompletedPass?: string;
          scoreboard?: Record<string, unknown>;
        };
        finance?: {
          _id?: string;
          gameId?: string;
          lastCompletedPass?: string;
          scoreboard?: Record<string, unknown>;
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
    },
  ) => {
    let finalURL = 'undefined/api/v1/games/:gameId/scoreboard';
    finalURL += `?${Object.entries(request.query)
      .map(([key, value]) => `${key}=${value}`)
      .join('&')}`;
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'get');
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
  /**
   * @description Get a scoreboard for a game
   */
  GetScoreboardforGame: async (
    request: {
      params: {
        contestId?: string;
        pass?: string;
        gameId?: string;
      };
    },
    callbacks: Record<number, any> & {
      200?: (response: {
        _id?: string;
        gameId?: string;
        lastCompletedPass?: string;
        scoreboard?: Record<string, unknown>;
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
    },
  ) => {
    let finalURL =
      'undefined/api/v1/contests/:contestId/passes/:pass/games/:gameId/scoreboard.json';
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'get');
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
  /**
   * @description Get all scoreboards for a contest
   */
  GetScoreboardsForContest: async (
    request: {
      query: {
        gameIds?: Array<string>;
      };
      params: {
        contestId?: string;
        pass?: string;
      };
    },
    callbacks: Record<number, any> & {
      200?: (response: {
        scoreboards?: Array<{
          _id?: string;
          gameId?: string;
          lastCompletedPass?: string;
          scoreboard?: Record<string, unknown>;
        }>;
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
    },
  ) => {
    let finalURL =
      'undefined/api/v1/contests/:contestId/passes/:pass/scoreboards.json';
    finalURL += `?${Object.entries(request.query)
      .map(([key, value]) => `${key}=${value}`)
      .join('&')}`;
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'get');
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
  /**
   * @description Get all Wagers specified
   */
  GetanoptionallypaginatedlistofwagersspecifiedbyID: async (
    request: {
      body: { wagerIds: Array<string> };
    },
    callbacks: Record<number, any> & {
      200?: (
        response: Array<{
          _id?: string;
          contestId?: string;
          entryId?: string;
          questionId?: string;
          choiceId?: string;
          groupIds?: Array<string>;
          userId?: string;
          amountRisked?: number;
          odds?: { num?: number; denom?: number };
          submittedAt?: '2022-11-03T16:40:16.450Z';
          audit?: {
            createdDate?: string;
            updatedDate?: string;
            deletedDate?: string;
            userId?: string;
          };
        }>,
      ) => void;
      500?: (response: {
        code?: string;
        id?: string;
        message?: string;
        details?: string;
      }) => void;
      fallback?: (response?: unknown) => void;
    },
  ) => {
    const finalURL = 'undefined/api/v1/wagers/bulk_search';
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'post', request.body);
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
  /**
   * @description Get all Wagers filtered by params
   */
  GetpaginatedlistofwagersforentryId: async (
    request: {
      params: {
        contestId?: string;
        entryId?: string;
      };
    },
    callbacks: Record<number, any> & {
      200?: (
        response: Array<{
          _id?: string;
          contestId?: string;
          entryId?: string;
          questionId?: string;
          choiceId?: string;
          groupIds?: Array<string>;
          userId?: string;
          amountRisked?: number;
          odds?: { num?: number; denom?: number };
          submittedAt?: '2022-11-03T16:40:16.450Z';
          audit?: {
            createdDate?: string;
            updatedDate?: string;
            deletedDate?: string;
            userId?: string;
          };
        }>,
      ) => void;
      500?: (response: {
        code?: string;
        id?: string;
        message?: string;
        details?: string;
      }) => void;
      fallback?: (response?: unknown) => void;
    },
  ) => {
    let finalURL =
      'undefined/api/v1/wagers/contests/:contestId/entries/:entryId/p/*';
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'get');
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
  /**
   * @description Get paginated list of wagers grouped by question
   */
  Getpaginatedlistofwagersgroupedbyquestion: async (
    request: {
      params: {
        contestId?: string;
        groupId?: string;
        pass?: string;
      };
    },
    callbacks: Record<number, any> & {
      200?: (
        response: Array<{
          _id?: string;
          contestId?: string;
          entryId?: string;
          questionId?: string;
          choiceId?: string;
          groupIds?: Array<string>;
          userId?: string;
          amountRisked?: number;
          odds?: { num?: number; denom?: number };
          submittedAt?: '2022-11-03T16:40:16.450Z';
          audit?: {
            createdDate?: string;
            updatedDate?: string;
            deletedDate?: string;
            userId?: string;
          };
        }>,
      ) => void;
      500?: (response: {
        code?: string;
        id?: string;
        message?: string;
        details?: string;
      }) => void;
      fallback?: (response?: unknown) => void;
    },
  ) => {
    let finalURL =
      'undefined/api/v1/wagers/contests/:contestId/groups/:groupId/passes/:pass/p/*groupings.json';
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'get');
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
  /**
   * @description Get pending wagers for user
   */
  Getpendingwagersforthisuser: async (
    request: {
      params: {
        contestId?: string;
        groupId?: string;
        userId?: string;
      };
    },
    callbacks: Record<number, any> & {
      200?: (
        response: Array<{
          _id?: string;
          contestId?: string;
          entryId?: string;
          questionId?: string;
          choiceId?: string;
          groupIds?: Array<string>;
          userId?: string;
          amountRisked?: number;
          odds?: { num?: number; denom?: number };
          submittedAt?: '2022-11-03T16:40:16.450Z';
          audit?: {
            createdDate?: string;
            updatedDate?: string;
            deletedDate?: string;
            userId?: string;
          };
        }>,
      ) => void;
      500?: (response: {
        code?: string;
        id?: string;
        message?: string;
        details?: string;
      }) => void;
      fallback?: (response?: unknown) => void;
    },
  ) => {
    let finalURL =
      'undefined/api/v1/wagers/contests/:contestId/groups/:groupId/users/:userId/pending';
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'get');
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
  /**
   * @description Get completed wagers for user
   */
  Getcompletedwagersforthisuser: async (
    request: {
      params: {
        contestId?: string;
        groupId?: string;
        userId?: string;
        pass?: string;
      };
    },
    callbacks: Record<number, any> & {
      200?: (
        response: Array<{
          _id?: string;
          contestId?: string;
          entryId?: string;
          questionId?: string;
          choiceId?: string;
          groupIds?: Array<string>;
          userId?: string;
          amountRisked?: number;
          odds?: { num?: number; denom?: number };
          submittedAt?: '2022-11-03T16:40:16.450Z';
          audit?: {
            createdDate?: string;
            updatedDate?: string;
            deletedDate?: string;
            userId?: string;
          };
        }>,
      ) => void;
      500?: (response: {
        code?: string;
        id?: string;
        message?: string;
        details?: string;
      }) => void;
      fallback?: (response?: unknown) => void;
    },
  ) => {
    let finalURL =
      'undefined/api/v1/wagers/contests/:contestId/groups/:groupId/users/:userId/passes/:pass/p/*completed.json';
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'get');
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
  /**
   * @description Get wagers for this question created before the requested pass filtered by params
   */
  Getwagersforthisquestionfilteredbyparams: async (
    request: {
      params: {
        contestId?: string;
        groupId?: string;
        questionId?: string;
        pass?: string;
      };
    },
    callbacks: Record<number, any> & {
      200?: (
        response: Array<{
          _id?: string;
          contestId?: string;
          entryId?: string;
          questionId?: string;
          choiceId?: string;
          groupIds?: Array<string>;
          userId?: string;
          amountRisked?: number;
          odds?: { num?: number; denom?: number };
          submittedAt?: '2022-11-03T16:40:16.450Z';
          audit?: {
            createdDate?: string;
            updatedDate?: string;
            deletedDate?: string;
            userId?: string;
          };
        }>,
      ) => void;
      500?: (response: {
        code?: string;
        id?: string;
        message?: string;
        details?: string;
      }) => void;
      fallback?: (response?: unknown) => void;
    },
  ) => {
    let finalURL =
      'undefined/api/v1/wagers/contests/:contestId/groups/:groupId/questions/:questionId/passes/:pass/p/*wagers.json';
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'get');
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
  /**
   * @description Get wagers for this user created since the pass
   */
  Getwagersforthisusercreatedsincethepass: async (
    request: {
      params: {
        contestId?: string;
        groupId?: string;
        userId?: string;
        pass?: 'none';
      };
    },
    callbacks: Record<number, any> & {
      200?: (
        response: Array<{
          _id?: string;
          contestId?: string;
          entryId?: string;
          questionId?: string;
          choiceId?: string;
          groupIds?: Array<string>;
          userId?: string;
          amountRisked?: number;
          odds?: { num?: number; denom?: number };
          submittedAt?: '2022-11-03T16:40:16.450Z';
          audit?: {
            createdDate?: string;
            updatedDate?: string;
            deletedDate?: string;
            userId?: string;
          };
        }>,
      ) => void;
      500?: (response: {
        code?: string;
        id?: string;
        message?: string;
        details?: string;
      }) => void;
      fallback?: (response?: unknown) => void;
    },
  ) => {
    let finalURL =
      'undefined/api/v1/wagers/contests/:contestId/groups/:groupId/users/:userId/createdSincePass/:pass';
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'get');
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
  /**
   * @description Admin endpoint to rebuild the wagers per question lists
   */
  RebuildWagersPerQuestionLists: async (
    request: {
      query: {
        entryId?: string;
        questionIds?: Array<string>;
      };
      params: {
        contestId?: string;
        groupId?: string;
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
    },
  ) => {
    let finalURL =
      'undefined/api/v1/wagers/contests/:contestId/groups/:groupId/rebuildWagersPerQuestionLists';
    finalURL += `?${Object.entries(request.query)
      .map(([key, value]) => `${key}=${value}`)
      .join('&')}`;
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'post');
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
  /**
   * @description Admin endpoint to rebuild the wagered questionIds
   */
  RebuildWageredQuestionIds: async (
    request: {
      query: {
        entryId?: string;
      };
      params: {
        contestId?: string;
        groupId?: string;
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
    },
  ) => {
    let finalURL =
      'undefined/api/v1/wagers/contests/:contestId/groups/:groupId/rebuildWageredQuestionIds';
    finalURL += `?${Object.entries(request.query)
      .map(([key, value]) => `${key}=${value}`)
      .join('&')}`;
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'post');
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
  /**
   * @description Get a list of players and teams for any contest with this game
   */
  GetGameParticipants: async (
    request: {
      params: {
        gameId?: string;
      };
    },
    callbacks: Record<number, any> & {
      200?: (response: {
        participants?: { playerIds?: Array<string>; teamIds?: Array<string> };
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
    },
  ) => {
    let finalURL = 'undefined/api/v1/games/:gameId/participants';
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'get');
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
  /**
   * @description Bulk update best scores for users in this contest
   */
  BulkUpdateBestScores: async (
    request: {
      params: {
        contestId?: string;
      };
    },
    callbacks: Record<number, any> & {
      200?: (response: {
        totals?: {
          usersInContest?: number;
          improvedUsers?: number;
          recordsReceived?: number;
          recordsModified?: number;
        };
        bestScoreUpdateResponses?: Array<{
          recordsReceived?: number;
          recordsModified?: number;
        }>;
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
    },
  ) => {
    let finalURL =
      'undefined/api/v1/contests/:contestId/bulk_update/bestScores';
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'post');
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
  /**
   * @description Process updates corresponding to this group status update
   */
  ProcessGroupStatusUpdated: async (
    request: {
      params: {
        groupId?: string;
      };
      body: { groupType?: 'subContest'; newStatus?: 'closed'; details?: any };
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
    },
  ) => {
    let finalURL = 'undefined/api/v1/contests/groups/:groupId/status';
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'patch', request.body);
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
  /**
   * @description Get a list of games to process from the given criteria
   */
  GetGamesToProcess: async (
    request: {
      query: {
        league?:
          | 'custom'
          | 'epl'
          | 'finance'
          | 'mlb'
          | 'mls'
          | 'nascar'
          | 'nba'
          | 'ncaafb'
          | 'nfl'
          | 'nhl'
          | 'pga'
          | 'roughNRowdy'
          | 'stoolStreams'
          | 'xfl';
        dataFlow?: 'import' | 'importGameStats' | 'preliminary' | 'tracking';
      };
    },
    callbacks: Record<number, any> & {
      200?: (response: { gameIds?: Array<string> }) => void;
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
    },
  ) => {
    let finalURL = 'undefined/api/v1/contests/games/gamesToProcess';
    finalURL += `?${Object.entries(request.query)
      .map(([key, value]) => `${key}=${value}`)
      .join('&')}`;
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'get');
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
  /**
   * @description Get a list of question Ids grouped by contestId from the given criteria
   */
  GetQuestionsInScope: async (
    request: {
      query: {
        dataFlow?: 'import' | 'importGameStats' | 'preliminary' | 'tracking';
        gameIds?: Array<string>;
        league?:
          | 'custom'
          | 'epl'
          | 'finance'
          | 'mlb'
          | 'mls'
          | 'nascar'
          | 'nba'
          | 'ncaafb'
          | 'nfl'
          | 'nhl'
          | 'pga'
          | 'roughNRowdy'
          | 'stoolStreams'
          | 'xfl';
      };
    },
    callbacks: Record<number, any> & {
      200?: (response: { questionsMap?: Record<string, unknown> }) => void;
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
    },
  ) => {
    let finalURL = 'undefined/api/v1/contests/questions/questionsInScope';
    finalURL += `?${Object.entries(request.query)
      .map(([key, value]) => `${key}=${value}`)
      .join('&')}`;
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'get');
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
  /**
   * @description Process leaderboard computations for a group
   */
  Processleaderboardsforagroup: async (
    request: {
      params: {
        contestId?: string;
        groupId?: string;
        pass?: string;
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
    },
  ) => {
    let finalURL =
      'undefined/api/v1/contests/:contestId/:groupId/:pass/processGroup';
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'patch');
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
  /**
   * @description Process Winnings and Leaderboards for all groups
   */
  ProcessWinningsandLeaderboardsforallgroups: async (
    request: {
      params: {
        contestId?: string;
        pass?: string;
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
    },
  ) => {
    let finalURL =
      'undefined/api/v1/contests/:contestId/:pass/processAllGroups';
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'patch');
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
  /**
   * @description Score all entries in a batch
   */
  ScoreEntriesInBatch: async (
    request: {
      params: {
        contestId?: string;
        pass?: string;
        batchNumber?: number;
      };
    },
    callbacks: Record<number, any> & {
      200?: (response: {
        totalScoredEntries?: number;
        totalScoringLogicTime?: number;
        totalRedisReadTime?: number;
        totalRedisWriteTime?: number;
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
    },
  ) => {
    let finalURL =
      'undefined/api/v1/contests/:contestId/:pass/entries/batches/:batchNumber/score';
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value.toString());
      finalURL = finalURL.replaceAll(`{${key}}`, value.toString());
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'patch');
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
  /**
   * @description Persist Standard Overlaid Entries Into Mongo
   */
  PersistStandardOverlaidEntriesIntoMongo: async (
    request: {
      params: {
        contestId?: string;
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
    },
  ) => {
    let finalURL =
      'undefined/api/v1/contests/:contestId/entries/persistOverlaidEntries';
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'post');
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
  /**
   * @description Manually run a contest pass
   */
  ManuallyTrackContestV2: async (
    request: {
      query: {
        forceRecompute?: boolean;
      };
      params: {
        contestId?: string;
        gameId?: string;
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
    },
  ) => {
    let finalURL =
      'undefined/api/v2/contests/:contestId/games/:gameId/manuallyTrackContest';
    finalURL += `?${Object.entries(request.query)
      .map(([key, value]) => `${key}=${value}`)
      .join('&')}`;
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'patch');
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
  /**
   * @description Manually run a child contest rollup pass.
   */
  ManuallyRollupChildContest: async (
    request: {
      params: {
        contestId?: string;
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
    },
  ) => {
    let finalURL =
      'undefined/api/v1/contests/:contestId/manuallyRollupChildContest';
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'patch');
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
  /**
   * @description Redo all child contest roll-up passes for parent contest.
   */
  RedoChildContestRollups: async (
    request: {
      params: {
        contestId?: string;
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
    },
  ) => {
    let finalURL = 'undefined/api/v1/contests/composite/:contestId/redoRollups';
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'patch');
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
  /**
   * @description Sportdata for the game has updated
   */
  SportdataforGameUpdated: async (
    request: {
      params: {
        gameId?: string;
        pass?: string;
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
    },
  ) => {
    let finalURL = 'undefined/api/v1/games/:gameId/passes/:pass';
    Object.entries(request.params).forEach(([key, value]) => {
      finalURL = finalURL.replaceAll(`:${key}`, value);
      finalURL = finalURL.replaceAll(`{${key}}`, value);
    });
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'patch');
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
  /**
   * @description Processing a list of games for the stats that have updated
   */
  ProcessGameStatsUpdated: async (
    request: {
      body: { gameIds?: Array<string> };
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
    },
  ) => {
    const finalURL = 'undefined/api/v1/contests/games/gameStatsUpdated';
    if (!adapter) {
      throw new Error(initializeFetcherWarning);
    }
    let response;
    try {
      response = await adapter(finalURL, 'patch', request.body);
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
  return BoomSportsContestService;
};

export default initializeLib;
