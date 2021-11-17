import localVarRequest from 'request';

export * from './accountDetails';
export * from './accountDetailsAndActions';
export * from './accountDetailsAndActionsIntegration';
export * from './accountDetailsAndActionsStatusEnum';
export * from './accountIntegration';
export * from './accountToken';
export * from './availableActions';
export * from './benefit';
export * from './benefitPlanTypeEnum';
export * from './blankEnum';
export * from './categoriesEnum';
export * from './categoryEnum';
export * from './company';
export * from './countryEnum';
export * from './dataPassthrough';
export * from './deduction';
export * from './earning';
export * from './employee';
export * from './employeePayrollRun';
export * from './employment';
export * from './employmentStatusEnum';
export * from './employmentTypeEnum';
export * from './endUserDetails';
export * from './ethnicityEnum';
export * from './flsaStatusEnum';
export * from './genderEnum';
export * from './generateRemoteKey';
export * from './issue';
export * from './issueStatusEnum';
export * from './linkToken';
export * from './location';
export * from './maritalStatusEnum';
export * from './methodEnum';
export * from './modelOperation';
export * from './nullEnum';
export * from './paginatedAccountDetailsAndActionsList';
export * from './paginatedBenefitList';
export * from './paginatedCompanyList';
export * from './paginatedDeductionList';
export * from './paginatedEmployeeList';
export * from './paginatedEmployeePayrollRunList';
export * from './paginatedEmploymentList';
export * from './paginatedIssueList';
export * from './paginatedLocationList';
export * from './paginatedPayrollRunList';
export * from './paginatedSyncStatusList';
export * from './paginatedTeamList';
export * from './paginatedTimeOffBalanceList';
export * from './paginatedTimeOffList';
export * from './payCurrencyEnum';
export * from './payFrequencyEnum';
export * from './payPeriodEnum';
export * from './payrollRun';
export * from './policyTypeEnum';
export * from './remoteData';
export * from './remoteKey';
export * from './remoteKeyForRegeneration';
export * from './remoteResponse';
export * from './requestFormatEnum';
export * from './requestTypeEnum';
export * from './runStateEnum';
export * from './runTypeEnum';
export * from './syncStatus';
export * from './syncStatusStatusEnum';
export * from './tax';
export * from './team';
export * from './timeOff';
export * from './timeOffBalance';
export * from './timeOffStatusEnum';
export * from './typeEnum';
export * from './unitsEnum';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { AccountDetails } from './accountDetails';
import { AccountDetailsAndActions } from './accountDetailsAndActions';
import { AccountDetailsAndActionsIntegration } from './accountDetailsAndActionsIntegration';
import { AccountDetailsAndActionsStatusEnum } from './accountDetailsAndActionsStatusEnum';
import { AccountIntegration } from './accountIntegration';
import { AccountToken } from './accountToken';
import { AvailableActions } from './availableActions';
import { Benefit } from './benefit';
import { BenefitPlanTypeEnum } from './benefitPlanTypeEnum';
import { BlankEnum } from './blankEnum';
import { CategoriesEnum } from './categoriesEnum';
import { CategoryEnum } from './categoryEnum';
import { Company } from './company';
import { CountryEnum } from './countryEnum';
import { DataPassthrough } from './dataPassthrough';
import { Deduction } from './deduction';
import { Earning } from './earning';
import { Employee } from './employee';
import { EmployeePayrollRun } from './employeePayrollRun';
import { Employment } from './employment';
import { EmploymentStatusEnum } from './employmentStatusEnum';
import { EmploymentTypeEnum } from './employmentTypeEnum';
import { EndUserDetails } from './endUserDetails';
import { EthnicityEnum } from './ethnicityEnum';
import { FlsaStatusEnum } from './flsaStatusEnum';
import { GenderEnum } from './genderEnum';
import { GenerateRemoteKey } from './generateRemoteKey';
import { Issue } from './issue';
import { IssueStatusEnum } from './issueStatusEnum';
import { LinkToken } from './linkToken';
import { Location } from './location';
import { MaritalStatusEnum } from './maritalStatusEnum';
import { MethodEnum } from './methodEnum';
import { ModelOperation } from './modelOperation';
import { NullEnum } from './nullEnum';
import { PaginatedAccountDetailsAndActionsList } from './paginatedAccountDetailsAndActionsList';
import { PaginatedBenefitList } from './paginatedBenefitList';
import { PaginatedCompanyList } from './paginatedCompanyList';
import { PaginatedDeductionList } from './paginatedDeductionList';
import { PaginatedEmployeeList } from './paginatedEmployeeList';
import { PaginatedEmployeePayrollRunList } from './paginatedEmployeePayrollRunList';
import { PaginatedEmploymentList } from './paginatedEmploymentList';
import { PaginatedIssueList } from './paginatedIssueList';
import { PaginatedLocationList } from './paginatedLocationList';
import { PaginatedPayrollRunList } from './paginatedPayrollRunList';
import { PaginatedSyncStatusList } from './paginatedSyncStatusList';
import { PaginatedTeamList } from './paginatedTeamList';
import { PaginatedTimeOffBalanceList } from './paginatedTimeOffBalanceList';
import { PaginatedTimeOffList } from './paginatedTimeOffList';
import { PayCurrencyEnum } from './payCurrencyEnum';
import { PayFrequencyEnum } from './payFrequencyEnum';
import { PayPeriodEnum } from './payPeriodEnum';
import { PayrollRun } from './payrollRun';
import { PolicyTypeEnum } from './policyTypeEnum';
import { RemoteData } from './remoteData';
import { RemoteKey } from './remoteKey';
import { RemoteKeyForRegeneration } from './remoteKeyForRegeneration';
import { RemoteResponse } from './remoteResponse';
import { RequestFormatEnum } from './requestFormatEnum';
import { RequestTypeEnum } from './requestTypeEnum';
import { RunStateEnum } from './runStateEnum';
import { RunTypeEnum } from './runTypeEnum';
import { SyncStatus } from './syncStatus';
import { SyncStatusStatusEnum } from './syncStatusStatusEnum';
import { Tax } from './tax';
import { Team } from './team';
import { TimeOff } from './timeOff';
import { TimeOffBalance } from './timeOffBalance';
import { TimeOffStatusEnum } from './timeOffStatusEnum';
import { TypeEnum } from './typeEnum';
import { UnitsEnum } from './unitsEnum';

/* tslint:disable:no-unused-variable */
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

let enumsMap: {[index: string]: any} = {
        "AccountDetailsAndActionsStatusEnum": AccountDetailsAndActionsStatusEnum,
        "BenefitPlanTypeEnum": BenefitPlanTypeEnum,
        "BlankEnum": BlankEnum,
        "CategoriesEnum": CategoriesEnum,
        "CategoryEnum": CategoryEnum,
        "CountryEnum": CountryEnum,
        "EmploymentStatusEnum": EmploymentStatusEnum,
        "EmploymentTypeEnum": EmploymentTypeEnum,
        "EthnicityEnum": EthnicityEnum,
        "FlsaStatusEnum": FlsaStatusEnum,
        "GenderEnum": GenderEnum,
        "IssueStatusEnum": IssueStatusEnum,
        "MaritalStatusEnum": MaritalStatusEnum,
        "MethodEnum": MethodEnum,
        "NullEnum": NullEnum,
        "PayCurrencyEnum": PayCurrencyEnum,
        "PayFrequencyEnum": PayFrequencyEnum,
        "PayPeriodEnum": PayPeriodEnum,
        "PolicyTypeEnum": PolicyTypeEnum,
        "RequestFormatEnum": RequestFormatEnum,
        "RequestTypeEnum": RequestTypeEnum,
        "RunStateEnum": RunStateEnum,
        "RunTypeEnum": RunTypeEnum,
        "SyncStatusStatusEnum": SyncStatusStatusEnum,
        "TimeOffStatusEnum": TimeOffStatusEnum,
        "TypeEnum": TypeEnum,
        "UnitsEnum": UnitsEnum,
}

let typeMap: {[index: string]: any} = {
    "AccountDetails": AccountDetails,
    "AccountDetailsAndActions": AccountDetailsAndActions,
    "AccountDetailsAndActionsIntegration": AccountDetailsAndActionsIntegration,
    "AccountIntegration": AccountIntegration,
    "AccountToken": AccountToken,
    "AvailableActions": AvailableActions,
    "Benefit": Benefit,
    "Company": Company,
    "DataPassthrough": DataPassthrough,
    "Deduction": Deduction,
    "Earning": Earning,
    "Employee": Employee,
    "EmployeePayrollRun": EmployeePayrollRun,
    "Employment": Employment,
    "EndUserDetails": EndUserDetails,
    "GenerateRemoteKey": GenerateRemoteKey,
    "Issue": Issue,
    "LinkToken": LinkToken,
    "Location": Location,
    "ModelOperation": ModelOperation,
    "PaginatedAccountDetailsAndActionsList": PaginatedAccountDetailsAndActionsList,
    "PaginatedBenefitList": PaginatedBenefitList,
    "PaginatedCompanyList": PaginatedCompanyList,
    "PaginatedDeductionList": PaginatedDeductionList,
    "PaginatedEmployeeList": PaginatedEmployeeList,
    "PaginatedEmployeePayrollRunList": PaginatedEmployeePayrollRunList,
    "PaginatedEmploymentList": PaginatedEmploymentList,
    "PaginatedIssueList": PaginatedIssueList,
    "PaginatedLocationList": PaginatedLocationList,
    "PaginatedPayrollRunList": PaginatedPayrollRunList,
    "PaginatedSyncStatusList": PaginatedSyncStatusList,
    "PaginatedTeamList": PaginatedTeamList,
    "PaginatedTimeOffBalanceList": PaginatedTimeOffBalanceList,
    "PaginatedTimeOffList": PaginatedTimeOffList,
    "PayrollRun": PayrollRun,
    "RemoteData": RemoteData,
    "RemoteKey": RemoteKey,
    "RemoteKeyForRegeneration": RemoteKeyForRegeneration,
    "RemoteResponse": RemoteResponse,
    "SyncStatus": SyncStatus,
    "Tax": Tax,
    "Team": Team,
    "TimeOff": TimeOff,
    "TimeOffBalance": TimeOffBalance,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
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

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
