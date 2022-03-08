import { MethodEnum } from './methodEnum';
import { MultipartFormFieldRequest } from './multipartFormFieldRequest';
import { RequestFormatEnum } from './requestFormatEnum';
export declare class DataPassthroughRequest {
    'method': MethodEnum;
    'path': string;
    'base_url_override'?: string | null;
    'data'?: string | null;
    'multipart_form_data'?: Array<MultipartFormFieldRequest> | null;
    'headers'?: {
        [key: string]: any;
    } | null;
    'request_format'?: RequestFormatEnum | null;
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
