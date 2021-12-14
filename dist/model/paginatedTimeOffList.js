"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PaginatedTimeOffList = (function () {
    function PaginatedTimeOffList() {
    }
    PaginatedTimeOffList.getAttributeTypeMap = function () {
        return PaginatedTimeOffList.attributeTypeMap;
    };
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
    return PaginatedTimeOffList;
}());
exports.PaginatedTimeOffList = PaginatedTimeOffList;
//# sourceMappingURL=paginatedTimeOffList.js.map