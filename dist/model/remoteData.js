"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoteData = void 0;
var RemoteData = (function () {
    function RemoteData() {
    }
    RemoteData.getAttributeTypeMap = function () {
        return RemoteData.attributeTypeMap;
    };
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
    return RemoteData;
}());
exports.RemoteData = RemoteData;
//# sourceMappingURL=remoteData.js.map