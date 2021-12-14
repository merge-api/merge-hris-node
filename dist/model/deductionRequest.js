"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DeductionRequest = (function () {
    function DeductionRequest() {
    }
    DeductionRequest.getAttributeTypeMap = function () {
        return DeductionRequest.attributeTypeMap;
    };
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
    return DeductionRequest;
}());
exports.DeductionRequest = DeductionRequest;
//# sourceMappingURL=deductionRequest.js.map