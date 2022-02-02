"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
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
__exportStar(require("./ignoreCommonModelRequest"), exports);
__exportStar(require("./issue"), exports);
__exportStar(require("./issueStatusEnum"), exports);
__exportStar(require("./linkToken"), exports);
__exportStar(require("./location"), exports);
__exportStar(require("./locationTypeEnum"), exports);
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
__exportStar(require("./reasonEnum"), exports);
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
__exportStar(require("./validationProblemSource"), exports);
__exportStar(require("./warningValidationProblem"), exports);
const accountDetails_1 = require("./accountDetails");
const accountDetailsAndActions_1 = require("./accountDetailsAndActions");
const accountDetailsAndActionsIntegration_1 = require("./accountDetailsAndActionsIntegration");
const accountDetailsAndActionsStatusEnum_1 = require("./accountDetailsAndActionsStatusEnum");
const accountIntegration_1 = require("./accountIntegration");
const accountToken_1 = require("./accountToken");
const accountTypeEnum_1 = require("./accountTypeEnum");
const availableActions_1 = require("./availableActions");
const bankInfo_1 = require("./bankInfo");
const benefit_1 = require("./benefit");
const benefitPlanTypeEnum_1 = require("./benefitPlanTypeEnum");
const categoriesEnum_1 = require("./categoriesEnum");
const categoryEnum_1 = require("./categoryEnum");
const company_1 = require("./company");
const countryEnum_1 = require("./countryEnum");
const dataPassthroughRequest_1 = require("./dataPassthroughRequest");
const deduction_1 = require("./deduction");
const earning_1 = require("./earning");
const employee_1 = require("./employee");
const employeePayrollRun_1 = require("./employeePayrollRun");
const employment_1 = require("./employment");
const employmentStatusEnum_1 = require("./employmentStatusEnum");
const employmentTypeEnum_1 = require("./employmentTypeEnum");
const endUserDetailsRequest_1 = require("./endUserDetailsRequest");
const errorValidationProblem_1 = require("./errorValidationProblem");
const ethnicityEnum_1 = require("./ethnicityEnum");
const flsaStatusEnum_1 = require("./flsaStatusEnum");
const genderEnum_1 = require("./genderEnum");
const generateRemoteKeyRequest_1 = require("./generateRemoteKeyRequest");
const ignoreCommonModelRequest_1 = require("./ignoreCommonModelRequest");
const issue_1 = require("./issue");
const issueStatusEnum_1 = require("./issueStatusEnum");
const linkToken_1 = require("./linkToken");
const location_1 = require("./location");
const locationTypeEnum_1 = require("./locationTypeEnum");
const maritalStatusEnum_1 = require("./maritalStatusEnum");
const methodEnum_1 = require("./methodEnum");
const modelOperation_1 = require("./modelOperation");
const paginatedAccountDetailsAndActionsList_1 = require("./paginatedAccountDetailsAndActionsList");
const paginatedBankInfoList_1 = require("./paginatedBankInfoList");
const paginatedBenefitList_1 = require("./paginatedBenefitList");
const paginatedCompanyList_1 = require("./paginatedCompanyList");
const paginatedDeductionList_1 = require("./paginatedDeductionList");
const paginatedEmployeeList_1 = require("./paginatedEmployeeList");
const paginatedEmployeePayrollRunList_1 = require("./paginatedEmployeePayrollRunList");
const paginatedEmploymentList_1 = require("./paginatedEmploymentList");
const paginatedIssueList_1 = require("./paginatedIssueList");
const paginatedLocationList_1 = require("./paginatedLocationList");
const paginatedPayGroupList_1 = require("./paginatedPayGroupList");
const paginatedPayrollRunList_1 = require("./paginatedPayrollRunList");
const paginatedSyncStatusList_1 = require("./paginatedSyncStatusList");
const paginatedTeamList_1 = require("./paginatedTeamList");
const paginatedTimeOffBalanceList_1 = require("./paginatedTimeOffBalanceList");
const paginatedTimeOffList_1 = require("./paginatedTimeOffList");
const payCurrencyEnum_1 = require("./payCurrencyEnum");
const payFrequencyEnum_1 = require("./payFrequencyEnum");
const payGroup_1 = require("./payGroup");
const payPeriodEnum_1 = require("./payPeriodEnum");
const payrollRun_1 = require("./payrollRun");
const policyTypeEnum_1 = require("./policyTypeEnum");
const reasonEnum_1 = require("./reasonEnum");
const remoteData_1 = require("./remoteData");
const remoteDataRequest_1 = require("./remoteDataRequest");
const remoteKey_1 = require("./remoteKey");
const remoteKeyForRegenerationRequest_1 = require("./remoteKeyForRegenerationRequest");
const remoteResponse_1 = require("./remoteResponse");
const requestFormatEnum_1 = require("./requestFormatEnum");
const requestTypeEnum_1 = require("./requestTypeEnum");
const runStateEnum_1 = require("./runStateEnum");
const runTypeEnum_1 = require("./runTypeEnum");
const syncStatus_1 = require("./syncStatus");
const syncStatusStatusEnum_1 = require("./syncStatusStatusEnum");
const tax_1 = require("./tax");
const team_1 = require("./team");
const timeOff_1 = require("./timeOff");
const timeOffBalance_1 = require("./timeOffBalance");
const timeOffEndpointRequest_1 = require("./timeOffEndpointRequest");
const timeOffRequest_1 = require("./timeOffRequest");
const timeOffResponse_1 = require("./timeOffResponse");
const timeOffStatusEnum_1 = require("./timeOffStatusEnum");
const typeEnum_1 = require("./typeEnum");
const unitsEnum_1 = require("./unitsEnum");
const validationProblemSource_1 = require("./validationProblemSource");
const warningValidationProblem_1 = require("./warningValidationProblem");
let primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any"
];
let enumsMap = {
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
    "LocationTypeEnum": locationTypeEnum_1.LocationTypeEnum,
    "MaritalStatusEnum": maritalStatusEnum_1.MaritalStatusEnum,
    "MethodEnum": methodEnum_1.MethodEnum,
    "PayCurrencyEnum": payCurrencyEnum_1.PayCurrencyEnum,
    "PayFrequencyEnum": payFrequencyEnum_1.PayFrequencyEnum,
    "PayPeriodEnum": payPeriodEnum_1.PayPeriodEnum,
    "PolicyTypeEnum": policyTypeEnum_1.PolicyTypeEnum,
    "ReasonEnum": reasonEnum_1.ReasonEnum,
    "RequestFormatEnum": requestFormatEnum_1.RequestFormatEnum,
    "RequestTypeEnum": requestTypeEnum_1.RequestTypeEnum,
    "RunStateEnum": runStateEnum_1.RunStateEnum,
    "RunTypeEnum": runTypeEnum_1.RunTypeEnum,
    "SyncStatusStatusEnum": syncStatusStatusEnum_1.SyncStatusStatusEnum,
    "TimeOffStatusEnum": timeOffStatusEnum_1.TimeOffStatusEnum,
    "TypeEnum": typeEnum_1.TypeEnum,
    "UnitsEnum": unitsEnum_1.UnitsEnum,
};
let typeMap = {
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
    "IgnoreCommonModelRequest": ignoreCommonModelRequest_1.IgnoreCommonModelRequest,
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
class ObjectSerializer {
    static findCorrectType(data, expectedType) {
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
            let discriminatorProperty = typeMap[expectedType].discriminator;
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
    }
    static serialize(data, type) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            let subType = type.replace("Array<", "");
            subType = subType.substring(0, subType.length - 1);
            let transformedData = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
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
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }
    static deserialize(data, type) {
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            let subType = type.replace("Array<", "");
            subType = subType.substring(0, subType.length - 1);
            let transformedData = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
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
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}
exports.ObjectSerializer = ObjectSerializer;
class HttpBasicAuth {
    constructor() {
        this.username = '';
        this.password = '';
    }
    applyToRequest(requestOptions) {
        requestOptions.auth = {
            username: this.username, password: this.password
        };
    }
}
exports.HttpBasicAuth = HttpBasicAuth;
class HttpBearerAuth {
    constructor() {
        this.accessToken = '';
    }
    applyToRequest(requestOptions) {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                ? this.accessToken()
                : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}
exports.HttpBearerAuth = HttpBearerAuth;
class ApiKeyAuth {
    constructor(location, paramName) {
        this.location = location;
        this.paramName = paramName;
        this.apiKey = '';
    }
    applyToRequest(requestOptions) {
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
    }
}
exports.ApiKeyAuth = ApiKeyAuth;
class OAuth {
    constructor() {
        this.accessToken = '';
    }
    applyToRequest(requestOptions) {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}
exports.OAuth = OAuth;
class VoidAuth {
    constructor() {
        this.username = '';
        this.password = '';
    }
    applyToRequest(_) {
    }
}
exports.VoidAuth = VoidAuth;
//# sourceMappingURL=models.js.map