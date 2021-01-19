import { Request, Response } from "express"
import  Product  from "../models/product"

export const allProducts = (req: Request, res: Response) =>{
    const products = Product.find((err: any, products:any) =>{
        if(err){
            res.send(err)
        } else{
            res.send(products)
        }
    })
}

export const getOneProduct = (req: Request, res: Response) =>{
    const product = Product.find({id:Number(req.params.id)},(err: any, products:any) =>{
        if(err){
            res.send(err)
        } else{
            res.send(products)
        }
    })
}

export const addProduct = (req: Request, res: Response) =>{
    const product = new Product(req.body)
    product.save((err:any) =>{
        if(err){
            res.send(err)
        } else{
            res.send(product)
        }
    })
}

export const updateProduct = (req: Request, res: Response) => {
    const product = Product.findOneAndUpdate({id:Number(req.params.id)},req.body,{new:true},(err: any,product:any)=>{
            if(err){
                res.send(err)
            } else{
                res.send(product)
            }
        }
    )
}


export const deleteProduct = (req: Request, res: Response) =>{
    const product = Product.deleteMany({id: Number(req.params.id)},{new:true}, (err:any) => {
        if(err){
            res.send(err)
        } else{
            res.send("Product deleted")
        }
    })
}


export const getProductCategory = (req: Request, res: Response) =>{
    const product = Product.find({category:Number(req.params.category)},(err: any, products:any) =>{
        if(err){
            res.send(err)
        } else{
            res.send(products)
        }
    })
}