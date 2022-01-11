"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayGroup = void 0;
var PayGroup = (function () {
    function PayGroup() {
    }
    PayGroup.getAttributeTypeMap = function () {
        return PayGroup.attributeTypeMap;
    };
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
    return PayGroup;
}());
exports.PayGroup = PayGroup;
//# sourceMappingURL=payGroup.js.map