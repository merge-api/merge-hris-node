"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayrollRun = void 0;
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
            "name": "remote_id",
            "baseName": "remote_id",
            "type": "string"
        },
        {
            "name": "run_state",
            "baseName": "run_state",
            "type": "RunStateEnum"
        },
        {
            "name": "run_type",
            "baseName": "run_type",
            "type": "RunTypeEnum"
        },
        {
            "name": "start_date",
            "baseName": "start_date",
            "type": "Date"
        },
        {
            "name": "end_date",
            "baseName": "end_date",
            "type": "Date"
        },
        {
            "name": "check_date",
            "baseName": "check_date",
            "type": "Date"
        },
        {
            "name": "remote_data",
            "baseName": "remote_data",
            "type": "Array<RemoteData>"
        }
    ];
    return PayrollRun;
}());
exports.PayrollRun = PayrollRun;
//# sourceMappingURL=payrollRun.js.map