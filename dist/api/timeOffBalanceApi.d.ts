/// <reference types="node" />
import http from 'http';
import { PaginatedTimeOffBalanceList } from '../model/paginatedTimeOffBalanceList';
import { TimeOffBalance } from '../model/timeOffBalance';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum TimeOffBalanceApiApiKeys {
    tokenAuth = 0
}
export declare class TimeOffBalanceApi {
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
    setApiKey(key: TimeOffBalanceApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    timeOffBalanceList(xAccountToken: string, createdAfter?: Date, createdBefore?: Date, cursor?: string, employeeId?: string, expand?: 'employee', includeRemoteData?: boolean, modifiedAfter?: Date, modifiedBefore?: Date, pageSize?: number, policyType?: 'BEREAVEMENT' | 'JURY_DUTY' | 'PERSONAL' | 'SICK' | 'VACATION' | 'VOLUNTEER', remoteId?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PaginatedTimeOffBalanceList;
    }>;
    timeOffBalanceRetrieve(xAccountToken: string, id: string, expand?: 'employee', includeRemoteData?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: TimeOffBalance;
    }>;
}
