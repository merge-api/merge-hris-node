import { AccountDetailsAndActionsIntegration } from './accountDetailsAndActionsIntegration';
import { AccountDetailsAndActionsStatusEnum } from './accountDetailsAndActionsStatusEnum';
import { CategoryEnum } from './categoryEnum';
export declare class AccountDetailsAndActions {
    'id': string;
    'category'?: CategoryEnum;
    'status': AccountDetailsAndActionsStatusEnum;
    'status_detail'?: string;
    'end_user_origin_id'?: string;
    'end_user_organization_name': string;
    'end_user_email_address': string;
    'integration'?: AccountDetailsAndActionsIntegration;
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
