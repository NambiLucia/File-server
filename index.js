const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();

const PORT = 4000;
const PASSWORD = 'admin123';




app.use(morgan("dev"));
app.use(express.urlencoded({extended:true}))// parse form data
app.use(express.static(path.join(__dirname, 'public')))

app.use('/node-course',(req,res,next)=>{//protect node
    const password=req.query.password;
    if(password===PASSWORD){
        next();

    }
    else{
        res.redirect('/login');
    }
})

app.get("/",(req,res)=>{
    res.send("Welcome to the Server")

})
app.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname,'public',"login.html"))

})
app.post("/login", (req,res)=>{ //handle login submission
    const {password}= req.body
    if(password===PASSWORD){
        res.redirect(`/node-course?password=${PASSWORD}`)
    }
    else{
        res.send("wrong password. Please try again")
    }
});

app.get("/node-course",(req,res)=>{
    res.sendFile(path.join(__dirname,'public',"node-course.html"))

})



app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}/`)

})