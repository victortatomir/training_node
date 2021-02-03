//import { next } from "express"
import express, { Application, Request, Response, NextFunction } from "express";

export const asyncMiddleware = (
  handler: (req: Request, res: Response) => Promise<void>
) => {
  return async (
    request: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      await handler(request, res);
    } catch (err) {
      next();
    }
  };
};
