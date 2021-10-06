export declare class EndUserDetailsRequest {
    'end_user_email_address': string;
    'end_user_organization_name': string;
    'end_user_origin_id': string;
    'categories'?: Array<EndUserDetailsRequest.CategoriesEnum>;
    'integration'?: string | null;
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
export declare namespace EndUserDetailsRequest {
    enum CategoriesEnum {
        Hris,
        Ats,
        Accounting
    }
}
