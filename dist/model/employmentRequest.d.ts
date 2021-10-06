import { EmploymentTypeEnum } from './employmentTypeEnum';
import { FlsaStatusEnum } from './flsaStatusEnum';
import { PayCurrencyEnum } from './payCurrencyEnum';
import { PayFrequencyEnum } from './payFrequencyEnum';
import { PayPeriodEnum } from './payPeriodEnum';
export declare class EmploymentRequest {
    'remote_id'?: string | null;
    'job_title'?: string | null;
    'pay_rate'?: number | null;
    'pay_period'?: PayPeriodEnum | null;
    'pay_frequency'?: PayFrequencyEnum | null;
    'pay_currency'?: PayCurrencyEnum | null;
    'flsa_status'?: FlsaStatusEnum | null;
    'effective_date'?: Date | null;
    'employment_type'?: EmploymentTypeEnum | null;
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
