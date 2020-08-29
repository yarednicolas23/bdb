const mongoose = require("mongoose")

mongoose.connect('mongodb://mongo/bdbdatabase')
  .then(db => console.log("Bd is connected to", db.connection.host))
  .catch(error => console.error(error))
