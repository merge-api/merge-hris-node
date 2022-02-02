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
exports.LinkedAccountsApi = exports.LinkedAccountsApiApiKeys = void 0;
const request_1 = __importDefault(require("request"));
const models_1 = require("../model/models");
const models_2 = require("../model/models");
const apis_1 = require("./apis");
let defaultBasePath = 'https://api.merge.dev/api/hris/v1';
var LinkedAccountsApiApiKeys;
(function (LinkedAccountsApiApiKeys) {
    LinkedAccountsApiApiKeys[LinkedAccountsApiApiKeys["tokenAuth"] = 0] = "tokenAuth";
})(LinkedAccountsApiApiKeys = exports.LinkedAccountsApiApiKeys || (exports.LinkedAccountsApiApiKeys = {}));
class LinkedAccountsApi {
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
        this.authentications[LinkedAccountsApiApiKeys[key]].apiKey = value;
    }
    addInterceptor(interceptor) {
        this.interceptors.push(interceptor);
    }
    linkedAccountsList(category, cursor, endUserEmailAddress, endUserOrganizationName, endUserOriginId, endUserOriginIds, id, ids, integrationName, isTestAccount, pageSize, status, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/linked-accounts';
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
            if (category !== undefined) {
                localVarQueryParameters['category'] = models_1.ObjectSerializer.serialize(category, "'accounting' | 'ats' | 'hris'");
            }
            if (cursor !== undefined) {
                localVarQueryParameters['cursor'] = models_1.ObjectSerializer.serialize(cursor, "string");
            }
            if (endUserEmailAddress !== undefined) {
                localVarQueryParameters['end_user_email_address'] = models_1.ObjectSerializer.serialize(endUserEmailAddress, "string");
            }
            if (endUserOrganizationName !== undefined) {
                localVarQueryParameters['end_user_organization_name'] = models_1.ObjectSerializer.serialize(endUserOrganizationName, "string");
            }
            if (endUserOriginId !== undefined) {
                localVarQueryParameters['end_user_origin_id'] = models_1.ObjectSerializer.serialize(endUserOriginId, "string");
            }
            if (endUserOriginIds !== undefined) {
                localVarQueryParameters['end_user_origin_ids'] = models_1.ObjectSerializer.serialize(endUserOriginIds, "string");
            }
            if (id !== undefined) {
                localVarQueryParameters['id'] = models_1.ObjectSerializer.serialize(id, "string");
            }
            if (ids !== undefined) {
                localVarQueryParameters['ids'] = models_1.ObjectSerializer.serialize(ids, "string");
            }
            if (integrationName !== undefined) {
                localVarQueryParameters['integration_name'] = models_1.ObjectSerializer.serialize(integrationName, "string");
            }
            if (isTestAccount !== undefined) {
                localVarQueryParameters['is_test_account'] = models_1.ObjectSerializer.serialize(isTestAccount, "string");
            }
            if (pageSize !== undefined) {
                localVarQueryParameters['page_size'] = models_1.ObjectSerializer.serialize(pageSize, "number");
            }
            if (status !== undefined) {
                localVarQueryParameters['status'] = models_1.ObjectSerializer.serialize(status, "string");
            }
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
                            body = models_1.ObjectSerializer.deserialize(body, "PaginatedAccountDetailsAndActionsList");
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
exports.LinkedAccountsApi = LinkedAccountsApi;
//# sourceMappingURL=linkedAccountsApi.js.map