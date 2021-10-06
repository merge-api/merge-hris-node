import { Benefit } from './benefit';
export declare class PaginatedBenefitList {
    'next'?: string | null;
    'previous'?: string | null;
    'results'?: Array<Benefit>;
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
