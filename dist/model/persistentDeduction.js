"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersistentDeduction = void 0;
class PersistentDeduction {
    static getAttributeTypeMap() {
        return PersistentDeduction.attributeTypeMap;
    }
}
exports.PersistentDeduction = PersistentDeduction;
PersistentDeduction.discriminator = undefined;
PersistentDeduction.attributeTypeMap = [
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
//# sourceMappingURL=persistentDeduction.js.map