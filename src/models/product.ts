import mongoose, { Schema, Document } from "mongoose";


export interface ProductInterface extends Document {
    /**
   * @param id ID of the Product
   * @type number
   */
  id: number;
  /**
   * @param name Name of the Product
   * @type string
   */
  name: string;
  /**
   * @param description Description of the Product
   * @type string
   */
  description: string;
  /**
   * @param price Price of the Product
   * @type number
   */
  price: number;
  /**
   * @param weight Weight of the Product
   * @type number
   */
  weight: number;
  /**
   * @param category Simple JS object with 2 keys @param category.id and @param category.name
   * @param category.id ID of the category collection
   * @type number
   * @param category.name Name of the category collection
   * @type string
   */
  category: {
    id: number;
    name: string;
  };
  /**
   * @param supplier Simple JS object with 2 keys @param supplier.id and @param supplier.name
   * @param supplier.id ID of the suppkier collection
   * @type number
   * @param supplier.name Name of the supplier collection
   * @type string
   */
  supplier: {
    id: number;
    name: string;
  };
  /**
   * @param imageUrl The link for an image on internet
   * @type string
   */
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
