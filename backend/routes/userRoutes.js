import express from "express"
import { registerUser,userGet,loginUser } from "../controller/userController.js"

 const router=express();

router.post("/register",registerUser)
router.post("/login",loginUser)
router.get("/user",userGet)

export default router

