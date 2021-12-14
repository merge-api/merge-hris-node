import { EmploymentTypeEnum } from './employmentTypeEnum';
import { FlsaStatusEnum } from './flsaStatusEnum';
import { PayCurrencyEnum } from './payCurrencyEnum';
import { PayFrequencyEnum } from './payFrequencyEnum';
import { PayPeriodEnum } from './payPeriodEnum';
import { RemoteData } from './remoteData';
export declare class Employment {
    'id'?: string;
    'remoteId'?: string | null;
    'employee'?: string | null;
    'jobTitle'?: string | null;
    'payRate'?: number | null;
    'payPeriod'?: PayPeriodEnum | null;
    'payFrequency'?: PayFrequencyEnum | null;
    'payCurrency'?: PayCurrencyEnum | null;
    'flsaStatus'?: FlsaStatusEnum | null;
    'effectiveDate'?: Date | null;
    'employmentType'?: EmploymentTypeEnum | null;
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
