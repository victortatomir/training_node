import { Request, Response } from "express"
import OrderDetail from "../models/orderDetail"


export const getOrderDetail = (req:Request, res:Response) => {
    const orderDetail = OrderDetail.find((err: any, orderDetail:any) =>{
        if(err){
            res.send(err)
        } else {
            res.send(orderDetail)
        }
    })
}

export const getOrderDetailById = (req:Request, res:Response) =>{
    const orderDetail = OrderDetail.find({order: Number(req.params.order),product:Number(req.params.product)}, (err:any, orderDetail:any)=>{
        if(err){
            res.send(err)
        } else{
            res.send(orderDetail)
        }
    })
}

export const addOrderDetail = (req:Request, res:Response) =>{
    const orderDetail = new OrderDetail(req.body)
    orderDetail.save((err:any) =>{
        if(err){
            res.send(err)
        } else{
            res.send(orderDetail)
        }
    })
}


export const removeOrderDetail = (req:Request, res:Response) =>{
    const orderDetail = OrderDetail.deleteMany({order: Number(req.params.order),product:Number(req.params.product)},{new:true}, (err:any) => {
        if(err){
            res.send(err)
        } else{
            res.send("OrderDetail deleted")
        }
    })
}

export const updateOrderDetail = (req:Request, res:Response) =>{
    const orderDetail = OrderDetail.findOneAndUpdate({order: Number(req.params.order),product:Number(req.params.product)},req.body,{new:true},(err: any,orderDetail:any)=>{
        if(err){
            res.send(err)
        } else{
            res.send(orderDetail)
        }
    })
}