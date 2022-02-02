import { SyncStatusStatusEnum } from './syncStatusStatusEnum';
export declare class SyncStatus {
    'model_name': string;
    'model_id': string;
    'last_sync_start': Date;
    'next_sync_start': Date;
    'status': SyncStatusStatusEnum;
    'is_initial_sync': boolean;
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
