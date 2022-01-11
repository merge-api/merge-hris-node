"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginatedEmploymentList = void 0;
var PaginatedEmploymentList = (function () {
    function PaginatedEmploymentList() {
    }
    PaginatedEmploymentList.getAttributeTypeMap = function () {
        return PaginatedEmploymentList.attributeTypeMap;
    };
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
    return PaginatedEmploymentList;
}());
exports.PaginatedEmploymentList = PaginatedEmploymentList;
//# sourceMappingURL=paginatedEmploymentList.js.map