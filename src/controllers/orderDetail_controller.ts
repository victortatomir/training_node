import { Request, Response } from "express";
import OrderDetail from "../models/orderDetail";

export const getOrderDetail = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const orderDetail = await OrderDetail.find();
    res.status(200).send(orderDetail);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

export const getOrderDetailById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const orderDetail = await OrderDetail.find({
      order: Number(req.params.order),
      product: Number(req.params.product),
    });
    res.status(200).send(orderDetail);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

export const addOrderDetail = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const orderDetail = new OrderDetail(req.body);
    const savedOrderDetail = orderDetail.save();
    res.status(200).send(savedOrderDetail);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

export const removeOrderDetail = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    await OrderDetail.deleteMany(
      { order: Number(req.params.order), product: Number(req.params.product) },
      { new: true }
    );
    res.status(200).send("OrderDetail deleted");
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

export const updateOrderDetail = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const orderDetail = await OrderDetail.findOneAndUpdate(
      { order: Number(req.params.order), product: Number(req.params.product) },
      req.body,
      { new: true }
    );
    res.status(200).send(orderDetail);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};
