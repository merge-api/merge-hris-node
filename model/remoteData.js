"use strict";
/**
 * Merge HRIS API
 * The unified API for building rich integrations with multiple HR Information System platforms.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: hello@merge.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
exports.__esModule = true;
exports.RemoteData = void 0;
var RemoteData = /** @class */ (function () {
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