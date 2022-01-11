"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersistentDeductionRequest = void 0;
var PersistentDeductionRequest = (function () {
    function PersistentDeductionRequest() {
    }
    PersistentDeductionRequest.getAttributeTypeMap = function () {
        return PersistentDeductionRequest.attributeTypeMap;
    };
    PersistentDeductionRequest.discriminator = undefined;
    PersistentDeductionRequest.attributeTypeMap = [
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
            "name": "calculation_type",
            "baseName": "calculation_type",
            "type": "string"
        },
        {
            "name": "frequency",
            "baseName": "frequency",
            "type": "string"
        },
        {
            "name": "effective_date",
            "baseName": "effective_date",
            "type": "Date"
        },
        {
            "name": "end_date",
            "baseName": "end_date",
            "type": "Date"
        },
        {
            "name": "amount_deducted",
            "baseName": "amount_deducted",
            "type": "number"
        },
        {
            "name": "remote_data",
            "baseName": "remote_data",
            "type": "Array<{ [key: string]: any; }>"
        }
    ];
    return PersistentDeductionRequest;
}());
exports.PersistentDeductionRequest = PersistentDeductionRequest;
//# sourceMappingURL=persistentDeductionRequest.js.map