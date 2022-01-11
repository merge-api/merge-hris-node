"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginatedPayGroupList = void 0;
var PaginatedPayGroupList = (function () {
    function PaginatedPayGroupList() {
    }
    PaginatedPayGroupList.getAttributeTypeMap = function () {
        return PaginatedPayGroupList.attributeTypeMap;
    };
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
    return PaginatedPayGroupList;
}());
exports.PaginatedPayGroupList = PaginatedPayGroupList;
//# sourceMappingURL=paginatedPayGroupList.js.map