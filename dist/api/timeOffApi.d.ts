/// <reference types="node" />
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
    timeOffCreate(xAccountToken: string, timeOffEndpointRequest: TimeOffEndpointRequest, isDebugMode?: boolean, runAsync?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: TimeOffResponse;
    }>;
    timeOffList(xAccountToken: string, approverId?: string, createdAfter?: Date, createdBefore?: Date, cursor?: string, employeeId?: string, expand?: 'approver' | 'employee' | 'employee,approver', includeDeletedData?: boolean, includeRemoteData?: boolean, modifiedAfter?: Date, modifiedBefore?: Date, pageSize?: number, remoteId?: string, requestType?: 'BEREAVEMENT' | 'JURY_DUTY' | 'PERSONAL' | 'SICK' | 'VACATION' | 'VOLUNTEER', status?: 'APPROVED' | 'CANCELLED' | 'DECLINED' | 'DELETED' | 'REQUESTED', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PaginatedTimeOffList;
    }>;
    timeOffRetrieve(xAccountToken: string, id: string, expand?: 'approver' | 'employee' | 'employee,approver', includeRemoteData?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: TimeOff;
    }>;
}
