"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
            "name": "jobTitle",
            "baseName": "job_title",
            "type": "string"
        },
        {
            "name": "payRate",
            "baseName": "pay_rate",
            "type": "number"
        },
        {
            "name": "payPeriod",
            "baseName": "pay_period",
            "type": "PayPeriodEnum"
        },
        {
            "name": "payFrequency",
            "baseName": "pay_frequency",
            "type": "PayFrequencyEnum"
        },
        {
            "name": "payCurrency",
            "baseName": "pay_currency",
            "type": "PayCurrencyEnum"
        },
        {
            "name": "flsaStatus",
            "baseName": "flsa_status",
            "type": "FlsaStatusEnum"
        },
        {
            "name": "effectiveDate",
            "baseName": "effective_date",
            "type": "Date"
        },
        {
            "name": "employmentType",
            "baseName": "employment_type",
            "type": "EmploymentTypeEnum"
        },
        {
            "name": "remoteData",
            "baseName": "remote_data",
            "type": "Array<RemoteData>"
        }
    ];
    return Employment;
}());
exports.Employment = Employment;
//# sourceMappingURL=employment.js.map