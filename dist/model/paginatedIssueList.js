"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginatedIssueList = void 0;
var PaginatedIssueList = (function () {
    function PaginatedIssueList() {
    }
    PaginatedIssueList.getAttributeTypeMap = function () {
        return PaginatedIssueList.attributeTypeMap;
    };
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
    return PaginatedIssueList;
}());
exports.PaginatedIssueList = PaginatedIssueList;
//# sourceMappingURL=paginatedIssueList.js.map