/// <reference types="node" />
import http from 'http';
import { RemoteKey } from '../model/remoteKey';
import { RemoteKeyForRegenerationRequest } from '../model/remoteKeyForRegenerationRequest';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum RegenerateKeyApiApiKeys {
    tokenAuth = 0
}
export declare class RegenerateKeyApi {
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
    setApiKey(key: RegenerateKeyApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    regenerateKeyCreate(remoteKeyForRegenerationRequest: RemoteKeyForRegenerationRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: RemoteKey;
    }>;
}
