"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Earning = void 0;
class Earning {
    static getAttributeTypeMap() {
        return Earning.attributeTypeMap;
    }
}
exports.Earning = Earning;
Earning.discriminator = undefined;
Earning.attributeTypeMap = [
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
        "name": "amount",
        "baseName": "amount",
        "type": "number"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "TypeEnum"
    },
    {
        "name": "remote_data",
        "baseName": "remote_data",
        "type": "Array<{ [key: string]: any; }>"
    }
];
//# sourceMappingURL=earning.js.map