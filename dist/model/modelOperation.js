"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelOperation = void 0;
class ModelOperation {
    static getAttributeTypeMap() {
        return ModelOperation.attributeTypeMap;
    }
}
exports.ModelOperation = ModelOperation;
ModelOperation.discriminator = undefined;
ModelOperation.attributeTypeMap = [
    {
        "name": "model_name",
        "baseName": "model_name",
        "type": "string"
    },
    {
        "name": "available_operations",
        "baseName": "available_operations",
        "type": "Array<string>"
    },
    {
        "name": "required_post_parameters",
        "baseName": "required_post_parameters",
        "type": "Array<string>"
    },
    {
        "name": "supported_fields",
        "baseName": "supported_fields",
        "type": "Array<string>"
    }
];
//# sourceMappingURL=modelOperation.js.map