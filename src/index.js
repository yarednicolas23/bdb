const express = require('express')
const morgan = require('morgan')
const app = express()
let bodyParser = require('body-parser')

app.use(morgan('dev'))
app.use(require('./routes/index.routes'))
app.use(express.json())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

async function main() {
  await app.listen(3000)
  console.log("server is running")
}
main()
