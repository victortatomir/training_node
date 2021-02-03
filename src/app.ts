import express, { Application } from 'express'
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
import * as SupplierController from "./controllers/supplier_controller"
import { asyncMiddleware } from './middlewares/async'
import cors from 'cors'



const app: Application = express();
const port = 3001;
const db = "mongodb://localhost/OnlineShop";

connect(db);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors())

//                  Rest calls for products
// -----------------------------------------------------------------------------------
app.get("/products", cors(),asyncMiddleware(ProductController.allProducts));
app.get("/products/:id", asyncMiddleware(ProductController.getOneProduct));
app.get("/products/category/:category", ProductController.getProductCategory)

app.post("/products" ,asyncMiddleware(ProductController.addProduct));
app.post("/products/category/:category", asyncMiddleware(ProductController.addProductByCategory));

app.put("/products/:id", asyncMiddleware(ProductController.updateProduct));

app.delete("/products/:id", asyncMiddleware(ProductController.deleteProduct));

//                 Rest calls for category
//-------------------------------------------------------------------------------------

app.get("/category", asyncMiddleware(CategoryController.getCategory));
app.get("/category/:id", asyncMiddleware(CategoryController.getCategoryById));

app.post("/category", asyncMiddleware(CategoryController.addCategory));

app.put("/category/:id", asyncMiddleware(CategoryController.updateCategory));

app.delete("/category/:id", asyncMiddleware(CategoryController.removeCategory));

//                 Rest calls for Location
//-------------------------------------------------------------------------------------


app.get("/location", asyncMiddleware(LocationController.getLocation));
app.get("/location/:id", asyncMiddleware(LocationController.getLocationById));

app.post("/location", asyncMiddleware(LocationController.addLocation));

app.put("/location/:id", asyncMiddleware(LocationController.updateLocation));

app.delete("/location/:id", asyncMiddleware(LocationController.removeLocation));

//                 Rest calls for Customer
//-------------------------------------------------------------------------------------


app.get("/customer", asyncMiddleware(CustomerController.getCustomer));
app.get("/customer/:id", asyncMiddleware(CustomerController.getCustomerById));

app.post("/customer", asyncMiddleware(CustomerController.addCustomer));

app.put("/customer/:id", asyncMiddleware(CustomerController.updateCustomer));

app.delete("/customer/:id", asyncMiddleware(CustomerController.removeCustomer));


//                 Rest calls for Revenue
//-------------------------------------------------------------------------------------


app.get("/revenue", asyncMiddleware(RevenueController.getRevenue));
app.get("/revenue/:id", asyncMiddleware(RevenueController.getRevenueById));

app.post("/revenue", asyncMiddleware(RevenueController.addRevenue));

app.put("/revenue/:id", asyncMiddleware(RevenueController.updateRevenue));

app.delete("/revenue/:id", asyncMiddleware(RevenueController.removeRevenue));

//                 Rest calls for Order
//-------------------------------------------------------------------------------------


app.get("/order", asyncMiddleware(OrderController.getOrder));
app.get("/order/:id",asyncMiddleware( OrderController.getOrderById));

app.post("/order", asyncMiddleware(OrderController.addOrder));

app.put("/order/:id", asyncMiddleware(OrderController.updateOrder));

app.delete("/order/:id", asyncMiddleware(OrderController.removeOrder));


//                 Rest calls for OrderDetail
//-------------------------------------------------------------------------------------


app.get("/orderDetail", asyncMiddleware(OrderDetailController.getOrderDetail));
app.get("/orderDetail/:order/:product", asyncMiddleware(OrderDetailController.getOrderDetailById));

app.post("/orderDetail", asyncMiddleware(OrderDetailController.addOrderDetail));

app.put("/orderDetail/:order/:product", asyncMiddleware(OrderDetailController.updateOrderDetail));

app.delete("/orderDetail/:order/:product", asyncMiddleware(OrderDetailController.removeOrderDetail));


//                 Rest calls for Stock
//-------------------------------------------------------------------------------------


app.get("/stock", asyncMiddleware(StockController.getStock));
app.get("/stock/:product/:location", asyncMiddleware(StockController.getStockById));

app.post("/stock", asyncMiddleware(StockController.addStock));

app.put("/stock/:product/:location", asyncMiddleware(StockController.updateStock));

app.delete("/stock/:product/:location", asyncMiddleware(StockController.removeStock));


//                 Rest calls for Supplier
//-------------------------------------------------------------------------------------


app.get("/supplier", asyncMiddleware(SupplierController.getSupplier));
app.get("/supplier/:id", asyncMiddleware(SupplierController.getSupplierById));

app.post("/supplier", asyncMiddleware(SupplierController.addSupplier));

app.put("/supplier/:id",asyncMiddleware(SupplierController.updateSupplier));

app.delete("/supplier/:id", asyncMiddleware(SupplierController.removeSupplier));



app.listen(port,()=>{
    console.log(`Server running on ${port}`);
})