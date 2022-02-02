"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginatedAccountDetailsAndActionsList = void 0;
class PaginatedAccountDetailsAndActionsList {
    static getAttributeTypeMap() {
        return PaginatedAccountDetailsAndActionsList.attributeTypeMap;
    }
}
exports.PaginatedAccountDetailsAndActionsList = PaginatedAccountDetailsAndActionsList;
PaginatedAccountDetailsAndActionsList.discriminator = undefined;
PaginatedAccountDetailsAndActionsList.attributeTypeMap = [
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
        "type": "Array<AccountDetailsAndActions>"
    }
];
//# sourceMappingURL=paginatedAccountDetailsAndActionsList.js.map