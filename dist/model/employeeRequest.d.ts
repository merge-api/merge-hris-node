import { EmploymentStatusEnum } from './employmentStatusEnum';
import { EthnicityEnum } from './ethnicityEnum';
import { GenderEnum } from './genderEnum';
import { MaritalStatusEnum } from './maritalStatusEnum';
export declare class EmployeeRequest {
    'remote_id'?: string | null;
    'employee_number'?: string | null;
    'company'?: string | null;
    'first_name'?: string | null;
    'last_name'?: string | null;
    'display_full_name'?: string | null;
    'groups'?: Array<string>;
    'work_email'?: string | null;
    'personal_email'?: string | null;
    'mobile_phone_number'?: string | null;
    'employments'?: Array<string>;
    'home_location'?: string | null;
    'work_location'?: string | null;
    'manager'?: string | null;
    'team'?: string | null;
    'pay_group'?: string | null;
    'ssn'?: string | null;
    'gender'?: GenderEnum | null;
    'ethnicity'?: EthnicityEnum | null;
    'marital_status'?: MaritalStatusEnum | null;
    'date_of_birth'?: Date | null;
    'hire_date'?: Date | null;
    'start_date'?: Date | null;
    'employment_status'?: EmploymentStatusEnum | null;
    'termination_date'?: Date | null;
    'avatar'?: string | null;
    'custom_fields'?: {
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
