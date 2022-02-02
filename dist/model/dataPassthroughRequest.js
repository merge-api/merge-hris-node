"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataPassthroughRequest = void 0;
class DataPassthroughRequest {
    static getAttributeTypeMap() {
        return DataPassthroughRequest.attributeTypeMap;
    }
}
exports.DataPassthroughRequest = DataPassthroughRequest;
DataPassthroughRequest.discriminator = undefined;
DataPassthroughRequest.attributeTypeMap = [
    {
        "name": "method",
        "baseName": "method",
        "type": "MethodEnum"
    },
    {
        "name": "path",
        "baseName": "path",
        "type": "string"
    },
    {
        "name": "base_url_override",
        "baseName": "base_url_override",
        "type": "string"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "string"
    },
    {
        "name": "headers",
        "baseName": "headers",
        "type": "{ [key: string]: any; }"
    },
    {
        "name": "request_format",
        "baseName": "request_format",
        "type": "RequestFormatEnum"
    }
];
//# sourceMappingURL=dataPassthroughRequest.js.map