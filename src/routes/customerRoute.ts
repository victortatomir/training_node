import express from "express";
import { asyncMiddleware } from "../middlewares/async";
import * as CustomerController from "../controllers/customer_controller";

const customerRouter = express.Router();

customerRouter.get("", asyncMiddleware(CustomerController.getCustomer));
customerRouter.get("/:id", asyncMiddleware(CustomerController.getCustomerById));

customerRouter.post("", asyncMiddleware(CustomerController.addCustomer));

customerRouter.put("/:id", asyncMiddleware(CustomerController.updateCustomer));

customerRouter.delete(
  "/:id",
  asyncMiddleware(CustomerController.removeCustomer)
);

export default customerRouter;
