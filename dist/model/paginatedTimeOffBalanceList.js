"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginatedTimeOffBalanceList = void 0;
class PaginatedTimeOffBalanceList {
    static getAttributeTypeMap() {
        return PaginatedTimeOffBalanceList.attributeTypeMap;
    }
}
exports.PaginatedTimeOffBalanceList = PaginatedTimeOffBalanceList;
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
//# sourceMappingURL=paginatedTimeOffBalanceList.js.map