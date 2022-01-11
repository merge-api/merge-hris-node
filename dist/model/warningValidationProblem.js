"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarningValidationProblem = void 0;
var WarningValidationProblem = (function () {
    function WarningValidationProblem() {
    }
    WarningValidationProblem.getAttributeTypeMap = function () {
        return WarningValidationProblem.attributeTypeMap;
    };
    WarningValidationProblem.discriminator = undefined;
    WarningValidationProblem.attributeTypeMap = [
        {
            "name": "source",
            "baseName": "source",
            "type": "ValidationProblemSource"
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
    return WarningValidationProblem;
}());
exports.WarningValidationProblem = WarningValidationProblem;
//# sourceMappingURL=warningValidationProblem.js.map