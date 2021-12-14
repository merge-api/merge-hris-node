"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinkToken = (function () {
    function LinkToken() {
    }
    LinkToken.getAttributeTypeMap = function () {
        return LinkToken.attributeTypeMap;
    };
    LinkToken.discriminator = undefined;
    LinkToken.attributeTypeMap = [
        {
            "name": "linkToken",
            "baseName": "link_token",
            "type": "string"
        },
        {
            "name": "integrationName",
            "baseName": "integration_name",
            "type": "string"
        }
    ];
    return LinkToken;
}());
exports.LinkToken = LinkToken;
//# sourceMappingURL=linkToken.js.map