"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SyncStatus = (function () {
    function SyncStatus() {
    }
    SyncStatus.getAttributeTypeMap = function () {
        return SyncStatus.attributeTypeMap;
    };
    SyncStatus.discriminator = undefined;
    SyncStatus.attributeTypeMap = [
        {
            "name": "modelName",
            "baseName": "model_name",
            "type": "string"
        },
        {
            "name": "modelId",
            "baseName": "model_id",
            "type": "string"
        },
        {
            "name": "lastSyncStart",
            "baseName": "last_sync_start",
            "type": "Date"
        },
        {
            "name": "nextSyncStart",
            "baseName": "next_sync_start",
            "type": "Date"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "SyncStatusStatusEnum"
        },
        {
            "name": "isInitialSync",
            "baseName": "is_initial_sync",
            "type": "boolean"
        }
    ];
    return SyncStatus;
}());
exports.SyncStatus = SyncStatus;
//# sourceMappingURL=syncStatus.js.map