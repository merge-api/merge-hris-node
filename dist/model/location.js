"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
            "name": "remoteId",
            "baseName": "remote_id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "phoneNumber",
            "baseName": "phone_number",
            "type": "string"
        },
        {
            "name": "street1",
            "baseName": "street_1",
            "type": "string"
        },
        {
            "name": "street2",
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
            "name": "zipCode",
            "baseName": "zip_code",
            "type": "string"
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "CountryEnum"
        },
        {
            "name": "remoteData",
            "baseName": "remote_data",
            "type": "Array<RemoteData>"
        }
    ];
    return Location;
}());
exports.Location = Location;
//# sourceMappingURL=location.js.map