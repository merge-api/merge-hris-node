/// <reference types="node" />
export * from './accountDetailsApi';
import { AccountDetailsApi } from './accountDetailsApi';
export * from './accountTokenApi';
import { AccountTokenApi } from './accountTokenApi';
export * from './availableActionsApi';
import { AvailableActionsApi } from './availableActionsApi';
export * from './bankInfoApi';
import { BankInfoApi } from './bankInfoApi';
export * from './benefitsApi';
import { BenefitsApi } from './benefitsApi';
export * from './companiesApi';
import { CompaniesApi } from './companiesApi';
export * from './deductionsApi';
import { DeductionsApi } from './deductionsApi';
export * from './deleteAccountApi';
import { DeleteAccountApi } from './deleteAccountApi';
export * from './employeePayrollRunsApi';
import { EmployeePayrollRunsApi } from './employeePayrollRunsApi';
export * from './employeesApi';
import { EmployeesApi } from './employeesApi';
export * from './employmentsApi';
import { EmploymentsApi } from './employmentsApi';
export * from './forceResyncApi';
import { ForceResyncApi } from './forceResyncApi';
export * from './generateKeyApi';
import { GenerateKeyApi } from './generateKeyApi';
export * from './groupsApi';
import { GroupsApi } from './groupsApi';
export * from './issuesApi';
import { IssuesApi } from './issuesApi';
export * from './linkTokenApi';
import { LinkTokenApi } from './linkTokenApi';
export * from './linkedAccountsApi';
import { LinkedAccountsApi } from './linkedAccountsApi';
export * from './locationsApi';
import { LocationsApi } from './locationsApi';
export * from './passthroughApi';
import { PassthroughApi } from './passthroughApi';
export * from './payGroupsApi';
import { PayGroupsApi } from './payGroupsApi';
export * from './payrollRunsApi';
import { PayrollRunsApi } from './payrollRunsApi';
export * from './regenerateKeyApi';
import { RegenerateKeyApi } from './regenerateKeyApi';
export * from './syncStatusApi';
import { SyncStatusApi } from './syncStatusApi';
export * from './teamsApi';
import { TeamsApi } from './teamsApi';
export * from './timeOffApi';
import { TimeOffApi } from './timeOffApi';
export * from './timeOffBalancesApi';
import { TimeOffBalancesApi } from './timeOffBalancesApi';
import * as http from 'http';
export declare class HttpError extends Error {
    response: http.IncomingMessage;
    body: any;
    statusCode?: number | undefined;
    constructor(response: http.IncomingMessage, body: any, statusCode?: number | undefined);
}
export { RequestFile } from '../model/models';
export declare const APIS: (typeof AccountDetailsApi | typeof AccountTokenApi | typeof AvailableActionsApi | typeof BankInfoApi | typeof BenefitsApi | typeof CompaniesApi | typeof DeductionsApi | typeof DeleteAccountApi | typeof EmployeePayrollRunsApi | typeof EmployeesApi | typeof EmploymentsApi | typeof ForceResyncApi | typeof GenerateKeyApi | typeof GroupsApi | typeof IssuesApi | typeof LinkTokenApi | typeof LinkedAccountsApi | typeof LocationsApi | typeof PassthroughApi | typeof PayGroupsApi | typeof PayrollRunsApi | typeof RegenerateKeyApi | typeof SyncStatusApi | typeof TeamsApi | typeof TimeOffApi | typeof TimeOffBalancesApi)[];
