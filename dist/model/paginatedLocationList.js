"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginatedLocationList = void 0;
var PaginatedLocationList = (function () {
    function PaginatedLocationList() {
    }
    PaginatedLocationList.getAttributeTypeMap = function () {
        return PaginatedLocationList.attributeTypeMap;
    };
    PaginatedLocationList.discriminator = undefined;
    PaginatedLocationList.attributeTypeMap = [
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
            "type": "Array<Location>"
        }
    ];
    return PaginatedLocationList;
}());
exports.PaginatedLocationList = PaginatedLocationList;
//# sourceMappingURL=paginatedLocationList.js.map