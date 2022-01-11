/// <reference types="node" />
import http from 'http';
import { PaginatedPayGroupList } from '../model/paginatedPayGroupList';
import { PayGroup } from '../model/payGroup';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum PayGroupsApiApiKeys {
    tokenAuth = 0
}
export declare class PayGroupsApi {
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
    setApiKey(key: PayGroupsApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    payGroupsList(xAccountToken: string, createdAfter?: Date, createdBefore?: Date, cursor?: string, includeDeletedData?: boolean, includeRemoteData?: boolean, modifiedAfter?: Date, modifiedBefore?: Date, pageSize?: number, remoteId?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PaginatedPayGroupList;
    }>;
    payGroupsRetrieve(xAccountToken: string, id: string, includeRemoteData?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PayGroup;
    }>;
}
