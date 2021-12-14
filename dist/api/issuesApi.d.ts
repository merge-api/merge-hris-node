/// <reference types="node" />
import http from 'http';
import { Issue } from '../model/issue';
import { PaginatedIssueList } from '../model/paginatedIssueList';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum IssuesApiApiKeys {
    tokenAuth = 0
}
export declare class IssuesApi {
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
    setApiKey(key: IssuesApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    issuesList(account_token?: string, cursor?: string, end_date?: string, end_user_organization_name?: string, include_muted?: string, integration_name?: string, page_size?: number, start_date?: string, status?: 'ONGOING' | 'RESOLVED', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PaginatedIssueList;
    }>;
    issuesRetrieve(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Issue;
    }>;
}
