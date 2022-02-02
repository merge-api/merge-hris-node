import { EmploymentTypeEnum } from './employmentTypeEnum';
import { FlsaStatusEnum } from './flsaStatusEnum';
import { PayCurrencyEnum } from './payCurrencyEnum';
import { PayFrequencyEnum } from './payFrequencyEnum';
import { PayPeriodEnum } from './payPeriodEnum';
import { RemoteData } from './remoteData';
export declare class Employment {
    'id'?: string;
    'remote_id'?: string | null;
    'employee'?: string;
    'job_title'?: string | null;
    'pay_rate'?: number | null;
    'pay_period'?: PayPeriodEnum | null;
    'pay_frequency'?: PayFrequencyEnum | null;
    'pay_currency'?: PayCurrencyEnum | null;
    'flsa_status'?: FlsaStatusEnum | null;
    'effective_date'?: Date | null;
    'employment_type'?: EmploymentTypeEnum | null;
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
