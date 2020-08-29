const express = require('express')
const morgan = require('morgan')
const app = express()

app.use(morgan('dev'))
app.use(require('./routes/index.routes'))

//require('./database')

async function main() {
  await app.listen(3000)
  console.log("server is running")
}
main()
//app.listen(3000,=>console.log('server on port 3000'))
