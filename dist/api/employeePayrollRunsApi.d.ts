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
    employeePayrollRunsList(x_account_token: string, created_after?: Date, created_before?: Date, cursor?: string, employee_id?: string, ended_after?: Date, ended_before?: Date, expand?: 'employee' | 'employee,payroll_run' | 'payroll_run', include_remote_data?: boolean, modified_after?: Date, modified_before?: Date, page_size?: number, payroll_run_id?: string, remote_id?: string, started_after?: Date, started_before?: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PaginatedEmployeePayrollRunList;
    }>;
    employeePayrollRunsRetrieve(x_account_token: string, id: string, expand?: 'employee' | 'employee,payroll_run' | 'payroll_run', include_remote_data?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: EmployeePayrollRun;
    }>;
}
