import { ProductInterface } from "../../models/product";
import productSchema from "../products/productSchema";
import ValidationError from "../../custom_error/customError";
import { ValidatorStrategy } from "../validatorStrategy";

export class ProductStrategy implements ValidatorStrategy {
  validateData(data: ProductInterface): void {
    const result = productSchema.validate(data);
    if (result.error) {
      throw new ValidationError(
        `Not a valid product: ${result.error.message}`,
        400
      );
    }
  }
}
