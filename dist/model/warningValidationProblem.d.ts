import { ValidationProblemSource } from './validationProblemSource';
export declare class WarningValidationProblem {
    'source'?: ValidationProblemSource;
    'title': string;
    'detail': string;
    'problem_type': string;
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
