import express from "express"
import{addNote,getNote,getAllNotes,updateNote,deleteNote} from "../controller/notes.controller.js"

const routersNotes = expxress();

routersNotes.post("/addnote",addNote)
routersNotes.get("/getnote",getAllNotes)
routersNotes.get("/getnote/:id",getNote)
routersNotes.put("/updatenote/:id",updateNote)
routersNotes.delete("/deletenote/:id",deleteNote)

export default routersNotes;