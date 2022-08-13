const mongoose = require("mongoose");
// const DB = "process.env.DATABASE";
const DB =
  "mongodb+srv://name:password@cluster0.9wlpo.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connection start"))
  .catch((error) => console.log(error.message));
