import mongoose, {Schema, Document} from "mongoose";

export interface ProductCategoryInterface extends Document{
    id:number;
    name:string;
    description:string;
}

const ProductCategorySchema: Schema = new Schema({
    id:{type: Number, required:true},
    name:{type: String, required:true},
    description:{type: String, required:true},
})

const ProductCategory = mongoose.model<ProductCategoryInterface>("ProductCategory",ProductCategorySchema);
export default ProductCategory;