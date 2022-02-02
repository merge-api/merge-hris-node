"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BenefitRequest = void 0;
class BenefitRequest {
    static getAttributeTypeMap() {
        return BenefitRequest.attributeTypeMap;
    }
}
exports.BenefitRequest = BenefitRequest;
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
//# sourceMappingURL=benefitRequest.js.map