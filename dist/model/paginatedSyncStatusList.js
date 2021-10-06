"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginatedSyncStatusList = void 0;
var PaginatedSyncStatusList = (function () {
    function PaginatedSyncStatusList() {
    }
    PaginatedSyncStatusList.getAttributeTypeMap = function () {
        return PaginatedSyncStatusList.attributeTypeMap;
    };
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
    return PaginatedSyncStatusList;
}());
exports.PaginatedSyncStatusList = PaginatedSyncStatusList;
//# sourceMappingURL=paginatedSyncStatusList.js.map