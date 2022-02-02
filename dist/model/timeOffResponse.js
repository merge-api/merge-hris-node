"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeOffResponse = void 0;
class TimeOffResponse {
    static getAttributeTypeMap() {
        return TimeOffResponse.attributeTypeMap;
    }
}
exports.TimeOffResponse = TimeOffResponse;
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
    },
    {
        "name": "logs",
        "baseName": "logs",
        "type": "Array<string>"
    }
];
//# sourceMappingURL=timeOffResponse.js.map