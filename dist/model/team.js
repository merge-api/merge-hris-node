"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Team = void 0;
class Team {
    static getAttributeTypeMap() {
        return Team.attributeTypeMap;
    }
}
exports.Team = Team;
Team.discriminator = undefined;
Team.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "remote_id",
        "baseName": "remote_id",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "parent_team",
        "baseName": "parent_team",
        "type": "string"
    },
    {
        "name": "remote_data",
        "baseName": "remote_data",
        "type": "Array<RemoteData>"
    }
];
//# sourceMappingURL=team.js.map