import { Employee } from './employee';
export declare class PaginatedEmployeeList {
    'next'?: string | null;
    'previous'?: string | null;
    'results'?: Array<Employee>;
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
