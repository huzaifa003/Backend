const mongoose  = require('mongoose')
const userSchema = new mongoose.Schema({
    id : Number,
    member: [Number],
})

module.exports = mongoose.model("User",userSchema)