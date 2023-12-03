const multer = require("multer")
const express = require("express")
const router = express.Router()

const controls = require("../Controllers/products")

//Multer configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Uploads/');
    },
    filename: (req, file, cb) => {
        const originalname = file.originalname;
        const extension = originalname.split('.').pop();
        const newFileName = `${Date.now()}.${extension}`;
        cb(null, newFileName);
    },
});

const upload = multer({ storage: storage });

router.get("/product", controls.list)

router.post("/product/insert", upload.single('img'), controls.create)

//Both router below for find one product and update
router.post("/product/update", controls.read)
router.post("/product/update/:id", controls.change)

router.get("/product/delete/:id", controls.remove)

router.get("/add", (req, res) => {
    res.render("../Views/create")
})

module.exports = router