"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RemoteDataRequest = (function () {
    function RemoteDataRequest() {
    }
    RemoteDataRequest.getAttributeTypeMap = function () {
        return RemoteDataRequest.attributeTypeMap;
    };
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
    return RemoteDataRequest;
}());
exports.RemoteDataRequest = RemoteDataRequest;
//# sourceMappingURL=remoteDataRequest.js.map