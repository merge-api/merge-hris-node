"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginatedPayrollRunList = void 0;
var PaginatedPayrollRunList = (function () {
    function PaginatedPayrollRunList() {
    }
    PaginatedPayrollRunList.getAttributeTypeMap = function () {
        return PaginatedPayrollRunList.attributeTypeMap;
    };
    PaginatedPayrollRunList.discriminator = undefined;
    PaginatedPayrollRunList.attributeTypeMap = [
        {
            "name": "next",
            "baseName": "next",
            "type": "string"
        },
        {
            "name": "previous",
            "baseName": "previous",
            "type": "string"
        },
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<PayrollRun>"
        }
    ];
    return PaginatedPayrollRunList;
}());
exports.PaginatedPayrollRunList = PaginatedPayrollRunList;
//# sourceMappingURL=paginatedPayrollRunList.js.map