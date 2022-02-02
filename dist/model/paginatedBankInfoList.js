"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginatedBankInfoList = void 0;
class PaginatedBankInfoList {
    static getAttributeTypeMap() {
        return PaginatedBankInfoList.attributeTypeMap;
    }
}
exports.PaginatedBankInfoList = PaginatedBankInfoList;
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
//# sourceMappingURL=paginatedBankInfoList.js.map