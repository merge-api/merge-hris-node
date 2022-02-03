/// <reference types="node" />
import http from 'http';
import { BankInfo } from '../model/bankInfo';
import { PaginatedBankInfoList } from '../model/paginatedBankInfoList';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum BankInfoApiApiKeys {
    tokenAuth = 0
}
export declare class BankInfoApi {
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
    setApiKey(key: BankInfoApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    bankInfoList(xAccountToken: string, accountType?: 'CHECKING' | 'SAVINGS', bankName?: string, createdAfter?: Date, createdBefore?: Date, cursor?: string, employee?: string, employeeId?: string, expand?: 'employee', includeDeletedData?: boolean, includeRemoteData?: boolean, modifiedAfter?: Date, modifiedBefore?: Date, orderBy?: '-remote_created_at' | 'remote_created_at', pageSize?: number, remoteId?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PaginatedBankInfoList;
    }>;
    bankInfoRetrieve(xAccountToken: string, id: string, expand?: 'employee', includeRemoteData?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: BankInfo;
    }>;
}
