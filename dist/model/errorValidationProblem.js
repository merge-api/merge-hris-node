"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorValidationProblem = void 0;
class ErrorValidationProblem {
    static getAttributeTypeMap() {
        return ErrorValidationProblem.attributeTypeMap;
    }
}
exports.ErrorValidationProblem = ErrorValidationProblem;
ErrorValidationProblem.discriminator = undefined;
ErrorValidationProblem.attributeTypeMap = [
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
//# sourceMappingURL=errorValidationProblem.js.map