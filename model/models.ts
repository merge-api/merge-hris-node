import localVarRequest from 'request';

export * from './accountIntegration';
export * from './accountToken';
export * from './availableActions';
export * from './benefit';
export * from './benefitPlanTypeEnum';
export * from './company';
export * from './countryEnum';
export * from './createBenefit';
export * from './createCompany';
export * from './createEmployee';
export * from './createEmployeePayrollRun';
export * from './createEmployment';
export * from './createLocation';
export * from './createPayrollRun';
export * from './createTeam';
export * from './createTimeOff';
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
export * from './linkToken';
export * from './location';
export * from './maritalStatusEnum';
export * from './methodEnum';
export * from './modelOperation';
export * from './paginatedBenefitList';
export * from './paginatedCompanyList';
export * from './paginatedEmployeeList';
export * from './paginatedEmployeePayrollRunList';
export * from './paginatedEmploymentList';
export * from './paginatedLocationList';
export * from './paginatedPayrollRunList';
export * from './paginatedTeamList';
export * from './paginatedTimeOffList';
export * from './payCurrencyEnum';
export * from './payFrequencyEnum';
export * from './payPeriodEnum';
export * from './payrollRun';
export * from './remoteData';
export * from './remoteKey';
export * from './remoteKeyForRegeneration';
export * from './remoteResponse';
export * from './requestTypeEnum';
export * from './runStateEnum';
export * from './runTypeEnum';
export * from './stateEnum';
export * from './tax';
export * from './team';
export * from './timeOff';
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


import { AccountIntegration } from './accountIntegration';
import { AccountToken } from './accountToken';
import { AvailableActions } from './availableActions';
import { Benefit } from './benefit';
import { BenefitPlanTypeEnum } from './benefitPlanTypeEnum';
import { Company } from './company';
import { CountryEnum } from './countryEnum';
import { CreateBenefit } from './createBenefit';
import { CreateCompany } from './createCompany';
import { CreateEmployee } from './createEmployee';
import { CreateEmployeePayrollRun } from './createEmployeePayrollRun';
import { CreateEmployment } from './createEmployment';
import { CreateLocation } from './createLocation';
import { CreatePayrollRun } from './createPayrollRun';
import { CreateTeam } from './createTeam';
import { CreateTimeOff } from './createTimeOff';
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
import { LinkToken } from './linkToken';
import { Location } from './location';
import { MaritalStatusEnum } from './maritalStatusEnum';
import { MethodEnum } from './methodEnum';
import { ModelOperation } from './modelOperation';
import { PaginatedBenefitList } from './paginatedBenefitList';
import { PaginatedCompanyList } from './paginatedCompanyList';
import { PaginatedEmployeeList } from './paginatedEmployeeList';
import { PaginatedEmployeePayrollRunList } from './paginatedEmployeePayrollRunList';
import { PaginatedEmploymentList } from './paginatedEmploymentList';
import { PaginatedLocationList } from './paginatedLocationList';
import { PaginatedPayrollRunList } from './paginatedPayrollRunList';
import { PaginatedTeamList } from './paginatedTeamList';
import { PaginatedTimeOffList } from './paginatedTimeOffList';
import { PayCurrencyEnum } from './payCurrencyEnum';
import { PayFrequencyEnum } from './payFrequencyEnum';
import { PayPeriodEnum } from './payPeriodEnum';
import { PayrollRun } from './payrollRun';
import { RemoteData } from './remoteData';
import { RemoteKey } from './remoteKey';
import { RemoteKeyForRegeneration } from './remoteKeyForRegeneration';
import { RemoteResponse } from './remoteResponse';
import { RequestTypeEnum } from './requestTypeEnum';
import { RunStateEnum } from './runStateEnum';
import { RunTypeEnum } from './runTypeEnum';
import { StateEnum } from './stateEnum';
import { Tax } from './tax';
import { Team } from './team';
import { TimeOff } from './timeOff';
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
        "AccountIntegration.CategoriesEnum": AccountIntegration.CategoriesEnum,
        "BenefitPlanTypeEnum": BenefitPlanTypeEnum,
        "CountryEnum": CountryEnum,
        "EmploymentStatusEnum": EmploymentStatusEnum,
        "EmploymentTypeEnum": EmploymentTypeEnum,
        "EndUserDetails.CategoriesEnum": EndUserDetails.CategoriesEnum,
        "EthnicityEnum": EthnicityEnum,
        "FlsaStatusEnum": FlsaStatusEnum,
        "GenderEnum": GenderEnum,
        "MaritalStatusEnum": MaritalStatusEnum,
        "MethodEnum": MethodEnum,
        "PayCurrencyEnum": PayCurrencyEnum,
        "PayFrequencyEnum": PayFrequencyEnum,
        "PayPeriodEnum": PayPeriodEnum,
        "RequestTypeEnum": RequestTypeEnum,
        "RunStateEnum": RunStateEnum,
        "RunTypeEnum": RunTypeEnum,
        "StateEnum": StateEnum,
        "TimeOffStatusEnum": TimeOffStatusEnum,
        "TypeEnum": TypeEnum,
        "UnitsEnum": UnitsEnum,
}

let typeMap: {[index: string]: any} = {
    "AccountIntegration": AccountIntegration,
    "AccountToken": AccountToken,
    "AvailableActions": AvailableActions,
    "Benefit": Benefit,
    "Company": Company,
    "CreateBenefit": CreateBenefit,
    "CreateCompany": CreateCompany,
    "CreateEmployee": CreateEmployee,
    "CreateEmployeePayrollRun": CreateEmployeePayrollRun,
    "CreateEmployment": CreateEmployment,
    "CreateLocation": CreateLocation,
    "CreatePayrollRun": CreatePayrollRun,
    "CreateTeam": CreateTeam,
    "CreateTimeOff": CreateTimeOff,
    "DataPassthrough": DataPassthrough,
    "Deduction": Deduction,
    "Earning": Earning,
    "Employee": Employee,
    "EmployeePayrollRun": EmployeePayrollRun,
    "Employment": Employment,
    "EndUserDetails": EndUserDetails,
    "LinkToken": LinkToken,
    "Location": Location,
    "ModelOperation": ModelOperation,
    "PaginatedBenefitList": PaginatedBenefitList,
    "PaginatedCompanyList": PaginatedCompanyList,
    "PaginatedEmployeeList": PaginatedEmployeeList,
    "PaginatedEmployeePayrollRunList": PaginatedEmployeePayrollRunList,
    "PaginatedEmploymentList": PaginatedEmploymentList,
    "PaginatedLocationList": PaginatedLocationList,
    "PaginatedPayrollRunList": PaginatedPayrollRunList,
    "PaginatedTeamList": PaginatedTeamList,
    "PaginatedTimeOffList": PaginatedTimeOffList,
    "PayrollRun": PayrollRun,
    "RemoteData": RemoteData,
    "RemoteKey": RemoteKey,
    "RemoteKeyForRegeneration": RemoteKeyForRegeneration,
    "RemoteResponse": RemoteResponse,
    "Tax": Tax,
    "Team": Team,
    "TimeOff": TimeOff,
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
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType));
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
            for (let index in attributeTypes) {
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
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType));
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
            for (let index in attributeTypes) {
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
