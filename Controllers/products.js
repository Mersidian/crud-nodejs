const products = require("../Models/Products")

//Display all product
const list = async (req, res) => {
    try {
        const result = await products.find()
        res.json(result)
    } catch (error) {
        res.send(`Internal Server Error`).status(500)
        console.log(error)
    }
}

//Find only one product by id
const read = async (req, res) => {
    try {
        const id = req.params.id
        const result = await products.findOne({ _id: id }).exec()
        res.json(result)
    } catch (error) {
        res.send(`Internal Server Error`).status(500)
        console.log(error)
    }
}

//Create new product
const create = async (req, res) => {
    try {
        const result = await products(req.body).save()
        res.send(result)
    } catch {
        res.send(`Internal Server Error`).status(500)
        console.log(error)
    }
    
}

//Update selected product
const change = async (req, res) => {
    try {
        const id = req.params.id
        const result = await products.findOneAndUpdate({ _id: id }, req.body, ({new: true})).exec()
        res.send(result)
    } catch {
        res.send(`Internal Server Error`).status(500)
        console.log(error)
    }
}

//Delete selected product
const remove = async (req, res) => {
    try {
        const id = req.params.id
        const result = await products.findOneAndDelete({_id: id}).exec()
        res.send(`Delete successfully\n ${result}`)
    } catch {
        res.send(`Internal Server Error`).status(500)
        console.log(error)
    }
}

module.exports = {
    list,
    create,
    read,
    change,
    remove
}