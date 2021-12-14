import { AccountIntegration } from './accountIntegration';
export declare class AccountToken {
    'accountToken': string;
    'integration': AccountIntegration;
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
