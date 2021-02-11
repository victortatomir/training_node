import express from "express";
import { asyncMiddleware } from "../middlewares/async";
import * as SupplierController from "../controllers/supplier_controller";

const supplierRouter = express.Router();

supplierRouter.get("", asyncMiddleware(SupplierController.getSupplier));
supplierRouter.get("/:id", asyncMiddleware(SupplierController.getSupplierById));

supplierRouter.post("", asyncMiddleware(SupplierController.addSupplier));

supplierRouter.put("/:id", asyncMiddleware(SupplierController.updateSupplier));

supplierRouter.delete(
  "/:id",
  asyncMiddleware(SupplierController.removeSupplier)
);

export default supplierRouter;
