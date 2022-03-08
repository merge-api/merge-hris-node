"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Benefit = void 0;
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
            "type": "string"
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
        },
        {
            "name": "remote_data",
            "baseName": "remote_data",
            "type": "Array<RemoteData>"
        }
    ];
    return Benefit;
}());
exports.Benefit = Benefit;
//# sourceMappingURL=benefit.js.map