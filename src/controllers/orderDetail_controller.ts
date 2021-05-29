import { Request, Response } from "express";
import OrderDetail from "../models/orderDetail";

export const getOrderDetail = async (
  req: Request,
  res: Response
): Promise<void> => {
  const orderDetail = await OrderDetail.find();
  res.status(200).send(orderDetail);
};

export const getOrderDetailById = async (
  req: Request,
  res: Response
): Promise<void> => {
  const orderDetail = await OrderDetail.find({
    order: Number(req.params.order),
    product: Number(req.params.product),
  });
  res.status(200).send(orderDetail);
};

export const addOrderDetail = async (
  req: Request,
  res: Response
): Promise<void> => {
  const orderDetail = new OrderDetail(req.body);
  const savedOrderDetail = orderDetail.save();
  res.status(200).send(savedOrderDetail);
};

export const removeOrderDetail = async (
  req: Request,
  res: Response
): Promise<void> => {
  await OrderDetail.deleteMany(
    { order: Number(req.params.order), product: Number(req.params.product) },
    { new: true }
  );
  res.status(200).send("OrderDetail deleted");
};

export const updateOrderDetail = async (
  req: Request,
  res: Response
): Promise<void> => {
  const orderDetail = await OrderDetail.findOneAndUpdate(
    { order: Number(req.params.order), product: Number(req.params.product) },
    req.body,
    { new: true }
  );
  res.status(200).send(orderDetail);
};
