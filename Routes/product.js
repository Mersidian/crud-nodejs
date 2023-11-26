const express = require("express")
const bodyParser = require('body-parser')
const router = express.Router()
const controls = require("../Controllers/products")

router.get("/product", controls.list)
router.post("/product", controls.create)
router.get("/product/:id", controls.read)
router.put("/product/:id", controls.change)
router.delete("/product/:id", controls.remove)

module.exports = router