require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
const mongoose = require("mongoose");
require("./db/conn");
const users = require("./models/userSchema");
const cors = require("cors");
const router = require("./routes/router");
// const router = express.Router();
const DB =
  "mongodb+srv://harsh:Sherlock@cluster0.9wlpo.mongodb.net/?retryWrites=true&w=majority";
const port = process.env.PORT || 8003;
app.use(cors());
app.use(express.json());
app.use(router);
app.delete("/delete/:id", (req, res) => {
  console.log(req.params);
  users
    .findByIdAndDelete({ _id: req.params.id })
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));
});
app.put("/update/:id", (req, res) => {
  users
    .findByIdAndUpdate(
      // { _id: req.params.id },
      // {
      //   title: req.body.title,
      //   description: req.body.description,
      // }
      { _id: req.params.id },
      {
        name: req.body.name,
        branch: req.body.branch,
        email: req.body.email,
        mobile: req.body.mobile,
        usn: req.body.usn,
        gender: req.body.gender,
      }
    )
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));
});

//extras part don't change

// app.post("/create", (req, res) => {
//   const newPost = new users({
//     name: req.body.name,
//     branch: req.body.branch,
//     email: req.body.email,
//     mobile: req.body.mobile,
//     usn: req.body.usn,
//     gender: req.body.gender,
//   });

//   newPost
//     .save()
//     .then((doc) => console.log(doc))
//     .catch((err) => console.log(err));
// });

app.get("/posts", (req, res) => {
  users
    .find()
    .then((items) => res.json(items))
    .catch((err) => console.log(err));
});

//extras end
app.listen(port, () => {
  console.log(`server is start port number ${port}`);
});
