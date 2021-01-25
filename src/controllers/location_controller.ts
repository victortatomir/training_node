import { Request, Response } from "express"
import Location from "../models/location"


export const getLocation = async (req:Request, res:Response) :Promise<void> => {
    try{
        const location = await Location.find();
        res.send(location);
    }catch(err){
        res.send(err);
    }
}

export const getLocationById = async (req:Request, res:Response) :Promise<void> => {
    try{
        const location = await Location.find({id: Number(req.params.id)});
        res.send(location)
    }catch(err){
        res.send(err);
    }
}

export const addLocation = async (req:Request, res:Response) :Promise<void>=>{
    try{
        const location = new Location(req.body);
        const savedLocation = await location.save();
        res.send(savedLocation);
    }catch(err){
        res.send(err);
    }
}


export const removeLocation = async (req:Request, res:Response) :Promise<void> =>{
    try{
        const location = await Location.deleteMany({id: Number(req.params.id)},{new:true});
        res.send(location);
    }catch(err){
        res.send(err);
    }
}

export const updateLocation = async (req:Request, res:Response) :Promise<void> =>{
    try{
        const location = await Location.findOneAndUpdate({id:Number(req.params.id)},req.body,{new:true});
        res.send(location);
    }catch(err){
        res.send(err);
    }
}