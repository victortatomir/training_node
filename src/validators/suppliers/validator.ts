import { SupplierInterface } from "../../models/supplier";
import supplierSchema from "./supplierSchema";
import ValidationError from "../../custom_error/customError";

const validatorSupplier = (supplier: SupplierInterface): void => {
  const result = supplierSchema.validate(supplier);
  if (result.error) {
    throw new ValidationError(`Not a valid supplier: ${result.error.message}`);
  }
};

export default validatorSupplier;
