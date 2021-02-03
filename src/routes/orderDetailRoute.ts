import express from "express";
import { asyncMiddleware } from "../middlewares/async";
import * as OrderDetailController from "../controllers/orderDetail_controller";

const orderDetailRouter = express.Router();

orderDetailRouter.get(
  "",
  asyncMiddleware(OrderDetailController.getOrderDetail)
);
orderDetailRouter.get(
  "/:order/:product",
  asyncMiddleware(OrderDetailController.getOrderDetailById)
);

orderDetailRouter.post(
  "",
  asyncMiddleware(OrderDetailController.addOrderDetail)
);

orderDetailRouter.put(
  "/:order/:product",
  asyncMiddleware(OrderDetailController.updateOrderDetail)
);

orderDetailRouter.delete(
  "/:order/:product",
  asyncMiddleware(OrderDetailController.removeOrderDetail)
);

export default orderDetailRouter;
