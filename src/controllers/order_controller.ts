import { Request, Response } from "express"
import Order from "../models/order"


export const getOrder = async (req:Request, res:Response) :Promise<void> => {
    try{
        const order = await Order.find();
        res.send(order)
    }catch(err){
        res.send(err);
    }
}

export const getOrderById = async (req:Request, res:Response) :Promise<void>=>{
    try{
        const order = await Order.find({id: Number(req.params.id)});
        res.send(order);
    }catch(err){
        res.send(err);
    }
}

export const addOrder = async (req:Request, res:Response) :Promise<void> =>{
    try{
        const order = new Order(req.body);
        const savedOrder = await order.save();
        res.send(savedOrder);
    }catch(err){
        res.send(err);
    }
}


export const removeOrder = async (req:Request, res:Response) :Promise<void> =>{
    try{
        const order = await Order.deleteMany({id: Number(req.params.id)},{new:true});
        res.send("Order deleted");
    }catch(err){
        res.send(err);
    }
}

export const updateOrder = async (req:Request, res:Response) :Promise<void> =>{
    try{
        const order = await Order.findOneAndUpdate({id:Number(req.params.id)},req.body,{new:true});
        res.send(order);
    }catch(err){
        res.send(err);
    }
}