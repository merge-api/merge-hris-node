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
    employmentsList(xAccountToken: string, createdAfter?: Date, createdBefore?: Date, cursor?: string, employeeId?: string, expand?: 'employee', includeRemoteData?: boolean, modifiedAfter?: Date, modifiedBefore?: Date, orderBy?: '-effective_date' | 'effective_date', pageSize?: number, remoteId?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PaginatedEmploymentList;
    }>;
    employmentsRetrieve(xAccountToken: string, id: string, expand?: 'employee', includeRemoteData?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Employment;
    }>;
}
