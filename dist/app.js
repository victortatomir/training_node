"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var connect_1 = __importDefault(require("./connect"));
var ProductController = __importStar(require("./controllers/product_controller"));
var CategoryController = __importStar(require("./controllers/category_controller"));
var LocationController = __importStar(require("./controllers/location_controller"));
var CustomerController = __importStar(require("./controllers/customer_controller"));
var RevenueController = __importStar(require("./controllers/revenue_controller"));
var OrderController = __importStar(require("./controllers/order_controller"));
var OrderDetailController = __importStar(require("./controllers/orderDetail_controller"));
var StockController = __importStar(require("./controllers/stock_controller"));
var SupplierController = __importStar(require("./controllers/supplier_controller"));
var async_1 = require("./middlewares/async");
var cors_1 = __importDefault(require("cors"));
var app = express_1.default();
var port = 3001;
var db = "mongodb://localhost/OnlineShop";
connect_1.default(db);
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(cors_1.default());
//                  Rest calls for products
// -----------------------------------------------------------------------------------
app.get("/products", cors_1.default(), async_1.asyncMiddleware(ProductController.allProducts));
app.get("/products/:id", async_1.asyncMiddleware(ProductController.getOneProduct));
app.get("/products/category/:category", ProductController.getProductCategory);
app.post("/products", async_1.asyncMiddleware(ProductController.addProduct));
app.post("/products/category/:category", async_1.asyncMiddleware(ProductController.addProductByCategory));
app.put("/products/:id", async_1.asyncMiddleware(ProductController.updateProduct));
app.delete("/products/:id", async_1.asyncMiddleware(ProductController.deleteProduct));
//                 Rest calls for category
//-------------------------------------------------------------------------------------
app.get("/category", async_1.asyncMiddleware(CategoryController.getCategory));
app.get("/category/:id", async_1.asyncMiddleware(CategoryController.getCategoryById));
app.post("/category", async_1.asyncMiddleware(CategoryController.addCategory));
app.put("/category/:id", async_1.asyncMiddleware(CategoryController.updateCategory));
app.delete("/category/:id", async_1.asyncMiddleware(CategoryController.removeCategory));
//                 Rest calls for Location
//-------------------------------------------------------------------------------------
app.get("/location", async_1.asyncMiddleware(LocationController.getLocation));
app.get("/location/:id", async_1.asyncMiddleware(LocationController.getLocationById));
app.post("/location", async_1.asyncMiddleware(LocationController.addLocation));
app.put("/location/:id", async_1.asyncMiddleware(LocationController.updateLocation));
app.delete("/location/:id", async_1.asyncMiddleware(LocationController.removeLocation));
//                 Rest calls for Customer
//-------------------------------------------------------------------------------------
app.get("/customer", async_1.asyncMiddleware(CustomerController.getCustomer));
app.get("/customer/:id", async_1.asyncMiddleware(CustomerController.getCustomerById));
app.post("/customer", async_1.asyncMiddleware(CustomerController.addCustomer));
app.put("/customer/:id", async_1.asyncMiddleware(CustomerController.updateCustomer));
app.delete("/customer/:id", async_1.asyncMiddleware(CustomerController.removeCustomer));
//                 Rest calls for Revenue
//-------------------------------------------------------------------------------------
app.get("/revenue", async_1.asyncMiddleware(RevenueController.getRevenue));
app.get("/revenue/:id", async_1.asyncMiddleware(RevenueController.getRevenueById));
app.post("/revenue", async_1.asyncMiddleware(RevenueController.addRevenue));
app.put("/revenue/:id", async_1.asyncMiddleware(RevenueController.updateRevenue));
app.delete("/revenue/:id", async_1.asyncMiddleware(RevenueController.removeRevenue));
//                 Rest calls for Order
//-------------------------------------------------------------------------------------
app.get("/order", async_1.asyncMiddleware(OrderController.getOrder));
app.get("/order/:id", async_1.asyncMiddleware(OrderController.getOrderById));
app.post("/order", async_1.asyncMiddleware(OrderController.addOrder));
app.put("/order/:id", async_1.asyncMiddleware(OrderController.updateOrder));
app.delete("/order/:id", async_1.asyncMiddleware(OrderController.removeOrder));
//                 Rest calls for OrderDetail
//-------------------------------------------------------------------------------------
app.get("/orderDetail", async_1.asyncMiddleware(OrderDetailController.getOrderDetail));
app.get("/orderDetail/:order/:product", async_1.asyncMiddleware(OrderDetailController.getOrderDetailById));
app.post("/orderDetail", async_1.asyncMiddleware(OrderDetailController.addOrderDetail));
app.put("/orderDetail/:order/:product", async_1.asyncMiddleware(OrderDetailController.updateOrderDetail));
app.delete("/orderDetail/:order/:product", async_1.asyncMiddleware(OrderDetailController.removeOrderDetail));
//                 Rest calls for Stock
//-------------------------------------------------------------------------------------
app.get("/stock", async_1.asyncMiddleware(StockController.getStock));
app.get("/stock/:product/:location", async_1.asyncMiddleware(StockController.getStockById));
app.post("/stock", async_1.asyncMiddleware(StockController.addStock));
app.put("/stock/:product/:location", async_1.asyncMiddleware(StockController.updateStock));
app.delete("/stock/:product/:location", async_1.asyncMiddleware(StockController.removeStock));
//                 Rest calls for Supplier
//-------------------------------------------------------------------------------------
app.get("/supplier", async_1.asyncMiddleware(SupplierController.getSupplier));
app.get("/supplier/:id", async_1.asyncMiddleware(SupplierController.getSupplierById));
app.post("/supplier", async_1.asyncMiddleware(SupplierController.addSupplier));
app.put("/supplier/:id", async_1.asyncMiddleware(SupplierController.updateSupplier));
app.delete("/supplier/:id", async_1.asyncMiddleware(SupplierController.removeSupplier));
app.listen(port, function () {
    console.log("Server running on " + port);
});
//# sourceMappingURL=app.js.map