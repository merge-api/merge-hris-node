import { TimeOff } from './timeOff';
export declare class PaginatedTimeOffList {
    'next'?: string | null;
    'previous'?: string | null;
    'results'?: Array<TimeOff>;
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
