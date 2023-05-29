const mongoose = require("mongoose");

const connectDB = mongoose.connect(process.env.DATABASE_URI,{
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(
    (resolve) => {
        console.log("Connection Done")
    }).catch((
        (reject) => {
            console.log("Unable to connect");
        }
    )
)

module.exports = connectDB;