"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(id, name, description, price, weight, category, supplier, imageUrl) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.weight = weight;
        this.category = category;
        this.supplier = supplier;
        this.imageUrl = imageUrl;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
}
exports.Product = Product;
let a = new Product(1, "afsdafasd", "a", 1, 1, 1, 1, "fasdfa");
console.log(a.getName());
