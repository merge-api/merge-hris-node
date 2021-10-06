import { RemoteData } from './remoteData';
export declare class Company {
    'id'?: string;
    'remote_id'?: string | null;
    'legal_name'?: string | null;
    'display_name'?: string | null;
    'eins'?: Array<string> | null;
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
