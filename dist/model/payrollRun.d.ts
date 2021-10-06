import { RemoteData } from './remoteData';
import { RunStateEnum } from './runStateEnum';
import { RunTypeEnum } from './runTypeEnum';
export declare class PayrollRun {
    'id'?: string;
    'remote_id'?: string | null;
    'run_state'?: RunStateEnum | null;
    'run_type'?: RunTypeEnum | null;
    'start_date'?: Date | null;
    'end_date'?: Date | null;
    'check_date'?: Date | null;
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
