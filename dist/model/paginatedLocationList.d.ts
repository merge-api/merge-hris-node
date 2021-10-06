import { Location } from './location';
export declare class PaginatedLocationList {
    'next'?: string | null;
    'previous'?: string | null;
    'results'?: Array<Location>;
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
