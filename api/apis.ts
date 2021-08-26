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

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [AccountTokenApi, AvailableActionsApi, BenefitsApi, CompaniesApi, DeductionsApi, DeleteAccountApi, EmployeePayrollRunsApi, EmployeesApi, EmploymentsApi, GenerateKeyApi, IssuesApi, LinkTokenApi, LocationsApi, PassthroughApi, PayrollRunsApi, PersistentDeductionsApi, RegenerateKeyApi, SyncStatusApi, TeamsApi, TimeOffApi, TimeOffBalanceApi];
