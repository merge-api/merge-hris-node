export declare class ModelOperation {
    'model_name': string;
    'available_operations': Array<string>;
    'required_post_parameters': Array<string>;
    'supported_fields': Array<string>;
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
