"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
            "name": "errorDescription",
            "baseName": "error_description",
            "type": "string"
        },
        {
            "name": "endUser",
            "baseName": "end_user",
            "type": "{ [key: string]: any; }"
        },
        {
            "name": "firstIncidentTime",
            "baseName": "first_incident_time",
            "type": "Date"
        },
        {
            "name": "lastIncidentTime",
            "baseName": "last_incident_time",
            "type": "Date"
        },
        {
            "name": "isMuted",
            "baseName": "is_muted",
            "type": "boolean"
        }
    ];
    return Issue;
}());
exports.Issue = Issue;
//# sourceMappingURL=issue.js.map