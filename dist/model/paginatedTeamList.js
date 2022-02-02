"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginatedTeamList = void 0;
class PaginatedTeamList {
    static getAttributeTypeMap() {
        return PaginatedTeamList.attributeTypeMap;
    }
}
exports.PaginatedTeamList = PaginatedTeamList;
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
//# sourceMappingURL=paginatedTeamList.js.map