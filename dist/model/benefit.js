"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Benefit = (function () {
    function Benefit() {
    }
    Benefit.getAttributeTypeMap = function () {
        return Benefit.attributeTypeMap;
    };
    Benefit.discriminator = undefined;
    Benefit.attributeTypeMap = [
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
            "name": "providerName",
            "baseName": "provider_name",
            "type": "string"
        },
        {
            "name": "benefitPlanType",
            "baseName": "benefit_plan_type",
            "type": "BenefitPlanTypeEnum"
        },
        {
            "name": "employeeContribution",
            "baseName": "employee_contribution",
            "type": "number"
        },
        {
            "name": "companyContribution",
            "baseName": "company_contribution",
            "type": "number"
        },
        {
            "name": "remoteData",
            "baseName": "remote_data",
            "type": "Array<RemoteData>"
        }
    ];
    return Benefit;
}());
exports.Benefit = Benefit;
//# sourceMappingURL=benefit.js.map