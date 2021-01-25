import { Request, Response } from "express"
import OrderDetail from "../models/orderDetail"


export const getOrderDetail = async (req:Request, res:Response) :Promise<void> => {
    try{
        const orderDetail = await OrderDetail.find();
        res.send(orderDetail);
    }catch(err){
        res.send(err);
    }
}

export const getOrderDetailById = async (req:Request, res:Response) :Promise<void> =>{
    try{
        const orderDetail = await OrderDetail.find({order: Number(req.params.order),product:Number(req.params.product)});
        res.send(orderDetail);

    }catch(err){
        res.send(err);
    }
}

export const addOrderDetail = async (req:Request, res:Response) :Promise<void> =>{
    try{
        const orderDetail = new OrderDetail(req.body);
        const savedOrderDetail = orderDetail.save();
        res.send(savedOrderDetail);
    }catch(err){
        res.send(err);
    }
}


export const removeOrderDetail = async (req:Request, res:Response) :Promise<void> =>{
    try{
        const orderDetail = await OrderDetail.deleteMany({order: Number(req.params.order),product:Number(req.params.product)},{new:true});
        res.send("OrderDetail deleted");
    }catch(err){
        res.send(err);
    }
}

export const updateOrderDetail = async (req:Request, res:Response) :Promise<void> =>{
    try{
        const orderDetail = await OrderDetail.findOneAndUpdate({order: Number(req.params.order),product:Number(req.params.product)},req.body,{new:true});
        res.send(orderDetail);
    }catch(err){
        res.send(err);
    }
}