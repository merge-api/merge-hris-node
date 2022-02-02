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
exports.TimeOffApi = exports.TimeOffApiApiKeys = void 0;
const request_1 = __importDefault(require("request"));
const models_1 = require("../model/models");
const models_2 = require("../model/models");
const apis_1 = require("./apis");
let defaultBasePath = 'https://api.merge.dev/api/hris/v1';
var TimeOffApiApiKeys;
(function (TimeOffApiApiKeys) {
    TimeOffApiApiKeys[TimeOffApiApiKeys["tokenAuth"] = 0] = "tokenAuth";
})(TimeOffApiApiKeys = exports.TimeOffApiApiKeys || (exports.TimeOffApiApiKeys = {}));
class TimeOffApi {
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
        this.authentications[TimeOffApiApiKeys[key]].apiKey = value;
    }
    addInterceptor(interceptor) {
        this.interceptors.push(interceptor);
<<<<<<< HEAD
    }
    timeOffCreate(xAccountToken, timeOffEndpointRequest, runAsync, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/time-off';
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
                throw new Error('Required parameter xAccountToken was null or undefined when calling timeOffCreate.');
            }
            if (timeOffEndpointRequest === null || timeOffEndpointRequest === undefined) {
                throw new Error('Required parameter timeOffEndpointRequest was null or undefined when calling timeOffCreate.');
            }
            if (runAsync !== undefined) {
                localVarQueryParameters['run_async'] = models_1.ObjectSerializer.serialize(runAsync, "boolean");
            }
            localVarHeaderParams['X-Account-Token'] = models_1.ObjectSerializer.serialize(xAccountToken, "string");
            Object.assign(localVarHeaderParams, options.headers);
            let localVarUseFormData = false;
            let localVarRequestOptions = {
                method: 'POST',
                qs: localVarQueryParameters,
                headers: localVarHeaderParams,
                uri: localVarPath,
                useQuerystring: this._useQuerystring,
                json: true,
                body: models_1.ObjectSerializer.serialize(timeOffEndpointRequest, "TimeOffEndpointRequest")
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
                            body = models_1.ObjectSerializer.deserialize(body, "TimeOffResponse");
                            if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                resolve({ response: response, body: body });
=======
    };
    TimeOffApi.prototype.timeOffCreate = function (xAccountToken, timeOffEndpointRequest, isDebugMode, runAsync, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_1, _i, _a, interceptor;
            var _this = this;
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/time-off';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (xAccountToken === null || xAccountToken === undefined) {
                    throw new Error('Required parameter xAccountToken was null or undefined when calling timeOffCreate.');
                }
                if (timeOffEndpointRequest === null || timeOffEndpointRequest === undefined) {
                    throw new Error('Required parameter timeOffEndpointRequest was null or undefined when calling timeOffCreate.');
                }
                if (isDebugMode !== undefined) {
                    localVarQueryParameters['is_debug_mode'] = models_1.ObjectSerializer.serialize(isDebugMode, "boolean");
                }
                if (runAsync !== undefined) {
                    localVarQueryParameters['run_async'] = models_1.ObjectSerializer.serialize(runAsync, "boolean");
                }
                localVarHeaderParams['X-Account-Token'] = models_1.ObjectSerializer.serialize(xAccountToken, "string");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'POST',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(timeOffEndpointRequest, "TimeOffEndpointRequest")
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.tokenAuth.apiKey) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.tokenAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_1 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_1(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
>>>>>>> lee/node-employee-paygroup
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
    timeOffList(xAccountToken, approverId, createdAfter, createdBefore, cursor, employeeId, expand, includeDeletedData, includeRemoteData, modifiedAfter, modifiedBefore, pageSize, remoteId, requestType, status, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/time-off';
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
                throw new Error('Required parameter xAccountToken was null or undefined when calling timeOffList.');
            }
            if (approverId !== undefined) {
                localVarQueryParameters['approver_id'] = models_1.ObjectSerializer.serialize(approverId, "string");
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
            if (employeeId !== undefined) {
                localVarQueryParameters['employee_id'] = models_1.ObjectSerializer.serialize(employeeId, "string");
            }
            if (expand !== undefined) {
                localVarQueryParameters['expand'] = models_1.ObjectSerializer.serialize(expand, "'approver' | 'employee' | 'employee,approver'");
            }
            if (includeDeletedData !== undefined) {
                localVarQueryParameters['include_deleted_data'] = models_1.ObjectSerializer.serialize(includeDeletedData, "boolean");
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
            if (requestType !== undefined) {
                localVarQueryParameters['request_type'] = models_1.ObjectSerializer.serialize(requestType, "'BEREAVEMENT' | 'JURY_DUTY' | 'PERSONAL' | 'SICK' | 'VACATION' | 'VOLUNTEER'");
            }
            if (status !== undefined) {
                localVarQueryParameters['status'] = models_1.ObjectSerializer.serialize(status, "'APPROVED' | 'CANCELLED' | 'DECLINED' | 'DELETED' | 'REQUESTED'");
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
                            body = models_1.ObjectSerializer.deserialize(body, "PaginatedTimeOffList");
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
    timeOffRetrieve(xAccountToken, id, expand, includeRemoteData, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/time-off/{id}'
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
                throw new Error('Required parameter xAccountToken was null or undefined when calling timeOffRetrieve.');
            }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling timeOffRetrieve.');
            }
            if (expand !== undefined) {
                localVarQueryParameters['expand'] = models_1.ObjectSerializer.serialize(expand, "'approver' | 'employee' | 'employee,approver'");
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
                            body = models_1.ObjectSerializer.deserialize(body, "TimeOff");
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
exports.TimeOffApi = TimeOffApi;
//# sourceMappingURL=timeOffApi.js.map