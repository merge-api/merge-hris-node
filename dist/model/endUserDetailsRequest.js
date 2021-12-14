"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EndUserDetailsRequest = (function () {
    function EndUserDetailsRequest() {
    }
    EndUserDetailsRequest.getAttributeTypeMap = function () {
        return EndUserDetailsRequest.attributeTypeMap;
    };
    EndUserDetailsRequest.discriminator = undefined;
    EndUserDetailsRequest.attributeTypeMap = [
        {
            "name": "endUserEmailAddress",
            "baseName": "end_user_email_address",
            "type": "string"
        },
        {
            "name": "endUserOrganizationName",
            "baseName": "end_user_organization_name",
            "type": "string"
        },
        {
            "name": "endUserOriginId",
            "baseName": "end_user_origin_id",
            "type": "string"
        },
        {
            "name": "categories",
            "baseName": "categories",
            "type": "Array<CategoriesEnum>"
        },
        {
            "name": "integration",
            "baseName": "integration",
            "type": "string"
        }
    ];
    return EndUserDetailsRequest;
}());
exports.EndUserDetailsRequest = EndUserDetailsRequest;
//# sourceMappingURL=endUserDetailsRequest.js.map