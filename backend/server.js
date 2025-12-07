import express from "express";
import router from "./routes/userRoutes.js"
import routerNotes from "./routes/notesRoutes.js";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";


// packages to install: npm i express mongoose nodemon cors body-parser jsonwebtoken bcrypt

// saving express functionality in variable
const app=express();
app.use(express.json())

// selecting port for calling all api
const port =8080;

// .use is middleware to call api like get,post,put,delete
 //data is converted to json
app.use(cors()); // cors is used for connecting frontend with backend
app.use(bodyParser.json()) //body parser converts data to usable js objects

// main url of the route
app.use("/",router)

mongoose.connect("mongodb://localhost:27017/notes")
.then(()=>console.log("database connected successfully"))
.catch((err)=>console.log("db not connected!",err))

app.listen(port,()=>{
    console.log(`server listen on port http://localhost:${port}`)
})
