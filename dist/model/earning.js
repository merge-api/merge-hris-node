"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Earning = void 0;
var Earning = (function () {
    function Earning() {
    }
    Earning.getAttributeTypeMap = function () {
        return Earning.attributeTypeMap;
    };
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
            "type": "EarningTypeEnum"
        },
        {
            "name": "remote_data",
            "baseName": "remote_data",
            "type": "Array<{ [key: string]: any; }>"
        }
    ];
    return Earning;
}());
exports.Earning = Earning;
//# sourceMappingURL=earning.js.map