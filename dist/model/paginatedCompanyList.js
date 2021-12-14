"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PaginatedCompanyList = (function () {
    function PaginatedCompanyList() {
    }
    PaginatedCompanyList.getAttributeTypeMap = function () {
        return PaginatedCompanyList.attributeTypeMap;
    };
    PaginatedCompanyList.discriminator = undefined;
    PaginatedCompanyList.attributeTypeMap = [
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
            "type": "Array<Company>"
        }
    ];
    return PaginatedCompanyList;
}());
exports.PaginatedCompanyList = PaginatedCompanyList;
//# sourceMappingURL=paginatedCompanyList.js.map