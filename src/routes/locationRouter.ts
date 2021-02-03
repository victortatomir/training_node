import express from "express";
import { asyncMiddleware } from "../middlewares/async";
import * as LocationController from "../controllers/location_controller";

const locationRouter = express.Router();

locationRouter.get("", asyncMiddleware(LocationController.getLocation));
locationRouter.get("/:id", asyncMiddleware(LocationController.getLocationById));

locationRouter.post("", asyncMiddleware(LocationController.addLocation));

locationRouter.put("/:id", asyncMiddleware(LocationController.updateLocation));

locationRouter.delete(
  "/:id",
  asyncMiddleware(LocationController.removeLocation)
);

export default locationRouter;
