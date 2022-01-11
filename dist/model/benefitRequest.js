"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BenefitRequest = void 0;
var BenefitRequest = (function () {
    function BenefitRequest() {
    }
    BenefitRequest.getAttributeTypeMap = function () {
        return BenefitRequest.attributeTypeMap;
    };
    BenefitRequest.discriminator = undefined;
    BenefitRequest.attributeTypeMap = [
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
            "name": "provider_name",
            "baseName": "provider_name",
            "type": "string"
        },
        {
            "name": "benefit_plan_type",
            "baseName": "benefit_plan_type",
            "type": "BenefitPlanTypeEnum"
        },
        {
            "name": "employee_contribution",
            "baseName": "employee_contribution",
            "type": "number"
        },
        {
            "name": "company_contribution",
            "baseName": "company_contribution",
            "type": "number"
        }
    ];
    return BenefitRequest;
}());
exports.BenefitRequest = BenefitRequest;
//# sourceMappingURL=benefitRequest.js.map