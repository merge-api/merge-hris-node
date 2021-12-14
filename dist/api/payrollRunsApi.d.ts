/// <reference types="node" />
import http from 'http';
import { PaginatedPayrollRunList } from '../model/paginatedPayrollRunList';
import { PayrollRun } from '../model/payrollRun';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum PayrollRunsApiApiKeys {
    tokenAuth = 0
}
export declare class PayrollRunsApi {
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
    setApiKey(key: PayrollRunsApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    payrollRunsList(xAccountToken: string, createdAfter?: Date, createdBefore?: Date, cursor?: string, endedAfter?: Date, endedBefore?: Date, includeRemoteData?: boolean, modifiedAfter?: Date, modifiedBefore?: Date, pageSize?: number, remoteId?: string, runType?: 'CORRECTION' | 'OFF_CYCLE' | 'REGULAR' | 'SIGN_ON_BONUS' | 'TERMINATION', startedAfter?: Date, startedBefore?: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PaginatedPayrollRunList;
    }>;
    payrollRunsRetrieve(xAccountToken: string, id: string, includeRemoteData?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PayrollRun;
    }>;
}
