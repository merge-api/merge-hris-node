"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginatedTimeOffList = void 0;
class PaginatedTimeOffList {
    static getAttributeTypeMap() {
        return PaginatedTimeOffList.attributeTypeMap;
    }
}
exports.PaginatedTimeOffList = PaginatedTimeOffList;
PaginatedTimeOffList.discriminator = undefined;
PaginatedTimeOffList.attributeTypeMap = [
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
        "type": "Array<TimeOff>"
    }
];
//# sourceMappingURL=paginatedTimeOffList.js.map