"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var accountDetailsApi_1 = require("./accountDetailsApi");
__exportStar(require("./accountTokenApi"), exports);
var accountTokenApi_1 = require("./accountTokenApi");
__exportStar(require("./availableActionsApi"), exports);
var availableActionsApi_1 = require("./availableActionsApi");
__exportStar(require("./bankInfoApi"), exports);
var bankInfoApi_1 = require("./bankInfoApi");
__exportStar(require("./benefitsApi"), exports);
var benefitsApi_1 = require("./benefitsApi");
__exportStar(require("./companiesApi"), exports);
var companiesApi_1 = require("./companiesApi");
__exportStar(require("./deductionsApi"), exports);
var deductionsApi_1 = require("./deductionsApi");
__exportStar(require("./deleteAccountApi"), exports);
var deleteAccountApi_1 = require("./deleteAccountApi");
__exportStar(require("./employeePayrollRunsApi"), exports);
var employeePayrollRunsApi_1 = require("./employeePayrollRunsApi");
__exportStar(require("./employeesApi"), exports);
var employeesApi_1 = require("./employeesApi");
__exportStar(require("./employmentsApi"), exports);
var employmentsApi_1 = require("./employmentsApi");
__exportStar(require("./forceResyncApi"), exports);
var forceResyncApi_1 = require("./forceResyncApi");
__exportStar(require("./generateKeyApi"), exports);
var generateKeyApi_1 = require("./generateKeyApi");
__exportStar(require("./issuesApi"), exports);
var issuesApi_1 = require("./issuesApi");
__exportStar(require("./linkTokenApi"), exports);
var linkTokenApi_1 = require("./linkTokenApi");
__exportStar(require("./linkedAccountsApi"), exports);
var linkedAccountsApi_1 = require("./linkedAccountsApi");
__exportStar(require("./locationsApi"), exports);
var locationsApi_1 = require("./locationsApi");
__exportStar(require("./passthroughApi"), exports);
var passthroughApi_1 = require("./passthroughApi");
__exportStar(require("./payGroupsApi"), exports);
var payGroupsApi_1 = require("./payGroupsApi");
__exportStar(require("./payrollRunsApi"), exports);
var payrollRunsApi_1 = require("./payrollRunsApi");
__exportStar(require("./regenerateKeyApi"), exports);
var regenerateKeyApi_1 = require("./regenerateKeyApi");
__exportStar(require("./syncStatusApi"), exports);
var syncStatusApi_1 = require("./syncStatusApi");
__exportStar(require("./teamsApi"), exports);
var teamsApi_1 = require("./teamsApi");
__exportStar(require("./timeOffApi"), exports);
var timeOffApi_1 = require("./timeOffApi");
__exportStar(require("./timeOffBalancesApi"), exports);
var timeOffBalancesApi_1 = require("./timeOffBalancesApi");
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
exports.APIS = [accountDetailsApi_1.AccountDetailsApi, accountTokenApi_1.AccountTokenApi, availableActionsApi_1.AvailableActionsApi, bankInfoApi_1.BankInfoApi, benefitsApi_1.BenefitsApi, companiesApi_1.CompaniesApi, deductionsApi_1.DeductionsApi, deleteAccountApi_1.DeleteAccountApi, employeePayrollRunsApi_1.EmployeePayrollRunsApi, employeesApi_1.EmployeesApi, employmentsApi_1.EmploymentsApi, forceResyncApi_1.ForceResyncApi, generateKeyApi_1.GenerateKeyApi, issuesApi_1.IssuesApi, linkTokenApi_1.LinkTokenApi, linkedAccountsApi_1.LinkedAccountsApi, locationsApi_1.LocationsApi, passthroughApi_1.PassthroughApi, payGroupsApi_1.PayGroupsApi, payrollRunsApi_1.PayrollRunsApi, regenerateKeyApi_1.RegenerateKeyApi, syncStatusApi_1.SyncStatusApi, teamsApi_1.TeamsApi, timeOffApi_1.TimeOffApi, timeOffBalancesApi_1.TimeOffBalancesApi];
//# sourceMappingURL=apis.js.map