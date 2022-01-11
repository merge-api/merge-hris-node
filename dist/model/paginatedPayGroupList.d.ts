import { PayGroup } from './payGroup';
export declare class PaginatedPayGroupList {
    'next'?: string | null;
    'previous'?: string | null;
    'results'?: Array<PayGroup>;
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
