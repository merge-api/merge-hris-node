"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkToken = void 0;
class LinkToken {
    static getAttributeTypeMap() {
        return LinkToken.attributeTypeMap;
    }
}
exports.LinkToken = LinkToken;
LinkToken.discriminator = undefined;
LinkToken.attributeTypeMap = [
    {
        "name": "link_token",
        "baseName": "link_token",
        "type": "string"
    },
    {
        "name": "integration_name",
        "baseName": "integration_name",
        "type": "string"
    }
];
//# sourceMappingURL=linkToken.js.map