"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncStatus = void 0;
var SyncStatus = (function () {
    function SyncStatus() {
    }
    SyncStatus.getAttributeTypeMap = function () {
        return SyncStatus.attributeTypeMap;
    };
    SyncStatus.discriminator = undefined;
    SyncStatus.attributeTypeMap = [
        {
            "name": "model_name",
            "baseName": "model_name",
            "type": "string"
        },
        {
            "name": "model_id",
            "baseName": "model_id",
            "type": "string"
        },
        {
            "name": "last_sync_start",
            "baseName": "last_sync_start",
            "type": "Date"
        },
        {
            "name": "next_sync_start",
            "baseName": "next_sync_start",
            "type": "Date"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "SyncStatusStatusEnum"
        },
        {
            "name": "is_initial_sync",
            "baseName": "is_initial_sync",
            "type": "boolean"
        }
    ];
    return SyncStatus;
}());
exports.SyncStatus = SyncStatus;
//# sourceMappingURL=syncStatus.js.map