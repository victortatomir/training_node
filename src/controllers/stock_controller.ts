import { Request, Response } from "express"
import Stock from "../models/stock"


export const getStock = (req:Request, res:Response) => {
    const stock = Stock.find((err: any, stock:any) =>{
        if(err){
            res.send(err)
        } else {
            res.send(stock)
        }
    })
}

export const getStockById = (req:Request, res:Response) =>{
    const stock = Stock.find({product: Number(req.params.product),location:Number(req.params.location)}, (err:any, stock:any)=>{
        if(err){
            res.send(err)
        } else{
            res.send(stock)
        }
    })
}

export const addStock = (req:Request, res:Response) =>{
    const stock = new Stock(req.body)
    stock.save((err:any) =>{
        if(err){
            res.send(err)
        } else{
            res.send(stock)
        }
    })
}


export const removeStock = (req:Request, res:Response) =>{
    const stock = Stock.deleteMany({product: Number(req.params.product),location:Number(req.params.location)},{new:true}, (err:any) => {
        if(err){
            res.send(err)
        } else{
            res.send("Stock deleted")
        }
    })
}

export const updateStock = (req:Request, res:Response) =>{
    const stock = Stock.findOneAndUpdate({product: Number(req.params.product),location:Number(req.params.location)},req.body,{new:true},(err: any, stock:any)=>{
        if(err){
            res.send(err)
        } else{
            res.send(stock)
        }
    })
}