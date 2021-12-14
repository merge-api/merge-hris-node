import { RemoteData } from './remoteData';
export declare class Team {
    'id'?: string;
    'remoteId'?: string | null;
    'name'?: string | null;
    'parentTeam'?: string | null;
    'remoteData'?: Array<RemoteData> | null;
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
