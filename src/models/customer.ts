import mongoose, {Schema, Document} from "mongoose";

export interface CustomerInterface extends Document{
    id: number;
    firstName: String;
    lastName:String;
    username:String;
    password:String;
    emailAdress:String;
}

const CustomerSchema = new Schema({
    id:{type: Number, required:true},
    firstName:{type: String, required:true},
    lastName:{type: String, required:true},
    username:{type: String, required:true},
    password:{type:String, required:true},
    emailAdress:{type: String, required:true},
})

const Customer = mongoose.model<CustomerInterface>("Customer", CustomerSchema)
export default Customer