import { Employment } from './employment';
export declare class PaginatedEmploymentList {
    'next'?: string | null;
    'previous'?: string | null;
    'results'?: Array<Employment>;
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
