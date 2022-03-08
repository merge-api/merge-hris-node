import { EarningTypeEnum } from './earningTypeEnum';
export declare class Earning {
    'id'?: string;
    'employee_payroll_run'?: string | null;
    'amount'?: number | null;
    'type'?: EarningTypeEnum | null;
    'remote_data'?: Array<{
        [key: string]: any;
    }> | null;
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
