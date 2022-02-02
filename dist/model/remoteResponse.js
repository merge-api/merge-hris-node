"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoteResponse = void 0;
class RemoteResponse {
    static getAttributeTypeMap() {
        return RemoteResponse.attributeTypeMap;
    }
}
exports.RemoteResponse = RemoteResponse;
RemoteResponse.discriminator = undefined;
RemoteResponse.attributeTypeMap = [
    {
        "name": "method",
        "baseName": "method",
        "type": "string"
    },
    {
        "name": "path",
        "baseName": "path",
        "type": "string"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "number"
    },
    {
        "name": "response",
        "baseName": "response",
        "type": "{ [key: string]: any; }"
    },
    {
        "name": "headers",
        "baseName": "headers",
        "type": "{ [key: string]: any; }"
    }
];
//# sourceMappingURL=remoteResponse.js.map