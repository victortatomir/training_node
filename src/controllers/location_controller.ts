import { Request, Response } from "express";
import Location from "../models/location";

export const getLocation = async (
  req: Request,
  res: Response
): Promise<void> => {
  const location = await Location.find();
  res.status(200).send(location);
};

export const getLocationById = async (
  req: Request,
  res: Response
): Promise<void> => {
  const location = await Location.find({ id: Number(req.params.id) });
  res.status(200).send(location);
};

export const addLocation = async (
  req: Request,
  res: Response
): Promise<void> => {
  const location = new Location(req.body);
  const savedLocation = await location.save();
  res.status(200).send(savedLocation);
};

export const removeLocation = async (
  req: Request,
  res: Response
): Promise<void> => {
  await Location.deleteMany({ id: Number(req.params.id) }, { new: true });
  res.status(200).send("Location removed");
};

export const updateLocation = async (
  req: Request,
  res: Response
): Promise<void> => {
  const location = await Location.findOneAndUpdate(
    { id: Number(req.params.id) },
    req.body,
    { new: true }
  );
  res.status(200).send(location);
};
