import { RemoteData } from './remoteData';
import { RequestTypeEnum } from './requestTypeEnum';
import { TimeOffStatusEnum } from './timeOffStatusEnum';
import { UnitsEnum } from './unitsEnum';
export declare class TimeOff {
    'id'?: string;
    'remoteId'?: string | null;
    'employee'?: string | null;
    'approver'?: string | null;
    'status'?: TimeOffStatusEnum | null;
    'employeeNote'?: string | null;
    'units'?: UnitsEnum | null;
    'amount'?: number | null;
    'requestType'?: RequestTypeEnum | null;
    'startTime'?: Date | null;
    'endTime'?: Date | null;
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
