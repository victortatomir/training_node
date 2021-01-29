import { Request, Response } from "express"
import Revenue from "../models/revenue"


export const getRevenue = (req:Request, res:Response) => {
    const revenue = Revenue.find((err: any, revenue:any) =>{
        if(err){
            res.send(err)
        } else {
            res.send(revenue)
        }
    })
}

export const getRevenueById = (req:Request, res:Response) =>{
    const revenue = Revenue.find({id: Number(req.params.id)}, (err:any, revenue:any)=>{
        if(err){
            res.send(err)
        } else{
            res.send(revenue)
        }
    })
}

export const addRevenue = (req:Request, res:Response) =>{
    const revenue = new Revenue(req.body)
    revenue.save((err:any) =>{
        if(err){
            res.send(err)
        } else{
            res.send(revenue)
        }
    })
}


export const removeRevenue = (req:Request, res:Response) =>{
    const revenue = Revenue.deleteMany({id: Number(req.params.id)},{new:true}, (err:any) => {
        if(err){
            res.send(err)
        } else{
            res.send("Revenue deleted")
        }
    })
}

export const updateRevenue = (req:Request, res:Response) =>{
    const revenue = Revenue.findOneAndUpdate({id:Number(req.params.id)},req.body,{new:true},(err: any,revenue:any)=>{
        if(err){
            res.send(err)
        } else{
            res.send(revenue)
        }
    })
}