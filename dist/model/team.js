"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Team = (function () {
    function Team() {
    }
    Team.getAttributeTypeMap = function () {
        return Team.attributeTypeMap;
    };
    Team.discriminator = undefined;
    Team.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "remoteId",
            "baseName": "remote_id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "parentTeam",
            "baseName": "parent_team",
            "type": "string"
        },
        {
            "name": "remoteData",
            "baseName": "remote_data",
            "type": "Array<RemoteData>"
        }
    ];
    return Team;
}());
exports.Team = Team;
//# sourceMappingURL=team.js.map