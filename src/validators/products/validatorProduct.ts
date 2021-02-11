import { ProductInterface } from "../../models/product";
import productSchema from "../products/productSchema";
import ValidationError from "../../custom_error/customError";

const validatorProduct = (product: ProductInterface): void => {
  const result = productSchema.validate(product);
  if (result.error) {
    throw new ValidationError(`Not a valid product: ${result.error.message}`,400);
  }
};

export default validatorProduct;
