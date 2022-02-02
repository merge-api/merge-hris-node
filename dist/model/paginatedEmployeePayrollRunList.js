"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginatedEmployeePayrollRunList = void 0;
class PaginatedEmployeePayrollRunList {
    static getAttributeTypeMap() {
        return PaginatedEmployeePayrollRunList.attributeTypeMap;
    }
}
exports.PaginatedEmployeePayrollRunList = PaginatedEmployeePayrollRunList;
PaginatedEmployeePayrollRunList.discriminator = undefined;
PaginatedEmployeePayrollRunList.attributeTypeMap = [
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
        "type": "Array<EmployeePayrollRun>"
    }
];
//# sourceMappingURL=paginatedEmployeePayrollRunList.js.map