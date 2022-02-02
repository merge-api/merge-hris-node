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
import { RemoteData } from './remoteData';

/**
* # The Team Object ### Description The `Team` object is used to represent a Team within a company. `Employee` objects are often grouped this way. Note that in the Merge HRIS API, company subdivisions are all represented with `Teams`, rather than `Teams` and `Departments`.  ### Usage Example If you\'re building a way to filter by `Team`, you\'d hit the `GET Teams` endpoint to fetch the `Teams`, and then use the `ID` of the team your user selects to filter the `GET Employees` endpoint.
*/
export class Team {
    'id'?: string;
    /**
    * The third-party API ID of the matching object.
    */
    'remote_id'?: string | null;
    /**
    * The team\'s name.
    */
    'name'?: string | null;
    'parent_team'?: string;
    'remote_data'?: Array<RemoteData> | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "remote_id",
            "baseName": "remote_id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "parent_team",
            "baseName": "parent_team",
            "type": "string"
        },
        {
            "name": "remote_data",
            "baseName": "remote_data",
            "type": "Array<RemoteData>"
        }    ];

    static getAttributeTypeMap() {
        return Team.attributeTypeMap;
    }
}

