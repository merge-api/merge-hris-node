import { Team } from './team';
export declare class PaginatedTeamList {
    'next'?: string | null;
    'previous'?: string | null;
    'results'?: Array<Team>;
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
