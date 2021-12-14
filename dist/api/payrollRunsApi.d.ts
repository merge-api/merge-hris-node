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
    payrollRunsList(x_account_token: string, created_after?: Date, created_before?: Date, cursor?: string, ended_after?: Date, ended_before?: Date, include_remote_data?: boolean, modified_after?: Date, modified_before?: Date, page_size?: number, remote_id?: string, run_type?: 'CORRECTION' | 'OFF_CYCLE' | 'REGULAR' | 'SIGN_ON_BONUS' | 'TERMINATION', started_after?: Date, started_before?: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PaginatedPayrollRunList;
    }>;
    payrollRunsRetrieve(x_account_token: string, id: string, include_remote_data?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PayrollRun;
    }>;
}
