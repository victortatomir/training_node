import express, {Application, Request, Response, NextFunction} from 'express'
import bodyParser from 'body-parser'
import connect from "./connect"
import * as ProductController from "./controllers/product_controller"
import * as CategoryController from "./controllers/category_controller"
import * as LocationController from "./controllers/location_controller"
import * as CustomerController from "./controllers/customer_controller"
import * as RevenueController from "./controllers/revenue_controller"
import * as OrderController from "./controllers/order_controller"
import * as OrderDetailController from "./controllers/orderDetail_controller"
import * as StockController from "./controllers/stock_controller"

const app: Application = express();
const port :number = 3000
const db:string = "mongodb://localhost/OnlineShop"

connect(db);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//                  Rest calls for products
// -----------------------------------------------------------------------------------
app.get("/products", ProductController.allProducts)
app.get("/products/:id", ProductController.getOneProduct)
app.get("/products/category/:category", ProductController.getProductCategory)

app.post("/products" ,ProductController.addProduct)
app.post("/products/category/:category", ProductController.addProductByCategory)

app.put("/products/:id", ProductController.updateProduct)

app.delete("/products/:id",ProductController.deleteProduct)

//                 Rest calls for category
//-------------------------------------------------------------------------------------

app.get("/category", CategoryController.getCategory)
app.get("/category/:id", CategoryController.getCategoryById)

app.post("/category", CategoryController.addCategory)

app.put("/category/:id", CategoryController.updateCategory)

app.delete("/category/:id", CategoryController.removeCategory)

//                 Rest calls for Location
//-------------------------------------------------------------------------------------


app.get("/location", LocationController.getLocation)
app.get("/location/:id", LocationController.getLocationById)

app.post("/location", LocationController.addLocation)

app.put("/location/:id", LocationController.updateLocation)

app.delete("/location/:id", LocationController.removeLocation)

//                 Rest calls for Customer
//-------------------------------------------------------------------------------------


app.get("/customer", CustomerController.getCustomer)
app.get("/customer/:id", CustomerController.getCustomerById)

app.post("/customer", CustomerController.addCustomer)

app.put("/customer/:id", CustomerController.updateCustomer)

app.delete("/customer/:id", CustomerController.removeCustomer)


//                 Rest calls for Revenue
//-------------------------------------------------------------------------------------


app.get("/revenue", RevenueController.getRevenue)
app.get("/revenue/:id", RevenueController.getRevenueById)

app.post("/revenue", RevenueController.addRevenue)

app.put("/revenue/:id", RevenueController.updateRevenue)

app.delete("/revenue/:id", RevenueController.removeRevenue)

//                 Rest calls for Order
//-------------------------------------------------------------------------------------


app.get("/order", OrderController.getOrder)
app.get("/order/:id", OrderController.getOrderById)

app.post("/order", OrderController.addOrder)

app.put("/order/:id", OrderController.updateOrder)

app.delete("/order/:id", OrderController.removeOrder)


//                 Rest calls for OrderDetail
//-------------------------------------------------------------------------------------


app.get("/orderDetail", OrderDetailController.getOrderDetail)
app.get("/orderDetail/:order/:product", OrderDetailController.getOrderDetailById)

app.post("/orderDetail", OrderDetailController.addOrderDetail)

app.put("/orderDetail/:order/:product", OrderDetailController.updateOrderDetail)

app.delete("/orderDetail/:order/:product", OrderDetailController.removeOrderDetail)


//                 Rest calls for Stock
//-------------------------------------------------------------------------------------


app.get("/stock", StockController.getStock)
app.get("/stock/:product/:location", StockController.getStockById)

app.post("/stock", StockController.addStock)

app.put("/stock/:product/:location", StockController.updateStock)

app.delete("/stock/:product/:location", StockController.removeStock)



app.listen(port,()=>{
    console.log(`Server running on ${port}`);
})