"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supplier_1 = __importDefault(require("../models/supplier"));
describe('When data is valid', () => {
    beforeAll(() => {
        supplier_1.default.find = jest.fn().mockResolvedValue([{
                _id: "60095baf25f5c65fa4d8f03a",
                id: 10,
                name: "test",
                __v: 0
            },
            {
                _id: "60095baf25f5c65fa4d8f03b",
                id: 11,
                name: "testare",
                __v: 0
            }]);
    });
    it("Should return entries", () => __awaiter(void 0, void 0, void 0, function* () {
        console.log();
    }));
});
