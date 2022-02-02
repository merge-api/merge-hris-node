"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationProblem = void 0;
class ValidationProblem {
    static getAttributeTypeMap() {
        return ValidationProblem.attributeTypeMap;
    }
}
exports.ValidationProblem = ValidationProblem;
ValidationProblem.discriminator = undefined;
ValidationProblem.attributeTypeMap = [
    {
        "name": "source",
        "baseName": "source",
        "type": "string"
    },
    {
        "name": "title",
        "baseName": "title",
        "type": "string"
    },
    {
        "name": "detail",
        "baseName": "detail",
        "type": "string"
    },
    {
        "name": "problem_type",
        "baseName": "problem_type",
        "type": "string"
    }
];
//# sourceMappingURL=validationProblem.js.map