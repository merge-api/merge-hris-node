"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginatedEmployeeList = void 0;
class PaginatedEmployeeList {
    static getAttributeTypeMap() {
        return PaginatedEmployeeList.attributeTypeMap;
    }
}
exports.PaginatedEmployeeList = PaginatedEmployeeList;
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
//# sourceMappingURL=paginatedEmployeeList.js.map