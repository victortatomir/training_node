import { Request, Response } from "express"
import Order from "../models/order"


export const getOrder = (req:Request, res:Response) => {
    const order = Order.find((err: any, order:any) =>{
        if(err){
            res.send(err)
        } else {
            res.send(order)
        }
    })
}

export const getOrderById = (req:Request, res:Response) =>{
    const order = Order.find({id: Number(req.params.id)}, (err:any, order:any)=>{
        if(err){
            res.send(err)
        } else{
            res.send(order)
        }
    })
}

export const addOrder = (req:Request, res:Response) =>{
    const order = new Order(req.body)
    order.save((err:any) =>{
        if(err){
            res.send(err)
        } else{
            res.send(order)
        }
    })
}


export const removeOrder = (req:Request, res:Response) =>{
    const order = Order.deleteMany({id: Number(req.params.id)},{new:true}, (err:any) => {
        if(err){
            res.send(err)
        } else{
            res.send("Order deleted")
        }
    })
}

export const updateOrder = (req:Request, res:Response) =>{
    const order = Order.findOneAndUpdate({id:Number(req.params.id)},req.body,{new:true},(err: any,order:any)=>{
        if(err){
            res.send(err)
        } else{
            res.send(order)
        }
    })
}