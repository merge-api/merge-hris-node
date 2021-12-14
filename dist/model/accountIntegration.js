"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountIntegration = void 0;
var AccountIntegration = (function () {
    function AccountIntegration() {
    }
    AccountIntegration.getAttributeTypeMap = function () {
        return AccountIntegration.attributeTypeMap;
    };
    AccountIntegration.discriminator = undefined;
    AccountIntegration.attributeTypeMap = [
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
        }
    ];
    return AccountIntegration;
}());
exports.AccountIntegration = AccountIntegration;
//# sourceMappingURL=accountIntegration.js.map