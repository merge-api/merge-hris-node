import { PersistentDeduction } from './persistentDeduction';
export declare class PaginatedPersistentDeductionList {
    'next'?: string | null;
    'previous'?: string | null;
    'results'?: Array<PersistentDeduction>;
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
