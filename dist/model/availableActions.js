"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvailableActions = void 0;
class AvailableActions {
    static getAttributeTypeMap() {
        return AvailableActions.attributeTypeMap;
    }
}
exports.AvailableActions = AvailableActions;
AvailableActions.discriminator = undefined;
AvailableActions.attributeTypeMap = [
    {
        "name": "integration",
        "baseName": "integration",
        "type": "AccountIntegration"
    },
    {
        "name": "passthrough_available",
        "baseName": "passthrough_available",
        "type": "boolean"
    },
    {
        "name": "available_model_operations",
        "baseName": "available_model_operations",
        "type": "Array<ModelOperation>"
    }
];
//# sourceMappingURL=availableActions.js.map