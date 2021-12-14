export declare class Deduction {
    'id'?: string;
    'employeePayrollRun'?: string | null;
    'name'?: string | null;
    'employeeDeduction'?: number | null;
    'companyDeduction'?: number | null;
    'remoteData'?: Array<{
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
