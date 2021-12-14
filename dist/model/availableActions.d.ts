import { AccountIntegration } from './accountIntegration';
import { ModelOperation } from './modelOperation';
export declare class AvailableActions {
    'integration': AccountIntegration;
    'passthroughAvailable': boolean;
    'availableModelOperations'?: Array<ModelOperation>;
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
