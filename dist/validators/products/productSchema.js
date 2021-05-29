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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Joi = __importStar(require("joi"));
var productSchema = Joi.object({
    id: Joi.number().required(),
    name: Joi.string().required().min(1),
    description: Joi.string().required().min(1),
    price: Joi.number().required(),
    weight: Joi.number().required(),
    category: Joi.number().required(),
    supplier: {
        id: Joi.number().required(),
        name: Joi.string().required(),
    },
    imageUrl: Joi.string().required()
});
exports.default = productSchema;
//# sourceMappingURL=productSchema.js.map