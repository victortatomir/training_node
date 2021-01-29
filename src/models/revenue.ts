import mongoose, {Schema, Document} from "mongoose";

export interface RevenueInterface extends Document{
    id:number;
    location:number;
    localDate:Date,
    sum:number

}

const RevenueSchema: Schema = new Schema({
    id:{type: Number, required:true},
    location:{type: Number, required:true},
    localDate:{type: Date, required:true},
    sum:{type:Number,required:true}
})

const Revenue = mongoose.model<RevenueInterface>("Revenue",RevenueSchema);
export default Revenue;