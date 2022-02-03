import { RemoteData } from './remoteData';
export declare class Team {
    'id'?: string;
    'remote_id'?: string | null;
    'name'?: string | null;
    'parent_team'?: string;
    'remote_data'?: Array<RemoteData> | null;
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
