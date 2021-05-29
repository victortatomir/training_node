import { SupplierInterface } from "../../models/supplier";
import supplierSchema from "./supplierSchema";
import ValidationError from "../../custom_error/customError";
import { ValidatorStrategy } from "../validatorStrategy";

export class SupplierStrategy implements ValidatorStrategy {
  validateData(data: SupplierInterface): void {
    const result = supplierSchema.validate(data);
    if (result.error) {
      throw new ValidationError(
        `Not a valid supplier: ${result.error.message}`,
        400
      );
    }
  }
}
