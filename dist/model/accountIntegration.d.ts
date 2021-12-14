import { CategoriesEnum } from './categoriesEnum';
export declare class AccountIntegration {
    'name': string;
    'categories'?: Array<CategoriesEnum>;
    'image'?: string | null;
    'squareImage'?: string | null;
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
