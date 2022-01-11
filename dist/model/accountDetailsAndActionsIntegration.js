"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountDetailsAndActionsIntegration = void 0;
var AccountDetailsAndActionsIntegration = (function () {
    function AccountDetailsAndActionsIntegration() {
    }
    AccountDetailsAndActionsIntegration.getAttributeTypeMap = function () {
        return AccountDetailsAndActionsIntegration.attributeTypeMap;
    };
    AccountDetailsAndActionsIntegration.discriminator = undefined;
    AccountDetailsAndActionsIntegration.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "categories",
            "baseName": "categories",
            "type": "Array<CategoriesEnum>"
        },
        {
            "name": "image",
            "baseName": "image",
            "type": "string"
        },
        {
            "name": "square_image",
            "baseName": "square_image",
            "type": "string"
        },
        {
            "name": "color",
            "baseName": "color",
            "type": "string"
        },
        {
            "name": "slug",
            "baseName": "slug",
            "type": "string"
        },
        {
            "name": "passthrough_available",
            "baseName": "passthrough_available",
            "type": "boolean"
        },
        {
            "name": "available_model_operations",
            "baseName": "available_model_operations",
            "type": "Array<ModelOperation>"
        }
    ];
    return AccountDetailsAndActionsIntegration;
}());
exports.AccountDetailsAndActionsIntegration = AccountDetailsAndActionsIntegration;
//# sourceMappingURL=accountDetailsAndActionsIntegration.js.map