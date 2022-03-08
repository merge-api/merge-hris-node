import { DebugModeLog } from './debugModeLog';
import { ErrorValidationProblem } from './errorValidationProblem';
import { TimeOff } from './timeOff';
import { WarningValidationProblem } from './warningValidationProblem';
export declare class TimeOffResponse {
    'model': TimeOff;
    'warnings': Array<WarningValidationProblem>;
    'errors': Array<ErrorValidationProblem>;
    'logs'?: Array<DebugModeLog>;
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
