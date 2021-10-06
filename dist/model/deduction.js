"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deduction = void 0;
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
            "name": "employee_payroll_run",
            "baseName": "employee_payroll_run",
            "type": "string"
        },
        {
            "name": "persistent_deduction",
            "baseName": "persistent_deduction",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "employee_deduction",
            "baseName": "employee_deduction",
            "type": "number"
        },
        {
            "name": "company_deduction",
            "baseName": "company_deduction",
            "type": "number"
        },
        {
            "name": "remote_data",
            "baseName": "remote_data",
            "type": "Array<{ [key: string]: any; }>"
        }
    ];
    return Deduction;
}());
exports.Deduction = Deduction;
//# sourceMappingURL=deduction.js.map