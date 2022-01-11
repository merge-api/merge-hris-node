"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employment = void 0;
var Employment = (function () {
    function Employment() {
    }
    Employment.getAttributeTypeMap = function () {
        return Employment.attributeTypeMap;
    };
    Employment.discriminator = undefined;
    Employment.attributeTypeMap = [
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
            "name": "job_title",
            "baseName": "job_title",
            "type": "string"
        },
        {
            "name": "pay_rate",
            "baseName": "pay_rate",
            "type": "number"
        },
        {
            "name": "pay_period",
            "baseName": "pay_period",
            "type": "PayPeriodEnum"
        },
        {
            "name": "pay_frequency",
            "baseName": "pay_frequency",
            "type": "PayFrequencyEnum"
        },
        {
            "name": "pay_currency",
            "baseName": "pay_currency",
            "type": "PayCurrencyEnum"
        },
        {
            "name": "flsa_status",
            "baseName": "flsa_status",
            "type": "FlsaStatusEnum"
        },
        {
            "name": "effective_date",
            "baseName": "effective_date",
            "type": "Date"
        },
        {
            "name": "employment_type",
            "baseName": "employment_type",
            "type": "EmploymentTypeEnum"
        },
        {
            "name": "remote_data",
            "baseName": "remote_data",
            "type": "Array<RemoteData>"
        }
    ];
    return Employment;
}());
exports.Employment = Employment;
//# sourceMappingURL=employment.js.map