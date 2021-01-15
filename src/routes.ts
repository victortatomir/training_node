import express,{Router, Request,Response, NextFunction} from 'express'


const router = Router()


router.get('/', (req:Request,res:Response)=>{
    return res.send('merge')
})

export {router as productRouter}