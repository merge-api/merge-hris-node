"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PaginatedEmployeePayrollRunList = (function () {
    function PaginatedEmployeePayrollRunList() {
    }
    PaginatedEmployeePayrollRunList.getAttributeTypeMap = function () {
        return PaginatedEmployeePayrollRunList.attributeTypeMap;
    };
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
    return PaginatedEmployeePayrollRunList;
}());
exports.PaginatedEmployeePayrollRunList = PaginatedEmployeePayrollRunList;
//# sourceMappingURL=paginatedEmployeePayrollRunList.js.map