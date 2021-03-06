/**
 * Merge HRIS API
 * The unified API for building rich integrations with multiple HR Information System platforms.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: hello@merge.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import localVarRequest from 'request';
import http from 'http';

/* tslint:disable:no-unused-locals */
import { Issue } from '../model/issue';
import { PaginatedIssueList } from '../model/paginatedIssueList';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://api.merge.dev/api/hris/v1';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum IssuesApiApiKeys {
    tokenAuth,
}

export class IssuesApi {
    protected _basePath = defaultBasePath;
    protected _defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'tokenAuth': new ApiKeyAuth('header', 'Authorization'),
    }

    protected interceptors: Interceptor[] = [];

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    set defaultHeaders(defaultHeaders: any) {
        this._defaultHeaders = defaultHeaders;
    }

    get defaultHeaders() {
        return this._defaultHeaders;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: IssuesApiApiKeys, value: string) {
        (this.authentications as any)[IssuesApiApiKeys[key]].apiKey = value;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * Gets issues.
     * @param accountToken 
     * @param cursor The pagination cursor value.
     * @param endDate If included, will only include issues whose most recent action occurred before this time
     * @param endUserOrganizationName 
     * @param firstIncidentTimeAfter If provided, will only return issues whose first incident time was after this datetime.
     * @param firstIncidentTimeBefore If provided, will only return issues whose first incident time was before this datetime.
     * @param includeMuted If True, will include muted issues
     * @param integrationName 
     * @param lastIncidentTimeAfter If provided, will only return issues whose first incident time was after this datetime.
     * @param lastIncidentTimeBefore If provided, will only return issues whose first incident time was before this datetime.
     * @param pageSize Number of results to return per page.
     * @param startDate If included, will only include issues whose most recent action occurred after this time
     * @param status 
     */
    public async issuesList (accountToken?: string, cursor?: string, endDate?: string, endUserOrganizationName?: string, firstIncidentTimeAfter?: Date, firstIncidentTimeBefore?: Date, includeMuted?: string, integrationName?: string, lastIncidentTimeAfter?: Date, lastIncidentTimeBefore?: Date, pageSize?: number, startDate?: string, status?: 'ONGOING' | 'RESOLVED', options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: PaginatedIssueList;  }> {
        const localVarPath = this.basePath + '/issues';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        if (accountToken !== undefined) {
            localVarQueryParameters['account_token'] = ObjectSerializer.serialize(accountToken, "string");
        }

        if (cursor !== undefined) {
            localVarQueryParameters['cursor'] = ObjectSerializer.serialize(cursor, "string");
        }

        if (endDate !== undefined) {
            localVarQueryParameters['end_date'] = ObjectSerializer.serialize(endDate, "string");
        }

        if (endUserOrganizationName !== undefined) {
            localVarQueryParameters['end_user_organization_name'] = ObjectSerializer.serialize(endUserOrganizationName, "string");
        }

        if (firstIncidentTimeAfter !== undefined) {
            localVarQueryParameters['first_incident_time_after'] = ObjectSerializer.serialize(firstIncidentTimeAfter, "Date");
        }

        if (firstIncidentTimeBefore !== undefined) {
            localVarQueryParameters['first_incident_time_before'] = ObjectSerializer.serialize(firstIncidentTimeBefore, "Date");
        }

        if (includeMuted !== undefined) {
            localVarQueryParameters['include_muted'] = ObjectSerializer.serialize(includeMuted, "string");
        }

        if (integrationName !== undefined) {
            localVarQueryParameters['integration_name'] = ObjectSerializer.serialize(integrationName, "string");
        }

        if (lastIncidentTimeAfter !== undefined) {
            localVarQueryParameters['last_incident_time_after'] = ObjectSerializer.serialize(lastIncidentTimeAfter, "Date");
        }

        if (lastIncidentTimeBefore !== undefined) {
            localVarQueryParameters['last_incident_time_before'] = ObjectSerializer.serialize(lastIncidentTimeBefore, "Date");
        }

        if (pageSize !== undefined) {
            localVarQueryParameters['page_size'] = ObjectSerializer.serialize(pageSize, "number");
        }

        if (startDate !== undefined) {
            localVarQueryParameters['start_date'] = ObjectSerializer.serialize(startDate, "string");
        }

        if (status !== undefined) {
            localVarQueryParameters['status'] = ObjectSerializer.serialize(status, "'ONGOING' | 'RESOLVED'");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.tokenAuth.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.tokenAuth.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: PaginatedIssueList;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "PaginatedIssueList");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Get a specific issue.
     * @param id 
     */
    public async issuesRetrieve (id: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: Issue;  }> {
        const localVarPath = this.basePath + '/issues/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling issuesRetrieve.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.tokenAuth.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.tokenAuth.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: Issue;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "Issue");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
}
