export declare class AccountIntegration {
    'name': string;
    'categories'?: Array<AccountIntegration.CategoriesEnum>;
    'image'?: string | null;
    'square_image'?: string | null;
    'color'?: string;
    'slug'?: string;
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
export declare namespace AccountIntegration {
    enum CategoriesEnum {
        Hris,
        Ats,
        Accounting
    }
}
