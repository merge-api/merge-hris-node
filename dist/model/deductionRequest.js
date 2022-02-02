"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeductionRequest = void 0;
class DeductionRequest {
    static getAttributeTypeMap() {
        return DeductionRequest.attributeTypeMap;
    }
}
exports.DeductionRequest = DeductionRequest;
DeductionRequest.discriminator = undefined;
DeductionRequest.attributeTypeMap = [
    {
        "name": "employee_payroll_run",
        "baseName": "employee_payroll_run",
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
//# sourceMappingURL=deductionRequest.js.map