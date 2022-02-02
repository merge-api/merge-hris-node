/// <reference types="node" />
import localVarRequest from 'request';
export * from './accountDetails';
export * from './accountDetailsAndActions';
export * from './accountDetailsAndActionsIntegration';
export * from './accountDetailsAndActionsStatusEnum';
export * from './accountIntegration';
export * from './accountToken';
export * from './accountTypeEnum';
export * from './availableActions';
export * from './bankInfo';
export * from './benefit';
export * from './benefitPlanTypeEnum';
export * from './categoriesEnum';
export * from './categoryEnum';
export * from './company';
export * from './countryEnum';
export * from './dataPassthroughRequest';
export * from './deduction';
export * from './earning';
export * from './employee';
export * from './employeePayrollRun';
export * from './employment';
export * from './employmentStatusEnum';
export * from './employmentTypeEnum';
export * from './endUserDetailsRequest';
export * from './errorValidationProblem';
export * from './ethnicityEnum';
export * from './flsaStatusEnum';
export * from './genderEnum';
export * from './generateRemoteKeyRequest';
export * from './ignoreCommonModelRequest';
export * from './issue';
export * from './issueStatusEnum';
export * from './linkToken';
export * from './location';
export * from './locationTypeEnum';
export * from './maritalStatusEnum';
export * from './methodEnum';
export * from './modelOperation';
export * from './paginatedAccountDetailsAndActionsList';
export * from './paginatedBankInfoList';
export * from './paginatedBenefitList';
export * from './paginatedCompanyList';
export * from './paginatedDeductionList';
export * from './paginatedEmployeeList';
export * from './paginatedEmployeePayrollRunList';
export * from './paginatedEmploymentList';
export * from './paginatedIssueList';
export * from './paginatedLocationList';
export * from './paginatedPayGroupList';
export * from './paginatedPayrollRunList';
export * from './paginatedSyncStatusList';
export * from './paginatedTeamList';
export * from './paginatedTimeOffBalanceList';
export * from './paginatedTimeOffList';
export * from './payCurrencyEnum';
export * from './payFrequencyEnum';
export * from './payGroup';
export * from './payPeriodEnum';
export * from './payrollRun';
export * from './policyTypeEnum';
export * from './reasonEnum';
export * from './remoteData';
export * from './remoteDataRequest';
export * from './remoteKey';
export * from './remoteKeyForRegenerationRequest';
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
export * from './timeOffEndpointRequest';
export * from './timeOffRequest';
export * from './timeOffResponse';
export * from './timeOffStatusEnum';
export * from './typeEnum';
export * from './unitsEnum';
export * from './validationProblemSource';
export * from './warningValidationProblem';
import * as fs from 'fs';
export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    };
}
export declare type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;
export declare class ObjectSerializer {
    static findCorrectType(data: any, expectedType: string): any;
    static serialize(data: any, type: string): any;
    static deserialize(data: any, type: string): any;
}
export interface Authentication {
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}
export declare class HttpBasicAuth implements Authentication {
    username: string;
    password: string;
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class HttpBearerAuth implements Authentication {
    accessToken: string | (() => string);
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class ApiKeyAuth implements Authentication {
    private location;
    private paramName;
    apiKey: string;
    constructor(location: string, paramName: string);
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class OAuth implements Authentication {
    accessToken: string;
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class VoidAuth implements Authentication {
    username: string;
    password: string;
    applyToRequest(_: localVarRequest.Options): void;
}
export declare type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
