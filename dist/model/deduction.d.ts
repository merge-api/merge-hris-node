import { RemoteData } from './remoteData';
export declare class Deduction {
    'id'?: string;
    'employee_payroll_run'?: string | null;
    'name'?: string | null;
    'employee_deduction'?: number | null;
    'company_deduction'?: number | null;
    'remote_data'?: Array<RemoteData> | null;
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
