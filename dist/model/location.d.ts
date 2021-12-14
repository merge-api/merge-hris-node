import { CountryEnum } from './countryEnum';
import { RemoteData } from './remoteData';
export declare class Location {
    'id'?: string;
    'remote_id'?: string | null;
    'name'?: string | null;
    'phone_number'?: string | null;
    'street_1'?: string | null;
    'street_2'?: string | null;
    'city'?: string | null;
    'state'?: string | null;
    'zip_code'?: string | null;
    'country'?: CountryEnum | null;
    'remote_data'?: Array<RemoteData> | null;
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
