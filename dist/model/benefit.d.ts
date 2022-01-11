import { BenefitPlanTypeEnum } from './benefitPlanTypeEnum';
import { RemoteData } from './remoteData';
export declare class Benefit {
    'id'?: string;
    'remote_id'?: string | null;
    'employee'?: string | null;
    'provider_name'?: string | null;
    'benefit_plan_type'?: BenefitPlanTypeEnum | null;
    'employee_contribution'?: number | null;
    'company_contribution'?: number | null;
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
