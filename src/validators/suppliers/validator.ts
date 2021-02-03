import { SupplierInterface } from "../../models/supplier";
import supplierSchema from "./supplierSchema";

const validatorSupplier = (supplier: SupplierInterface): void => {
  const result = supplierSchema.validate(supplier);
  if (result.error) {
    throw `Not a valid supplier: ${result.error.message}`;
  }
};

export default validatorSupplier;
