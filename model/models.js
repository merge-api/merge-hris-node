"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
exports.__esModule = true;
exports.VoidAuth = exports.OAuth = exports.ApiKeyAuth = exports.HttpBearerAuth = exports.HttpBasicAuth = exports.ObjectSerializer = void 0;
__exportStar(require("./accountIntegration"), exports);
__exportStar(require("./accountToken"), exports);
__exportStar(require("./availableActions"), exports);
__exportStar(require("./benefit"), exports);
__exportStar(require("./benefitPlanTypeEnum"), exports);
__exportStar(require("./company"), exports);
__exportStar(require("./countryEnum"), exports);
__exportStar(require("./dataPassthroughRequest"), exports);
__exportStar(require("./deduction"), exports);
__exportStar(require("./earning"), exports);
__exportStar(require("./employee"), exports);
__exportStar(require("./employeePayrollRun"), exports);
__exportStar(require("./employeeRequest"), exports);
__exportStar(require("./employment"), exports);
__exportStar(require("./employmentRequest"), exports);
__exportStar(require("./employmentStatusEnum"), exports);
__exportStar(require("./employmentTypeEnum"), exports);
__exportStar(require("./endUserDetailsRequest"), exports);
__exportStar(require("./ethnicityEnum"), exports);
__exportStar(require("./flsaStatusEnum"), exports);
__exportStar(require("./genderEnum"), exports);
__exportStar(require("./generateRemoteKeyRequest"), exports);
__exportStar(require("./linkToken"), exports);
__exportStar(require("./location"), exports);
__exportStar(require("./maritalStatusEnum"), exports);
__exportStar(require("./methodEnum"), exports);
__exportStar(require("./modelOperation"), exports);
__exportStar(require("./paginatedBenefitList"), exports);
__exportStar(require("./paginatedCompanyList"), exports);
__exportStar(require("./paginatedEmployeeList"), exports);
__exportStar(require("./paginatedEmployeePayrollRunList"), exports);
__exportStar(require("./paginatedEmploymentList"), exports);
__exportStar(require("./paginatedLocationList"), exports);
__exportStar(require("./paginatedPayrollRunList"), exports);
__exportStar(require("./paginatedSyncStatusList"), exports);
__exportStar(require("./paginatedTeamList"), exports);
__exportStar(require("./paginatedTimeOffBalanceList"), exports);
__exportStar(require("./paginatedTimeOffList"), exports);
__exportStar(require("./payCurrencyEnum"), exports);
__exportStar(require("./payFrequencyEnum"), exports);
__exportStar(require("./payPeriodEnum"), exports);
__exportStar(require("./payrollRun"), exports);
__exportStar(require("./remoteData"), exports);
__exportStar(require("./remoteDataRequest"), exports);
__exportStar(require("./remoteKey"), exports);
__exportStar(require("./remoteKeyForRegenerationRequest"), exports);
__exportStar(require("./remoteResponse"), exports);
__exportStar(require("./requestTypeEnum"), exports);
__exportStar(require("./runStateEnum"), exports);
__exportStar(require("./runTypeEnum"), exports);
__exportStar(require("./syncStatus"), exports);
__exportStar(require("./syncStatusStatusEnum"), exports);
__exportStar(require("./tax"), exports);
__exportStar(require("./team"), exports);
__exportStar(require("./timeOff"), exports);
__exportStar(require("./timeOffBalance"), exports);
__exportStar(require("./timeOffStatusEnum"), exports);
__exportStar(require("./typeEnum"), exports);
__exportStar(require("./unitsEnum"), exports);
var accountIntegration_1 = require("./accountIntegration");
var accountToken_1 = require("./accountToken");
var availableActions_1 = require("./availableActions");
var benefit_1 = require("./benefit");
var benefitPlanTypeEnum_1 = require("./benefitPlanTypeEnum");
var company_1 = require("./company");
var countryEnum_1 = require("./countryEnum");
var dataPassthroughRequest_1 = require("./dataPassthroughRequest");
var deduction_1 = require("./deduction");
var earning_1 = require("./earning");
var employee_1 = require("./employee");
var employeePayrollRun_1 = require("./employeePayrollRun");
var employeeRequest_1 = require("./employeeRequest");
var employment_1 = require("./employment");
var employmentRequest_1 = require("./employmentRequest");
var employmentStatusEnum_1 = require("./employmentStatusEnum");
var employmentTypeEnum_1 = require("./employmentTypeEnum");
var endUserDetailsRequest_1 = require("./endUserDetailsRequest");
var ethnicityEnum_1 = require("./ethnicityEnum");
var flsaStatusEnum_1 = require("./flsaStatusEnum");
var genderEnum_1 = require("./genderEnum");
var generateRemoteKeyRequest_1 = require("./generateRemoteKeyRequest");
var linkToken_1 = require("./linkToken");
var location_1 = require("./location");
var maritalStatusEnum_1 = require("./maritalStatusEnum");
var methodEnum_1 = require("./methodEnum");
var modelOperation_1 = require("./modelOperation");
var paginatedBenefitList_1 = require("./paginatedBenefitList");
var paginatedCompanyList_1 = require("./paginatedCompanyList");
var paginatedEmployeeList_1 = require("./paginatedEmployeeList");
var paginatedEmployeePayrollRunList_1 = require("./paginatedEmployeePayrollRunList");
var paginatedEmploymentList_1 = require("./paginatedEmploymentList");
var paginatedLocationList_1 = require("./paginatedLocationList");
var paginatedPayrollRunList_1 = require("./paginatedPayrollRunList");
var paginatedSyncStatusList_1 = require("./paginatedSyncStatusList");
var paginatedTeamList_1 = require("./paginatedTeamList");
var paginatedTimeOffBalanceList_1 = require("./paginatedTimeOffBalanceList");
var paginatedTimeOffList_1 = require("./paginatedTimeOffList");
var payCurrencyEnum_1 = require("./payCurrencyEnum");
var payFrequencyEnum_1 = require("./payFrequencyEnum");
var payPeriodEnum_1 = require("./payPeriodEnum");
var payrollRun_1 = require("./payrollRun");
var remoteData_1 = require("./remoteData");
var remoteDataRequest_1 = require("./remoteDataRequest");
var remoteKey_1 = require("./remoteKey");
var remoteKeyForRegenerationRequest_1 = require("./remoteKeyForRegenerationRequest");
var remoteResponse_1 = require("./remoteResponse");
var requestTypeEnum_1 = require("./requestTypeEnum");
var runStateEnum_1 = require("./runStateEnum");
var runTypeEnum_1 = require("./runTypeEnum");
var syncStatus_1 = require("./syncStatus");
var syncStatusStatusEnum_1 = require("./syncStatusStatusEnum");
var tax_1 = require("./tax");
var team_1 = require("./team");
var timeOff_1 = require("./timeOff");
var timeOffBalance_1 = require("./timeOffBalance");
var timeOffStatusEnum_1 = require("./timeOffStatusEnum");
var typeEnum_1 = require("./typeEnum");
var unitsEnum_1 = require("./unitsEnum");
/* tslint:disable:no-unused-variable */
var primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any"
];
var enumsMap = {
    "AccountIntegration.CategoriesEnum": accountIntegration_1.AccountIntegration.CategoriesEnum,
    "BenefitPlanTypeEnum": benefitPlanTypeEnum_1.BenefitPlanTypeEnum,
    "CountryEnum": countryEnum_1.CountryEnum,
    "EmploymentStatusEnum": employmentStatusEnum_1.EmploymentStatusEnum,
    "EmploymentTypeEnum": employmentTypeEnum_1.EmploymentTypeEnum,
    "EndUserDetailsRequest.CategoriesEnum": endUserDetailsRequest_1.EndUserDetailsRequest.CategoriesEnum,
    "EthnicityEnum": ethnicityEnum_1.EthnicityEnum,
    "FlsaStatusEnum": flsaStatusEnum_1.FlsaStatusEnum,
    "GenderEnum": genderEnum_1.GenderEnum,
    "MaritalStatusEnum": maritalStatusEnum_1.MaritalStatusEnum,
    "MethodEnum": methodEnum_1.MethodEnum,
    "PayCurrencyEnum": payCurrencyEnum_1.PayCurrencyEnum,
    "PayFrequencyEnum": payFrequencyEnum_1.PayFrequencyEnum,
    "PayPeriodEnum": payPeriodEnum_1.PayPeriodEnum,
    "RequestTypeEnum": requestTypeEnum_1.RequestTypeEnum,
    "RunStateEnum": runStateEnum_1.RunStateEnum,
    "RunTypeEnum": runTypeEnum_1.RunTypeEnum,
    "SyncStatusStatusEnum": syncStatusStatusEnum_1.SyncStatusStatusEnum,
    "TimeOffStatusEnum": timeOffStatusEnum_1.TimeOffStatusEnum,
    "TypeEnum": typeEnum_1.TypeEnum,
    "UnitsEnum": unitsEnum_1.UnitsEnum
};
var typeMap = {
    "AccountIntegration": accountIntegration_1.AccountIntegration,
    "AccountToken": accountToken_1.AccountToken,
    "AvailableActions": availableActions_1.AvailableActions,
    "Benefit": benefit_1.Benefit,
    "Company": company_1.Company,
    "DataPassthroughRequest": dataPassthroughRequest_1.DataPassthroughRequest,
    "Deduction": deduction_1.Deduction,
    "Earning": earning_1.Earning,
    "Employee": employee_1.Employee,
    "EmployeePayrollRun": employeePayrollRun_1.EmployeePayrollRun,
    "EmployeeRequest": employeeRequest_1.EmployeeRequest,
    "Employment": employment_1.Employment,
    "EmploymentRequest": employmentRequest_1.EmploymentRequest,
    "EndUserDetailsRequest": endUserDetailsRequest_1.EndUserDetailsRequest,
    "GenerateRemoteKeyRequest": generateRemoteKeyRequest_1.GenerateRemoteKeyRequest,
    "LinkToken": linkToken_1.LinkToken,
    "Location": location_1.Location,
    "ModelOperation": modelOperation_1.ModelOperation,
    "PaginatedBenefitList": paginatedBenefitList_1.PaginatedBenefitList,
    "PaginatedCompanyList": paginatedCompanyList_1.PaginatedCompanyList,
    "PaginatedEmployeeList": paginatedEmployeeList_1.PaginatedEmployeeList,
    "PaginatedEmployeePayrollRunList": paginatedEmployeePayrollRunList_1.PaginatedEmployeePayrollRunList,
    "PaginatedEmploymentList": paginatedEmploymentList_1.PaginatedEmploymentList,
    "PaginatedLocationList": paginatedLocationList_1.PaginatedLocationList,
    "PaginatedPayrollRunList": paginatedPayrollRunList_1.PaginatedPayrollRunList,
    "PaginatedSyncStatusList": paginatedSyncStatusList_1.PaginatedSyncStatusList,
    "PaginatedTeamList": paginatedTeamList_1.PaginatedTeamList,
    "PaginatedTimeOffBalanceList": paginatedTimeOffBalanceList_1.PaginatedTimeOffBalanceList,
    "PaginatedTimeOffList": paginatedTimeOffList_1.PaginatedTimeOffList,
    "PayrollRun": payrollRun_1.PayrollRun,
    "RemoteData": remoteData_1.RemoteData,
    "RemoteDataRequest": remoteDataRequest_1.RemoteDataRequest,
    "RemoteKey": remoteKey_1.RemoteKey,
    "RemoteKeyForRegenerationRequest": remoteKeyForRegenerationRequest_1.RemoteKeyForRegenerationRequest,
    "RemoteResponse": remoteResponse_1.RemoteResponse,
    "SyncStatus": syncStatus_1.SyncStatus,
    "Tax": tax_1.Tax,
    "Team": team_1.Team,
    "TimeOff": timeOff_1.TimeOff,
    "TimeOffBalance": timeOffBalance_1.TimeOffBalance
};
var ObjectSerializer = /** @class */ (function () {
    function ObjectSerializer() {
    }
    ObjectSerializer.findCorrectType = function (data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }
            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }
            // Check the discriminator
            var discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType; // use the type given in the discriminator
                    }
                    else {
                        return expectedType; // discriminator did not map to a type
                    }
                }
                else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    };
    ObjectSerializer.serialize = function (data, type) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            var subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            var transformedData = [];
            for (var index = 0; index < data.length; index++) {
                var datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return data.toISOString();
        }
        else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }
            // Get the actual type of this object
            type = this.findCorrectType(data, type);
            // get the map for the correct type.
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            var instance = {};
            for (var index = 0; index < attributeTypes.length; index++) {
                var attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    };
    ObjectSerializer.deserialize = function (data, type) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            var subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            var transformedData = [];
            for (var index = 0; index < data.length; index++) {
                var datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return new Date(data);
        }
        else {
            if (enumsMap[type]) { // is Enum
                return data;
            }
            if (!typeMap[type]) { // dont know the type
                return data;
            }
            var instance = new typeMap[type]();
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            for (var index = 0; index < attributeTypes.length; index++) {
                var attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    };
    return ObjectSerializer;
}());
exports.ObjectSerializer = ObjectSerializer;
var HttpBasicAuth = /** @class */ (function () {
    function HttpBasicAuth() {
        this.username = '';
        this.password = '';
    }
    HttpBasicAuth.prototype.applyToRequest = function (requestOptions) {
        requestOptions.auth = {
            username: this.username, password: this.password
        };
    };
    return HttpBasicAuth;
}());
exports.HttpBasicAuth = HttpBasicAuth;
var HttpBearerAuth = /** @class */ (function () {
    function HttpBearerAuth() {
        this.accessToken = '';
    }
    HttpBearerAuth.prototype.applyToRequest = function (requestOptions) {
        if (requestOptions && requestOptions.headers) {
            var accessToken = typeof this.accessToken === 'function'
                ? this.accessToken()
                : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    };
    return HttpBearerAuth;
}());
exports.HttpBearerAuth = HttpBearerAuth;
var ApiKeyAuth = /** @class */ (function () {
    function ApiKeyAuth(location, paramName) {
        this.location = location;
        this.paramName = paramName;
        this.apiKey = '';
    }
    ApiKeyAuth.prototype.applyToRequest = function (requestOptions) {
        if (this.location == "query") {
            requestOptions.qs[this.paramName] = this.apiKey;
        }
        else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        }
        else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    };
    return ApiKeyAuth;
}());
exports.ApiKeyAuth = ApiKeyAuth;
var OAuth = /** @class */ (function () {
    function OAuth() {
        this.accessToken = '';
    }
    OAuth.prototype.applyToRequest = function (requestOptions) {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    };
    return OAuth;
}());
exports.OAuth = OAuth;
var VoidAuth = /** @class */ (function () {
    function VoidAuth() {
        this.username = '';
        this.password = '';
    }
    VoidAuth.prototype.applyToRequest = function (_) {
        // Do nothing
    };
    return VoidAuth;
}());
exports.VoidAuth = VoidAuth;