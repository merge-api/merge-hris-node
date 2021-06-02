/**
 * Merge HRIS API
 * The unified API for building rich integrations with multiple HR Information System platforms.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: hello@merge.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { EmploymentStatusEnum } from './employmentStatusEnum';
import { EthnicityEnum } from './ethnicityEnum';
import { GenderEnum } from './genderEnum';
import { MaritalStatusEnum } from './maritalStatusEnum';
import { RemoteData } from './remoteData';

/**
* # The Employee Object ### Description The `Employee` object is used to represent an Employee for a company.  ### Usage Example Fetch from the `LIST Employee` endpoint and filter by `ID` to show all employees.
*/
export class Employee {
    'id'?: string;
    /**
    * The third-party API ID of the matching object.
    */
    'remoteId'?: string | null;
    /**
    * The ID of the Employee\'s company.
    */
    'company'?: string | null;
    /**
    * The employee\'s first name.
    */
    'firstName'?: string | null;
    /**
    * The employee\'s last name.
    */
    'lastName'?: string | null;
    /**
    * The employee\'s full name, to use for display purposes.
    */
    'displayFullName'?: string | null;
    /**
    * The employee\'s work email.
    */
    'workEmail'?: string | null;
    /**
    * The employee\'s personal email.
    */
    'personalEmail'?: string | null;
    /**
    * The employee\'s mobile phone number.
    */
    'mobilePhoneNumber'?: string | null;
    'employments'?: Array<string>;
    /**
    * The employee\'s home address.
    */
    'homeLocation'?: string | null;
    /**
    * The employee\'s work address.
    */
    'workLocation'?: string | null;
    /**
    * The employee ID of the employee\'s manager.
    */
    'manager'?: string | null;
    /**
    * The employee\'s team.
    */
    'team'?: string | null;
    /**
    * The employee\'s social security number.
    */
    'ssn'?: string | null;
    /**
    * The employee\'s gender.
    */
    'gender'?: GenderEnum | null;
    /**
    * The employee\'s ethnicity.
    */
    'ethnicity'?: EthnicityEnum | null;
    /**
    * The employee\'s marital status.
    */
    'maritalStatus'?: MaritalStatusEnum | null;
    /**
    * The employee\'s date of birth.
    */
    'dateOfBirth'?: Date | null;
    /**
    * The employee\'s hire date.
    */
    'hireDate'?: Date | null;
    /**
    * The employment status of the employee.
    */
    'employmentStatus'?: EmploymentStatusEnum | null;
    /**
    * The employee\'s termination date.
    */
    'terminationDate'?: Date | null;
    /**
    * The URL of the employee\'s avatar image.
    */
    'avatar'?: string | null;
    /**
    * The identification number for the employee.
    */
    'employeeNumber'?: string | null;
    'remoteData'?: Array<RemoteData> | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
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
            "name": "employeeNumber",
            "baseName": "employee_number",
            "type": "string"
        },
        {
            "name": "remoteData",
            "baseName": "remote_data",
            "type": "Array<RemoteData>"
        }    ];

    static getAttributeTypeMap() {
        return Employee.attributeTypeMap;
    }
}

