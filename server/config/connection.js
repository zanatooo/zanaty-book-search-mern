const mongoose = require('mongoose');
require("dotenv").config()
console.log(process.env.MONGODB_URI)
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:3000/bookSearch", 
  {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
