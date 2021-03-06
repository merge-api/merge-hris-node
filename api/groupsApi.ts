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
import { Group } from '../model/group';
import { PaginatedGroupList } from '../model/paginatedGroupList';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://api.merge.dev/api/hris/v1';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum GroupsApiApiKeys {
    tokenAuth,
}

export class GroupsApi {
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

    public setApiKey(key: GroupsApiApiKeys, value: string) {
        (this.authentications as any)[GroupsApiApiKeys[key]].apiKey = value;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * Returns a list of `Group` objects.
     * @param xAccountToken Token identifying the end user.
     * @param createdAfter If provided, will only return objects created after this datetime.
     * @param createdBefore If provided, will only return objects created before this datetime.
     * @param cursor The pagination cursor value.
     * @param includeDeletedData Whether to include data that was deleted in the third-party service.
     * @param includeRemoteData Whether to include the original data Merge fetched from the third-party to produce these models.
     * @param modifiedAfter If provided, will only return objects modified after this datetime.
     * @param modifiedBefore If provided, will only return objects modified before this datetime.
     * @param pageSize Number of results to return per page.
     * @param remoteId The API provider\&#39;s ID for the given object.
     */
    public async groupsList (xAccountToken: string, createdAfter?: Date, createdBefore?: Date, cursor?: string, includeDeletedData?: boolean, includeRemoteData?: boolean, modifiedAfter?: Date, modifiedBefore?: Date, pageSize?: number, remoteId?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: PaginatedGroupList;  }> {
        const localVarPath = this.basePath + '/groups';
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

        // verify required parameter 'xAccountToken' is not null or undefined
        if (xAccountToken === null || xAccountToken === undefined) {
            throw new Error('Required parameter xAccountToken was null or undefined when calling groupsList.');
        }

        if (createdAfter !== undefined) {
            localVarQueryParameters['created_after'] = ObjectSerializer.serialize(createdAfter, "Date");
        }

        if (createdBefore !== undefined) {
            localVarQueryParameters['created_before'] = ObjectSerializer.serialize(createdBefore, "Date");
        }

        if (cursor !== undefined) {
            localVarQueryParameters['cursor'] = ObjectSerializer.serialize(cursor, "string");
        }

        if (includeDeletedData !== undefined) {
            localVarQueryParameters['include_deleted_data'] = ObjectSerializer.serialize(includeDeletedData, "boolean");
        }

        if (includeRemoteData !== undefined) {
            localVarQueryParameters['include_remote_data'] = ObjectSerializer.serialize(includeRemoteData, "boolean");
        }

        if (modifiedAfter !== undefined) {
            localVarQueryParameters['modified_after'] = ObjectSerializer.serialize(modifiedAfter, "Date");
        }

        if (modifiedBefore !== undefined) {
            localVarQueryParameters['modified_before'] = ObjectSerializer.serialize(modifiedBefore, "Date");
        }

        if (pageSize !== undefined) {
            localVarQueryParameters['page_size'] = ObjectSerializer.serialize(pageSize, "number");
        }

        if (remoteId !== undefined) {
            localVarQueryParameters['remote_id'] = ObjectSerializer.serialize(remoteId, "string");
        }

        localVarHeaderParams['X-Account-Token'] = ObjectSerializer.serialize(xAccountToken, "string");
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
            return new Promise<{ response: http.IncomingMessage; body: PaginatedGroupList;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "PaginatedGroupList");
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
     * Returns a `Group` object with the given `id`.
     * @param xAccountToken Token identifying the end user.
     * @param id 
     * @param includeRemoteData Whether to include the original data Merge fetched from the third-party to produce these models.
     */
    public async groupsRetrieve (xAccountToken: string, id: string, includeRemoteData?: boolean, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: Group;  }> {
        const localVarPath = this.basePath + '/groups/{id}'
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

        // verify required parameter 'xAccountToken' is not null or undefined
        if (xAccountToken === null || xAccountToken === undefined) {
            throw new Error('Required parameter xAccountToken was null or undefined when calling groupsRetrieve.');
        }

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling groupsRetrieve.');
        }

        if (includeRemoteData !== undefined) {
            localVarQueryParameters['include_remote_data'] = ObjectSerializer.serialize(includeRemoteData, "boolean");
        }

        localVarHeaderParams['X-Account-Token'] = ObjectSerializer.serialize(xAccountToken, "string");
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
            return new Promise<{ response: http.IncomingMessage; body: Group;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "Group");
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
