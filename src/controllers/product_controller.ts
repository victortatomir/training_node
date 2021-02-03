import { Request, Response } from "express";
import ProductCategory from "../models/category";
import Product, { ProductInterface } from "../models/product";
import validatorProduct from "../validators/products/validatorProduct";

export const allProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const products = await Product.find();
    res.status(200).send(products);
  } catch (err) {
    console.log(err);
    const status = err.statusCode() || 500;
    const message = err.getMessage();
    res.status(status).send(message);
  }
};

export const getOneProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const product = await Product.findOne({ id: Number(req.params.id) });
    res.status(200).send(product);
  } catch (err) {
    console.log(err);
    const status = err.statusCode() || 500;
    const message = err.getMessage();
    res.status(status).send(message);
  }
};

export const addProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const productObject: ProductInterface = req.body;
    validatorProduct(productObject);
    const product = new Product(req.body);
    const savedProduct = await product.save();
    res.status(200).send(savedProduct);
  } catch (err) {
    console.log(err);
    const status = err.statusCode() || 500;
    const message = err.getMessage();
    res.status(status).send(message);
  }
};

export const updateProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const productObject: ProductInterface = req.body;
    validatorProduct(productObject);
    const product = await Product.findOneAndUpdate(
      { id: Number(req.params.id) },
      req.body,
      { new: true }
    );
    res.status(200).send(product);
  } catch (err) {
    console.log(err);
    const status = err.statusCode() || 500;
    const message = err.getMessage();
    res.status(status).send(message);
  }
};

export const deleteProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    await Product.deleteMany({ id: Number(req.params.id) }, { new: true });
    res.status(200).send("Product deleted");
  } catch (err) {
    console.log(err);
    const status = err.statusCode() || 500;
    const message = err.getMessage();
    res.status(status).send(message);
  }
};

export const getProductCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const product = await Product.find({
      "category.id": Number(req.params.category),
    });
    res.status(200).send(product);
  } catch (err) {
    console.log(err);
    const status = err.statusCode() || 500;
    const message = err.getMessage();
    res.status(status).send(message);
  }
};

export const addProductByCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  await ProductCategory.exists(
    { id: Number(req.params.category) },
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        if (result) {
          const product = new Product(req.body);
          product.category.id = Number(req.params.category);
          product.save((err: any) => {
            if (err) {
              console.log(err);
              res.send(err);
            } else {
              res.status(200).send(product);
            }
          });
        } else {
          res.send("Invalid category!");
        }
      }
    }
  );
};
