"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TimeOff = (function () {
    function TimeOff() {
    }
    TimeOff.getAttributeTypeMap = function () {
        return TimeOff.attributeTypeMap;
    };
    TimeOff.discriminator = undefined;
    TimeOff.attributeTypeMap = [
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
            "name": "approver",
            "baseName": "approver",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "TimeOffStatusEnum"
        },
        {
            "name": "employeeNote",
            "baseName": "employee_note",
            "type": "string"
        },
        {
            "name": "units",
            "baseName": "units",
            "type": "UnitsEnum"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "requestType",
            "baseName": "request_type",
            "type": "RequestTypeEnum"
        },
        {
            "name": "startTime",
            "baseName": "start_time",
            "type": "Date"
        },
        {
            "name": "endTime",
            "baseName": "end_time",
            "type": "Date"
        },
        {
            "name": "remoteData",
            "baseName": "remote_data",
            "type": "Array<RemoteData>"
        }
    ];
    return TimeOff;
}());
exports.TimeOff = TimeOff;
//# sourceMappingURL=timeOff.js.map