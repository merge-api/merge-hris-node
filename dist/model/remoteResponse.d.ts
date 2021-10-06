export declare class RemoteResponse {
    'method': string;
    'path': string;
    'status': number;
    'response': {
        [key: string]: any;
    };
    'headers'?: {
        [key: string]: any;
    };
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
