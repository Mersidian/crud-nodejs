const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    name: String,
    price: Number,
    img: String,
    description: String
})

module.exports = mongoose.model("products", productSchema)

module.exports.save = (model, data) => {
    model.save(data)
}