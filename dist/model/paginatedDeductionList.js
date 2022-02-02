"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginatedDeductionList = void 0;
class PaginatedDeductionList {
    static getAttributeTypeMap() {
        return PaginatedDeductionList.attributeTypeMap;
    }
}
exports.PaginatedDeductionList = PaginatedDeductionList;
PaginatedDeductionList.discriminator = undefined;
PaginatedDeductionList.attributeTypeMap = [
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
        "type": "Array<Deduction>"
    }
];
//# sourceMappingURL=paginatedDeductionList.js.map