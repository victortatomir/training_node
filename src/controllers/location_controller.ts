import { Request, Response } from "express"
import Location from "../models/location"


export const getLocation = (req:Request, res:Response) => {
    const location = Location.find((err: any, location:any) =>{
        if(err){
            res.send(err)
        } else {
            res.send(location)
        }
    })
}

export const getLocationById = (req:Request, res:Response) =>{
    const location = Location.find({id: Number(req.params.id)}, (err:any, location:any)=>{
        if(err){
            res.send(err)
        } else{
            res.send(location)
        }
    })
}

export const addLocation = (req:Request, res:Response) =>{
    const location = new Location(req.body)
    location.save((err:any) =>{
        if(err){
            res.send(err)
        } else{
            res.send(location)
        }
    })
}


export const removeLocation = (req:Request, res:Response) =>{
    const location = Location.deleteMany({id: Number(req.params.id)},{new:true}, (err:any) => {
        if(err){
            res.send(err)
        } else{
            res.send("Location deleted")
        }
    })
}

export const updateLocation = (req:Request, res:Response) =>{
    const location = Location.findOneAndUpdate({id:Number(req.params.id)},req.body,{new:true},(err: any,location:any)=>{
        if(err){
            res.send(err)
        } else{
            res.send(location)
        }
    })
}