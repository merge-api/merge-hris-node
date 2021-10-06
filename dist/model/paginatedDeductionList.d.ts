import { Deduction } from './deduction';
export declare class PaginatedDeductionList {
    'next'?: string | null;
    'previous'?: string | null;
    'results'?: Array<Deduction>;
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
