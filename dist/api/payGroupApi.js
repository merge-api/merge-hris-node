"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayGroupApi = exports.PayGroupApiApiKeys = void 0;
const request_1 = __importDefault(require("request"));
const models_1 = require("../model/models");
const models_2 = require("../model/models");
const apis_1 = require("./apis");
let defaultBasePath = 'https://api.merge.dev/api/hris/v1';
var PayGroupApiApiKeys;
(function (PayGroupApiApiKeys) {
    PayGroupApiApiKeys[PayGroupApiApiKeys["tokenAuth"] = 0] = "tokenAuth";
})(PayGroupApiApiKeys = exports.PayGroupApiApiKeys || (exports.PayGroupApiApiKeys = {}));
class PayGroupApi {
    constructor(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this._defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new models_1.VoidAuth(),
            'tokenAuth': new models_2.ApiKeyAuth('header', 'Authorization'),
        };
        this.interceptors = [];
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    set useQuerystring(value) {
        this._useQuerystring = value;
    }
    set basePath(basePath) {
        this._basePath = basePath;
    }
    set defaultHeaders(defaultHeaders) {
        this._defaultHeaders = defaultHeaders;
    }
    get defaultHeaders() {
        return this._defaultHeaders;
    }
    get basePath() {
        return this._basePath;
    }
    setDefaultAuthentication(auth) {
        this.authentications.default = auth;
    }
    setApiKey(key, value) {
        this.authentications[PayGroupApiApiKeys[key]].apiKey = value;
    }
    addInterceptor(interceptor) {
        this.interceptors.push(interceptor);
    }
    payGroupList(xAccountToken, createdAfter, createdBefore, cursor, includeRemoteData, modifiedAfter, modifiedBefore, pageSize, remoteId, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/pay-group';
            let localVarQueryParameters = {};
            let localVarHeaderParams = Object.assign({}, this._defaultHeaders);
            const produces = ['application/json'];
            if (produces.indexOf('application/json') >= 0) {
                localVarHeaderParams.Accept = 'application/json';
            }
            else {
                localVarHeaderParams.Accept = produces.join(',');
            }
            let localVarFormParams = {};
            if (xAccountToken === null || xAccountToken === undefined) {
                throw new Error('Required parameter xAccountToken was null or undefined when calling payGroupList.');
            }
            if (createdAfter !== undefined) {
                localVarQueryParameters['created_after'] = models_1.ObjectSerializer.serialize(createdAfter, "Date");
            }
            if (createdBefore !== undefined) {
                localVarQueryParameters['created_before'] = models_1.ObjectSerializer.serialize(createdBefore, "Date");
            }
            if (cursor !== undefined) {
                localVarQueryParameters['cursor'] = models_1.ObjectSerializer.serialize(cursor, "string");
            }
            if (includeRemoteData !== undefined) {
                localVarQueryParameters['include_remote_data'] = models_1.ObjectSerializer.serialize(includeRemoteData, "boolean");
            }
            if (modifiedAfter !== undefined) {
                localVarQueryParameters['modified_after'] = models_1.ObjectSerializer.serialize(modifiedAfter, "Date");
            }
            if (modifiedBefore !== undefined) {
                localVarQueryParameters['modified_before'] = models_1.ObjectSerializer.serialize(modifiedBefore, "Date");
            }
            if (pageSize !== undefined) {
                localVarQueryParameters['page_size'] = models_1.ObjectSerializer.serialize(pageSize, "number");
            }
            if (remoteId !== undefined) {
                localVarQueryParameters['remote_id'] = models_1.ObjectSerializer.serialize(remoteId, "string");
            }
            localVarHeaderParams['X-Account-Token'] = models_1.ObjectSerializer.serialize(xAccountToken, "string");
            Object.assign(localVarHeaderParams, options.headers);
            let localVarUseFormData = false;
            let localVarRequestOptions = {
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
                        localVarRequestOptions.formData = localVarFormParams;
                    }
                    else {
                        localVarRequestOptions.form = localVarFormParams;
                    }
                }
                return new Promise((resolve, reject) => {
                    request_1.default(localVarRequestOptions, (error, response, body) => {
                        if (error) {
                            reject(error);
                        }
                        else {
                            body = models_1.ObjectSerializer.deserialize(body, "PaginatedPayGroupList");
                            if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                resolve({ response: response, body: body });
                            }
                            else {
                                reject(new apis_1.HttpError(response, body, response.statusCode));
                            }
                        }
                    });
                });
            });
        });
    }
    payGroupRetrieve(xAccountToken, id, includeRemoteData, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/pay-group/{id}'
                .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
            let localVarQueryParameters = {};
            let localVarHeaderParams = Object.assign({}, this._defaultHeaders);
            const produces = ['application/json'];
            if (produces.indexOf('application/json') >= 0) {
                localVarHeaderParams.Accept = 'application/json';
            }
            else {
                localVarHeaderParams.Accept = produces.join(',');
            }
            let localVarFormParams = {};
            if (xAccountToken === null || xAccountToken === undefined) {
                throw new Error('Required parameter xAccountToken was null or undefined when calling payGroupRetrieve.');
            }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling payGroupRetrieve.');
            }
            if (includeRemoteData !== undefined) {
                localVarQueryParameters['include_remote_data'] = models_1.ObjectSerializer.serialize(includeRemoteData, "boolean");
            }
            localVarHeaderParams['X-Account-Token'] = models_1.ObjectSerializer.serialize(xAccountToken, "string");
            Object.assign(localVarHeaderParams, options.headers);
            let localVarUseFormData = false;
            let localVarRequestOptions = {
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
                        localVarRequestOptions.formData = localVarFormParams;
                    }
                    else {
                        localVarRequestOptions.form = localVarFormParams;
                    }
                }
                return new Promise((resolve, reject) => {
                    request_1.default(localVarRequestOptions, (error, response, body) => {
                        if (error) {
                            reject(error);
                        }
                        else {
                            body = models_1.ObjectSerializer.deserialize(body, "PayGroup");
                            if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                resolve({ response: response, body: body });
                            }
                            else {
                                reject(new apis_1.HttpError(response, body, response.statusCode));
                            }
                        }
                    });
                });
            });
        });
    }
}
exports.PayGroupApi = PayGroupApi;
//# sourceMappingURL=payGroupApi.js.map