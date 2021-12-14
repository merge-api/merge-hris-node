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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeesApi = exports.EmployeesApiApiKeys = void 0;
var request_1 = __importDefault(require("request"));
var models_1 = require("../model/models");
var models_2 = require("../model/models");
var apis_1 = require("./apis");
var defaultBasePath = 'https://api.merge.dev/api/hris/v1';
var EmployeesApiApiKeys;
(function (EmployeesApiApiKeys) {
    EmployeesApiApiKeys[EmployeesApiApiKeys["tokenAuth"] = 0] = "tokenAuth";
})(EmployeesApiApiKeys = exports.EmployeesApiApiKeys || (exports.EmployeesApiApiKeys = {}));
var EmployeesApi = (function () {
    function EmployeesApi(basePathOrUsername, password, basePath) {
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
    Object.defineProperty(EmployeesApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmployeesApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmployeesApi.prototype, "defaultHeaders", {
        get: function () {
            return this._defaultHeaders;
        },
        set: function (defaultHeaders) {
            this._defaultHeaders = defaultHeaders;
        },
        enumerable: false,
        configurable: true
    });
    EmployeesApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    EmployeesApi.prototype.setApiKey = function (key, value) {
        this.authentications[EmployeesApiApiKeys[key]].apiKey = value;
    };
    EmployeesApi.prototype.addInterceptor = function (interceptor) {
        this.interceptors.push(interceptor);
    };
    EmployeesApi.prototype.employeesList = function (x_account_token, company_id, created_after, created_before, cursor, expand, include_remote_data, include_sensitive_fields, manager_id, modified_after, modified_before, page_size, pay_group_id, personal_email, remote_id, team_id, work_email, work_location_id, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_1, _i, _a, interceptor;
            var _this = this;
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/employees';
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
                if (x_account_token === null || x_account_token === undefined) {
                    throw new Error('Required parameter x_account_token was null or undefined when calling employeesList.');
                }
                if (company_id !== undefined) {
                    localVarQueryParameters['company_id'] = models_1.ObjectSerializer.serialize(company_id, "string");
                }
                if (created_after !== undefined) {
                    localVarQueryParameters['created_after'] = models_1.ObjectSerializer.serialize(created_after, "Date");
                }
                if (created_before !== undefined) {
                    localVarQueryParameters['created_before'] = models_1.ObjectSerializer.serialize(created_before, "Date");
                }
                if (cursor !== undefined) {
                    localVarQueryParameters['cursor'] = models_1.ObjectSerializer.serialize(cursor, "string");
                }
                if (expand !== undefined) {
                    localVarQueryParameters['expand'] = models_1.ObjectSerializer.serialize(expand, "'company' | 'company,pay_group' | 'employments' | 'employments,company' | 'employments,company,pay_group' | 'employments,home_location' | 'employments,home_location,company' | 'employments,home_location,company,pay_group' | 'employments,home_location,manager' | 'employments,home_location,manager,company' | 'employments,home_location,manager,company,pay_group' | 'employments,home_location,manager,pay_group' | 'employments,home_location,manager,team' | 'employments,home_location,manager,team,company' | 'employments,home_location,manager,team,company,pay_group' | 'employments,home_location,manager,team,pay_group' | 'employments,home_location,pay_group' | 'employments,home_location,team' | 'employments,home_location,team,company' | 'employments,home_location,team,company,pay_group' | 'employments,home_location,team,pay_group' | 'employments,home_location,work_location' | 'employments,home_location,work_location,company' | 'employments,home_location,work_location,company,pay_group' | 'employments,home_location,work_location,manager' | 'employments,home_location,work_location,manager,company' | 'employments,home_location,work_location,manager,company,pay_group' | 'employments,home_location,work_location,manager,pay_group' | 'employments,home_location,work_location,manager,team' | 'employments,home_location,work_location,manager,team,company' | 'employments,home_location,work_location,manager,team,company,pay_group' | 'employments,home_location,work_location,manager,team,pay_group' | 'employments,home_location,work_location,pay_group' | 'employments,home_location,work_location,team' | 'employments,home_location,work_location,team,company' | 'employments,home_location,work_location,team,company,pay_group' | 'employments,home_location,work_location,team,pay_group' | 'employments,manager' | 'employments,manager,company' | 'employments,manager,company,pay_group' | 'employments,manager,pay_group' | 'employments,manager,team' | 'employments,manager,team,company' | 'employments,manager,team,company,pay_group' | 'employments,manager,team,pay_group' | 'employments,pay_group' | 'employments,team' | 'employments,team,company' | 'employments,team,company,pay_group' | 'employments,team,pay_group' | 'employments,work_location' | 'employments,work_location,company' | 'employments,work_location,company,pay_group' | 'employments,work_location,manager' | 'employments,work_location,manager,company' | 'employments,work_location,manager,company,pay_group' | 'employments,work_location,manager,pay_group' | 'employments,work_location,manager,team' | 'employments,work_location,manager,team,company' | 'employments,work_location,manager,team,company,pay_group' | 'employments,work_location,manager,team,pay_group' | 'employments,work_location,pay_group' | 'employments,work_location,team' | 'employments,work_location,team,company' | 'employments,work_location,team,company,pay_group' | 'employments,work_location,team,pay_group' | 'home_location' | 'home_location,company' | 'home_location,company,pay_group' | 'home_location,manager' | 'home_location,manager,company' | 'home_location,manager,company,pay_group' | 'home_location,manager,pay_group' | 'home_location,manager,team' | 'home_location,manager,team,company' | 'home_location,manager,team,company,pay_group' | 'home_location,manager,team,pay_group' | 'home_location,pay_group' | 'home_location,team' | 'home_location,team,company' | 'home_location,team,company,pay_group' | 'home_location,team,pay_group' | 'home_location,work_location' | 'home_location,work_location,company' | 'home_location,work_location,company,pay_group' | 'home_location,work_location,manager' | 'home_location,work_location,manager,company' | 'home_location,work_location,manager,company,pay_group' | 'home_location,work_location,manager,pay_group' | 'home_location,work_location,manager,team' | 'home_location,work_location,manager,team,company' | 'home_location,work_location,manager,team,company,pay_group' | 'home_location,work_location,manager,team,pay_group' | 'home_location,work_location,pay_group' | 'home_location,work_location,team' | 'home_location,work_location,team,company' | 'home_location,work_location,team,company,pay_group' | 'home_location,work_location,team,pay_group' | 'manager' | 'manager,company' | 'manager,company,pay_group' | 'manager,pay_group' | 'manager,team' | 'manager,team,company' | 'manager,team,company,pay_group' | 'manager,team,pay_group' | 'pay_group' | 'team' | 'team,company' | 'team,company,pay_group' | 'team,pay_group' | 'work_location' | 'work_location,company' | 'work_location,company,pay_group' | 'work_location,manager' | 'work_location,manager,company' | 'work_location,manager,company,pay_group' | 'work_location,manager,pay_group' | 'work_location,manager,team' | 'work_location,manager,team,company' | 'work_location,manager,team,company,pay_group' | 'work_location,manager,team,pay_group' | 'work_location,pay_group' | 'work_location,team' | 'work_location,team,company' | 'work_location,team,company,pay_group' | 'work_location,team,pay_group'");
                }
                if (include_remote_data !== undefined) {
                    localVarQueryParameters['include_remote_data'] = models_1.ObjectSerializer.serialize(include_remote_data, "boolean");
                }
                if (include_sensitive_fields !== undefined) {
                    localVarQueryParameters['include_sensitive_fields'] = models_1.ObjectSerializer.serialize(include_sensitive_fields, "boolean");
                }
                if (manager_id !== undefined) {
                    localVarQueryParameters['manager_id'] = models_1.ObjectSerializer.serialize(manager_id, "string");
                }
                if (modified_after !== undefined) {
                    localVarQueryParameters['modified_after'] = models_1.ObjectSerializer.serialize(modified_after, "Date");
                }
                if (modified_before !== undefined) {
                    localVarQueryParameters['modified_before'] = models_1.ObjectSerializer.serialize(modified_before, "Date");
                }
                if (page_size !== undefined) {
                    localVarQueryParameters['page_size'] = models_1.ObjectSerializer.serialize(page_size, "number");
                }
                if (pay_group_id !== undefined) {
                    localVarQueryParameters['pay_group_id'] = models_1.ObjectSerializer.serialize(pay_group_id, "string");
                }
                if (personal_email !== undefined) {
                    localVarQueryParameters['personal_email'] = models_1.ObjectSerializer.serialize(personal_email, "string");
                }
                if (remote_id !== undefined) {
                    localVarQueryParameters['remote_id'] = models_1.ObjectSerializer.serialize(remote_id, "string");
                }
                if (team_id !== undefined) {
                    localVarQueryParameters['team_id'] = models_1.ObjectSerializer.serialize(team_id, "string");
                }
                if (work_email !== undefined) {
                    localVarQueryParameters['work_email'] = models_1.ObjectSerializer.serialize(work_email, "string");
                }
                if (work_location_id !== undefined) {
                    localVarQueryParameters['work_location_id'] = models_1.ObjectSerializer.serialize(work_location_id, "string");
                }
                localVarHeaderParams['X-Account-Token'] = models_1.ObjectSerializer.serialize(x_account_token, "string");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
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
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            request_1.default(localVarRequestOptions, function (error, response, body) {
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
                    })];
            });
        });
    };
    EmployeesApi.prototype.employeesRetrieve = function (x_account_token, id, expand, include_remote_data, include_sensitive_fields, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_2, _i, _a, interceptor;
            var _this = this;
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/employees/{id}'
                    .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
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
                if (x_account_token === null || x_account_token === undefined) {
                    throw new Error('Required parameter x_account_token was null or undefined when calling employeesRetrieve.');
                }
                if (id === null || id === undefined) {
                    throw new Error('Required parameter id was null or undefined when calling employeesRetrieve.');
                }
                if (expand !== undefined) {
                    localVarQueryParameters['expand'] = models_1.ObjectSerializer.serialize(expand, "'company' | 'company,pay_group' | 'employments' | 'employments,company' | 'employments,company,pay_group' | 'employments,home_location' | 'employments,home_location,company' | 'employments,home_location,company,pay_group' | 'employments,home_location,manager' | 'employments,home_location,manager,company' | 'employments,home_location,manager,company,pay_group' | 'employments,home_location,manager,pay_group' | 'employments,home_location,manager,team' | 'employments,home_location,manager,team,company' | 'employments,home_location,manager,team,company,pay_group' | 'employments,home_location,manager,team,pay_group' | 'employments,home_location,pay_group' | 'employments,home_location,team' | 'employments,home_location,team,company' | 'employments,home_location,team,company,pay_group' | 'employments,home_location,team,pay_group' | 'employments,home_location,work_location' | 'employments,home_location,work_location,company' | 'employments,home_location,work_location,company,pay_group' | 'employments,home_location,work_location,manager' | 'employments,home_location,work_location,manager,company' | 'employments,home_location,work_location,manager,company,pay_group' | 'employments,home_location,work_location,manager,pay_group' | 'employments,home_location,work_location,manager,team' | 'employments,home_location,work_location,manager,team,company' | 'employments,home_location,work_location,manager,team,company,pay_group' | 'employments,home_location,work_location,manager,team,pay_group' | 'employments,home_location,work_location,pay_group' | 'employments,home_location,work_location,team' | 'employments,home_location,work_location,team,company' | 'employments,home_location,work_location,team,company,pay_group' | 'employments,home_location,work_location,team,pay_group' | 'employments,manager' | 'employments,manager,company' | 'employments,manager,company,pay_group' | 'employments,manager,pay_group' | 'employments,manager,team' | 'employments,manager,team,company' | 'employments,manager,team,company,pay_group' | 'employments,manager,team,pay_group' | 'employments,pay_group' | 'employments,team' | 'employments,team,company' | 'employments,team,company,pay_group' | 'employments,team,pay_group' | 'employments,work_location' | 'employments,work_location,company' | 'employments,work_location,company,pay_group' | 'employments,work_location,manager' | 'employments,work_location,manager,company' | 'employments,work_location,manager,company,pay_group' | 'employments,work_location,manager,pay_group' | 'employments,work_location,manager,team' | 'employments,work_location,manager,team,company' | 'employments,work_location,manager,team,company,pay_group' | 'employments,work_location,manager,team,pay_group' | 'employments,work_location,pay_group' | 'employments,work_location,team' | 'employments,work_location,team,company' | 'employments,work_location,team,company,pay_group' | 'employments,work_location,team,pay_group' | 'home_location' | 'home_location,company' | 'home_location,company,pay_group' | 'home_location,manager' | 'home_location,manager,company' | 'home_location,manager,company,pay_group' | 'home_location,manager,pay_group' | 'home_location,manager,team' | 'home_location,manager,team,company' | 'home_location,manager,team,company,pay_group' | 'home_location,manager,team,pay_group' | 'home_location,pay_group' | 'home_location,team' | 'home_location,team,company' | 'home_location,team,company,pay_group' | 'home_location,team,pay_group' | 'home_location,work_location' | 'home_location,work_location,company' | 'home_location,work_location,company,pay_group' | 'home_location,work_location,manager' | 'home_location,work_location,manager,company' | 'home_location,work_location,manager,company,pay_group' | 'home_location,work_location,manager,pay_group' | 'home_location,work_location,manager,team' | 'home_location,work_location,manager,team,company' | 'home_location,work_location,manager,team,company,pay_group' | 'home_location,work_location,manager,team,pay_group' | 'home_location,work_location,pay_group' | 'home_location,work_location,team' | 'home_location,work_location,team,company' | 'home_location,work_location,team,company,pay_group' | 'home_location,work_location,team,pay_group' | 'manager' | 'manager,company' | 'manager,company,pay_group' | 'manager,pay_group' | 'manager,team' | 'manager,team,company' | 'manager,team,company,pay_group' | 'manager,team,pay_group' | 'pay_group' | 'team' | 'team,company' | 'team,company,pay_group' | 'team,pay_group' | 'work_location' | 'work_location,company' | 'work_location,company,pay_group' | 'work_location,manager' | 'work_location,manager,company' | 'work_location,manager,company,pay_group' | 'work_location,manager,pay_group' | 'work_location,manager,team' | 'work_location,manager,team,company' | 'work_location,manager,team,company,pay_group' | 'work_location,manager,team,pay_group' | 'work_location,pay_group' | 'work_location,team' | 'work_location,team,company' | 'work_location,team,company,pay_group' | 'work_location,team,pay_group'");
                }
                if (include_remote_data !== undefined) {
                    localVarQueryParameters['include_remote_data'] = models_1.ObjectSerializer.serialize(include_remote_data, "boolean");
                }
                if (include_sensitive_fields !== undefined) {
                    localVarQueryParameters['include_sensitive_fields'] = models_1.ObjectSerializer.serialize(include_sensitive_fields, "boolean");
                }
                localVarHeaderParams['X-Account-Token'] = models_1.ObjectSerializer.serialize(x_account_token, "string");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.tokenAuth.apiKey) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.tokenAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_2 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_2(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            request_1.default(localVarRequestOptions, function (error, response, body) {
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
                    })];
            });
        });
    };
    return EmployeesApi;
}());
exports.EmployeesApi = EmployeesApi;
//# sourceMappingURL=employeesApi.js.map