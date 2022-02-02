import { Deduction } from './deduction';
import { Earning } from './earning';
import { RemoteData } from './remoteData';
import { Tax } from './tax';
export declare class EmployeePayrollRun {
    'id'?: string;
    'remote_id'?: string | null;
    'employee'?: string;
    'payroll_run'?: string;
    'gross_pay'?: number | null;
    'net_pay'?: number | null;
    'start_date'?: Date | null;
    'end_date'?: Date | null;
    'check_date'?: Date | null;
    'earnings'?: Array<Earning>;
    'deductions'?: Array<Deduction>;
    'taxes'?: Array<Tax>;
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
