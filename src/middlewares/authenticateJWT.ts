import { Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
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
    const token = authHeader;
    try {
      const user = jwt.verify(token, accesTokenSecret);
      req.user = user as User;

      next();
    } catch (err) {
      res.status(403).send("Invalid token");
    }
  } else {
    res.status(401);
  }
};

export default authenticateJWT;
