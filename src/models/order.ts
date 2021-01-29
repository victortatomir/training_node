import mongoose, {Schema, Document} from "mongoose";

export interface OrderInterface extends Document{
    id:number;
    shippedLocation:number,
    customer:number,
    createdAt:Date;
    country:string,
    city:string;
    streetAdress:string;
}

const OrderSchema: Schema = new Schema({
    id:{type: Number, required:true},
    shippedLocation:{type:Number,required:true},
    customer:{type: String, required:true},
    createdAt:{type: Date, required:true},
    country:{type: String, required:true},
    city:{type: String, required:true},
    streetAdress:{type: String, required:true},
})

const Order = mongoose.model<OrderInterface>("Order",OrderSchema);
export default Order;