export declare class Tax {
    'id'?: string;
    'employee_payroll_run'?: string;
    'name'?: string | null;
    'amount'?: number | null;
    'employer_tax'?: boolean | null;
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
