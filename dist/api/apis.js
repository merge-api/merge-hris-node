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
exports.APIS = exports.HttpError = void 0;
__exportStar(require("./accountDetailsApi"), exports);
const accountDetailsApi_1 = require("./accountDetailsApi");
__exportStar(require("./accountTokenApi"), exports);
const accountTokenApi_1 = require("./accountTokenApi");
__exportStar(require("./availableActionsApi"), exports);
const availableActionsApi_1 = require("./availableActionsApi");
__exportStar(require("./bankInfoApi"), exports);
const bankInfoApi_1 = require("./bankInfoApi");
__exportStar(require("./benefitsApi"), exports);
const benefitsApi_1 = require("./benefitsApi");
__exportStar(require("./companiesApi"), exports);
const companiesApi_1 = require("./companiesApi");
__exportStar(require("./deductionsApi"), exports);
const deductionsApi_1 = require("./deductionsApi");
__exportStar(require("./deleteAccountApi"), exports);
const deleteAccountApi_1 = require("./deleteAccountApi");
__exportStar(require("./employeePayrollRunsApi"), exports);
const employeePayrollRunsApi_1 = require("./employeePayrollRunsApi");
__exportStar(require("./employeesApi"), exports);
const employeesApi_1 = require("./employeesApi");
__exportStar(require("./employmentsApi"), exports);
const employmentsApi_1 = require("./employmentsApi");
__exportStar(require("./forceResyncApi"), exports);
const forceResyncApi_1 = require("./forceResyncApi");
__exportStar(require("./generateKeyApi"), exports);
const generateKeyApi_1 = require("./generateKeyApi");
__exportStar(require("./issuesApi"), exports);
const issuesApi_1 = require("./issuesApi");
__exportStar(require("./linkTokenApi"), exports);
const linkTokenApi_1 = require("./linkTokenApi");
__exportStar(require("./linkedAccountsApi"), exports);
const linkedAccountsApi_1 = require("./linkedAccountsApi");
__exportStar(require("./locationsApi"), exports);
const locationsApi_1 = require("./locationsApi");
__exportStar(require("./passthroughApi"), exports);
const passthroughApi_1 = require("./passthroughApi");
__exportStar(require("./payGroupsApi"), exports);
const payGroupsApi_1 = require("./payGroupsApi");
__exportStar(require("./payrollRunsApi"), exports);
const payrollRunsApi_1 = require("./payrollRunsApi");
__exportStar(require("./regenerateKeyApi"), exports);
const regenerateKeyApi_1 = require("./regenerateKeyApi");
__exportStar(require("./syncStatusApi"), exports);
const syncStatusApi_1 = require("./syncStatusApi");
__exportStar(require("./teamsApi"), exports);
const teamsApi_1 = require("./teamsApi");
__exportStar(require("./timeOffApi"), exports);
const timeOffApi_1 = require("./timeOffApi");
__exportStar(require("./timeOffBalancesApi"), exports);
const timeOffBalancesApi_1 = require("./timeOffBalancesApi");
class HttpError extends Error {
    constructor(response, body, statusCode) {
        super('HTTP request failed');
        this.response = response;
        this.body = body;
        this.statusCode = statusCode;
        this.name = 'HttpError';
    }
}
exports.HttpError = HttpError;
exports.APIS = [accountDetailsApi_1.AccountDetailsApi, accountTokenApi_1.AccountTokenApi, availableActionsApi_1.AvailableActionsApi, bankInfoApi_1.BankInfoApi, benefitsApi_1.BenefitsApi, companiesApi_1.CompaniesApi, deductionsApi_1.DeductionsApi, deleteAccountApi_1.DeleteAccountApi, employeePayrollRunsApi_1.EmployeePayrollRunsApi, employeesApi_1.EmployeesApi, employmentsApi_1.EmploymentsApi, forceResyncApi_1.ForceResyncApi, generateKeyApi_1.GenerateKeyApi, issuesApi_1.IssuesApi, linkTokenApi_1.LinkTokenApi, linkedAccountsApi_1.LinkedAccountsApi, locationsApi_1.LocationsApi, passthroughApi_1.PassthroughApi, payGroupsApi_1.PayGroupsApi, payrollRunsApi_1.PayrollRunsApi, regenerateKeyApi_1.RegenerateKeyApi, syncStatusApi_1.SyncStatusApi, teamsApi_1.TeamsApi, timeOffApi_1.TimeOffApi, timeOffBalancesApi_1.TimeOffBalancesApi];
//# sourceMappingURL=apis.js.map