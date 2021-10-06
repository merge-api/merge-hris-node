"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginatedTeamList = void 0;
var PaginatedTeamList = (function () {
    function PaginatedTeamList() {
    }
    PaginatedTeamList.getAttributeTypeMap = function () {
        return PaginatedTeamList.attributeTypeMap;
    };
    PaginatedTeamList.discriminator = undefined;
    PaginatedTeamList.attributeTypeMap = [
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
            "type": "Array<Team>"
        }
    ];
    return PaginatedTeamList;
}());
exports.PaginatedTeamList = PaginatedTeamList;
//# sourceMappingURL=paginatedTeamList.js.map