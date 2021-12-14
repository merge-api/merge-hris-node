/// <reference types="node" />
import http from 'http';
import { AvailableActions } from '../model/availableActions';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum AvailableActionsApiApiKeys {
    tokenAuth = 0
}
export declare class AvailableActionsApi {
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
    setApiKey(key: AvailableActionsApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    availableActionsRetrieve(x_account_token: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AvailableActions;
    }>;
}
