"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoteDataRequest = void 0;
class RemoteDataRequest {
    static getAttributeTypeMap() {
        return RemoteDataRequest.attributeTypeMap;
    }
}
exports.RemoteDataRequest = RemoteDataRequest;
RemoteDataRequest.discriminator = undefined;
RemoteDataRequest.attributeTypeMap = [
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
//# sourceMappingURL=remoteDataRequest.js.map