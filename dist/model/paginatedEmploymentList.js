"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginatedEmploymentList = void 0;
class PaginatedEmploymentList {
    static getAttributeTypeMap() {
        return PaginatedEmploymentList.attributeTypeMap;
    }
}
exports.PaginatedEmploymentList = PaginatedEmploymentList;
PaginatedEmploymentList.discriminator = undefined;
PaginatedEmploymentList.attributeTypeMap = [
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
        "type": "Array<Employment>"
    }
];
//# sourceMappingURL=paginatedEmploymentList.js.map