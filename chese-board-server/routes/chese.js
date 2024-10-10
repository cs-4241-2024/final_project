const express = require("express");
const Chese = require("../models/chese")
const Like = require("../models/like")

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, decks, stratagems, isPrivate } = req.body
  const userId = req.userId;

  if (!name || !decks || !stratagems) {
    res.status(400).send({
      error: "Missing fields"
    })
    return
  }

  const chese = new Chese({
    name,
    decks,
    stratagems,
    isPrivate,
    creator: userId
  })

  try {
    await chese.save()
    res.status(200).json({ message: "Successful" })
  } catch (e) {
    res.status(500).send()
  }
})

router.get("/", async (req, res) => {
  try {
    const cheses = await Chese.find({ isPrivate: false })
    res.status(200).json(cheses)
  } catch (e) {
    res.status(500).send()
  }
})

router.get("/my", async (req, res) => {
  const userId = req.userId;

  try {
    const cheses = await Chese.find({ creator: userId })
    res.status(200).json(cheses)
  } catch (e) {
    console.log(e)
    res.status(500).send()
  }
})

router.put("/:id", async (req, res) => {
  const { id } = req.params

  try {
    const chese = await Chese.findById(id)
    if (chese) {
      chese.isPrivate = req.body.isPrivate
      await chese.save()
      res.status(200).json(chese)
    } else {
      res.status(404).send()
    }
  } catch (e) {
    console.log(e)
    res.status(500).send()
  }
})

router.post("/like", async (req, res) => {
  const { cheseId } = req.body
  const userId = req.userId;

  try {
    const like = await Like.find({ chese: cheseId, creator: userId })
    if (like.length > 0) {
      await Like.deleteOne({ chese: cheseId, creator: userId })
    } else {
      const newLike = new Like({chese: cheseId, creator: userId  })
      await newLike.save()
    }
    res.status(200).json({ message: "Successful" })
  } catch (e) {
    res.status(500).send()
  }
})

router.get("/my-like", async (req, res) => {
  const userId = req.userId;

  try {
    const likes = await Like.find({ creator: userId }).populate('chese')
    res.status(200).json(likes)
  } catch (e) {
    res.status(500).send()
  }
})

module.exports = router;

