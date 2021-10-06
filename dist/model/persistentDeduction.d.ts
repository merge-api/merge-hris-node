export declare class PersistentDeduction {
    'id'?: string;
    'remote_id'?: string | null;
    'employee'?: string | null;
    'calculation_type'?: string | null;
    'frequency'?: string | null;
    'effective_date'?: Date | null;
    'end_date'?: Date | null;
    'amount_deducted'?: number | null;
    'remote_data'?: Array<{
        [key: string]: any;
    }> | null;
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
