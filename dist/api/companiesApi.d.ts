/// <reference types="node" />
import http from 'http';
import { Company } from '../model/company';
import { PaginatedCompanyList } from '../model/paginatedCompanyList';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum CompaniesApiApiKeys {
    tokenAuth = 0
}
export declare class CompaniesApi {
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
    setApiKey(key: CompaniesApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    companiesList(x_account_token: string, created_after?: Date, created_before?: Date, cursor?: string, include_remote_data?: boolean, modified_after?: Date, modified_before?: Date, page_size?: number, remote_id?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PaginatedCompanyList;
    }>;
    companiesRetrieve(x_account_token: string, id: string, include_remote_data?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Company;
    }>;
}
