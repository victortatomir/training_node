import mongoose, { Schema, Document } from "mongoose";

export interface ProductInterface extends Document {
  id: number;
  name: string;
  description: string;
  price: number;
  weight: number;
  /**
   * @member
   * @
   */
  category: {
    id: number;
    name: string;
  };
  supplier: {
    id: number;
    name: string;
  };
  imageUrl: string;
}

const ProductSchema: Schema = new Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  weight: { type: Number, required: true },
  category: { type: { id: Number, name: String }, required: true },
  supplier: { type: { id: Number, name: String }, required: true },
  imageUrl: { type: String, required: true },
});

const Product = mongoose.model<ProductInterface>("Product", ProductSchema);
export default Product;
