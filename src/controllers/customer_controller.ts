import { Request, Response } from "express"
import Customer from "../models/customer"


export const getCustomer = (req:Request, res:Response) => {
    const customer = Customer.find((err: any, customer:any) =>{
        if(err){
            res.send(err)
        } else {
            res.send(customer)
        }
    })
}

export const getCustomerById = (req:Request, res:Response) =>{
    const customer = Customer.find({id: Number(req.params.id)}, (err:any, customer:any)=>{
        if(err){
            res.send(err)
        } else{
            res.send(customer)
        }
    })
}

export const addCustomer = (req:Request, res:Response) =>{
    const customer = new Customer(req.body)
    customer.save((err:any) =>{
        if(err){
            res.send(err)
        } else{
            res.send(customer)
        }
    })
}


export const removeCustomer = (req:Request, res:Response) =>{
    const customer = Customer.deleteMany({id: Number(req.params.id)},{new:true}, (err:any) => {
        if(err){
            res.send(err)
        } else{
            res.send("Customer deleted")
        }
    })
}

export const updateCustomer = (req:Request, res:Response) =>{
    const customer = Customer.findOneAndUpdate({id:Number(req.params.id)},req.body,{new:true},(err: any,customer:any)=>{
        if(err){
            res.send(err)
        } else{
            res.send(customer)
        }
    })
}