const products = require("../Models/products")

//Display all product
const list = async (req, res) => {
    try {
        const result = await products.find()
        res.render("../Views/index", {
            product: result
        })
    } catch (error) {
        res.send(`Internal Server Error`).status(500)
        console.log(error)
    }
}

//Find only one product by value id
const read = async (req, res) => {
    try {
        const id = req.body.update
        const result = await products.findOne({ _id: id }).exec()
        res.render("../Views/update", {
            product: result
        })
    } catch (error) {
        res.send(`This product not available on time`).status(404)
        console.log(error)
    }
}

//Create new product
const create = async (req, res, next) => {
    try {
        let data = new products({
            name: req.body.name,
            price: req.body.price,
            img: req.file.filename,
            description: req.body.desc
        })

        await products.save(data)
        res.send(
            `<script>
            alert('New product has been added!')
            window.location.href = "/product"
            </script>`
        )
    } catch (error) {
        res.send(`Internal Server Error`).status(500)
        console.log(error)
    }

}

//Update selected product
const change = async (req, res) => {
    try {
        const id = req.params.id

        let data = {
            name: req.body.name,
            price: req.body.price,
            description: req.body.desc
        }
        await products.findOneAndUpdate({ _id: id }, data, ({ new: true })).exec()
        res.send(
            `<script>
            alert('Your selected product has updated!')
            window.location.href = "/product"
            </script>`
        )
    } catch (error) {
        res.send(`Internal Server Error`).status(500)
        console.log(error)
    }
}

//Delete selected product
const remove = async (req, res) => {
    try {
        const id = req.params.id
        const result = await products.findOneAndDelete({ _id: id }).exec()
        res.redirect("/product")
    } catch (error) {
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