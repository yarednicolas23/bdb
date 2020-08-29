const express = require('express')
const morgan = require('morgan')
const app = express()

app.use(morgan('dev'))
app.use(require('./routes/index.routes'))
app.use(express.json())


async function main() {
  await app.listen(3000)
  console.log("server is running")
}
main()
