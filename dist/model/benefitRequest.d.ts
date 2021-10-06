import { BenefitPlanTypeEnum } from './benefitPlanTypeEnum';
export declare class BenefitRequest {
    'remote_id'?: string | null;
    'employee'?: string | null;
    'provider_name'?: string | null;
    'benefit_plan_type'?: BenefitPlanTypeEnum | null;
    'employee_contribution'?: number | null;
    'company_contribution'?: number | null;
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
