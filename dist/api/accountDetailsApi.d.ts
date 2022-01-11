/// <reference types="node" />
import http from 'http';
import { AccountDetails } from '../model/accountDetails';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum AccountDetailsApiApiKeys {
    tokenAuth = 0
}
export declare class AccountDetailsApi {
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
    setApiKey(key: AccountDetailsApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    accountDetailsRetrieve(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AccountDetails;
    }>;
}
