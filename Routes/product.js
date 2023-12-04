const express = require("express")
const router = express.Router()

const controls = require("../Controllers/products")
const upload = require("../Middlewares/uploadfile")



router.get("/product", controls.list)

router.post("/product/insert", upload.single('img'), controls.create)

//Both router below for find one product and update
router.post("/product/update", controls.read)
router.post("/product/update/:id", upload.single('img'), controls.change)

router.get("/product/delete/:id", controls.remove)

router.get("/add", (req, res) => {
    res.render("../Views/create")
})

module.exports = router