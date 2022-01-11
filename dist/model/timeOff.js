"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeOff = void 0;
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
            "name": "employee_note",
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
            "name": "request_type",
            "baseName": "request_type",
            "type": "RequestTypeEnum"
        },
        {
            "name": "start_time",
            "baseName": "start_time",
            "type": "Date"
        },
        {
            "name": "end_time",
            "baseName": "end_time",
            "type": "Date"
        },
        {
            "name": "remote_data",
            "baseName": "remote_data",
            "type": "Array<RemoteData>"
        }
    ];
    return TimeOff;
}());
exports.TimeOff = TimeOff;
//# sourceMappingURL=timeOff.js.map