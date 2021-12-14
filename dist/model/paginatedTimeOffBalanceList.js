"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PaginatedTimeOffBalanceList = (function () {
    function PaginatedTimeOffBalanceList() {
    }
    PaginatedTimeOffBalanceList.getAttributeTypeMap = function () {
        return PaginatedTimeOffBalanceList.attributeTypeMap;
    };
    PaginatedTimeOffBalanceList.discriminator = undefined;
    PaginatedTimeOffBalanceList.attributeTypeMap = [
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
            "type": "Array<TimeOffBalance>"
        }
    ];
    return PaginatedTimeOffBalanceList;
}());
exports.PaginatedTimeOffBalanceList = PaginatedTimeOffBalanceList;
//# sourceMappingURL=paginatedTimeOffBalanceList.js.map