"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayGroup = void 0;
class PayGroup {
    static getAttributeTypeMap() {
        return PayGroup.attributeTypeMap;
    }
}
exports.PayGroup = PayGroup;
PayGroup.discriminator = undefined;
PayGroup.attributeTypeMap = [
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
        "name": "pay_group_name",
        "baseName": "pay_group_name",
        "type": "string"
    },
    {
        "name": "remote_data",
        "baseName": "remote_data",
        "type": "Array<RemoteData>"
    }
];
//# sourceMappingURL=payGroup.js.map