"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginatedAccountDetailsAndActionsList = void 0;
var PaginatedAccountDetailsAndActionsList = (function () {
    function PaginatedAccountDetailsAndActionsList() {
    }
    PaginatedAccountDetailsAndActionsList.getAttributeTypeMap = function () {
        return PaginatedAccountDetailsAndActionsList.attributeTypeMap;
    };
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
    return PaginatedAccountDetailsAndActionsList;
}());
exports.PaginatedAccountDetailsAndActionsList = PaginatedAccountDetailsAndActionsList;
//# sourceMappingURL=paginatedAccountDetailsAndActionsList.js.map