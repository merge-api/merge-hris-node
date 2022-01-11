"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeOffEndpointRequest = void 0;
var TimeOffEndpointRequest = (function () {
    function TimeOffEndpointRequest() {
    }
    TimeOffEndpointRequest.getAttributeTypeMap = function () {
        return TimeOffEndpointRequest.attributeTypeMap;
    };
    TimeOffEndpointRequest.discriminator = undefined;
    TimeOffEndpointRequest.attributeTypeMap = [
        {
            "name": "model",
            "baseName": "model",
            "type": "TimeOffRequest"
        }
    ];
    return TimeOffEndpointRequest;
}());
exports.TimeOffEndpointRequest = TimeOffEndpointRequest;
//# sourceMappingURL=timeOffEndpointRequest.js.map