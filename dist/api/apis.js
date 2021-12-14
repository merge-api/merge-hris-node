"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./accountDetailsApi"));
var accountDetailsApi_1 = require("./accountDetailsApi");
__export(require("./accountTokenApi"));
var accountTokenApi_1 = require("./accountTokenApi");
__export(require("./availableActionsApi"));
var availableActionsApi_1 = require("./availableActionsApi");
__export(require("./bankInfoApi"));
var bankInfoApi_1 = require("./bankInfoApi");
__export(require("./benefitsApi"));
var benefitsApi_1 = require("./benefitsApi");
__export(require("./companiesApi"));
var companiesApi_1 = require("./companiesApi");
__export(require("./deductionsApi"));
var deductionsApi_1 = require("./deductionsApi");
__export(require("./deleteAccountApi"));
var deleteAccountApi_1 = require("./deleteAccountApi");
__export(require("./employeePayrollRunsApi"));
var employeePayrollRunsApi_1 = require("./employeePayrollRunsApi");
__export(require("./employeesApi"));
var employeesApi_1 = require("./employeesApi");
__export(require("./employmentsApi"));
var employmentsApi_1 = require("./employmentsApi");
__export(require("./generateKeyApi"));
var generateKeyApi_1 = require("./generateKeyApi");
__export(require("./issuesApi"));
var issuesApi_1 = require("./issuesApi");
__export(require("./linkTokenApi"));
var linkTokenApi_1 = require("./linkTokenApi");
__export(require("./linkedAccountsApi"));
var linkedAccountsApi_1 = require("./linkedAccountsApi");
__export(require("./locationsApi"));
var locationsApi_1 = require("./locationsApi");
__export(require("./passthroughApi"));
var passthroughApi_1 = require("./passthroughApi");
__export(require("./payGroupApi"));
var payGroupApi_1 = require("./payGroupApi");
__export(require("./payrollRunsApi"));
var payrollRunsApi_1 = require("./payrollRunsApi");
__export(require("./regenerateKeyApi"));
var regenerateKeyApi_1 = require("./regenerateKeyApi");
__export(require("./syncStatusApi"));
var syncStatusApi_1 = require("./syncStatusApi");
__export(require("./teamsApi"));
var teamsApi_1 = require("./teamsApi");
__export(require("./timeOffApi"));
var timeOffApi_1 = require("./timeOffApi");
__export(require("./timeOffBalanceApi"));
var timeOffBalanceApi_1 = require("./timeOffBalanceApi");
var HttpError = (function (_super) {
    __extends(HttpError, _super);
    function HttpError(response, body, statusCode) {
        var _this = _super.call(this, 'HTTP request failed') || this;
        _this.response = response;
        _this.body = body;
        _this.statusCode = statusCode;
        _this.name = 'HttpError';
        return _this;
    }
    return HttpError;
}(Error));
exports.HttpError = HttpError;
exports.APIS = [accountDetailsApi_1.AccountDetailsApi, accountTokenApi_1.AccountTokenApi, availableActionsApi_1.AvailableActionsApi, bankInfoApi_1.BankInfoApi, benefitsApi_1.BenefitsApi, companiesApi_1.CompaniesApi, deductionsApi_1.DeductionsApi, deleteAccountApi_1.DeleteAccountApi, employeePayrollRunsApi_1.EmployeePayrollRunsApi, employeesApi_1.EmployeesApi, employmentsApi_1.EmploymentsApi, generateKeyApi_1.GenerateKeyApi, issuesApi_1.IssuesApi, linkTokenApi_1.LinkTokenApi, linkedAccountsApi_1.LinkedAccountsApi, locationsApi_1.LocationsApi, passthroughApi_1.PassthroughApi, payGroupApi_1.PayGroupApi, payrollRunsApi_1.PayrollRunsApi, regenerateKeyApi_1.RegenerateKeyApi, syncStatusApi_1.SyncStatusApi, teamsApi_1.TeamsApi, timeOffApi_1.TimeOffApi, timeOffBalanceApi_1.TimeOffBalanceApi];
//# sourceMappingURL=apis.js.map