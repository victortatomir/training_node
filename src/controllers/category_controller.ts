import { Request, Response } from "express"
import  Product  from "../models/product"
import ProductCategory from "../models/category"


export const getCategory = (req:Request, res:Response) => {
    const category = ProductCategory.find((err: any, category:any) =>{
        if(err){
            res.send(err)
        } else {
            res.send(category)
        }
    })
}

export const getCategoryById = (req:Request, res:Response) =>{
    const category = ProductCategory.find({id: Number(req.params.id)}, (err:any, category:any)=>{
        if(err){
            res.send(err)
        } else{
            res.send(category)
        }
    })
}

export const addCategory = (req:Request, res:Response) =>{
    const category = new ProductCategory(req.body)
    category.save((err:any) =>{
        if(err){
            res.send(err)
        } else{
            res.send(category)
        }
    })
}


export const removeCategory = (req:Request, res:Response) =>{
    const category = ProductCategory.deleteMany({id: Number(req.params.id)},{new:true}, (err:any) => {
        if(err){
            res.send(err)
        } else{
            res.send("Category deleted")
        }
    })
}

export const updateCategory = (req:Request, res:Response) =>{
    const category = ProductCategory.findOneAndUpdate({id:Number(req.params.id)},req.body,{new:true},(err: any,category:any)=>{
        if(err){
            res.send(err)
        } else{
            res.send(category)
        }
    })
}