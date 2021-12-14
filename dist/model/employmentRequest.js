"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EmploymentRequest = (function () {
    function EmploymentRequest() {
    }
    EmploymentRequest.getAttributeTypeMap = function () {
        return EmploymentRequest.attributeTypeMap;
    };
    EmploymentRequest.discriminator = undefined;
    EmploymentRequest.attributeTypeMap = [
        {
            "name": "remote_id",
            "baseName": "remote_id",
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
        }
    ];
    return EmploymentRequest;
}());
exports.EmploymentRequest = EmploymentRequest;
//# sourceMappingURL=employmentRequest.js.map