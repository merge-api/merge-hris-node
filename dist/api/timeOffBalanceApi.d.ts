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
    setApiKey(key: TimeOffBalanceApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    timeOffBalanceList(x_account_token: string, created_after?: Date, created_before?: Date, cursor?: string, employee_id?: string, expand?: 'employee', include_remote_data?: boolean, modified_after?: Date, modified_before?: Date, page_size?: number, policy_type?: 'BEREAVEMENT' | 'JURY_DUTY' | 'PERSONAL' | 'SICK' | 'VACATION' | 'VOLUNTEER', remote_id?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PaginatedTimeOffBalanceList;
    }>;
    timeOffBalanceRetrieve(x_account_token: string, id: string, expand?: 'employee', include_remote_data?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: TimeOffBalance;
    }>;
}
