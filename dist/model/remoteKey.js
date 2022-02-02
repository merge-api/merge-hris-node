"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoteKey = void 0;
class RemoteKey {
    static getAttributeTypeMap() {
        return RemoteKey.attributeTypeMap;
    }
}
exports.RemoteKey = RemoteKey;
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
//# sourceMappingURL=remoteKey.js.map