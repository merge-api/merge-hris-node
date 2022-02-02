"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountToken = void 0;
class AccountToken {
    static getAttributeTypeMap() {
        return AccountToken.attributeTypeMap;
    }
}
exports.AccountToken = AccountToken;
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
//# sourceMappingURL=accountToken.js.map