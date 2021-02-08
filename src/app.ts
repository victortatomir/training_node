import express, { Application } from "express";
import bodyParser from "body-parser";
import connect from "./connect";
import cors from "cors";
import productRouter from "./routes/productRoute";
import categoryRouter from "./routes/categoryRoute";
import locationRouter from "./routes/locationRouter";
import customerRouter from "./routes/customerRoute";
import revenueRouter from "./routes/revenueRoute";
import orderRouter from "./routes/orderRouter";
import orderDetailRouter from "./routes/orderDetailRoute";
import stockRouter from "./routes/stockRoute";
import supplierRouter from "./routes/supplierRoute";
import userRouter from "./routes/loginRoute";
import authenticateJWT from "./middlewares/authenticateJWT"

const app: Application = express();
const port = process.env.PORT || 3001;
const dbString = "mongodb://localhost/OnlineShop";

connect(dbString);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//                  Rest calls for user
// ------------------------------------------------------------------------------------

app.use("/login", userRouter)

//                  Rest calls for products
// ------------------------------------------------------------------------------------
app.use("/product", productRouter);
//                 Rest calls for category
//-------------------------------------------------------------------------------------

app.use("/category", categoryRouter);

//                 Rest calls for Location
//-------------------------------------------------------------------------------------

app.use("/location", locationRouter);

//                 Rest calls for Customer
//-------------------------------------------------------------------------------------

app.use("/customer", customerRouter);

//                 Rest calls for Revenue
//-------------------------------------------------------------------------------------

app.use("/revenue", revenueRouter);

//                 Rest calls for Order
//-------------------------------------------------------------------------------------

app.use("/order", orderRouter);
//                 Rest calls for OrderDetail
//-------------------------------------------------------------------------------------

app.use("/orderDetail", orderDetailRouter);
//                 Rest calls for Stock
//-------------------------------------------------------------------------------------

app.use("/stock", stockRouter);

//                 Rest calls for Supplier
//-------------------------------------------------------------------------------------

app.use("/supplier",authenticateJWT, supplierRouter);

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
