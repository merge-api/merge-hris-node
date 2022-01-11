import { PolicyTypeEnum } from './policyTypeEnum';
import { RemoteData } from './remoteData';
export declare class TimeOffBalance {
    'id'?: string;
    'remote_id'?: string | null;
    'employee'?: string | null;
    'balance'?: number | null;
    'used'?: number | null;
    'policy_type'?: PolicyTypeEnum | null;
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
