import { Deduction } from './deduction';
import { Earning } from './earning';
import { RemoteData } from './remoteData';
import { Tax } from './tax';
export declare class EmployeePayrollRun {
    'id'?: string;
    'remoteId'?: string | null;
    'employee'?: string | null;
    'payrollRun'?: string | null;
    'grossPay'?: number | null;
    'netPay'?: number | null;
    'startDate'?: Date | null;
    'endDate'?: Date | null;
    'checkDate'?: Date | null;
    'earnings'?: Array<Earning>;
    'deductions'?: Array<Deduction>;
    'taxes'?: Array<Tax>;
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
