"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const mocha_1 = require("@testdeck/mocha");
const _chai = __importStar(require("chai"));
const models_1 = require("../model/models");
_chai.should();
let EmployeeUnitTests = class EmployeeUnitTests {
    'able to deserialize'() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
        const employee_serial = `{ "id": "0958cbc6-6040-430a-848e-aafacbadf4ae", 
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
        const serialized = `{ "results": [${employee_serial}] }`;
        const emp = models_1.ObjectSerializer.deserialize(JSON.parse(serialized), "PaginatedEmployeeList");
        _chai.assert.isNotNull(emp);
        _chai.assert.isDefined(emp.results);
        _chai.assert.isNotEmpty(emp.results);
        _chai.assert.equal((_a = emp === null || emp === void 0 ? void 0 : emp.results) === null || _a === void 0 ? void 0 : _a[0].remote_id, "19202938");
        _chai.assert.isDefined((_b = emp === null || emp === void 0 ? void 0 : emp.results) === null || _b === void 0 ? void 0 : _b[0].home_location);
        _chai.assert.equal(((_c = emp === null || emp === void 0 ? void 0 : emp.results) === null || _c === void 0 ? void 0 : _c[0].home_location).name, "home");
        _chai.assert.isDefined((_d = emp === null || emp === void 0 ? void 0 : emp.results) === null || _d === void 0 ? void 0 : _d[0].employments);
        _chai.assert.isNotEmpty((_e = emp.results) === null || _e === void 0 ? void 0 : _e[0].employments);
        _chai.assert.equal(((_g = (_f = emp === null || emp === void 0 ? void 0 : emp.results) === null || _f === void 0 ? void 0 : _f[0].employments) === null || _g === void 0 ? void 0 : _g[0]).job_title, "chef");
        _chai.assert.isDefined((_h = emp === null || emp === void 0 ? void 0 : emp.results) === null || _h === void 0 ? void 0 : _h[0].manager);
        _chai.assert.equal(((_j = emp === null || emp === void 0 ? void 0 : emp.results) === null || _j === void 0 ? void 0 : _j[0].manager).id, "0048ea5b-911e-4dff-9364-92070dea62ff");
        _chai.assert.equal(((_k = emp === null || emp === void 0 ? void 0 : emp.results) === null || _k === void 0 ? void 0 : _k[0].manager).pay_group, "ad1264e2-39be-4787-b749-f1aade9e3405");
        _chai.assert.isDefined((_l = emp === null || emp === void 0 ? void 0 : emp.results) === null || _l === void 0 ? void 0 : _l[0].team);
        _chai.assert.equal(((_m = emp === null || emp === void 0 ? void 0 : emp.results) === null || _m === void 0 ? void 0 : _m[0].team).name, "caterers");
        _chai.assert.isDefined((_o = emp === null || emp === void 0 ? void 0 : emp.results) === null || _o === void 0 ? void 0 : _o[0].work_location);
        _chai.assert.isDefined((_p = emp === null || emp === void 0 ? void 0 : emp.results) === null || _p === void 0 ? void 0 : _p[0].pay_group);
        _chai.assert.equal(((_q = emp === null || emp === void 0 ? void 0 : emp.results) === null || _q === void 0 ? void 0 : _q[0].pay_group).pay_group_name, "hourly");
        const employeeDeserialized = models_1.ObjectSerializer.deserialize(JSON.parse(employee_serial), "Employee");
        _chai.assert.isDefined(employeeDeserialized === null || employeeDeserialized === void 0 ? void 0 : employeeDeserialized.pay_group);
    }
};
__decorate([
    mocha_1.test,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EmployeeUnitTests.prototype, "able to deserialize", null);
EmployeeUnitTests = __decorate([
    mocha_1.suite
], EmployeeUnitTests);
//# sourceMappingURL=employee_model.test.js.map