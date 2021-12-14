import { MethodEnum } from './methodEnum';
import { RequestFormatEnum } from './requestFormatEnum';
export declare class DataPassthroughRequest {
    'method': MethodEnum | null;
    'path': string;
    'baseUrlOverride'?: string | null;
    'data'?: string | null;
    'headers'?: {
        [key: string]: any;
    } | null;
    'requestFormat'?: RequestFormatEnum | null;
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
