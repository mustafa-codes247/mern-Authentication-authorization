import mongoose from "mongoose"

const userRegisterSchema = new mongoose.Schema(
    {
        name:{
            type:String,
        },
        email:{
            type:String,
        },
        password:{
            type:String,
        }
    },
    {timestamps:true}
);

const registerModel = mongoose.model("user",userRegisterSchema);

export default registerModel;