const express = require("express");
const User = require("../models/user")
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");

const router = express.Router();

router.post("/sign-up", async (req, res) => {
  const { password, email } = req.body

  if (!password || !email) {
    res.status(400).send({
      error: "Missing fields"
    })
    return
  }

  const matchUser = await User.findOne({ email })
  if (matchUser) {
    res.status(400).send({
      error: "Duplicate email"
    })
    return
  }

  const user = new User(req.body)

  try {
    await user.save()
    res.status(200).json({ message: "Successful" })
  } catch (e) {
    res.status(500).send()
  }
})

router.post("/login", async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (user) {
    user.comparePassword(password, (err, isMatch) => {
      if (err) throw err;
      if (isMatch) {
        let token = jwt.sign(
          {
            email: user.email,
            userId: user._id
          },
          //Signign the token with the JWT_SECRET in the .env
          JWT_SECRET,
          {
            expiresIn: "1000h"
          }
        )
        res.json({...user.toJSON(), token});
      } else {
        res.json({ error: 'Invalid email or password.' })
      }
    });
  } else {
    res.json({ error: 'Invalid email or password.' })
  }
})

module.exports = router;

