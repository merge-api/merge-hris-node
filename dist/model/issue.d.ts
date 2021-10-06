import { IssueStatusEnum } from './issueStatusEnum';
export declare class Issue {
    'id'?: string;
    'status'?: IssueStatusEnum;
    'error_description': string;
    'end_user'?: {
        [key: string]: any;
    };
    'first_incident_time'?: Date | null;
    'last_incident_time'?: Date | null;
    'is_muted'?: boolean;
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
