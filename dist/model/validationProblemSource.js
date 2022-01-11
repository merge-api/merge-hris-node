"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationProblemSource = void 0;
var ValidationProblemSource = (function () {
    function ValidationProblemSource() {
    }
    ValidationProblemSource.getAttributeTypeMap = function () {
        return ValidationProblemSource.attributeTypeMap;
    };
    ValidationProblemSource.discriminator = undefined;
    ValidationProblemSource.attributeTypeMap = [
        {
            "name": "pointer",
            "baseName": "pointer",
            "type": "string"
        }
    ];
    return ValidationProblemSource;
}());
exports.ValidationProblemSource = ValidationProblemSource;
//# sourceMappingURL=validationProblemSource.js.map