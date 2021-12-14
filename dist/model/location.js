"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Location = void 0;
var Location = (function () {
    function Location() {
    }
    Location.getAttributeTypeMap = function () {
        return Location.attributeTypeMap;
    };
    Location.discriminator = undefined;
    Location.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "remote_id",
            "baseName": "remote_id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "phone_number",
            "baseName": "phone_number",
            "type": "string"
        },
        {
            "name": "street_1",
            "baseName": "street_1",
            "type": "string"
        },
        {
            "name": "street_2",
            "baseName": "street_2",
            "type": "string"
        },
        {
            "name": "city",
            "baseName": "city",
            "type": "string"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "string"
        },
        {
            "name": "zip_code",
            "baseName": "zip_code",
            "type": "string"
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "CountryEnum"
        },
        {
            "name": "remote_data",
            "baseName": "remote_data",
            "type": "Array<RemoteData>"
        }
    ];
    return Location;
}());
exports.Location = Location;
//# sourceMappingURL=location.js.map