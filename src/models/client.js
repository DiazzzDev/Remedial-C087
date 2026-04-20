import {model, Schema} from "mongoose";

const clientSchema = new Schema({
    name:{type:String},
    lastName:{type:String},
    email:{type:String},
    password:{type:String},
    phone:{type:String},
    address:{type:String},
    isVerified:{type:Boolean},
    loginAttemps:{type:Number},
    timeOut:{type:Date}
}, {
    timestamps: true,
    strict: false
})

export default model("clients", clientSchema)