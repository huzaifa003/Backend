const express = require("express")
const mongoose = require("mongoose")
const userSchema = require('../model/User')
const router = express.Router()



router.get("/",(req,res)=>{
    res.sendStatus(200).send({name:"random"})
})

router.post("/add_user")

module.exports = router;1