/// <reference types="node" />
import http from 'http';
import { Deduction } from '../model/deduction';
import { DeductionRequest } from '../model/deductionRequest';
import { PaginatedDeductionList } from '../model/paginatedDeductionList';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum DeductionsApiApiKeys {
    tokenAuth = 0
}
export declare class DeductionsApi {
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
    setApiKey(key: DeductionsApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    deductionsCreate(xAccountToken: string, runAsync?: boolean, deductionRequest?: DeductionRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Deduction;
    }>;
    deductionsList(xAccountToken: string, createdAfter?: Date, createdBefore?: Date, cursor?: string, employeePayrollRunId?: string, includeRemoteData?: boolean, modifiedAfter?: Date, modifiedBefore?: Date, pageSize?: number, remoteId?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PaginatedDeductionList;
    }>;
    deductionsRetrieve(xAccountToken: string, id: string, includeRemoteData?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Deduction;
    }>;
}
