/// <reference types="node" />
import http from 'http';
import { DataPassthroughRequest } from '../model/dataPassthroughRequest';
import { RemoteResponse } from '../model/remoteResponse';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum PassthroughApiApiKeys {
    tokenAuth = 0
}
export declare class PassthroughApi {
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
    setApiKey(key: PassthroughApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    passthroughCreate(x_account_token: string, data_passthrough_request: DataPassthroughRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: RemoteResponse;
    }>;
}
