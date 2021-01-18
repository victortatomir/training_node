"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProduct = exports.allProducts = void 0;
const product_1 = __importDefault(require("../models/product"));
const allProducts = (req, res) => {
    const products = product_1.default.find((err, products) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(products);
        }
    });
};
exports.allProducts = allProducts;
const addProduct = (req, res) => {
    const product = new product_1.default(req.body);
    product.save((err) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(product);
        }
    });
};
exports.addProduct = addProduct;
// export const updateProduct = (req: Request, res: Response) => {
//     let product = Product.findByIdAndUpdate(
//         req.params.id,
//         req.body,
//         (err: any, product: any)=>{
//             if(err){
//                 res.send(err)
//             } else{
//                 res.send(product)
//             }
//         }
//     )
// }
// export const deleteProduct = (req: Request, res: Response) =>{
//     const product = Product.deleteOne({_id: req.params.id}, (err:any) => {
//         if(err){
//             res.send(err)
//         } else{
//             res.send("Product deleted")
//         }
//     })
// }
