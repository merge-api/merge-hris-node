import { CountryEnum } from './countryEnum';
import { RemoteData } from './remoteData';
export declare class Location {
    'id'?: string;
    'remoteId'?: string | null;
    'name'?: string | null;
    'phoneNumber'?: string | null;
    'street1'?: string | null;
    'street2'?: string | null;
    'city'?: string | null;
    'state'?: string | null;
    'zipCode'?: string | null;
    'country'?: CountryEnum | null;
    'remoteData'?: Array<RemoteData> | null;
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
