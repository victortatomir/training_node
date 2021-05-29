import mongoose, { Schema, Document } from "mongoose";
import _ from 'lodash';

export interface SupplierInterface extends Document {
  id: number;
  name: string;
}

export class PartialSupplier{
  id:number;
  name:string;
}

const SupplierSchema: Schema = new Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
});

const Supplier = mongoose.model<SupplierInterface>("Supplier", SupplierSchema);
export default Supplier;
