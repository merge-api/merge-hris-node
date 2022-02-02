"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginatedCompanyList = void 0;
class PaginatedCompanyList {
    static getAttributeTypeMap() {
        return PaginatedCompanyList.attributeTypeMap;
    }
}
exports.PaginatedCompanyList = PaginatedCompanyList;
PaginatedCompanyList.discriminator = undefined;
PaginatedCompanyList.attributeTypeMap = [
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
        "type": "Array<Company>"
    }
];
//# sourceMappingURL=paginatedCompanyList.js.map