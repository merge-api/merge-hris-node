"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginatedBankInfoList = void 0;
var PaginatedBankInfoList = (function () {
    function PaginatedBankInfoList() {
    }
    PaginatedBankInfoList.getAttributeTypeMap = function () {
        return PaginatedBankInfoList.attributeTypeMap;
    };
    PaginatedBankInfoList.discriminator = undefined;
    PaginatedBankInfoList.attributeTypeMap = [
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
            "type": "Array<BankInfo>"
        }
    ];
    return PaginatedBankInfoList;
}());
exports.PaginatedBankInfoList = PaginatedBankInfoList;
//# sourceMappingURL=paginatedBankInfoList.js.map