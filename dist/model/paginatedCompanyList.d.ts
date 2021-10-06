import { Company } from './company';
export declare class PaginatedCompanyList {
    'next'?: string | null;
    'previous'?: string | null;
    'results'?: Array<Company>;
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
