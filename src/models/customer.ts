import mongoose, { Schema, Document } from "mongoose";

export interface CustomerInterface extends Document {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  emailAdress: string;
}

const CustomerSchema = new Schema({
  id: { type: Number, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  emailAdress: { type: String, required: true },
});

const Customer = mongoose.model<CustomerInterface>("Customer", CustomerSchema);
export default Customer;
