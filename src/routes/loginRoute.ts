import express from "express";
import { asyncMiddleware } from "../middlewares/async";
import * as LoginUserController from "../controllers/user_controller";

const userRouter = express.Router();

userRouter.get(
  "",
  asyncMiddleware(LoginUserController.loginUser)
);

userRouter.post(
  "",
  asyncMiddleware(LoginUserController.addUser)
);


export default userRouter;
