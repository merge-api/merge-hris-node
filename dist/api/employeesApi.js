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
exports.EmployeesApi = exports.EmployeesApiApiKeys = void 0;
const request_1 = __importDefault(require("request"));
const models_1 = require("../model/models");
const models_2 = require("../model/models");
const apis_1 = require("./apis");
let defaultBasePath = 'https://api.merge.dev/api/hris/v1';
var EmployeesApiApiKeys;
(function (EmployeesApiApiKeys) {
    EmployeesApiApiKeys[EmployeesApiApiKeys["tokenAuth"] = 0] = "tokenAuth";
})(EmployeesApiApiKeys = exports.EmployeesApiApiKeys || (exports.EmployeesApiApiKeys = {}));
class EmployeesApi {
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
        this.authentications[EmployeesApiApiKeys[key]].apiKey = value;
    }
    addInterceptor(interceptor) {
        this.interceptors.push(interceptor);
    }
    employeesIgnoreCreate(modelId, ignoreCommonModelRequest, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/employees/ignore/{model_id}'
                .replace('{' + 'model_id' + '}', encodeURIComponent(String(modelId)));
            let localVarQueryParameters = {};
            let localVarHeaderParams = Object.assign({}, this._defaultHeaders);
            let localVarFormParams = {};
            if (modelId === null || modelId === undefined) {
                throw new Error('Required parameter modelId was null or undefined when calling employeesIgnoreCreate.');
            }
            if (ignoreCommonModelRequest === null || ignoreCommonModelRequest === undefined) {
                throw new Error('Required parameter ignoreCommonModelRequest was null or undefined when calling employeesIgnoreCreate.');
            }
            Object.assign(localVarHeaderParams, options.headers);
            let localVarUseFormData = false;
            let localVarRequestOptions = {
                method: 'POST',
                qs: localVarQueryParameters,
                headers: localVarHeaderParams,
                uri: localVarPath,
                useQuerystring: this._useQuerystring,
                json: true,
                body: models_1.ObjectSerializer.serialize(ignoreCommonModelRequest, "IgnoreCommonModelRequest")
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
    employeesList(xAccountToken, companyId, createdAfter, createdBefore, cursor, expand, includeDeletedData, includeRemoteData, includeSensitiveFields, managerId, modifiedAfter, modifiedBefore, pageSize, payGroupId, personalEmail, remoteId, teamId, workEmail, workLocationId, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/employees';
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
                throw new Error('Required parameter xAccountToken was null or undefined when calling employeesList.');
            }
            if (companyId !== undefined) {
                localVarQueryParameters['company_id'] = models_1.ObjectSerializer.serialize(companyId, "string");
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
            if (expand !== undefined) {
                localVarQueryParameters['expand'] = models_1.ObjectSerializer.serialize(expand, "'company' | 'company,pay_group' | 'employments' | 'employments,company' | 'employments,company,pay_group' | 'employments,home_location' | 'employments,home_location,company' | 'employments,home_location,company,pay_group' | 'employments,home_location,manager' | 'employments,home_location,manager,company' | 'employments,home_location,manager,company,pay_group' | 'employments,home_location,manager,pay_group' | 'employments,home_location,manager,team' | 'employments,home_location,manager,team,company' | 'employments,home_location,manager,team,company,pay_group' | 'employments,home_location,manager,team,pay_group' | 'employments,home_location,pay_group' | 'employments,home_location,team' | 'employments,home_location,team,company' | 'employments,home_location,team,company,pay_group' | 'employments,home_location,team,pay_group' | 'employments,home_location,work_location' | 'employments,home_location,work_location,company' | 'employments,home_location,work_location,company,pay_group' | 'employments,home_location,work_location,manager' | 'employments,home_location,work_location,manager,company' | 'employments,home_location,work_location,manager,company,pay_group' | 'employments,home_location,work_location,manager,pay_group' | 'employments,home_location,work_location,manager,team' | 'employments,home_location,work_location,manager,team,company' | 'employments,home_location,work_location,manager,team,company,pay_group' | 'employments,home_location,work_location,manager,team,pay_group' | 'employments,home_location,work_location,pay_group' | 'employments,home_location,work_location,team' | 'employments,home_location,work_location,team,company' | 'employments,home_location,work_location,team,company,pay_group' | 'employments,home_location,work_location,team,pay_group' | 'employments,manager' | 'employments,manager,company' | 'employments,manager,company,pay_group' | 'employments,manager,pay_group' | 'employments,manager,team' | 'employments,manager,team,company' | 'employments,manager,team,company,pay_group' | 'employments,manager,team,pay_group' | 'employments,pay_group' | 'employments,team' | 'employments,team,company' | 'employments,team,company,pay_group' | 'employments,team,pay_group' | 'employments,work_location' | 'employments,work_location,company' | 'employments,work_location,company,pay_group' | 'employments,work_location,manager' | 'employments,work_location,manager,company' | 'employments,work_location,manager,company,pay_group' | 'employments,work_location,manager,pay_group' | 'employments,work_location,manager,team' | 'employments,work_location,manager,team,company' | 'employments,work_location,manager,team,company,pay_group' | 'employments,work_location,manager,team,pay_group' | 'employments,work_location,pay_group' | 'employments,work_location,team' | 'employments,work_location,team,company' | 'employments,work_location,team,company,pay_group' | 'employments,work_location,team,pay_group' | 'home_location' | 'home_location,company' | 'home_location,company,pay_group' | 'home_location,manager' | 'home_location,manager,company' | 'home_location,manager,company,pay_group' | 'home_location,manager,pay_group' | 'home_location,manager,team' | 'home_location,manager,team,company' | 'home_location,manager,team,company,pay_group' | 'home_location,manager,team,pay_group' | 'home_location,pay_group' | 'home_location,team' | 'home_location,team,company' | 'home_location,team,company,pay_group' | 'home_location,team,pay_group' | 'home_location,work_location' | 'home_location,work_location,company' | 'home_location,work_location,company,pay_group' | 'home_location,work_location,manager' | 'home_location,work_location,manager,company' | 'home_location,work_location,manager,company,pay_group' | 'home_location,work_location,manager,pay_group' | 'home_location,work_location,manager,team' | 'home_location,work_location,manager,team,company' | 'home_location,work_location,manager,team,company,pay_group' | 'home_location,work_location,manager,team,pay_group' | 'home_location,work_location,pay_group' | 'home_location,work_location,team' | 'home_location,work_location,team,company' | 'home_location,work_location,team,company,pay_group' | 'home_location,work_location,team,pay_group' | 'manager' | 'manager,company' | 'manager,company,pay_group' | 'manager,pay_group' | 'manager,team' | 'manager,team,company' | 'manager,team,company,pay_group' | 'manager,team,pay_group' | 'pay_group' | 'team' | 'team,company' | 'team,company,pay_group' | 'team,pay_group' | 'work_location' | 'work_location,company' | 'work_location,company,pay_group' | 'work_location,manager' | 'work_location,manager,company' | 'work_location,manager,company,pay_group' | 'work_location,manager,pay_group' | 'work_location,manager,team' | 'work_location,manager,team,company' | 'work_location,manager,team,company,pay_group' | 'work_location,manager,team,pay_group' | 'work_location,pay_group' | 'work_location,team' | 'work_location,team,company' | 'work_location,team,company,pay_group' | 'work_location,team,pay_group'");
            }
            if (includeDeletedData !== undefined) {
                localVarQueryParameters['include_deleted_data'] = models_1.ObjectSerializer.serialize(includeDeletedData, "boolean");
            }
            if (includeRemoteData !== undefined) {
                localVarQueryParameters['include_remote_data'] = models_1.ObjectSerializer.serialize(includeRemoteData, "boolean");
            }
            if (includeSensitiveFields !== undefined) {
                localVarQueryParameters['include_sensitive_fields'] = models_1.ObjectSerializer.serialize(includeSensitiveFields, "boolean");
            }
            if (managerId !== undefined) {
                localVarQueryParameters['manager_id'] = models_1.ObjectSerializer.serialize(managerId, "string");
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
            if (payGroupId !== undefined) {
                localVarQueryParameters['pay_group_id'] = models_1.ObjectSerializer.serialize(payGroupId, "string");
            }
            if (personalEmail !== undefined) {
                localVarQueryParameters['personal_email'] = models_1.ObjectSerializer.serialize(personalEmail, "string");
            }
            if (remoteId !== undefined) {
                localVarQueryParameters['remote_id'] = models_1.ObjectSerializer.serialize(remoteId, "string");
            }
            if (teamId !== undefined) {
                localVarQueryParameters['team_id'] = models_1.ObjectSerializer.serialize(teamId, "string");
            }
            if (workEmail !== undefined) {
                localVarQueryParameters['work_email'] = models_1.ObjectSerializer.serialize(workEmail, "string");
            }
            if (workLocationId !== undefined) {
                localVarQueryParameters['work_location_id'] = models_1.ObjectSerializer.serialize(workLocationId, "string");
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
                            body = models_1.ObjectSerializer.deserialize(body, "PaginatedEmployeeList");
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
    employeesRetrieve(xAccountToken, id, expand, includeRemoteData, includeSensitiveFields, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/employees/{id}'
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
                throw new Error('Required parameter xAccountToken was null or undefined when calling employeesRetrieve.');
            }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling employeesRetrieve.');
            }
            if (expand !== undefined) {
                localVarQueryParameters['expand'] = models_1.ObjectSerializer.serialize(expand, "'company' | 'company,pay_group' | 'employments' | 'employments,company' | 'employments,company,pay_group' | 'employments,home_location' | 'employments,home_location,company' | 'employments,home_location,company,pay_group' | 'employments,home_location,manager' | 'employments,home_location,manager,company' | 'employments,home_location,manager,company,pay_group' | 'employments,home_location,manager,pay_group' | 'employments,home_location,manager,team' | 'employments,home_location,manager,team,company' | 'employments,home_location,manager,team,company,pay_group' | 'employments,home_location,manager,team,pay_group' | 'employments,home_location,pay_group' | 'employments,home_location,team' | 'employments,home_location,team,company' | 'employments,home_location,team,company,pay_group' | 'employments,home_location,team,pay_group' | 'employments,home_location,work_location' | 'employments,home_location,work_location,company' | 'employments,home_location,work_location,company,pay_group' | 'employments,home_location,work_location,manager' | 'employments,home_location,work_location,manager,company' | 'employments,home_location,work_location,manager,company,pay_group' | 'employments,home_location,work_location,manager,pay_group' | 'employments,home_location,work_location,manager,team' | 'employments,home_location,work_location,manager,team,company' | 'employments,home_location,work_location,manager,team,company,pay_group' | 'employments,home_location,work_location,manager,team,pay_group' | 'employments,home_location,work_location,pay_group' | 'employments,home_location,work_location,team' | 'employments,home_location,work_location,team,company' | 'employments,home_location,work_location,team,company,pay_group' | 'employments,home_location,work_location,team,pay_group' | 'employments,manager' | 'employments,manager,company' | 'employments,manager,company,pay_group' | 'employments,manager,pay_group' | 'employments,manager,team' | 'employments,manager,team,company' | 'employments,manager,team,company,pay_group' | 'employments,manager,team,pay_group' | 'employments,pay_group' | 'employments,team' | 'employments,team,company' | 'employments,team,company,pay_group' | 'employments,team,pay_group' | 'employments,work_location' | 'employments,work_location,company' | 'employments,work_location,company,pay_group' | 'employments,work_location,manager' | 'employments,work_location,manager,company' | 'employments,work_location,manager,company,pay_group' | 'employments,work_location,manager,pay_group' | 'employments,work_location,manager,team' | 'employments,work_location,manager,team,company' | 'employments,work_location,manager,team,company,pay_group' | 'employments,work_location,manager,team,pay_group' | 'employments,work_location,pay_group' | 'employments,work_location,team' | 'employments,work_location,team,company' | 'employments,work_location,team,company,pay_group' | 'employments,work_location,team,pay_group' | 'home_location' | 'home_location,company' | 'home_location,company,pay_group' | 'home_location,manager' | 'home_location,manager,company' | 'home_location,manager,company,pay_group' | 'home_location,manager,pay_group' | 'home_location,manager,team' | 'home_location,manager,team,company' | 'home_location,manager,team,company,pay_group' | 'home_location,manager,team,pay_group' | 'home_location,pay_group' | 'home_location,team' | 'home_location,team,company' | 'home_location,team,company,pay_group' | 'home_location,team,pay_group' | 'home_location,work_location' | 'home_location,work_location,company' | 'home_location,work_location,company,pay_group' | 'home_location,work_location,manager' | 'home_location,work_location,manager,company' | 'home_location,work_location,manager,company,pay_group' | 'home_location,work_location,manager,pay_group' | 'home_location,work_location,manager,team' | 'home_location,work_location,manager,team,company' | 'home_location,work_location,manager,team,company,pay_group' | 'home_location,work_location,manager,team,pay_group' | 'home_location,work_location,pay_group' | 'home_location,work_location,team' | 'home_location,work_location,team,company' | 'home_location,work_location,team,company,pay_group' | 'home_location,work_location,team,pay_group' | 'manager' | 'manager,company' | 'manager,company,pay_group' | 'manager,pay_group' | 'manager,team' | 'manager,team,company' | 'manager,team,company,pay_group' | 'manager,team,pay_group' | 'pay_group' | 'team' | 'team,company' | 'team,company,pay_group' | 'team,pay_group' | 'work_location' | 'work_location,company' | 'work_location,company,pay_group' | 'work_location,manager' | 'work_location,manager,company' | 'work_location,manager,company,pay_group' | 'work_location,manager,pay_group' | 'work_location,manager,team' | 'work_location,manager,team,company' | 'work_location,manager,team,company,pay_group' | 'work_location,manager,team,pay_group' | 'work_location,pay_group' | 'work_location,team' | 'work_location,team,company' | 'work_location,team,company,pay_group' | 'work_location,team,pay_group'");
            }
            if (includeRemoteData !== undefined) {
                localVarQueryParameters['include_remote_data'] = models_1.ObjectSerializer.serialize(includeRemoteData, "boolean");
            }
            if (includeSensitiveFields !== undefined) {
                localVarQueryParameters['include_sensitive_fields'] = models_1.ObjectSerializer.serialize(includeSensitiveFields, "boolean");
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
                            body = models_1.ObjectSerializer.deserialize(body, "Employee");
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
exports.EmployeesApi = EmployeesApi;
//# sourceMappingURL=employeesApi.js.map