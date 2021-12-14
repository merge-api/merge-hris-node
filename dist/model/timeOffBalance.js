"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TimeOffBalance = (function () {
    function TimeOffBalance() {
    }
    TimeOffBalance.getAttributeTypeMap = function () {
        return TimeOffBalance.attributeTypeMap;
    };
    TimeOffBalance.discriminator = undefined;
    TimeOffBalance.attributeTypeMap = [
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
            "name": "policyType",
            "baseName": "policy_type",
            "type": "PolicyTypeEnum"
        },
        {
            "name": "remoteData",
            "baseName": "remote_data",
            "type": "Array<RemoteData>"
        }
    ];
    return TimeOffBalance;
}());
exports.TimeOffBalance = TimeOffBalance;
//# sourceMappingURL=timeOffBalance.js.map