"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PaginatedDeductionList = (function () {
    function PaginatedDeductionList() {
    }
    PaginatedDeductionList.getAttributeTypeMap = function () {
        return PaginatedDeductionList.attributeTypeMap;
    };
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
    return PaginatedDeductionList;
}());
exports.PaginatedDeductionList = PaginatedDeductionList;
//# sourceMappingURL=paginatedDeductionList.js.map