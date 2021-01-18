import mongoose, {Schema, Document} from "mongoose";

export interface ProductInterface extends Document{
    id:number;
    name:string;
    description:string;
    price:number;
    weight:number;
    category:number;
    supplier:number;
    imageUrl:string;
}

const ProductSchema: Schema = new Schema({
    id:{type: Number, required:true},
    name:{type: String, required:true},
    description:{type: String, required:true},
    price:{type: Number, required:true},
    weight:{type: Number, required:true},
    category:{type: Number, required:true},
    supplier:{type: Number, required:true},
    imageUrl:{type: String, required:true},
})

const Product = mongoose.model<ProductInterface>("Product",ProductSchema);
export default Product;