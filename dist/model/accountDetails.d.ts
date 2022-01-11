import { CategoryEnum } from './categoryEnum';
export declare class AccountDetails {
    'id'?: string;
    'integration'?: string;
    'category'?: CategoryEnum | null;
    'end_user_origin_id'?: string;
    'end_user_organization_name'?: string;
    'end_user_email_address'?: string;
    'status'?: string;
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
