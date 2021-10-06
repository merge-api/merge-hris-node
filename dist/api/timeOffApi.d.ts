/// <reference types="node" />
import http from 'http';
import { PaginatedTimeOffList } from '../model/paginatedTimeOffList';
import { TimeOff } from '../model/timeOff';
import { TimeOffRequest } from '../model/timeOffRequest';
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
    timeOffCreate(xAccountToken: string, runAsync?: boolean, timeOffRequest?: TimeOffRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: TimeOff;
    }>;
    timeOffList(xAccountToken: string, approverId?: string, createdAfter?: Date, createdBefore?: Date, cursor?: string, employeeId?: string, expand?: 'approver' | 'employee' | 'employee,approver', includeRemoteData?: boolean, modifiedAfter?: Date, modifiedBefore?: Date, pageSize?: number, remoteId?: string, status?: 'REQUESTED' | 'APPROVED' | 'DECLINED' | 'CANCELLED' | 'DELETED' | '' | 'null', options?: {
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
