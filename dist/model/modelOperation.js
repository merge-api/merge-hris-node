"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ModelOperation = (function () {
    function ModelOperation() {
    }
    ModelOperation.getAttributeTypeMap = function () {
        return ModelOperation.attributeTypeMap;
    };
    ModelOperation.discriminator = undefined;
    ModelOperation.attributeTypeMap = [
        {
            "name": "modelName",
            "baseName": "model_name",
            "type": "string"
        },
        {
            "name": "availableOperations",
            "baseName": "available_operations",
            "type": "Array<string>"
        },
        {
            "name": "requiredPostParameters",
            "baseName": "required_post_parameters",
            "type": "Array<string>"
        },
        {
            "name": "supportedFields",
            "baseName": "supported_fields",
            "type": "Array<string>"
        }
    ];
    return ModelOperation;
}());
exports.ModelOperation = ModelOperation;
//# sourceMappingURL=modelOperation.js.map