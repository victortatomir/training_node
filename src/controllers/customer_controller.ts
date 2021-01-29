import { Request, Response } from "express"
import Customer from "../models/customer"


export const getCustomer = async (req:Request, res:Response) :Promise<void> => {
    try{
        const customer = await Customer.find();
        res.send(customer);
    }catch(err){
        res.send(err);
    }
}

export const getCustomerById = async (req:Request, res:Response) :Promise<void> =>{
    try{
        const customer = await Customer.find({id: Number(req.params.id)});
        res.send(customer);
    }catch(err){
        res.send(err);
    }
}

export const addCustomer = async (req:Request, res:Response) :Promise<void> =>{
    try{
        const customer = new Customer(req.body);
        const savedCustomer = await customer.save();
        res.send(savedCustomer);
    }catch(err){
        res.send(err);
    }
}


export const removeCustomer = async (req:Request, res:Response) :Promise<void> =>{
    try{
        const customer = await Customer.deleteMany({id: Number(req.params.id)},{new:true});
        res.send("Customer deleted");
    }catch(err){
        res.send(err);
    }
}

export const updateCustomer = async(req:Request, res:Response) :Promise<void> =>{
    try{
        const customer = await Customer.findOneAndUpdate({id:Number(req.params.id)},req.body,{new:true});
        res.send(customer);
    }catch(err){
        res.send(err);
    }
}