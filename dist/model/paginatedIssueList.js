"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginatedIssueList = void 0;
class PaginatedIssueList {
    static getAttributeTypeMap() {
        return PaginatedIssueList.attributeTypeMap;
    }
}
exports.PaginatedIssueList = PaginatedIssueList;
PaginatedIssueList.discriminator = undefined;
PaginatedIssueList.attributeTypeMap = [
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
        "type": "Array<Issue>"
    }
];
//# sourceMappingURL=paginatedIssueList.js.map