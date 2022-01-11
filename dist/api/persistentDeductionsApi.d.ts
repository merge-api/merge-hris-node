/// <reference types="node" />
import http from 'http';
import { PaginatedPersistentDeductionList } from '../model/paginatedPersistentDeductionList';
import { PersistentDeduction } from '../model/persistentDeduction';
import { PersistentDeductionRequest } from '../model/persistentDeductionRequest';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum PersistentDeductionsApiApiKeys {
    tokenAuth = 0
}
export declare class PersistentDeductionsApi {
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
    setApiKey(key: PersistentDeductionsApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    persistentDeductionsCreate(xAccountToken: string, runAsync?: boolean, persistentDeductionRequest?: PersistentDeductionRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PersistentDeduction;
    }>;
    persistentDeductionsList(xAccountToken: string, createdAfter?: Date, createdBefore?: Date, cursor?: string, employeeId?: string, includeRemoteData?: boolean, modifiedAfter?: Date, modifiedBefore?: Date, pageSize?: number, remoteId?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PaginatedPersistentDeductionList;
    }>;
    persistentDeductionsRetrieve(xAccountToken: string, id: string, includeRemoteData?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PersistentDeduction;
    }>;
}
