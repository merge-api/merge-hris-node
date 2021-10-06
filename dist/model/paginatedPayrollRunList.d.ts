import { PayrollRun } from './payrollRun';
export declare class PaginatedPayrollRunList {
    'next'?: string | null;
    'previous'?: string | null;
    'results'?: Array<PayrollRun>;
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
