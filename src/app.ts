import express, {Application, Request, Response, NextFunction} from 'express'
import bodyParser from 'body-parser'
import connect from "./connect"
import * as ProductController from "./controllers/product_controller"

const app: Application = express();
const port :number = 3000
const db:string = "mongodb://localhost/OnlineShop"

connect(db);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/products",ProductController.allProducts)
app.get("/products/:id",ProductController.getOneProduct)
app.post("/products",ProductController.addProduct)
app.put("/products/:id",ProductController.updateProduct)
app.delete("/products/:id",ProductController.deleteProduct)


app.listen(port,()=>{
    console.log(`Server running on ${port}`);
})