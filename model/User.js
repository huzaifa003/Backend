const mongoose  = require('mongoose')
const userSchema = new mongoose.Schema({
    id : Number,
    name: Number,

    team: Number,

    rank : String,

    personal_cc: Number,
    pc_cc : Number,
    non_material_cc : Number

})

module.exports = mongoose.model("User",userSchema)