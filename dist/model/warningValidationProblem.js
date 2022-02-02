"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarningValidationProblem = void 0;
class WarningValidationProblem {
    static getAttributeTypeMap() {
        return WarningValidationProblem.attributeTypeMap;
    }
}
exports.WarningValidationProblem = WarningValidationProblem;
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
//# sourceMappingURL=warningValidationProblem.js.map