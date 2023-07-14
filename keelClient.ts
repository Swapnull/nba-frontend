// GENERATED DO NOT EDIT

type RequestHeaders = Record<string, string>;

export type RequestConfig = {
  endpoint: string;
  headers?: RequestHeaders;
};

export class CoreClient {
  private token = "";
  constructor(private config: RequestConfig) {}

  _setHeaders(headers: RequestHeaders): CoreClient {
    this.config.headers = headers;
    return this;
  }

  _setHeader(key: string, value: string): CoreClient {
    const { headers } = this.config;
    if (headers) {
      headers[key] = value;
    } else {
      this.config.headers = { [key]: value };
    }
    return this;
  }

  _setEndpoint(value: string): CoreClient {
    this.config.endpoint = value;
    return this;
  }

  _setToken(value: string): CoreClient {
    this.token = value;
    return this;
  }

  _clearToken(): CoreClient {
    this.token = "";
    return this;
  }

  async request<T>(action: string, body: any): Promise<APIResult<T>> {
    const res = fetch(
      stripTrailingSlash(this.config.endpoint) + "/json/" + action,
      {
        method: "POST",
        cache: "no-cache",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          ...this.config.headers,
          ...(this.token
            ? {
                Authorization: "Bearer " + this.token,
              }
            : {}),
        },
        body: JSON.stringify(body),
      }
    );

    res.catch((err) => {
      return {
        error: {
          type: "unknown",
          message: "unknown error",
          err,
        },
      };
    });

    const result = await res;

    if (result.status >= 200 && result.status < 299) {
      return {
        data: await result.json(),
      };
    }

    let errorMessage = "unknown error";

    try {
      const errorData: {
        message: string;
      } = await result.json();
      errorMessage = errorData.message;
    } catch (error) {}

    const requestId = result.headers.get("X-Amzn-Requestid") || undefined;

    const errorCommon = {
      message: errorMessage,
      requestId,
    };

    switch (result.status) {
      case 400:
        return {
          error: {
            ...errorCommon,
            type: "bad_request",
          },
        };
      case 401:
        return {
          error: {
            ...errorCommon,
            type: "unauthorized",
          },
        };
      case 403:
        return {
          error: {
            ...errorCommon,
            type: "forbidden",
          },
        };
      case 404:
        return {
          error: {
            ...errorCommon,
            type: "not_found",
          },
        };
      case 500:
        return {
          error: {
            ...errorCommon,
            type: "internal_server_error",
          },
        };

      default:
        return {
          error: {
            ...errorCommon,
            type: "unknown",
          },
        };
    }
  }
}

// Utils

const stripTrailingSlash = (str: string) => {
  return str.endsWith("/") ? str.slice(0, -1) : str;
};

// Result type

export type APIResult<T> = Promise<Result<T, APIError>>;

type Data<T> = {
  data: T;
  error?: never;
};

type Err<U> = {
  data?: never;
  error: U;
};

type Result<T, U> = NonNullable<Data<T> | Err<U>>;

// Error types

/* 400 */
type BadRequestError = {
  type: "bad_request";
  message: string;
  requestId?: string;
};

/* 401 */
type UnauthorizedError = {
  type: "unauthorized";
  message: string;
  requestId?: string;
};

/* 403 */
type ForbiddenError = {
  type: "forbidden";
  message: string;
  requestId?: string;
};

/* 404 */
type NotFoundError = {
  type: "not_found";
  message: string;
  requestId?: string;
};

/* 500 */
type InternalServerError = {
  type: "internal_server_error";
  message: string;
  requestId?: string;
};

/* Unhandled/unexpected errors */
type UnknownError = {
  type: "unknown";
  message: string;
  err?: unknown;
  requestId?: string;
};

export type APIError =
  | UnauthorizedError
  | ForbiddenError
  | NotFoundError
  | BadRequestError
  | InternalServerError
  | UnknownError;


// API

export class APIClient extends CoreClient {
    constructor(config: RequestConfig) {
		super(config);
	}
    updatePlayersOnTeam(i: UpdatePlayerTeamsProps) {
        return this.request<Any>("updatePlayersOnTeam", i);
    }
    getTeams(i?: GetTeamsInput) {
        return this.request<{results: Team[], pageInfo: any}>("getTeams", i);
    }
    updateTeams(i?: UpdateTeamProps) {
        return this.request<Any>("updateTeams", i);
    }
    setLastUpdate(i: SetLastUpdateInput) {
        return this.request<LastUpdate>("setLastUpdate", i);
    }
    authenticate(i: AuthenticateInput) {
        return this.request<AuthenticateResponse>("authenticate", i);
    }
    requestPasswordReset(i: RequestPasswordResetInput) {
        return this.request<RequestPasswordResetResponse>("requestPasswordReset", i);
    }
    resetPassword(i: ResetPasswordInput) {
        return this.request<ResetPasswordResponse>("resetPassword", i);
    }
}

// API Types

export interface UpdateTeamProps {
    overrideDateProtection?: boolean | null;
}
export interface UpdatePlayerTeamsProps {
    overrideDateProtection?: boolean | null;
    teamId: string;
}
export interface GetTeamsWhere {
}
export interface GetTeamsInput {
    where?: GetTeamsWhere;
    first?: number;
    after?: string;
    last?: number;
    before?: string;
}
export interface SetLastUpdateWhere {
    id: string;
}
export interface SetLastUpdateValues {
    lastUpdate: Date;
    model: string;
    info: string;
}
export interface SetLastUpdateInput {
    where: SetLastUpdateWhere;
    values: SetLastUpdateValues;
}
export interface EmailPasswordInput {
    email: string;
    password: string;
}
export interface AuthenticateInput {
    createIfNotExists?: boolean;
    emailPassword: EmailPasswordInput;
}
export interface AuthenticateResponse {
    identityCreated: boolean;
    token: string;
}
export interface RequestPasswordResetInput {
    email: string;
    redirectUrl: string;
}
export interface RequestPasswordResetResponse {
}
export interface ResetPasswordInput {
    token: string;
    password: string;
}
export interface ResetPasswordResponse {
}
export interface Player {
    externalId: string
    firstName: string
    lastName: string
    position: string
    height: number
    weight: number
    jersey: string | null
    birthDate: Date
    highSchool: string | null
    college: string | null
    status: string
    id: string
    createdAt: Date
    updatedAt: Date
}
export interface PlayerTeam {
    joined: Date
    left: Date | null
    id: string
    createdAt: Date
    updatedAt: Date
    playerId: string
    teamId: string
}
export interface PlayerDraft {
    year: number | null
    round: number | null
    pick: number | null
    id: string
    createdAt: Date
    updatedAt: Date
    playerId: string
    teamId: string
}
export interface Team {
    externalId: string
    name: string
    conference: string
    division: string
    id: string
    createdAt: Date
    updatedAt: Date
}
export interface LastUpdate {
    model: string
    info: string
    lastUpdate: Date
    id: string
    createdAt: Date
    updatedAt: Date
}
export interface Identity {
    email: string | null
    password: any | null
    externalId: string | null
    createdBy: string | null
    id: string
    createdAt: Date
    updatedAt: Date
}
