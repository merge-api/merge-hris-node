"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EmployeePayrollRun = (function () {
    function EmployeePayrollRun() {
    }
    EmployeePayrollRun.getAttributeTypeMap = function () {
        return EmployeePayrollRun.attributeTypeMap;
    };
    EmployeePayrollRun.discriminator = undefined;
    EmployeePayrollRun.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "remoteId",
            "baseName": "remote_id",
            "type": "string"
        },
        {
            "name": "employee",
            "baseName": "employee",
            "type": "string"
        },
        {
            "name": "payrollRun",
            "baseName": "payroll_run",
            "type": "string"
        },
        {
            "name": "grossPay",
            "baseName": "gross_pay",
            "type": "number"
        },
        {
            "name": "netPay",
            "baseName": "net_pay",
            "type": "number"
        },
        {
            "name": "startDate",
            "baseName": "start_date",
            "type": "Date"
        },
        {
            "name": "endDate",
            "baseName": "end_date",
            "type": "Date"
        },
        {
            "name": "checkDate",
            "baseName": "check_date",
            "type": "Date"
        },
        {
            "name": "earnings",
            "baseName": "earnings",
            "type": "Array<Earning>"
        },
        {
            "name": "deductions",
            "baseName": "deductions",
            "type": "Array<Deduction>"
        },
        {
            "name": "taxes",
            "baseName": "taxes",
            "type": "Array<Tax>"
        },
        {
            "name": "remoteData",
            "baseName": "remote_data",
            "type": "Array<RemoteData>"
        }
    ];
    return EmployeePayrollRun;
}());
exports.EmployeePayrollRun = EmployeePayrollRun;
//# sourceMappingURL=employeePayrollRun.js.map