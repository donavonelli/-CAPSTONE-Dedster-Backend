const mongoose = require("mongoose");

const connectionString =
  process.env.MONGODB_URI || "mongodb://localhost:27017/dedster";
const configOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

mongoose
  .connect(connectionString, configOptions)
  .then(() => console.log("MongoDB successfully connected..."))
  .catch((err) => console.log(`MongoDB connection error: ${err}`));

module.exports = {
  College: require("./college"),
  Post: require("./post"),
  Profile: require("./profile"),
  Service: require("./service")
};
