import { ProductInterface } from "../../models/product";
import productSchema from "../products/productSchema";


const validatorProduct = (product: ProductInterface): void => {
    const result = productSchema.validate(product);
    if (result.error) {
      throw `Not a valid product: ${result.error.message}`;
    }
};

export default validatorProduct;