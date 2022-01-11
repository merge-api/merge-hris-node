import { BankInfo } from './bankInfo';
export declare class PaginatedBankInfoList {
    'next'?: string | null;
    'previous'?: string | null;
    'results'?: Array<BankInfo>;
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
