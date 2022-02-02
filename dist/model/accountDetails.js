"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountDetails = void 0;
class AccountDetails {
    static getAttributeTypeMap() {
        return AccountDetails.attributeTypeMap;
    }
}
exports.AccountDetails = AccountDetails;
AccountDetails.discriminator = undefined;
AccountDetails.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "integration",
        "baseName": "integration",
        "type": "string"
    },
    {
        "name": "category",
        "baseName": "category",
        "type": "CategoryEnum"
    },
    {
        "name": "end_user_origin_id",
        "baseName": "end_user_origin_id",
        "type": "string"
    },
    {
        "name": "end_user_organization_name",
        "baseName": "end_user_organization_name",
        "type": "string"
    },
    {
        "name": "end_user_email_address",
        "baseName": "end_user_email_address",
        "type": "string"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    }
];
//# sourceMappingURL=accountDetails.js.map