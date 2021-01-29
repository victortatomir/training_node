"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var productSchema_1 = __importDefault(require("../products/productSchema"));
var validatorProduct = function (product) {
    var result = productSchema_1.default.validate(product);
    if (result.error) {
        throw "Not a valid product: " + result.error.message;
    }
};
exports.default = validatorProduct;
//# sourceMappingURL=validatorProduct.js.map