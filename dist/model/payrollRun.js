"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayrollRun = void 0;
class PayrollRun {
    static getAttributeTypeMap() {
        return PayrollRun.attributeTypeMap;
    }
}
exports.PayrollRun = PayrollRun;
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
//# sourceMappingURL=payrollRun.js.map