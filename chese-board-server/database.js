const mongoose = require("mongoose");

function connectDatabase() {
  const MONGO_URL = "zli29:1225931003l@cluster0.sa8ge.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
  mongoose.connect(MONGO_URL, {
    dbName: 'chese-board',
  }).then(() => {
    console.log("Connect to mongodb successful!")
  });
}

module.exports = {
  connectDatabase
}
