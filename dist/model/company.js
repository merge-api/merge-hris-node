"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Company = (function () {
    function Company() {
    }
    Company.getAttributeTypeMap = function () {
        return Company.attributeTypeMap;
    };
    Company.discriminator = undefined;
    Company.attributeTypeMap = [
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
            "name": "legalName",
            "baseName": "legal_name",
            "type": "string"
        },
        {
            "name": "displayName",
            "baseName": "display_name",
            "type": "string"
        },
        {
            "name": "eins",
            "baseName": "eins",
            "type": "Array<string>"
        },
        {
            "name": "remoteData",
            "baseName": "remote_data",
            "type": "Array<RemoteData>"
        }
    ];
    return Company;
}());
exports.Company = Company;
//# sourceMappingURL=company.js.map