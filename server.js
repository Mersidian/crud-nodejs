const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")

const ConnectDB = require("./dbconnect")
const { readdirSync } = require("fs")

const app = express()
const port = 3000

app.set('view engine', 'ejs')

//For product images
app.use(express.static("Uploads"))

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

ConnectDB()

//Read files in Routes directory and require every route path
readdirSync("./Routes").map((dir) => app.use(require("./Routes/" + dir)))

//Server running on localhost
app.listen(port, () => {
    console.log(`Server are now running on port ${port}`)
})