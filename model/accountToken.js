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
exports.AccountToken = void 0;
var AccountToken = /** @class */ (function () {
    function AccountToken() {
    }
    AccountToken.getAttributeTypeMap = function () {
        return AccountToken.attributeTypeMap;
    };
    AccountToken.discriminator = undefined;
    AccountToken.attributeTypeMap = [
        {
            "name": "account_token",
            "baseName": "account_token",
            "type": "string"
        },
        {
            "name": "integration",
            "baseName": "integration",
            "type": "AccountIntegration"
        }
    ];
    return AccountToken;
}());
exports.AccountToken = AccountToken;