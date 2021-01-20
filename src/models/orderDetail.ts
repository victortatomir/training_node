import mongoose, {Schema, Document} from "mongoose";

export interface OrderDetailInterface extends Document{
    order:number;
    product:number,
    quantity:number
}

const OrderDetailSchema: Schema = new Schema({
    order:{type: Number, required:true},
    product:{type: Number, required:true},
    quantity:{type: Number, required:true},
})

const OrderDetail = mongoose.model<OrderDetailInterface>("OrderDetail",OrderDetailSchema);
export default OrderDetail;