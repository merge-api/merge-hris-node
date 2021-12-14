"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PaginatedBenefitList = (function () {
    function PaginatedBenefitList() {
    }
    PaginatedBenefitList.getAttributeTypeMap = function () {
        return PaginatedBenefitList.attributeTypeMap;
    };
    PaginatedBenefitList.discriminator = undefined;
    PaginatedBenefitList.attributeTypeMap = [
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
            "type": "Array<Benefit>"
        }
    ];
    return PaginatedBenefitList;
}());
exports.PaginatedBenefitList = PaginatedBenefitList;
//# sourceMappingURL=paginatedBenefitList.js.map