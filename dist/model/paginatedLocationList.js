"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginatedLocationList = void 0;
class PaginatedLocationList {
    static getAttributeTypeMap() {
        return PaginatedLocationList.attributeTypeMap;
    }
}
exports.PaginatedLocationList = PaginatedLocationList;
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
//# sourceMappingURL=paginatedLocationList.js.map