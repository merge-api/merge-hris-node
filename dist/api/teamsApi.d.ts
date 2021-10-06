/// <reference types="node" />
import http from 'http';
import { PaginatedTeamList } from '../model/paginatedTeamList';
import { Team } from '../model/team';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum TeamsApiApiKeys {
    tokenAuth = 0
}
export declare class TeamsApi {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
        tokenAuth: ApiKeyAuth;
    };
    protected interceptors: Interceptor[];
    constructor(basePath?: string);
    set useQuerystring(value: boolean);
    set basePath(basePath: string);
    set defaultHeaders(defaultHeaders: any);
    get defaultHeaders(): any;
    get basePath(): string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: TeamsApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    teamsList(xAccountToken: string, createdAfter?: Date, createdBefore?: Date, cursor?: string, includeRemoteData?: boolean, modifiedAfter?: Date, modifiedBefore?: Date, pageSize?: number, parentTeamId?: string, remoteId?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PaginatedTeamList;
    }>;
    teamsRetrieve(xAccountToken: string, id: string, includeRemoteData?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Team;
    }>;
}
