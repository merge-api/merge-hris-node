/**
 * Merge HRIS API
 * The unified API for building rich integrations with multiple HR Information System platforms.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: hello@merge.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { TypeEnum } from './typeEnum';

/**
* # The Earning Object ### Description The `Earning` object is used to represent an earning for a given employee\'s payroll run. One run could include several earnings.  ### Usage Example Fetch from the `LIST Earnings` endpoint and filter by `ID` to show all earnings.
*/
export class Earning {
    'id'?: string;
    'employee_payroll_run'?: string;
    /**
    * The amount earned.
    */
    'amount'?: number | null;
    /**
    * The type of earning.
    */
    'type'?: TypeEnum | null;
    'remote_data'?: Array<{ [key: string]: any; }> | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "employee_payroll_run",
            "baseName": "employee_payroll_run",
            "type": "string"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "TypeEnum"
        },
        {
            "name": "remote_data",
            "baseName": "remote_data",
            "type": "Array<{ [key: string]: any; }>"
        }    ];

    static getAttributeTypeMap() {
        return Earning.attributeTypeMap;
    }
}

