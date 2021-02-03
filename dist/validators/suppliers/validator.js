"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var supplierSchema_1 = __importDefault(require("./supplierSchema"));
var validatorSupplier = function (supplier) {
    var result = supplierSchema_1.default.validate(supplier);
    if (result.error) {
        throw "Not a valid supplier: " + result.error.message;
    }
};
exports.default = validatorSupplier;
//# sourceMappingURL=validator.js.map