const express = require('express')
const app = express()

app.set("view engine",'ejs')
app.listen(3000)

const userRouter = require('./routers/user')
app.use("/users",userRouter)

app.get("/",(req,res)=>{
    console.log("Index")
    res.render('index',{text : "Hello"})
})