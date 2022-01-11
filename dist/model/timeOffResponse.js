"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeOffResponse = void 0;
var TimeOffResponse = (function () {
    function TimeOffResponse() {
    }
    TimeOffResponse.getAttributeTypeMap = function () {
        return TimeOffResponse.attributeTypeMap;
    };
    TimeOffResponse.discriminator = undefined;
    TimeOffResponse.attributeTypeMap = [
        {
            "name": "model",
            "baseName": "model",
            "type": "TimeOff"
        },
        {
            "name": "warnings",
            "baseName": "warnings",
            "type": "Array<WarningValidationProblem>"
        },
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<ErrorValidationProblem>"
        }
    ];
    return TimeOffResponse;
}());
exports.TimeOffResponse = TimeOffResponse;
//# sourceMappingURL=timeOffResponse.js.map