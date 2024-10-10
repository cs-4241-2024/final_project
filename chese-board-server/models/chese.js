const mongoose = require("mongoose");

// Schema for users
const Chese = mongoose.Schema(
  {
    name: String,
    decks: [String],
    stratagems: [String],
    isPrivate: Boolean,
    creator:  {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { collection: "Chese" }
);


module.exports = mongoose.model("Chese", Chese);
