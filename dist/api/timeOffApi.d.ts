import http from 'http';
import { PaginatedTimeOffList } from '../model/paginatedTimeOffList';
import { TimeOff } from '../model/timeOff';
import { TimeOffEndpointRequest } from '../model/timeOffEndpointRequest';
import { TimeOffResponse } from '../model/timeOffResponse';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum TimeOffApiApiKeys {
    tokenAuth = 0
}
export declare class TimeOffApi {
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
    setApiKey(key: TimeOffApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    timeOffCreate(x_account_token: string, time_off_endpoint_request: TimeOffEndpointRequest, run_async?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: TimeOffResponse;
    }>;
    timeOffList(x_account_token: string, approver_id?: string, created_after?: Date, created_before?: Date, cursor?: string, employee_id?: string, expand?: 'approver' | 'employee' | 'employee,approver', include_remote_data?: boolean, modified_after?: Date, modified_before?: Date, page_size?: number, remote_id?: string, request_type?: 'BEREAVEMENT' | 'JURY_DUTY' | 'PERSONAL' | 'SICK' | 'VACATION' | 'VOLUNTEER', status?: 'APPROVED' | 'CANCELLED' | 'DECLINED' | 'DELETED' | 'REQUESTED', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PaginatedTimeOffList;
    }>;
    timeOffRetrieve(x_account_token: string, id: string, expand?: 'approver' | 'employee' | 'employee,approver', include_remote_data?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: TimeOff;
    }>;
}
