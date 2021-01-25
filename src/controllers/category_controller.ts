import { Request, Response } from "express"
import ProductCategory from "../models/category"


export const getCategory = async (req:Request, res:Response) :Promise<void> => {
    try{
        const category = await ProductCategory.find();
        res.send(category);
    }catch(err){
        res.send(err);
    }
}

export const getCategoryById = async (req:Request, res:Response) :Promise<void> =>{
    try{
        const category = await ProductCategory.find({id: Number(req.params.id)});
        res.send(category);
    }catch(err){
        res.send(err);
    }
}

export const addCategory = async (req:Request, res:Response) :Promise<void> =>{
    try{
        const category = new ProductCategory(req.body);
        const savedCategory = await category.save();
        res.send(savedCategory);
    }catch(err){
        res.send(err);
    }
}


export const removeCategory = async (req:Request, res:Response) :Promise<void> =>{
    try{
        const category = await ProductCategory.deleteMany({id: Number(req.params.id)},{new:true});
        res.send("Category deleted");
    }catch(err){
        res.send(err);
    }
}

export const updateCategory = async (req:Request, res:Response) :Promise<void> =>{
    try{
        const category = await ProductCategory.findOneAndUpdate({id:Number(req.params.id)},req.body,{new:true});
        res.send(category);
    }catch(err){
        res.send(err);
    }
}