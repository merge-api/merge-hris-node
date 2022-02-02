"use strict";
/**
 * Merge HRIS API
 * The unified API for building rich integrations with multiple HR Information System platforms.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: hello@merge.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
exports.__esModule = true;
exports.PaginatedBenefitList = void 0;
var PaginatedBenefitList = /** @class */ (function () {
    function PaginatedBenefitList() {
    }
    PaginatedBenefitList.getAttributeTypeMap = function () {
        return PaginatedBenefitList.attributeTypeMap;
    };
    PaginatedBenefitList.discriminator = undefined;
    PaginatedBenefitList.attributeTypeMap = [
        {
            "name": "next",
            "baseName": "next",
            "type": "string"
        },
        {
            "name": "previous",
            "baseName": "previous",
            "type": "string"
        },
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<Benefit>"
        }
    ];
    return PaginatedBenefitList;
}());
exports.PaginatedBenefitList = PaginatedBenefitList;