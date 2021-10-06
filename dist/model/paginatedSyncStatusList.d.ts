import { SyncStatus } from './syncStatus';
export declare class PaginatedSyncStatusList {
    'next'?: string | null;
    'previous'?: string | null;
    'results'?: Array<SyncStatus>;
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
