"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PaginatedEmployeeList = (function () {
    function PaginatedEmployeeList() {
    }
    PaginatedEmployeeList.getAttributeTypeMap = function () {
        return PaginatedEmployeeList.attributeTypeMap;
    };
    PaginatedEmployeeList.discriminator = undefined;
    PaginatedEmployeeList.attributeTypeMap = [
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
            "type": "Array<Employee>"
        }
    ];
    return PaginatedEmployeeList;
}());
exports.PaginatedEmployeeList = PaginatedEmployeeList;
//# sourceMappingURL=paginatedEmployeeList.js.map