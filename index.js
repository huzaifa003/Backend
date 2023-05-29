const express = require('express')
const mongoose = require("mongoose");
const app = express()

app.set("view engine",'ejs')
app.listen(3000)

const userRouter = require('./routers/user')
app.use("/users",userRouter)

app.get("/",(req,res)=>{
    console.log("Index")
    res.render('index',{text : "Hello"})
})



mongoose.connect('mongodb+srv://root:root@flowteam.n4ybnu2.mongodb.net/?retryWrites=true&w=majority').then(
    (resolve) => {
        console.log("Connection Done")
    }).catch((
        (reject) => {
            console.log("Unable to connect");
        }
    )
)


app.use(express.json());