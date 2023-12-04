const multer = require("multer")
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

const upload = multer({ storage: storage })

module.exports = upload