import express from "express"
import{addNote,getNote,getAllNotes,updateNote,deleteNote} from "../controller/notes.controller.js"

const router = expxress();

router.post("/addnote",addNote)
router.get("/getnote",getAllNotes)
router.get("/getnote/:id",getNote)
router.put("/updatenote/:id",updateNote)
router.delete("/deletenote/:id",deleteNote)

export default router;