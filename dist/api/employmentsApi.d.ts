/// <reference types="node" />
import http from 'http';
import { Employment } from '../model/employment';
import { PaginatedEmploymentList } from '../model/paginatedEmploymentList';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum EmploymentsApiApiKeys {
    tokenAuth = 0
}
export declare class EmploymentsApi {
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
    setApiKey(key: EmploymentsApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    employmentsList(x_account_token: string, created_after?: Date, created_before?: Date, cursor?: string, employee_id?: string, expand?: 'employee', include_remote_data?: boolean, modified_after?: Date, modified_before?: Date, order_by?: '-effective_date' | 'effective_date', page_size?: number, remote_id?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PaginatedEmploymentList;
    }>;
    employmentsRetrieve(x_account_token: string, id: string, expand?: 'employee', include_remote_data?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Employment;
    }>;
}
