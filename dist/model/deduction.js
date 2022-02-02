"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deduction = void 0;
class Deduction {
    static getAttributeTypeMap() {
        return Deduction.attributeTypeMap;
<<<<<<< HEAD
    }
}
=======
    };
    Deduction.discriminator = undefined;
    Deduction.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "employee_payroll_run",
            "baseName": "employee_payroll_run",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "employee_deduction",
            "baseName": "employee_deduction",
            "type": "number"
        },
        {
            "name": "company_deduction",
            "baseName": "company_deduction",
            "type": "number"
        },
        {
            "name": "remote_data",
            "baseName": "remote_data",
            "type": "Array<RemoteData>"
        }
    ];
    return Deduction;
}());
>>>>>>> lee/node-employee-paygroup
exports.Deduction = Deduction;
Deduction.discriminator = undefined;
Deduction.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "employee_payroll_run",
        "baseName": "employee_payroll_run",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "employee_deduction",
        "baseName": "employee_deduction",
        "type": "number"
    },
    {
        "name": "company_deduction",
        "baseName": "company_deduction",
        "type": "number"
    },
    {
        "name": "remote_data",
        "baseName": "remote_data",
        "type": "Array<{ [key: string]: any; }>"
    }
];
//# sourceMappingURL=deduction.js.map