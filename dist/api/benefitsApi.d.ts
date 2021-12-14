/// <reference types="node" />
import http from 'http';
import { Benefit } from '../model/benefit';
import { PaginatedBenefitList } from '../model/paginatedBenefitList';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum BenefitsApiApiKeys {
    tokenAuth = 0
}
export declare class BenefitsApi {
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
    setApiKey(key: BenefitsApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    benefitsList(xAccountToken: string, createdAfter?: Date, createdBefore?: Date, cursor?: string, employeeId?: string, expand?: 'employee', includeRemoteData?: boolean, modifiedAfter?: Date, modifiedBefore?: Date, pageSize?: number, remoteId?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PaginatedBenefitList;
    }>;
    benefitsRetrieve(xAccountToken: string, id: string, expand?: 'employee', includeRemoteData?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Benefit;
    }>;
}
