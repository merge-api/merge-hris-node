import http from 'http';
import { Deduction } from '../model/deduction';
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
    deductionsList(x_account_token: string, created_after?: Date, created_before?: Date, cursor?: string, employee_payroll_run_id?: string, include_remote_data?: boolean, modified_after?: Date, modified_before?: Date, page_size?: number, remote_id?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PaginatedDeductionList;
    }>;
    deductionsRetrieve(x_account_token: string, id: string, include_remote_data?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Deduction;
    }>;
}
