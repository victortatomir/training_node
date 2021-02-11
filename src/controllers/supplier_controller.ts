import { Request, Response } from "express";
import Supplier, { SupplierInterface } from "../models/supplier";
import Product from "../models/product";
import validateSupplier from "../validators/suppliers/validator";

export const getSupplier = async (
  req: Request,
  res: Response
): Promise<void> => {
  const supplier = await Supplier.find();
  if (supplier.lenght < 1) {
    res.status(404).send("No supplier");
  } else {
    res.status(200).send(supplier);
  }
};

export const getSupplierById = async (
  req: Request,
  res: Response
): Promise<void> => {
  const supplier = await Supplier.find({ id: Number(req.params.id) });
  if (supplier.length < 1) {
    res.status(404).send("A supplier with this id doesn't exist");
  } else {
    res.status(200).send(supplier);
  }
};

export const addSupplier = async (
  req: Request,
  res: Response
): Promise<void> => {
  const supplierObeject: SupplierInterface = req.body;
  validateSupplier(supplierObeject);
  const supplier = new Supplier(req.body);
  const savedSupplier = await supplier.save();
  res.status(201).send(savedSupplier);
};

export const removeSupplier = async (
  req: Request,
  res: Response
): Promise<void> => {
  await Supplier.deleteMany({ id: Number(req.params.id) }, { new: true });
  res.status(200).send("Supplier deleted");
};

export const updateSupplier = async (
  req: Request,
  res: Response
): Promise<void> => {
  const supplierObeject: SupplierInterface = req.body;
  validateSupplier(supplierObeject);
  const supplier = await Supplier.findOneAndUpdate(
    { id: Number(req.params.id) },
    req.body,
    { new: true }
  );
  if (supplier) {
    const prod = await Product.updateMany(
      { "supplier.id": Number(req.body["id"]) },
      { $set: { "supplier.name": req.body["name"] } }
    );
    res.status(200).send(prod);
  } else {
    res.status(404).send("No category");
  }
};
