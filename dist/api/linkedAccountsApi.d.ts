/// <reference types="node" />
import http from 'http';
import { PaginatedAccountDetailsAndActionsList } from '../model/paginatedAccountDetailsAndActionsList';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum LinkedAccountsApiApiKeys {
    tokenAuth = 0
}
export declare class LinkedAccountsApi {
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
    setApiKey(key: LinkedAccountsApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    linkedAccountsList(category?: 'accounting' | 'ats' | 'hris', cursor?: string, endUserEmailAddress?: string, endUserOrganizationName?: string, endUserOriginId?: string, endUserOriginIds?: string, id?: string, ids?: string, integrationName?: string, isTestAccount?: string, pageSize?: number, status?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PaginatedAccountDetailsAndActionsList;
    }>;
}
