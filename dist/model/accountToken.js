"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountToken = void 0;
var AccountToken = (function () {
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
//# sourceMappingURL=accountToken.js.map