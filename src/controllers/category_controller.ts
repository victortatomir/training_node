import { Request, Response } from "express";
import ProductCategory from "../models/category";

export const getCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const category = await ProductCategory.find();
    res.status(200).send(category);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

export const getCategoryById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const category = await ProductCategory.find({ id: Number(req.params.id) });
    res.status(200).send(category);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

export const addCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const category = new ProductCategory(req.body);
    const savedCategory = await category.save();
    res.status(200).send(savedCategory);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

export const removeCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    await ProductCategory.deleteMany(
      { id: Number(req.params.id) },
      { new: true }
    );
    res.status(200).send("Category deleted");
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

export const updateCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const category = await ProductCategory.findOneAndUpdate(
      { id: Number(req.params.id) },
      req.body,
      { new: true }
    );
    res.status(200).send(category);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};
