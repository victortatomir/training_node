import mongoose, {Schema, Document} from "mongoose";

export interface LocationInterface extends Document{
    id:number;
    name:string;
    country:string;
    city:string;
    streetAdress:string;
}

const LocationSchema: Schema = new Schema({
    id:{type: Number, required:true},
    name:{type: String, required:true},
    country:{type: String, required:true},
    city:{type: String, required:true},
    streetAdress:{type: String, required:true},
})

const Location = mongoose.model<LocationInterface>("Location",LocationSchema);
export default Location;