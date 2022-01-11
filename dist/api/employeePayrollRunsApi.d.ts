/// <reference types="node" />
import http from 'http';
import { EmployeePayrollRun } from '../model/employeePayrollRun';
import { PaginatedEmployeePayrollRunList } from '../model/paginatedEmployeePayrollRunList';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum EmployeePayrollRunsApiApiKeys {
    tokenAuth = 0
}
export declare class EmployeePayrollRunsApi {
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
    setApiKey(key: EmployeePayrollRunsApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    employeePayrollRunsList(xAccountToken: string, createdAfter?: Date, createdBefore?: Date, cursor?: string, employeeId?: string, endedAfter?: Date, endedBefore?: Date, expand?: 'employee' | 'employee,payroll_run' | 'payroll_run', includeDeletedData?: boolean, includeRemoteData?: boolean, modifiedAfter?: Date, modifiedBefore?: Date, pageSize?: number, payrollRunId?: string, remoteId?: string, startedAfter?: Date, startedBefore?: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PaginatedEmployeePayrollRunList;
    }>;
    employeePayrollRunsRetrieve(xAccountToken: string, id: string, expand?: 'employee' | 'employee,payroll_run' | 'payroll_run', includeRemoteData?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: EmployeePayrollRun;
    }>;
}
