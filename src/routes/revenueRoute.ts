import express from "express";
import { asyncMiddleware } from "../middlewares/async";
import * as RevenueController from "../controllers/revenue_controller";

const revenueRouter = express.Router();

revenueRouter.get("", asyncMiddleware(RevenueController.getRevenue));
revenueRouter.get("/:id", asyncMiddleware(RevenueController.getRevenueById));

revenueRouter.post("", asyncMiddleware(RevenueController.addRevenue));

revenueRouter.put("/:id", asyncMiddleware(RevenueController.updateRevenue));

revenueRouter.delete("/:id", asyncMiddleware(RevenueController.removeRevenue));

export default revenueRouter;
