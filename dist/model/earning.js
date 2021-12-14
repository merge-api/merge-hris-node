"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
            "name": "employeePayrollRun",
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
            "name": "remoteData",
            "baseName": "remote_data",
            "type": "Array<{ [key: string]: any; }>"
        }
    ];
    return Earning;
}());
exports.Earning = Earning;
//# sourceMappingURL=earning.js.map