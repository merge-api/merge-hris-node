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
        'default': Authentication;
        'tokenAuth': ApiKeyAuth;
    };
    protected interceptors: Interceptor[];
    constructor(basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    defaultHeaders: any;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: TeamsApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    teamsList(x_account_token: string, created_after?: Date, created_before?: Date, cursor?: string, expand?: 'parent_team', include_remote_data?: boolean, modified_after?: Date, modified_before?: Date, page_size?: number, parent_team_id?: string, remote_id?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PaginatedTeamList;
    }>;
    teamsRetrieve(x_account_token: string, id: string, expand?: 'parent_team', include_remote_data?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Team;
    }>;
}
