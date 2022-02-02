"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoteData = void 0;
class RemoteData {
    static getAttributeTypeMap() {
        return RemoteData.attributeTypeMap;
    }
}
exports.RemoteData = RemoteData;
RemoteData.discriminator = undefined;
RemoteData.attributeTypeMap = [
    {
        "name": "path",
        "baseName": "path",
        "type": "string"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "{ [key: string]: any; }"
    }
];
//# sourceMappingURL=remoteData.js.map