const express = require("express");
const router = express.Router();
const users = require("../models/userSchema");

// register user
router.post("/student", async (req, res) => {
  const { name, branch, email, mobile, usn, gender } = req.body;
  if (!name || !email || !branch || !mobile || !usn || !gender) {
    res.status(422).json("plz fill the data");
  }

  try {
    const preuser = await users.findOne({ email: email });
    console.log(preuser);

    if (preuser) {
      res.status(422).json("this is user is already present");
    } else {
      const adduser = new users({
        name,
        branch,
        email,
        mobile,
        usn,
        gender,
      });

      await adduser.save();
      res.status(201).json(adduser);
      console.log(adduser);
    }
  } catch (error) {
    res.status(422).json(error);
  }
});

// get userdata

router.get("/student", async (req, res) => {
  try {
    const userdata = await users.find();
    res.status(201).json(userdata);
    console.log(userdata);
  } catch (error) {
    res.status(422).json(error);
  }
});
module.exports = router;
