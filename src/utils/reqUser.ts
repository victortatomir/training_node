import { Request } from "express";
import { User } from "../models/user";

export interface IGetUserAuthInfoRequest extends Request {
  user: User;
}
