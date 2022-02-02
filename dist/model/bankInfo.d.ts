import { AccountTypeEnum } from './accountTypeEnum';
import { RemoteData } from './remoteData';
export declare class BankInfo {
    'id'?: string;
    'remote_id'?: string | null;
    'employee'?: string;
    'account_number'?: string | null;
    'routing_number'?: string | null;
    'bank_name'?: string | null;
    'account_type'?: AccountTypeEnum | null;
    'remote_created_at'?: Date | null;
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
