/// <reference types="node" />
import http from 'http';
import { AccountToken } from '../model/accountToken';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum AccountTokenApiApiKeys {
    tokenAuth = 0
}
export declare class AccountTokenApi {
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
    setApiKey(key: AccountTokenApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    accountTokenRetrieve(publicToken: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AccountToken;
    }>;
}
