"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EndUserDetailsRequest = void 0;
var EndUserDetailsRequest = (function () {
    function EndUserDetailsRequest() {
    }
    EndUserDetailsRequest.getAttributeTypeMap = function () {
        return EndUserDetailsRequest.attributeTypeMap;
    };
    EndUserDetailsRequest.discriminator = undefined;
    EndUserDetailsRequest.attributeTypeMap = [
        {
            "name": "end_user_email_address",
            "baseName": "end_user_email_address",
            "type": "string"
        },
        {
            "name": "end_user_organization_name",
            "baseName": "end_user_organization_name",
            "type": "string"
        },
        {
            "name": "end_user_origin_id",
            "baseName": "end_user_origin_id",
            "type": "string"
        },
        {
            "name": "categories",
            "baseName": "categories",
            "type": "Array<EndUserDetailsRequest.CategoriesEnum>"
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
(function (EndUserDetailsRequest) {
    var CategoriesEnum;
    (function (CategoriesEnum) {
        CategoriesEnum[CategoriesEnum["Hris"] = 'hris'] = "Hris";
        CategoriesEnum[CategoriesEnum["Ats"] = 'ats'] = "Ats";
        CategoriesEnum[CategoriesEnum["Accounting"] = 'accounting'] = "Accounting";
    })(CategoriesEnum = EndUserDetailsRequest.CategoriesEnum || (EndUserDetailsRequest.CategoriesEnum = {}));
})(EndUserDetailsRequest = exports.EndUserDetailsRequest || (exports.EndUserDetailsRequest = {}));
exports.EndUserDetailsRequest = EndUserDetailsRequest;
//# sourceMappingURL=endUserDetailsRequest.js.map