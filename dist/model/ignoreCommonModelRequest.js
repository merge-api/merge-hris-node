"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IgnoreCommonModelRequest = void 0;
var IgnoreCommonModelRequest = (function () {
    function IgnoreCommonModelRequest() {
    }
    IgnoreCommonModelRequest.getAttributeTypeMap = function () {
        return IgnoreCommonModelRequest.attributeTypeMap;
    };
    IgnoreCommonModelRequest.discriminator = undefined;
    IgnoreCommonModelRequest.attributeTypeMap = [
        {
            "name": "reason",
            "baseName": "reason",
            "type": "ReasonEnum"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        }
    ];
    return IgnoreCommonModelRequest;
}());
exports.IgnoreCommonModelRequest = IgnoreCommonModelRequest;
//# sourceMappingURL=ignoreCommonModelRequest.js.map