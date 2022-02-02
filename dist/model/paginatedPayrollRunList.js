"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginatedPayrollRunList = void 0;
class PaginatedPayrollRunList {
    static getAttributeTypeMap() {
        return PaginatedPayrollRunList.attributeTypeMap;
    }
}
exports.PaginatedPayrollRunList = PaginatedPayrollRunList;
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
//# sourceMappingURL=paginatedPayrollRunList.js.map