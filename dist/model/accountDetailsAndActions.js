"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountDetailsAndActions = void 0;
var AccountDetailsAndActions = (function () {
    function AccountDetailsAndActions() {
    }
    AccountDetailsAndActions.getAttributeTypeMap = function () {
        return AccountDetailsAndActions.attributeTypeMap;
    };
    AccountDetailsAndActions.discriminator = undefined;
    AccountDetailsAndActions.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "category",
            "baseName": "category",
            "type": "CategoryEnum"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "AccountDetailsAndActionsStatusEnum"
        },
        {
            "name": "status_detail",
            "baseName": "status_detail",
            "type": "string"
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
            "name": "integration",
            "baseName": "integration",
            "type": "AccountDetailsAndActionsIntegration"
        }
    ];
    return AccountDetailsAndActions;
}());
exports.AccountDetailsAndActions = AccountDetailsAndActions;
//# sourceMappingURL=accountDetailsAndActions.js.map