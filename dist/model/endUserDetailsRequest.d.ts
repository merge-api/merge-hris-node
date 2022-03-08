import { CategoriesEnum } from './categoriesEnum';
export declare class EndUserDetailsRequest {
    'end_user_email_address': string;
    'end_user_organization_name': string;
    'end_user_origin_id': string;
    'categories'?: Array<CategoriesEnum>;
    'integration'?: string | null;
    'link_expiry_mins'?: number;
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
