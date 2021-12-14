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
            "name": "remoteId",
            "baseName": "remote_id",
            "type": "string"
        },
        {
            "name": "employeeNumber",
            "baseName": "employee_number",
            "type": "string"
        },
        {
            "name": "company",
            "baseName": "company",
            "type": "string"
        },
        {
            "name": "firstName",
            "baseName": "first_name",
            "type": "string"
        },
        {
            "name": "lastName",
            "baseName": "last_name",
            "type": "string"
        },
        {
            "name": "displayFullName",
            "baseName": "display_full_name",
            "type": "string"
        },
        {
            "name": "workEmail",
            "baseName": "work_email",
            "type": "string"
        },
        {
            "name": "personalEmail",
            "baseName": "personal_email",
            "type": "string"
        },
        {
            "name": "mobilePhoneNumber",
            "baseName": "mobile_phone_number",
            "type": "string"
        },
        {
            "name": "employments",
            "baseName": "employments",
            "type": "Array<string>"
        },
        {
            "name": "homeLocation",
            "baseName": "home_location",
            "type": "string"
        },
        {
            "name": "workLocation",
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
            "name": "payGroup",
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
            "name": "maritalStatus",
            "baseName": "marital_status",
            "type": "MaritalStatusEnum"
        },
        {
            "name": "dateOfBirth",
            "baseName": "date_of_birth",
            "type": "Date"
        },
        {
            "name": "hireDate",
            "baseName": "hire_date",
            "type": "Date"
        },
        {
            "name": "startDate",
            "baseName": "start_date",
            "type": "Date"
        },
        {
            "name": "employmentStatus",
            "baseName": "employment_status",
            "type": "EmploymentStatusEnum"
        },
        {
            "name": "terminationDate",
            "baseName": "termination_date",
            "type": "Date"
        },
        {
            "name": "avatar",
            "baseName": "avatar",
            "type": "string"
        },
        {
            "name": "remoteData",
            "baseName": "remote_data",
            "type": "Array<RemoteData>"
        },
        {
            "name": "customFields",
            "baseName": "custom_fields",
            "type": "{ [key: string]: any; }"
        }
    ];
    return Employee;
}());
exports.Employee = Employee;
//# sourceMappingURL=employee.js.map