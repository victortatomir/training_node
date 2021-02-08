import { Request, Response } from "express";
import Revenue from "../models/revenue";

export const getRevenue = async (
  req: Request,
  res: Response
): Promise<void> => {
  const revenue = await Revenue.find();
  res.status(200).send(revenue);
};

export const getRevenueById = async (
  req: Request,
  res: Response
): Promise<void> => {
  const revenue = await Revenue.find({ id: Number(req.params.id) });
  res.status(200).send(revenue);
};

export const addRevenue = async (
  req: Request,
  res: Response
): Promise<void> => {
  const revenue = new Revenue(req.body);
  const savedRevenue = await revenue.save();
  res.status(200).send(savedRevenue);
};

export const removeRevenue = async (
  req: Request,
  res: Response
): Promise<void> => {
  await Revenue.deleteMany({ id: Number(req.params.id) }, { new: true });
  res.status(200).send("Revenue deleted");
};

export const updateRevenue = async (
  req: Request,
  res: Response
): Promise<void> => {
  const revenue = await Revenue.findOneAndUpdate(
    { id: Number(req.params.id) },
    req.body,
    { new: true }
  );
  res.status(200).send(revenue);
};
