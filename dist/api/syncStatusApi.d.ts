/// <reference types="node" />
import http from 'http';
import { PaginatedSyncStatusList } from '../model/paginatedSyncStatusList';
import { SyncStatus } from '../model/syncStatus';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum SyncStatusApiApiKeys {
    tokenAuth = 0
}
export declare class SyncStatusApi {
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
    setApiKey(key: SyncStatusApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    syncStatusList(xAccountToken: string, cursor?: number, pageSize?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PaginatedSyncStatusList;
    }>;
    syncStatusResyncCreate(xAccountToken: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: SyncStatus;
    }>;
}
