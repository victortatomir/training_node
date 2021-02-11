import express from "express";
import { asyncMiddleware } from "../middlewares/async";
import * as OrderController from "../controllers/order_controller";

const orderRouter = express.Router();

orderRouter.get("", asyncMiddleware(OrderController.getOrder));
orderRouter.get("/:id", asyncMiddleware(OrderController.getOrderById));

orderRouter.post("", asyncMiddleware(OrderController.addOrder));

orderRouter.put("/:id", asyncMiddleware(OrderController.updateOrder));

orderRouter.delete("/:id", asyncMiddleware(OrderController.removeOrder));

export default orderRouter;
