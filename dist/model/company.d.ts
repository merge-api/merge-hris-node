import { RemoteData } from './remoteData';
export declare class Company {
    'id'?: string;
    'remoteId'?: string | null;
    'legalName'?: string | null;
    'displayName'?: string | null;
    'eins'?: Array<string> | null;
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
