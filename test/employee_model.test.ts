import { suite, test } from '@testdeck/mocha';
import * as _chai from 'chai';
import { mock, instance } from 'ts-mockito';
import { ObjectSerializer } from '../model/models';
import { Employee } from '../model/employee'
import { Employment } from '../model/employment'
import { Location } from '../model/location'
import { Team } from '../model/team'
import { PayGroup } from '../model/payGroup'
import { PaginatedEmployeeList } from '../model/paginatedEmployeeList'
import { assert } from 'console';

_chai.should();
@suite class EmployeeUnitTests {

  @test 'able to deserialize'() {
    const employee_serial: string = `{ "id": "0958cbc6-6040-430a-848e-aafacbadf4ae", 
    "remote_id": "19202938", 
    "company": "8d9fd929-436c-4fd4-a48b-0c61f68d6178", 
    "employments": [
        {
            "id": "17a54124-287f-494d-965e-3c5b330c9a68",
            "employee": "0958cbc6-6040-430a-848e-aafacbadf4ae",
            "job_title": "chef"
        }
    ], 
    "home_location": {
        "id": "51903790-7dfe-4053-8d63-5a10cc4ffd39",
        "name": "home"
    }, 
    "work_location": "9efbc633-3387-4306-aa55-e2c635e6bb4f", 
    "manager": {
        "id": "0048ea5b-911e-4dff-9364-92070dea62ff", 
        "company": "8d9fd929-436c-4fd4-a48b-0c61f68d6178",
        "employments": ["17a54124-287f-494d-965e-3c5b330c9a68"],
        "home_location": "51903790-7dfe-4053-8d63-5a10cc4ffa39",
        "work_location": "9efbc633-3487-4306-aa55-e2c635e6bb4f",
        "team": "249c9faa-3045-4a31-953b-8f22d3613301",
        "pay_group": "ad1264e2-39be-4787-b749-f1aade9e3405"
    },
    "team": {
        "id": "249c9faa-3045-4a31-953b-8f22d3613301", 
        "name": "caterers"
    },
    "pay_group": {
        "id": "ad1264e2-39be-4787-b749-f1aade9e3405",
        "pay_group_name": "hourly"
    } 
    }`;

    /*
    */

    const serialized: string = `{ "results": [${employee_serial}] }`;
  
    const emp: PaginatedEmployeeList = ObjectSerializer.deserialize(JSON.parse(serialized), "PaginatedEmployeeList");

    _chai.assert.isNotNull(emp);
    _chai.assert.isDefined(emp.results)
    _chai.assert.isNotEmpty(emp.results)
    _chai.assert.equal(emp?.results?.[0].remote_id, "19202938");
    _chai.assert.isDefined(emp?.results?.[0].home_location);
    _chai.assert.equal((emp?.results?.[0].home_location as Location).name, "home");

    _chai.assert.isDefined(emp?.results?.[0].employments);
    _chai.assert.isNotEmpty(emp.results?.[0].employments);
    _chai.assert.equal((emp?.results?.[0].employments?.[0] as Employment).job_title, "chef");

    _chai.assert.isDefined(emp?.results?.[0].manager);
    _chai.assert.equal((emp?.results?.[0].manager as Employee).id, "0048ea5b-911e-4dff-9364-92070dea62ff");
    _chai.assert.equal((emp?.results?.[0].manager as Employee).pay_group, "ad1264e2-39be-4787-b749-f1aade9e3405");

    _chai.assert.isDefined(emp?.results?.[0].team);
    _chai.assert.equal((emp?.results?.[0].team as Team).name, "caterers");

    _chai.assert.isDefined(emp?.results?.[0].work_location);
    _chai.assert.isDefined(emp?.results?.[0].pay_group);
    _chai.assert.equal((emp?.results?.[0].pay_group as PayGroup).pay_group_name, "hourly");

    const employeeDeserialized: Employee = ObjectSerializer.deserialize(JSON.parse(employee_serial), "Employee");
    _chai.assert.isDefined(employeeDeserialized?.pay_group);
}

}