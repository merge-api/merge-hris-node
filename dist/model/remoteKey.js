"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoteKey = void 0;
var RemoteKey = (function () {
    function RemoteKey() {
    }
    RemoteKey.getAttributeTypeMap = function () {
        return RemoteKey.attributeTypeMap;
    };
    RemoteKey.discriminator = undefined;
    RemoteKey.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "key",
            "baseName": "key",
            "type": "string"
        }
    ];
    return RemoteKey;
}());
exports.RemoteKey = RemoteKey;
//# sourceMappingURL=remoteKey.js.map