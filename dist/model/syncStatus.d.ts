import { SyncStatusStatusEnum } from './syncStatusStatusEnum';
export declare class SyncStatus {
    'modelName': string;
    'modelId': string;
    'lastSyncStart': Date;
    'nextSyncStart': Date;
    'status': SyncStatusStatusEnum | null;
    'isInitialSync': boolean;
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
