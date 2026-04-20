import {model, Schema} from "mongoose";

const packageModel = new Schema({
    trackingNumber:{type:Number},
    weight:{type:Number},
    dimensions:{type:String},
    description:{type:String},
    senderId:{type:Schema.Types.ObjectId, ref: 'Sender'},
    receiverId:{type:Schema.Types.ObjectId, ref: 'Receiver'},
    status:{
        type:String,
        enum: ['pending', 'in-transit', 'delivered', 'cancelled'],
        default: 'pending'
    }    
},{
    timestamps: true,
    strict: false
})

export default model("package", packageModel)