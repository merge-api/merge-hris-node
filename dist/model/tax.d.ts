export declare class Tax {
    'id'?: string;
    'employeePayrollRun'?: string | null;
    'name'?: string | null;
    'amount'?: number | null;
    'employerTax'?: boolean | null;
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
