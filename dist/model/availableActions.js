"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AvailableActions = (function () {
    function AvailableActions() {
    }
    AvailableActions.getAttributeTypeMap = function () {
        return AvailableActions.attributeTypeMap;
    };
    AvailableActions.discriminator = undefined;
    AvailableActions.attributeTypeMap = [
        {
            "name": "integration",
            "baseName": "integration",
            "type": "AccountIntegration"
        },
        {
            "name": "passthroughAvailable",
            "baseName": "passthrough_available",
            "type": "boolean"
        },
        {
            "name": "availableModelOperations",
            "baseName": "available_model_operations",
            "type": "Array<ModelOperation>"
        }
    ];
    return AvailableActions;
}());
exports.AvailableActions = AvailableActions;
//# sourceMappingURL=availableActions.js.map