"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIS = exports.HttpError = void 0;
__exportStar(require("./accountTokenApi"), exports);
var accountTokenApi_1 = require("./accountTokenApi");
__exportStar(require("./availableActionsApi"), exports);
var availableActionsApi_1 = require("./availableActionsApi");
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
__exportStar(require("./generateKeyApi"), exports);
var generateKeyApi_1 = require("./generateKeyApi");
__exportStar(require("./issuesApi"), exports);
var issuesApi_1 = require("./issuesApi");
__exportStar(require("./linkTokenApi"), exports);
var linkTokenApi_1 = require("./linkTokenApi");
__exportStar(require("./locationsApi"), exports);
var locationsApi_1 = require("./locationsApi");
__exportStar(require("./passthroughApi"), exports);
var passthroughApi_1 = require("./passthroughApi");
__exportStar(require("./payrollRunsApi"), exports);
var payrollRunsApi_1 = require("./payrollRunsApi");
__exportStar(require("./persistentDeductionsApi"), exports);
var persistentDeductionsApi_1 = require("./persistentDeductionsApi");
__exportStar(require("./regenerateKeyApi"), exports);
var regenerateKeyApi_1 = require("./regenerateKeyApi");
__exportStar(require("./syncStatusApi"), exports);
var syncStatusApi_1 = require("./syncStatusApi");
__exportStar(require("./teamsApi"), exports);
var teamsApi_1 = require("./teamsApi");
__exportStar(require("./timeOffApi"), exports);
var timeOffApi_1 = require("./timeOffApi");
__exportStar(require("./timeOffBalanceApi"), exports);
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
exports.APIS = [accountTokenApi_1.AccountTokenApi, availableActionsApi_1.AvailableActionsApi, benefitsApi_1.BenefitsApi, companiesApi_1.CompaniesApi, deductionsApi_1.DeductionsApi, deleteAccountApi_1.DeleteAccountApi, employeePayrollRunsApi_1.EmployeePayrollRunsApi, employeesApi_1.EmployeesApi, employmentsApi_1.EmploymentsApi, generateKeyApi_1.GenerateKeyApi, issuesApi_1.IssuesApi, linkTokenApi_1.LinkTokenApi, locationsApi_1.LocationsApi, passthroughApi_1.PassthroughApi, payrollRunsApi_1.PayrollRunsApi, persistentDeductionsApi_1.PersistentDeductionsApi, regenerateKeyApi_1.RegenerateKeyApi, syncStatusApi_1.SyncStatusApi, teamsApi_1.TeamsApi, timeOffApi_1.TimeOffApi, timeOffBalanceApi_1.TimeOffBalanceApi];
//# sourceMappingURL=apis.js.map