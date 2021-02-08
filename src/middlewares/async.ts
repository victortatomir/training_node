import { Request, Response, NextFunction } from "express";

export const asyncMiddleware = (
  handler: (req: Request, res: Response, next: NextFunction) => Promise<void>
) => {
  return async (
    request: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      await handler(request, res, next);
    } catch (err) {
      const status = err.statusCode || 500;
      const message = err.message || err;
      console.log(err);
      res.status(status).send(message);
    }
  };
};
