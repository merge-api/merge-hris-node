"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginatedPersistentDeductionList = void 0;
var PaginatedPersistentDeductionList = (function () {
    function PaginatedPersistentDeductionList() {
    }
    PaginatedPersistentDeductionList.getAttributeTypeMap = function () {
        return PaginatedPersistentDeductionList.attributeTypeMap;
    };
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
    return PaginatedPersistentDeductionList;
}());
exports.PaginatedPersistentDeductionList = PaginatedPersistentDeductionList;
//# sourceMappingURL=paginatedPersistentDeductionList.js.map