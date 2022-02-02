"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeOffEndpointRequest = void 0;
class TimeOffEndpointRequest {
    static getAttributeTypeMap() {
        return TimeOffEndpointRequest.attributeTypeMap;
    }
}
exports.TimeOffEndpointRequest = TimeOffEndpointRequest;
TimeOffEndpointRequest.discriminator = undefined;
TimeOffEndpointRequest.attributeTypeMap = [
    {
        "name": "model",
        "baseName": "model",
        "type": "TimeOffRequest"
    }
];
//# sourceMappingURL=timeOffEndpointRequest.js.map