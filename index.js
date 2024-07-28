import express from "express";
import morgan from "morgan"
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';




const app = express();




app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, 'public')))

app.get("/",(req,res)=>{
    res.send("Welcome to the Server")

})
app.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname,'public',"login.html"))

})


const PORT=4000;
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}/`)

})