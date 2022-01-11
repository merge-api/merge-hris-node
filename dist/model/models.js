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
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoidAuth = exports.OAuth = exports.ApiKeyAuth = exports.HttpBearerAuth = exports.HttpBasicAuth = exports.ObjectSerializer = void 0;
__exportStar(require("./accountDetails"), exports);
__exportStar(require("./accountDetailsAndActions"), exports);
__exportStar(require("./accountDetailsAndActionsIntegration"), exports);
__exportStar(require("./accountDetailsAndActionsStatusEnum"), exports);
__exportStar(require("./accountIntegration"), exports);
__exportStar(require("./accountToken"), exports);
__exportStar(require("./accountTypeEnum"), exports);
__exportStar(require("./availableActions"), exports);
__exportStar(require("./bankInfo"), exports);
__exportStar(require("./benefit"), exports);
__exportStar(require("./benefitPlanTypeEnum"), exports);
__exportStar(require("./categoriesEnum"), exports);
__exportStar(require("./categoryEnum"), exports);
__exportStar(require("./company"), exports);
__exportStar(require("./countryEnum"), exports);
__exportStar(require("./dataPassthroughRequest"), exports);
__exportStar(require("./deduction"), exports);
__exportStar(require("./earning"), exports);
__exportStar(require("./employee"), exports);
__exportStar(require("./employeePayrollRun"), exports);
__exportStar(require("./employment"), exports);
__exportStar(require("./employmentStatusEnum"), exports);
__exportStar(require("./employmentTypeEnum"), exports);
__exportStar(require("./endUserDetailsRequest"), exports);
__exportStar(require("./errorValidationProblem"), exports);
__exportStar(require("./ethnicityEnum"), exports);
__exportStar(require("./flsaStatusEnum"), exports);
__exportStar(require("./genderEnum"), exports);
__exportStar(require("./generateRemoteKeyRequest"), exports);
__exportStar(require("./issue"), exports);
__exportStar(require("./issueStatusEnum"), exports);
__exportStar(require("./linkToken"), exports);
__exportStar(require("./location"), exports);
__exportStar(require("./maritalStatusEnum"), exports);
__exportStar(require("./methodEnum"), exports);
__exportStar(require("./modelOperation"), exports);
__exportStar(require("./paginatedAccountDetailsAndActionsList"), exports);
__exportStar(require("./paginatedBankInfoList"), exports);
__exportStar(require("./paginatedBenefitList"), exports);
__exportStar(require("./paginatedCompanyList"), exports);
__exportStar(require("./paginatedDeductionList"), exports);
__exportStar(require("./paginatedEmployeeList"), exports);
__exportStar(require("./paginatedEmployeePayrollRunList"), exports);
__exportStar(require("./paginatedEmploymentList"), exports);
__exportStar(require("./paginatedIssueList"), exports);
__exportStar(require("./paginatedLocationList"), exports);
__exportStar(require("./paginatedPayGroupList"), exports);
__exportStar(require("./paginatedPayrollRunList"), exports);
__exportStar(require("./paginatedSyncStatusList"), exports);
__exportStar(require("./paginatedTeamList"), exports);
__exportStar(require("./paginatedTimeOffBalanceList"), exports);
__exportStar(require("./paginatedTimeOffList"), exports);
__exportStar(require("./payCurrencyEnum"), exports);
__exportStar(require("./payFrequencyEnum"), exports);
__exportStar(require("./payGroup"), exports);
__exportStar(require("./payPeriodEnum"), exports);
__exportStar(require("./payrollRun"), exports);
__exportStar(require("./policyTypeEnum"), exports);
__exportStar(require("./remoteData"), exports);
__exportStar(require("./remoteDataRequest"), exports);
__exportStar(require("./remoteKey"), exports);
__exportStar(require("./remoteKeyForRegenerationRequest"), exports);
__exportStar(require("./remoteResponse"), exports);
__exportStar(require("./requestFormatEnum"), exports);
__exportStar(require("./requestTypeEnum"), exports);
__exportStar(require("./runStateEnum"), exports);
__exportStar(require("./runTypeEnum"), exports);
__exportStar(require("./syncStatus"), exports);
__exportStar(require("./syncStatusStatusEnum"), exports);
__exportStar(require("./tax"), exports);
__exportStar(require("./team"), exports);
__exportStar(require("./timeOff"), exports);
__exportStar(require("./timeOffBalance"), exports);
__exportStar(require("./timeOffEndpointRequest"), exports);
__exportStar(require("./timeOffRequest"), exports);
__exportStar(require("./timeOffResponse"), exports);
__exportStar(require("./timeOffStatusEnum"), exports);
__exportStar(require("./typeEnum"), exports);
__exportStar(require("./unitsEnum"), exports);
__exportStar(require("./validationProblem"), exports);
__exportStar(require("./validationProblemSource"), exports);
__exportStar(require("./warningValidationProblem"), exports);
var accountDetails_1 = require("./accountDetails");
var accountDetailsAndActions_1 = require("./accountDetailsAndActions");
var accountDetailsAndActionsIntegration_1 = require("./accountDetailsAndActionsIntegration");
var accountDetailsAndActionsStatusEnum_1 = require("./accountDetailsAndActionsStatusEnum");
var accountIntegration_1 = require("./accountIntegration");
var accountToken_1 = require("./accountToken");
var accountTypeEnum_1 = require("./accountTypeEnum");
var availableActions_1 = require("./availableActions");
var bankInfo_1 = require("./bankInfo");
var benefit_1 = require("./benefit");
var benefitPlanTypeEnum_1 = require("./benefitPlanTypeEnum");
var categoriesEnum_1 = require("./categoriesEnum");
var categoryEnum_1 = require("./categoryEnum");
var company_1 = require("./company");
var countryEnum_1 = require("./countryEnum");
var dataPassthroughRequest_1 = require("./dataPassthroughRequest");
var deduction_1 = require("./deduction");
var earning_1 = require("./earning");
var employee_1 = require("./employee");
var employeePayrollRun_1 = require("./employeePayrollRun");
var employment_1 = require("./employment");
var employmentStatusEnum_1 = require("./employmentStatusEnum");
var employmentTypeEnum_1 = require("./employmentTypeEnum");
var endUserDetailsRequest_1 = require("./endUserDetailsRequest");
var errorValidationProblem_1 = require("./errorValidationProblem");
var ethnicityEnum_1 = require("./ethnicityEnum");
var flsaStatusEnum_1 = require("./flsaStatusEnum");
var genderEnum_1 = require("./genderEnum");
var generateRemoteKeyRequest_1 = require("./generateRemoteKeyRequest");
var issue_1 = require("./issue");
var issueStatusEnum_1 = require("./issueStatusEnum");
var linkToken_1 = require("./linkToken");
var location_1 = require("./location");
var maritalStatusEnum_1 = require("./maritalStatusEnum");
var methodEnum_1 = require("./methodEnum");
var modelOperation_1 = require("./modelOperation");
var paginatedAccountDetailsAndActionsList_1 = require("./paginatedAccountDetailsAndActionsList");
var paginatedBankInfoList_1 = require("./paginatedBankInfoList");
var paginatedBenefitList_1 = require("./paginatedBenefitList");
var paginatedCompanyList_1 = require("./paginatedCompanyList");
var paginatedDeductionList_1 = require("./paginatedDeductionList");
var paginatedEmployeeList_1 = require("./paginatedEmployeeList");
var paginatedEmployeePayrollRunList_1 = require("./paginatedEmployeePayrollRunList");
var paginatedEmploymentList_1 = require("./paginatedEmploymentList");
var paginatedIssueList_1 = require("./paginatedIssueList");
var paginatedLocationList_1 = require("./paginatedLocationList");
var paginatedPayGroupList_1 = require("./paginatedPayGroupList");
var paginatedPayrollRunList_1 = require("./paginatedPayrollRunList");
var paginatedSyncStatusList_1 = require("./paginatedSyncStatusList");
var paginatedTeamList_1 = require("./paginatedTeamList");
var paginatedTimeOffBalanceList_1 = require("./paginatedTimeOffBalanceList");
var paginatedTimeOffList_1 = require("./paginatedTimeOffList");
var payCurrencyEnum_1 = require("./payCurrencyEnum");
var payFrequencyEnum_1 = require("./payFrequencyEnum");
var payGroup_1 = require("./payGroup");
var payPeriodEnum_1 = require("./payPeriodEnum");
var payrollRun_1 = require("./payrollRun");
var policyTypeEnum_1 = require("./policyTypeEnum");
var remoteData_1 = require("./remoteData");
var remoteDataRequest_1 = require("./remoteDataRequest");
var remoteKey_1 = require("./remoteKey");
var remoteKeyForRegenerationRequest_1 = require("./remoteKeyForRegenerationRequest");
var remoteResponse_1 = require("./remoteResponse");
var requestFormatEnum_1 = require("./requestFormatEnum");
var requestTypeEnum_1 = require("./requestTypeEnum");
var runStateEnum_1 = require("./runStateEnum");
var runTypeEnum_1 = require("./runTypeEnum");
var syncStatus_1 = require("./syncStatus");
var syncStatusStatusEnum_1 = require("./syncStatusStatusEnum");
var tax_1 = require("./tax");
var team_1 = require("./team");
var timeOff_1 = require("./timeOff");
var timeOffBalance_1 = require("./timeOffBalance");
var timeOffEndpointRequest_1 = require("./timeOffEndpointRequest");
var timeOffRequest_1 = require("./timeOffRequest");
var timeOffResponse_1 = require("./timeOffResponse");
var timeOffStatusEnum_1 = require("./timeOffStatusEnum");
var typeEnum_1 = require("./typeEnum");
var unitsEnum_1 = require("./unitsEnum");
var validationProblemSource_1 = require("./validationProblemSource");
var warningValidationProblem_1 = require("./warningValidationProblem");
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
    "AccountDetailsAndActionsStatusEnum": accountDetailsAndActionsStatusEnum_1.AccountDetailsAndActionsStatusEnum,
    "AccountTypeEnum": accountTypeEnum_1.AccountTypeEnum,
    "BenefitPlanTypeEnum": benefitPlanTypeEnum_1.BenefitPlanTypeEnum,
    "CategoriesEnum": categoriesEnum_1.CategoriesEnum,
    "CategoryEnum": categoryEnum_1.CategoryEnum,
    "CountryEnum": countryEnum_1.CountryEnum,
    "EmploymentStatusEnum": employmentStatusEnum_1.EmploymentStatusEnum,
    "EmploymentTypeEnum": employmentTypeEnum_1.EmploymentTypeEnum,
    "EthnicityEnum": ethnicityEnum_1.EthnicityEnum,
    "FlsaStatusEnum": flsaStatusEnum_1.FlsaStatusEnum,
    "GenderEnum": genderEnum_1.GenderEnum,
    "IssueStatusEnum": issueStatusEnum_1.IssueStatusEnum,
    "MaritalStatusEnum": maritalStatusEnum_1.MaritalStatusEnum,
    "MethodEnum": methodEnum_1.MethodEnum,
    "PayCurrencyEnum": payCurrencyEnum_1.PayCurrencyEnum,
    "PayFrequencyEnum": payFrequencyEnum_1.PayFrequencyEnum,
    "PayPeriodEnum": payPeriodEnum_1.PayPeriodEnum,
    "PolicyTypeEnum": policyTypeEnum_1.PolicyTypeEnum,
    "RequestFormatEnum": requestFormatEnum_1.RequestFormatEnum,
    "RequestTypeEnum": requestTypeEnum_1.RequestTypeEnum,
    "RunStateEnum": runStateEnum_1.RunStateEnum,
    "RunTypeEnum": runTypeEnum_1.RunTypeEnum,
    "SyncStatusStatusEnum": syncStatusStatusEnum_1.SyncStatusStatusEnum,
    "TimeOffStatusEnum": timeOffStatusEnum_1.TimeOffStatusEnum,
    "TypeEnum": typeEnum_1.TypeEnum,
    "UnitsEnum": unitsEnum_1.UnitsEnum,
};
var typeMap = {
    "AccountDetails": accountDetails_1.AccountDetails,
    "AccountDetailsAndActions": accountDetailsAndActions_1.AccountDetailsAndActions,
    "AccountDetailsAndActionsIntegration": accountDetailsAndActionsIntegration_1.AccountDetailsAndActionsIntegration,
    "AccountIntegration": accountIntegration_1.AccountIntegration,
    "AccountToken": accountToken_1.AccountToken,
    "AvailableActions": availableActions_1.AvailableActions,
    "BankInfo": bankInfo_1.BankInfo,
    "Benefit": benefit_1.Benefit,
    "Company": company_1.Company,
    "DataPassthroughRequest": dataPassthroughRequest_1.DataPassthroughRequest,
    "Deduction": deduction_1.Deduction,
    "Earning": earning_1.Earning,
    "Employee": employee_1.Employee,
    "EmployeePayrollRun": employeePayrollRun_1.EmployeePayrollRun,
    "Employment": employment_1.Employment,
    "EndUserDetailsRequest": endUserDetailsRequest_1.EndUserDetailsRequest,
    "ErrorValidationProblem": errorValidationProblem_1.ErrorValidationProblem,
    "GenerateRemoteKeyRequest": generateRemoteKeyRequest_1.GenerateRemoteKeyRequest,
    "Issue": issue_1.Issue,
    "LinkToken": linkToken_1.LinkToken,
    "Location": location_1.Location,
    "ModelOperation": modelOperation_1.ModelOperation,
    "PaginatedAccountDetailsAndActionsList": paginatedAccountDetailsAndActionsList_1.PaginatedAccountDetailsAndActionsList,
    "PaginatedBankInfoList": paginatedBankInfoList_1.PaginatedBankInfoList,
    "PaginatedBenefitList": paginatedBenefitList_1.PaginatedBenefitList,
    "PaginatedCompanyList": paginatedCompanyList_1.PaginatedCompanyList,
    "PaginatedDeductionList": paginatedDeductionList_1.PaginatedDeductionList,
    "PaginatedEmployeeList": paginatedEmployeeList_1.PaginatedEmployeeList,
    "PaginatedEmployeePayrollRunList": paginatedEmployeePayrollRunList_1.PaginatedEmployeePayrollRunList,
    "PaginatedEmploymentList": paginatedEmploymentList_1.PaginatedEmploymentList,
    "PaginatedIssueList": paginatedIssueList_1.PaginatedIssueList,
    "PaginatedLocationList": paginatedLocationList_1.PaginatedLocationList,
    "PaginatedPayGroupList": paginatedPayGroupList_1.PaginatedPayGroupList,
    "PaginatedPayrollRunList": paginatedPayrollRunList_1.PaginatedPayrollRunList,
    "PaginatedSyncStatusList": paginatedSyncStatusList_1.PaginatedSyncStatusList,
    "PaginatedTeamList": paginatedTeamList_1.PaginatedTeamList,
    "PaginatedTimeOffBalanceList": paginatedTimeOffBalanceList_1.PaginatedTimeOffBalanceList,
    "PaginatedTimeOffList": paginatedTimeOffList_1.PaginatedTimeOffList,
    "PayGroup": payGroup_1.PayGroup,
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
    "TimeOffBalance": timeOffBalance_1.TimeOffBalance,
    "TimeOffEndpointRequest": timeOffEndpointRequest_1.TimeOffEndpointRequest,
    "TimeOffRequest": timeOffRequest_1.TimeOffRequest,
    "TimeOffResponse": timeOffResponse_1.TimeOffResponse,
    "ValidationProblemSource": validationProblemSource_1.ValidationProblemSource,
    "WarningValidationProblem": warningValidationProblem_1.WarningValidationProblem,
};
var ObjectSerializer = (function () {
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
                return expectedType;
            }
            var discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType;
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType;
                    }
                    else {
                        return expectedType;
                    }
                }
                else {
                    return expectedType;
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
        else if (type.lastIndexOf("Array<", 0) === 0) {
            var subType = type.replace("Array<", "");
            subType = subType.substring(0, subType.length - 1);
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
            if (!typeMap[type]) {
                return data;
            }
            type = this.findCorrectType(data, type);
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
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            var subType = type.replace("Array<", "");
            subType = subType.substring(0, subType.length - 1);
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
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) {
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
var HttpBasicAuth = (function () {
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
var HttpBearerAuth = (function () {
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
var ApiKeyAuth = (function () {
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
var OAuth = (function () {
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
var VoidAuth = (function () {
    function VoidAuth() {
        this.username = '';
        this.password = '';
    }
    VoidAuth.prototype.applyToRequest = function (_) {
    };
    return VoidAuth;
}());
exports.VoidAuth = VoidAuth;
//# sourceMappingURL=models.js.map