import { RequestTypeEnum } from './requestTypeEnum';
import { TimeOffStatusEnum } from './timeOffStatusEnum';
import { UnitsEnum } from './unitsEnum';
export declare class TimeOffRequest {
    'remote_id'?: string | null;
    'employee'?: string;
    'approver'?: string;
    'status'?: TimeOffStatusEnum | null;
    'employee_note'?: string | null;
    'units'?: UnitsEnum | null;
    'amount'?: number | null;
    'request_type'?: RequestTypeEnum | null;
    'start_time'?: Date | null;
    'end_time'?: Date | null;
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
