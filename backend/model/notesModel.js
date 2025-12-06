import mongoose from "mongoose";

const notesSchema = new mongoose.Schema(
{
    title:{
        type:String,
    },
    description:{
        type:String
    }
},{timestamps:true}


);

const notesModel = mongoose.model("notes",notesSchema);

export default notesModel;

