import { IssueStatusEnum } from './issueStatusEnum';
export declare class Issue {
    'id'?: string;
    'status'?: IssueStatusEnum;
    'errorDescription': string;
    'endUser'?: {
        [key: string]: any;
    };
    'firstIncidentTime'?: Date | null;
    'lastIncidentTime'?: Date | null;
    'isMuted'?: boolean;
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
