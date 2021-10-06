import { Issue } from './issue';
export declare class PaginatedIssueList {
    'next'?: string | null;
    'previous'?: string | null;
    'results'?: Array<Issue>;
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
