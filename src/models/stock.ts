import mongoose, { Schema, Document } from "mongoose";

export interface StockInterface extends Document {
  product: number;
  location: number;
  quantity: number;
}

const StockSchema: Schema = new Schema({
  product: { type: Number, required: true },
  location: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

const Stock = mongoose.model<StockInterface>("Stock", StockSchema);
export default Stock;
