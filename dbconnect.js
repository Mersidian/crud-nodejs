const mongoose = require("mongoose")
require('dotenv').config()

const connectDB = async () => {
    await mongoose.connect(process.env.MONGODB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).catch((error) => {
    console.log(`Connection failed\n${error}`)
})}

module.exports = connectDB