/// <reference types="node" />
import http from 'http';
import { Employment } from '../model/employment';
import { EmploymentRequest } from '../model/employmentRequest';
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
    setApiKey(key: EmploymentsApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    employmentsCreate(xAccountToken: string, runAsync?: boolean, employmentRequest?: EmploymentRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Employment;
    }>;
    employmentsList(xAccountToken: string, createdAfter?: Date, createdBefore?: Date, cursor?: string, employeeId?: string, includeRemoteData?: boolean, modifiedAfter?: Date, modifiedBefore?: Date, pageSize?: number, remoteId?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PaginatedEmploymentList;
    }>;
    employmentsRetrieve(xAccountToken: string, id: string, includeRemoteData?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Employment;
    }>;
}
