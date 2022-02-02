"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginatedPayGroupList = void 0;
class PaginatedPayGroupList {
    static getAttributeTypeMap() {
        return PaginatedPayGroupList.attributeTypeMap;
    }
}
exports.PaginatedPayGroupList = PaginatedPayGroupList;
PaginatedPayGroupList.discriminator = undefined;
PaginatedPayGroupList.attributeTypeMap = [
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
        "type": "Array<PayGroup>"
    }
];
//# sourceMappingURL=paginatedPayGroupList.js.map