import mongoose, {Schema, Document} from "mongoose";

interface SupplierType {
    id:number;
    name:string
}

const supplierSchema = new Schema({
    id:{type: Number, required:true},
    name:{type: String, required:true}
})

export interface ProductInterface extends Document{
    id:number;
    name:string;
    description:string;
    price:number;
    weight:number;
    category:number;
    supplier:{
        id:number,
        name:string
    };
    imageUrl:string;
}


const ProductSchema: Schema = new Schema({
    id:{type: Number, required:true},
    name:{type: String, required:true},
    description:{type: String, required:true},
    price:{type: Number, required:true},
    weight:{type: Number, required:true},
    category:{type: Number, required:true},
    supplier:{type:supplierSchema, required:true},
    imageUrl:{type: String, required:true},
})



const Product = mongoose.model<ProductInterface>("Product",ProductSchema);
export default Product;




