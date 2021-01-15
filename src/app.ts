import express from 'express'
import {json} from 'body-parser'
import {productRouter} from './routes'

const app = express()


app.use(json(), productRouter)

app.listen(3000, ()=>{
    console.log("server running at port 3000")
})



