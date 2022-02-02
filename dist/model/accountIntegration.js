"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountIntegration = void 0;
class AccountIntegration {
    static getAttributeTypeMap() {
        return AccountIntegration.attributeTypeMap;
    }
}
exports.AccountIntegration = AccountIntegration;
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
//# sourceMappingURL=accountIntegration.js.map