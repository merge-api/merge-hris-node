"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeePayrollRun = void 0;
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
            "name": "remote_id",
            "baseName": "remote_id",
            "type": "string"
        },
        {
            "name": "employee",
            "baseName": "employee",
            "type": "string"
        },
        {
            "name": "payroll_run",
            "baseName": "payroll_run",
            "type": "string"
        },
        {
            "name": "gross_pay",
            "baseName": "gross_pay",
            "type": "number"
        },
        {
            "name": "net_pay",
            "baseName": "net_pay",
            "type": "number"
        },
        {
            "name": "start_date",
            "baseName": "start_date",
            "type": "Date"
        },
        {
            "name": "end_date",
            "baseName": "end_date",
            "type": "Date"
        },
        {
            "name": "check_date",
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
            "name": "remote_data",
            "baseName": "remote_data",
            "type": "Array<RemoteData>"
        }
    ];
    return EmployeePayrollRun;
}());
exports.EmployeePayrollRun = EmployeePayrollRun;
//# sourceMappingURL=employeePayrollRun.js.map