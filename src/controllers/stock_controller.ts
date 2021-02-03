import { Request, Response } from "express";
import Stock from "../models/stock";

export const getStock = async (req: Request, res: Response): Promise<void> => {
  try {
    const stock = await Stock.find();
    res.status(200).send(stock);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

export const getStockById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const stock = await Stock.find({
      product: Number(req.params.product),
      location: Number(req.params.location),
    });
    res.status(200).send(stock);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

export const addStock = async (req: Request, res: Response): Promise<void> => {
  try {
    const stock = new Stock(req.body);
    const savedStock = await stock.save();
    res.status(200).send(savedStock);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

export const removeStock = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    await Stock.deleteMany(
      {
        product: Number(req.params.product),
        location: Number(req.params.location),
      },
      { new: true }
    );
    res.status(200).send("Stock deleted");
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

export const updateStock = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const stock = await Stock.findOneAndUpdate(
      {
        product: Number(req.params.product),
        location: Number(req.params.location),
      },
      req.body,
      { new: true }
    );
    res.status(200).send(stock);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};
