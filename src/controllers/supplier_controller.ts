import { Request, Response } from "express"
import Supplier from "../models/supplier"
import  Product  from "../models/product"


export const getSupplier = async (req:Request, res:Response) :Promise<void> => {
    try{
        const supplier = await Supplier.find();
        res.send(supplier);
    }catch(err){
        res.send(err);
    }
}

export const getSupplierById = async (req:Request, res:Response) :Promise<void> =>{
    try{
        const supplier = await Supplier.find({id: Number(req.params.id)})
        res.send(supplier);
    }catch(err){
        res.send(err);
    }
}

export const addSupplier = async (req:Request, res:Response) :Promise<void> =>{
    try{
        const supplier = new Supplier(req.body);
        const savedSupplier = await supplier.save();
        res.send(savedSupplier);
    }catch(err){
        res.send(err);
    }
}


export const removeSupplier = async (req:Request, res:Response) :Promise<void> =>{
    try{
        const supplier = await Supplier.deleteMany({id: Number(req.params.id)},{new:true});
        res.send("Supplier deleted");
    }catch(err){
        res.send(err);
    }
}

export const updateSupplier = async (req:Request, res:Response) :Promise<void> =>{

    try{
        const supplier = await Supplier.findOneAndUpdate({id: Number(req.params.id)},req.body,{new:true})
        if(supplier){
            const prod  = await Product.updateMany({"supplier.id":Number(req.body['id'])},{$set:{"supplier.name":req.body['name']}})
            res.send(prod)
        }else{
            res.send("No category");
        }
    }catch(err){
        res.send(err)
    }
}