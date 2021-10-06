"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkToken = void 0;
var LinkToken = (function () {
    function LinkToken() {
    }
    LinkToken.getAttributeTypeMap = function () {
        return LinkToken.attributeTypeMap;
    };
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
    return LinkToken;
}());
exports.LinkToken = LinkToken;
//# sourceMappingURL=linkToken.js.map