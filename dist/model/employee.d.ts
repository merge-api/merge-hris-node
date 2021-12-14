import { EmploymentStatusEnum } from './employmentStatusEnum';
import { EthnicityEnum } from './ethnicityEnum';
import { GenderEnum } from './genderEnum';
import { MaritalStatusEnum } from './maritalStatusEnum';
import { RemoteData } from './remoteData';
export declare class Employee {
    'id'?: string;
    'remoteId'?: string | null;
    'employeeNumber'?: string | null;
    'company'?: string | null;
    'firstName'?: string | null;
    'lastName'?: string | null;
    'displayFullName'?: string | null;
    'workEmail'?: string | null;
    'personalEmail'?: string | null;
    'mobilePhoneNumber'?: string | null;
    'employments'?: Array<string>;
    'homeLocation'?: string | null;
    'workLocation'?: string | null;
    'manager'?: string | null;
    'team'?: string | null;
    'payGroup'?: string | null;
    'ssn'?: string | null;
    'gender'?: GenderEnum | null;
    'ethnicity'?: EthnicityEnum | null;
    'maritalStatus'?: MaritalStatusEnum | null;
    'dateOfBirth'?: Date | null;
    'hireDate'?: Date | null;
    'startDate'?: Date | null;
    'employmentStatus'?: EmploymentStatusEnum | null;
    'terminationDate'?: Date | null;
    'avatar'?: string | null;
    'remoteData'?: Array<RemoteData> | null;
    'customFields'?: {
        [key: string]: any;
    } | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
