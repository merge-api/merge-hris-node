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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mocha_1 = require("@testdeck/mocha");
const _chai = __importStar(require("chai"));
const employeesApi_1 = require("../api/employeesApi");
_chai.should();
let EmployeeUnitTests = class EmployeeUnitTests {
    'able to deserialize'() {
        var _a, _b, _c, _d, _e, _f;
        return __awaiter(this, void 0, void 0, function* () {
            const api = new employeesApi_1.EmployeesApi();
            var yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 4);
            api.setApiKey(employeesApi_1.EmployeesApiApiKeys.tokenAuth, "Bearer rd4PKMRYHM4761NNWOcY9lMjItBj1p4papwhQEIHXe7jJiW9bfVqng");
            let res = yield api.employeesList("IxEJJUZVjjKunbSN2UZz1k1Qx_cGNfnTuqTNzAXV01NK-yYSpUpRtw", undefined, undefined, undefined, "cD0yMDIxLTExLTEyKzE4JTNBNDglM0EyMC4xMDgwOTglMkIwMCUzQTAw", "employments,home_location,work_location,manager,team,company", undefined, false, false, undefined, yesterday);
            console.log(res);
            _chai.assert.isDefined((_a = res === null || res === void 0 ? void 0 : res.body) === null || _a === void 0 ? void 0 : _a.results);
            _chai.assert.isNotEmpty((_b = res === null || res === void 0 ? void 0 : res.body) === null || _b === void 0 ? void 0 : _b.results);
            while (((_c = res === null || res === void 0 ? void 0 : res.body) === null || _c === void 0 ? void 0 : _c.next) !== null) {
                let cursor = (_d = res === null || res === void 0 ? void 0 : res.body) === null || _d === void 0 ? void 0 : _d.next;
                console.log(cursor);
                res = yield api.employeesList("IxEJJUZVjjKunbSN2UZz1k1Qx_cGNfnTuqTNzAXV01NK-yYSpUpRtw", undefined, undefined, undefined, cursor, "employments,home_location,work_location,manager,team,company", undefined, false, false, undefined, yesterday);
                console.log(res);
                _chai.assert.isDefined((_e = res === null || res === void 0 ? void 0 : res.body) === null || _e === void 0 ? void 0 : _e.results);
                _chai.assert.isNotEmpty((_f = res === null || res === void 0 ? void 0 : res.body) === null || _f === void 0 ? void 0 : _f.results);
            }
        });
    }
};
__decorate([
    mocha_1.test,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EmployeeUnitTests.prototype, "able to deserialize", null);
EmployeeUnitTests = __decorate([
    mocha_1.suite
], EmployeeUnitTests);
//# sourceMappingURL=employee_api.test.js.map