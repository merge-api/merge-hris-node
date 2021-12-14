"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PayrollRun = (function () {
    function PayrollRun() {
    }
    PayrollRun.getAttributeTypeMap = function () {
        return PayrollRun.attributeTypeMap;
    };
    PayrollRun.discriminator = undefined;
    PayrollRun.attributeTypeMap = [
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
            "name": "runState",
            "baseName": "run_state",
            "type": "RunStateEnum"
        },
        {
            "name": "runType",
            "baseName": "run_type",
            "type": "RunTypeEnum"
        },
        {
            "name": "startDate",
            "baseName": "start_date",
            "type": "Date"
        },
        {
            "name": "endDate",
            "baseName": "end_date",
            "type": "Date"
        },
        {
            "name": "checkDate",
            "baseName": "check_date",
            "type": "Date"
        },
        {
            "name": "remoteData",
            "baseName": "remote_data",
            "type": "Array<RemoteData>"
        }
    ];
    return PayrollRun;
}());
exports.PayrollRun = PayrollRun;
//# sourceMappingURL=payrollRun.js.map