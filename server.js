const express = require("express")
const { readdirSync } = require("fs")
const ConnectDB = require("./dbconnect")
const bodyParser = require("body-parser")
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

ConnectDB()

//Read files in Routes directory and require every route path
readdirSync("./Routes").map((dir) => app.use(require("./Routes/" + dir)))

//Server running on localhost
app.listen(port, () => {
    console.log(`Server are now running on port ${port}`)
})