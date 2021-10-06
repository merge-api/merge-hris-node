"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
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
            "name": "remote_id",
            "baseName": "remote_id",
            "type": "string"
        },
        {
            "name": "legal_name",
            "baseName": "legal_name",
            "type": "string"
        },
        {
            "name": "display_name",
            "baseName": "display_name",
            "type": "string"
        },
        {
            "name": "eins",
            "baseName": "eins",
            "type": "Array<string>"
        },
        {
            "name": "remote_data",
            "baseName": "remote_data",
            "type": "Array<RemoteData>"
        }
    ];
    return Company;
}());
exports.Company = Company;
//# sourceMappingURL=company.js.map