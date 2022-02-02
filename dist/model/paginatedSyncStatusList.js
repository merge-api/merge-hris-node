"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginatedSyncStatusList = void 0;
class PaginatedSyncStatusList {
    static getAttributeTypeMap() {
        return PaginatedSyncStatusList.attributeTypeMap;
    }
}
exports.PaginatedSyncStatusList = PaginatedSyncStatusList;
PaginatedSyncStatusList.discriminator = undefined;
PaginatedSyncStatusList.attributeTypeMap = [
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
        "type": "Array<SyncStatus>"
    }
];
//# sourceMappingURL=paginatedSyncStatusList.js.map