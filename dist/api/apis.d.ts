/// <reference types="node" />
export * from './accountTokenApi';
import { AccountTokenApi } from './accountTokenApi';
export * from './availableActionsApi';
import { AvailableActionsApi } from './availableActionsApi';
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
export * from './generateKeyApi';
import { GenerateKeyApi } from './generateKeyApi';
export * from './issuesApi';
import { IssuesApi } from './issuesApi';
export * from './linkTokenApi';
import { LinkTokenApi } from './linkTokenApi';
export * from './locationsApi';
import { LocationsApi } from './locationsApi';
export * from './passthroughApi';
import { PassthroughApi } from './passthroughApi';
export * from './payrollRunsApi';
import { PayrollRunsApi } from './payrollRunsApi';
export * from './persistentDeductionsApi';
import { PersistentDeductionsApi } from './persistentDeductionsApi';
export * from './regenerateKeyApi';
import { RegenerateKeyApi } from './regenerateKeyApi';
export * from './syncStatusApi';
import { SyncStatusApi } from './syncStatusApi';
export * from './teamsApi';
import { TeamsApi } from './teamsApi';
export * from './timeOffApi';
import { TimeOffApi } from './timeOffApi';
export * from './timeOffBalanceApi';
import { TimeOffBalanceApi } from './timeOffBalanceApi';
import * as http from 'http';
export declare class HttpError extends Error {
    response: http.IncomingMessage;
    body: any;
    statusCode?: number | undefined;
    constructor(response: http.IncomingMessage, body: any, statusCode?: number | undefined);
}
export { RequestFile } from '../model/models';
export declare const APIS: (typeof AccountTokenApi | typeof AvailableActionsApi | typeof BenefitsApi | typeof CompaniesApi | typeof DeductionsApi | typeof DeleteAccountApi | typeof EmployeePayrollRunsApi | typeof EmployeesApi | typeof EmploymentsApi | typeof GenerateKeyApi | typeof IssuesApi | typeof LinkTokenApi | typeof LocationsApi | typeof PassthroughApi | typeof PayrollRunsApi | typeof PersistentDeductionsApi | typeof RegenerateKeyApi | typeof SyncStatusApi | typeof TeamsApi | typeof TimeOffApi | typeof TimeOffBalanceApi)[];
