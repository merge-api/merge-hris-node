"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginatedPersistentDeductionList = void 0;
class PaginatedPersistentDeductionList {
    static getAttributeTypeMap() {
        return PaginatedPersistentDeductionList.attributeTypeMap;
    }
}
exports.PaginatedPersistentDeductionList = PaginatedPersistentDeductionList;
PaginatedPersistentDeductionList.discriminator = undefined;
PaginatedPersistentDeductionList.attributeTypeMap = [
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
        "type": "Array<PersistentDeduction>"
    }
];
//# sourceMappingURL=paginatedPersistentDeductionList.js.map