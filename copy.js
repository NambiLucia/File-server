/*const express=require("express");
const morgan= require("morgan");
const path =require("path");
const PASSWORD='admin123';
const PORT =4000;
const app =express()


//middleware
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname,'public'))) // serve static files


app.get("/",(req,res)=>{
    console.log("Welcome to the server")
})
//serve login and node static pages
app.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname,"public","login.html"))
})
app.get("/node-course",(req,res)=>{
    res.sendFile(path.join(__dirname,"public","node-course.html"))
})

//route handler for login
app.post("/login",(req,res)=>{
    const {password}= req.body
    if(password===PASSWORD){
        res.redirect(`/node-course`)

    }
    else{
        res.status(401).send("Wrong Password")
    }

});
*/


























app.listen(PORT,()=>{
    console.log(    console.log(`Server is running on http://localhost:${PORT}/`)
)
})

















