"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationProblem = void 0;
var ValidationProblem = (function () {
    function ValidationProblem() {
    }
    ValidationProblem.getAttributeTypeMap = function () {
        return ValidationProblem.attributeTypeMap;
    };
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
    return ValidationProblem;
}());
exports.ValidationProblem = ValidationProblem;
//# sourceMappingURL=validationProblem.js.map