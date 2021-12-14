"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee = (function () {
    function Employee() {
    }
    Employee.getAttributeTypeMap = function () {
        return Employee.attributeTypeMap;
    };
    Employee.discriminator = undefined;
    Employee.attributeTypeMap = [
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
            "name": "employee_number",
            "baseName": "employee_number",
            "type": "string"
        },
        {
            "name": "company",
            "baseName": "company",
            "type": "string"
        },
        {
            "name": "first_name",
            "baseName": "first_name",
            "type": "string"
        },
        {
            "name": "last_name",
            "baseName": "last_name",
            "type": "string"
        },
        {
            "name": "display_full_name",
            "baseName": "display_full_name",
            "type": "string"
        },
        {
            "name": "work_email",
            "baseName": "work_email",
            "type": "string"
        },
        {
            "name": "personal_email",
            "baseName": "personal_email",
            "type": "string"
        },
        {
            "name": "mobile_phone_number",
            "baseName": "mobile_phone_number",
            "type": "string"
        },
        {
            "name": "employments",
            "baseName": "employments",
            "type": "Array<string>"
        },
        {
            "name": "home_location",
            "baseName": "home_location",
            "type": "string"
        },
        {
            "name": "work_location",
            "baseName": "work_location",
            "type": "string"
        },
        {
            "name": "manager",
            "baseName": "manager",
            "type": "string"
        },
        {
            "name": "team",
            "baseName": "team",
            "type": "string"
        },
        {
            "name": "pay_group",
            "baseName": "pay_group",
            "type": "string"
        },
        {
            "name": "ssn",
            "baseName": "ssn",
            "type": "string"
        },
        {
            "name": "gender",
            "baseName": "gender",
            "type": "GenderEnum"
        },
        {
            "name": "ethnicity",
            "baseName": "ethnicity",
            "type": "EthnicityEnum"
        },
        {
            "name": "marital_status",
            "baseName": "marital_status",
            "type": "MaritalStatusEnum"
        },
        {
            "name": "date_of_birth",
            "baseName": "date_of_birth",
            "type": "Date"
        },
        {
            "name": "hire_date",
            "baseName": "hire_date",
            "type": "Date"
        },
        {
            "name": "start_date",
            "baseName": "start_date",
            "type": "Date"
        },
        {
            "name": "employment_status",
            "baseName": "employment_status",
            "type": "EmploymentStatusEnum"
        },
        {
            "name": "termination_date",
            "baseName": "termination_date",
            "type": "Date"
        },
        {
            "name": "avatar",
            "baseName": "avatar",
            "type": "string"
        },
        {
            "name": "remote_data",
            "baseName": "remote_data",
            "type": "Array<RemoteData>"
        },
        {
            "name": "custom_fields",
            "baseName": "custom_fields",
            "type": "{ [key: string]: any; }"
        }
    ];
    return Employee;
}());
exports.Employee = Employee;
//# sourceMappingURL=employee.js.map