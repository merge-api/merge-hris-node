"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Issue = void 0;
var Issue = (function () {
    function Issue() {
    }
    Issue.getAttributeTypeMap = function () {
        return Issue.attributeTypeMap;
    };
    Issue.discriminator = undefined;
    Issue.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "IssueStatusEnum"
        },
        {
            "name": "error_description",
            "baseName": "error_description",
            "type": "string"
        },
        {
            "name": "end_user",
            "baseName": "end_user",
            "type": "{ [key: string]: any; }"
        },
        {
            "name": "first_incident_time",
            "baseName": "first_incident_time",
            "type": "Date"
        },
        {
            "name": "last_incident_time",
            "baseName": "last_incident_time",
            "type": "Date"
        },
        {
            "name": "is_muted",
            "baseName": "is_muted",
            "type": "boolean"
        }
    ];
    return Issue;
}());
exports.Issue = Issue;
//# sourceMappingURL=issue.js.map