/// <reference types="node" />
import http from 'http';
import { Employee } from '../model/employee';
import { EmployeeRequest } from '../model/employeeRequest';
import { PaginatedEmployeeList } from '../model/paginatedEmployeeList';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum EmployeesApiApiKeys {
    tokenAuth = 0
}
export declare class EmployeesApi {
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
    setApiKey(key: EmployeesApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    employeesCreate(xAccountToken: string, runAsync?: boolean, employeeRequest?: EmployeeRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Employee;
    }>;
    employeesList(xAccountToken: string, companyId?: string, createdAfter?: Date, createdBefore?: Date, cursor?: string, expand?: 'company' | 'employments' | 'employments,company' | 'employments,home_location' | 'employments,home_location,company' | 'employments,home_location,manager' | 'employments,home_location,manager,company' | 'employments,home_location,manager,team' | 'employments,home_location,manager,team,company' | 'employments,home_location,team' | 'employments,home_location,team,company' | 'employments,home_location,work_location' | 'employments,home_location,work_location,company' | 'employments,home_location,work_location,manager' | 'employments,home_location,work_location,manager,company' | 'employments,home_location,work_location,manager,team' | 'employments,home_location,work_location,manager,team,company' | 'employments,home_location,work_location,team' | 'employments,home_location,work_location,team,company' | 'employments,manager' | 'employments,manager,company' | 'employments,manager,team' | 'employments,manager,team,company' | 'employments,team' | 'employments,team,company' | 'employments,work_location' | 'employments,work_location,company' | 'employments,work_location,manager' | 'employments,work_location,manager,company' | 'employments,work_location,manager,team' | 'employments,work_location,manager,team,company' | 'employments,work_location,team' | 'employments,work_location,team,company' | 'home_location' | 'home_location,company' | 'home_location,manager' | 'home_location,manager,company' | 'home_location,manager,team' | 'home_location,manager,team,company' | 'home_location,team' | 'home_location,team,company' | 'home_location,work_location' | 'home_location,work_location,company' | 'home_location,work_location,manager' | 'home_location,work_location,manager,company' | 'home_location,work_location,manager,team' | 'home_location,work_location,manager,team,company' | 'home_location,work_location,team' | 'home_location,work_location,team,company' | 'manager' | 'manager,company' | 'manager,team' | 'manager,team,company' | 'team' | 'team,company' | 'work_location' | 'work_location,company' | 'work_location,manager' | 'work_location,manager,company' | 'work_location,manager,team' | 'work_location,manager,team,company' | 'work_location,team' | 'work_location,team,company', includeRemoteData?: boolean, includeSensitiveFields?: boolean, managerId?: string, modifiedAfter?: Date, modifiedBefore?: Date, pageSize?: number, remoteId?: string, teamId?: string, workLocationId?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PaginatedEmployeeList;
    }>;
    employeesRetrieve(xAccountToken: string, id: string, expand?: 'company' | 'employments' | 'employments,company' | 'employments,home_location' | 'employments,home_location,company' | 'employments,home_location,manager' | 'employments,home_location,manager,company' | 'employments,home_location,manager,team' | 'employments,home_location,manager,team,company' | 'employments,home_location,team' | 'employments,home_location,team,company' | 'employments,home_location,work_location' | 'employments,home_location,work_location,company' | 'employments,home_location,work_location,manager' | 'employments,home_location,work_location,manager,company' | 'employments,home_location,work_location,manager,team' | 'employments,home_location,work_location,manager,team,company' | 'employments,home_location,work_location,team' | 'employments,home_location,work_location,team,company' | 'employments,manager' | 'employments,manager,company' | 'employments,manager,team' | 'employments,manager,team,company' | 'employments,team' | 'employments,team,company' | 'employments,work_location' | 'employments,work_location,company' | 'employments,work_location,manager' | 'employments,work_location,manager,company' | 'employments,work_location,manager,team' | 'employments,work_location,manager,team,company' | 'employments,work_location,team' | 'employments,work_location,team,company' | 'home_location' | 'home_location,company' | 'home_location,manager' | 'home_location,manager,company' | 'home_location,manager,team' | 'home_location,manager,team,company' | 'home_location,team' | 'home_location,team,company' | 'home_location,work_location' | 'home_location,work_location,company' | 'home_location,work_location,manager' | 'home_location,work_location,manager,company' | 'home_location,work_location,manager,team' | 'home_location,work_location,manager,team,company' | 'home_location,work_location,team' | 'home_location,work_location,team,company' | 'manager' | 'manager,company' | 'manager,team' | 'manager,team,company' | 'team' | 'team,company' | 'work_location' | 'work_location,company' | 'work_location,manager' | 'work_location,manager,company' | 'work_location,manager,team' | 'work_location,manager,team,company' | 'work_location,team' | 'work_location,team,company', includeRemoteData?: boolean, includeSensitiveFields?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Employee;
    }>;
}
