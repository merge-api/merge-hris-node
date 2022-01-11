"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorValidationProblem = void 0;
var ErrorValidationProblem = (function () {
    function ErrorValidationProblem() {
    }
    ErrorValidationProblem.getAttributeTypeMap = function () {
        return ErrorValidationProblem.attributeTypeMap;
    };
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
    return ErrorValidationProblem;
}());
exports.ErrorValidationProblem = ErrorValidationProblem;
//# sourceMappingURL=errorValidationProblem.js.map