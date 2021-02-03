import { Request, Response } from "express";
import Revenue from "../models/revenue";

export const getRevenue = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const revenue = await Revenue.find();
    res.status(200).send(revenue);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

export const getRevenueById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const revenue = await Revenue.find({ id: Number(req.params.id) });
    res.status(200).send(revenue);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

export const addRevenue = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const revenue = new Revenue(req.body);
    const savedRevenue = await revenue.save();
    res.status(200).send(savedRevenue);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

export const removeRevenue = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    await Revenue.deleteMany({ id: Number(req.params.id) }, { new: true });
    res.status(200).send("Revenue deleted");
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

export const updateRevenue = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const revenue = await Revenue.findOneAndUpdate(
      { id: Number(req.params.id) },
      req.body,
      { new: true }
    );
    res.status(200).send(revenue);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};
