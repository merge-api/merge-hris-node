import { BenefitPlanTypeEnum } from './benefitPlanTypeEnum';
import { RemoteData } from './remoteData';
export declare class Benefit {
    'id'?: string;
    'remoteId'?: string | null;
    'employee'?: string | null;
    'providerName'?: string | null;
    'benefitPlanType'?: BenefitPlanTypeEnum | null;
    'employeeContribution'?: number | null;
    'companyContribution'?: number | null;
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
