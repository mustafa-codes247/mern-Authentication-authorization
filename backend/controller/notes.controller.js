
import notesModel from "../model/notesModel";


export const addNote = async (req,res)=>{
    try {

        const {title,description}=req.body;

        const noteAdded = new notesModel({title,description})
        await noteAdded.save();
        return res.status(201).json({success:true,noteAdded})
        
    } catch (error) {

        console.log("error: not did not save",error)
        return res.status(500).json({message:error})
        
    }
}

export const getNote =async (req,res)=>{

    try {

        const noteGotten= await notesModel.findById(req.params.id);
        res.status(200).json({success:true,noteGotten})
        
    } catch (error) {
        res.status(500).json({success:false,message:"internal server error",error})
        
    }

}


export const getAllNotes =async ()=>{

try {

    const allNotesGotten = await notesModel.find()
    if(!allNotesGotten){
        return res.status(404).json({success:false,message:"No note exists in your account",error})
    }
    res.status(200).json({success:true,message:"all notes found",allNotesGotten})
    
} catch (error) {

    res.status(500).json({success:false,message:"internal server error",error})
    
}


}



export const updateNote = async()=>{

    try {
        const noteId= req.params.id;
        const noteUpdated = await notesModel.findByIdAndUpdate(noteId,req.body,{
            new:true,
        });
        if(!noteUpdated){
            res.status(500).json({success:false,message:"note does not exist that you want to update",error})
        }

        res.status(200).json({success:true,message:"note updated",noteUpdated});

    } catch (error) {
        res.status(500).json({success:false,message:"internal server error",error})
        
    }
}

export const deleteNote =async()=>{
    try {

        const noteId=  req.params.id;
        const noteDeleted = notesModel.findByIdAndDelete(noteId)
        if(!noteDeleted){
            return res.status(404).json({success:false,message:"notes does not exist to delete"});
        }

        res.status(200).json({success:true,message:"note deleted successfully!"})
        
    } catch (error) {

        console.log(error);
        res.status(500).json({success:false,message:"internal server error",error})

        
    }
}