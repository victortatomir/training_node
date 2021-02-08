import { Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import ValidationError from "../custom_error/customError";
import { User } from "../models/user";
import { accesTokenSecret } from "../utils/accesTokenForServer";
import { IGetUserAuthInfoRequest } from "../utils/reqUser";

const authenticateJWT = (
  req: IGetUserAuthInfoRequest,
  res: Response,
  next: NextFunction
): void => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, accesTokenSecret, (err: ValidationError, user: User) => {
      if (err) {
        res.status(403).send("Invalid user");
      } else {
        req.user = user;
        next();
      }
    });
  } else {
    res.status(401);
  }
};

export default authenticateJWT;
