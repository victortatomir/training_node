import express from "express";
import { asyncMiddleware } from "../middlewares/async";
import * as CategoryController from "../controllers/category_controller";

const categoryRouter = express.Router();

categoryRouter.get("", asyncMiddleware(CategoryController.getCategory));
categoryRouter.get("/:id", asyncMiddleware(CategoryController.getCategoryById));

categoryRouter.post("", asyncMiddleware(CategoryController.addCategory));

categoryRouter.put("/:id", asyncMiddleware(CategoryController.updateCategory));

categoryRouter.delete(
  "/:id",
  asyncMiddleware(CategoryController.removeCategory)
);

export default categoryRouter;
