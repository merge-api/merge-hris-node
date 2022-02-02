"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeOffBalance = void 0;
class TimeOffBalance {
    static getAttributeTypeMap() {
        return TimeOffBalance.attributeTypeMap;
    }
}
exports.TimeOffBalance = TimeOffBalance;
TimeOffBalance.discriminator = undefined;
TimeOffBalance.attributeTypeMap = [
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
        "name": "employee",
        "baseName": "employee",
        "type": "string"
    },
    {
        "name": "balance",
        "baseName": "balance",
        "type": "number"
    },
    {
        "name": "used",
        "baseName": "used",
        "type": "number"
    },
    {
        "name": "policy_type",
        "baseName": "policy_type",
        "type": "PolicyTypeEnum"
    },
    {
        "name": "remote_data",
        "baseName": "remote_data",
        "type": "Array<RemoteData>"
    }
];
//# sourceMappingURL=timeOffBalance.js.map