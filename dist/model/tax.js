"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax = void 0;
class Tax {
    static getAttributeTypeMap() {
        return Tax.attributeTypeMap;
    }
}
exports.Tax = Tax;
Tax.discriminator = undefined;
Tax.attributeTypeMap = [
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
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "amount",
        "baseName": "amount",
        "type": "number"
    },
    {
        "name": "employer_tax",
        "baseName": "employer_tax",
        "type": "boolean"
    },
    {
        "name": "remote_data",
        "baseName": "remote_data",
        "type": "Array<{ [key: string]: any; }>"
    }
];
//# sourceMappingURL=tax.js.map