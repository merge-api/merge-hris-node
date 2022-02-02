"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginatedBenefitList = void 0;
class PaginatedBenefitList {
    static getAttributeTypeMap() {
        return PaginatedBenefitList.attributeTypeMap;
    }
}
exports.PaginatedBenefitList = PaginatedBenefitList;
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
//# sourceMappingURL=paginatedBenefitList.js.map