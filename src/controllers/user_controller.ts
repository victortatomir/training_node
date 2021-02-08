import { Request, Response } from "express";
import Login from "../models/user";
import jwt from "jsonwebtoken";
import { accesTokenSecret, refreshTokenSecret } from "../utils/accesTokenForServer";

const refreshTokens:string[] = [];

export const loginUser = async (req: Request, res: Response): Promise<void> => {
  const { username, password } = req.body;

  const user = await Login.findOne({ username: username, password: password });

  if (user) {
    const accesToken = jwt.sign(
      { username: user.username, role: user.role },
      accesTokenSecret,
      { expiresIn: "1hr" }
    );
    const refreshToken = jwt.sign(
      { username: user.username, role: user.role },
      refreshTokenSecret
    );

    refreshTokens.push(refreshToken);

    res.status(200).json({ accesToken, refreshToken });
  } else {
    res.status(400).send("Username or password incorrect");
  }
};

export const addUser = async (req: Request, res: Response): Promise<void> => {
  const user = new Login(req.body);
  const savedUser = await user.save();
  res.status(200).send(savedUser);
};

