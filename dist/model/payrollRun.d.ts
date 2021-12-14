import { RemoteData } from './remoteData';
import { RunStateEnum } from './runStateEnum';
import { RunTypeEnum } from './runTypeEnum';
export declare class PayrollRun {
    'id'?: string;
    'remoteId'?: string | null;
    'runState'?: RunStateEnum | null;
    'runType'?: RunTypeEnum | null;
    'startDate'?: Date | null;
    'endDate'?: Date | null;
    'checkDate'?: Date | null;
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
