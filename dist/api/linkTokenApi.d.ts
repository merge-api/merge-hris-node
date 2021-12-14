/// <reference types="node" />
import http from 'http';
import { EndUserDetailsRequest } from '../model/endUserDetailsRequest';
import { LinkToken } from '../model/linkToken';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum LinkTokenApiApiKeys {
    tokenAuth = 0
}
export declare class LinkTokenApi {
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
    setApiKey(key: LinkTokenApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    linkTokenCreate(end_user_details_request: EndUserDetailsRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: LinkToken;
    }>;
}
