"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Deduction = (function () {
    function Deduction() {
    }
    Deduction.getAttributeTypeMap = function () {
        return Deduction.attributeTypeMap;
    };
    Deduction.discriminator = undefined;
    Deduction.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "employeePayrollRun",
            "baseName": "employee_payroll_run",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "employeeDeduction",
            "baseName": "employee_deduction",
            "type": "number"
        },
        {
            "name": "companyDeduction",
            "baseName": "company_deduction",
            "type": "number"
        },
        {
            "name": "remoteData",
            "baseName": "remote_data",
            "type": "Array<{ [key: string]: any; }>"
        }
    ];
    return Deduction;
}());
exports.Deduction = Deduction;
//# sourceMappingURL=deduction.js.map