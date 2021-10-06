import { TimeOffBalance } from './timeOffBalance';
export declare class PaginatedTimeOffBalanceList {
    'next'?: string | null;
    'previous'?: string | null;
    'results'?: Array<TimeOffBalance>;
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
