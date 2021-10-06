import { MethodEnum } from './methodEnum';
export declare class DataPassthroughRequest {
    'method': MethodEnum;
    'path': string;
    'base_url_override'?: string | null;
    'data'?: {
        [key: string]: any;
    } | null;
    'headers'?: {
        [key: string]: any;
    } | null;
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
