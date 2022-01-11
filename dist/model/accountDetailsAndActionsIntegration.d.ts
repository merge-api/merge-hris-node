import { CategoriesEnum } from './categoriesEnum';
import { ModelOperation } from './modelOperation';
export declare class AccountDetailsAndActionsIntegration {
    'name': string;
    'categories': Array<CategoriesEnum>;
    'image'?: string;
    'square_image'?: string;
    'color': string;
    'slug': string;
    'passthrough_available': boolean;
    'available_model_operations'?: Array<ModelOperation>;
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
