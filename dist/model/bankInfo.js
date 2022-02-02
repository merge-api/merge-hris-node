"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankInfo = void 0;
class BankInfo {
    static getAttributeTypeMap() {
        return BankInfo.attributeTypeMap;
    }
}
exports.BankInfo = BankInfo;
BankInfo.discriminator = undefined;
BankInfo.attributeTypeMap = [
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
        "name": "account_number",
        "baseName": "account_number",
        "type": "string"
    },
    {
        "name": "routing_number",
        "baseName": "routing_number",
        "type": "string"
    },
    {
        "name": "bank_name",
        "baseName": "bank_name",
        "type": "string"
    },
    {
        "name": "account_type",
        "baseName": "account_type",
        "type": "AccountTypeEnum"
    },
    {
        "name": "remote_created_at",
        "baseName": "remote_created_at",
        "type": "Date"
    },
    {
        "name": "remote_data",
        "baseName": "remote_data",
        "type": "Array<RemoteData>"
    }
];
//# sourceMappingURL=bankInfo.js.map