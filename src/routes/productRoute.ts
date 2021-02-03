import express from "express";
import { asyncMiddleware } from "../middlewares/async";
import * as ProductController from "../controllers/product_controller";

const productRouter = express.Router();

productRouter.get("", asyncMiddleware(ProductController.allProducts));
productRouter.get("/:id", asyncMiddleware(ProductController.getOneProduct));
productRouter.get("/category/:category", ProductController.getProductCategory);

productRouter.post("", asyncMiddleware(ProductController.addProduct));
productRouter.post(
  "/category/:category",
  asyncMiddleware(ProductController.addProductByCategory)
);

productRouter.put("/:id", asyncMiddleware(ProductController.updateProduct));

productRouter.delete("/:id", asyncMiddleware(ProductController.deleteProduct));

export default productRouter;
