import { Request, Response } from "express";
import Order from "../models/order";

export const getOrder = async (req: Request, res: Response): Promise<void> => {
  try {
    const order = await Order.find();
    res.status(200).send(order);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

export const getOrderById = async (
  req: Request,
  res: Response
): Promise<void> => {
  const order = await Order.find({ id: Number(req.params.id) });
  res.status(200).send(order);
};

export const addOrder = async (req: Request, res: Response): Promise<void> => {
  const order = new Order(req.body);
  const savedOrder = await order.save();
  res.status(200).send(savedOrder);
};

export const removeOrder = async (
  req: Request,
  res: Response
): Promise<void> => {
  await Order.deleteMany({ id: Number(req.params.id) }, { new: true });
  res.status(200).send("Order deleted");
};

export const updateOrder = async (
  req: Request,
  res: Response
): Promise<void> => {
  const order = await Order.findOneAndUpdate(
    { id: Number(req.params.id) },
    req.body,
    { new: true }
  );
  res.status(200).send(order);
};
