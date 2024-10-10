const mongoose = require("mongoose");

// Schema for likes
const Like = mongoose.Schema(
  {
    chese:  {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Chese',
    },
    creator:  {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { collection: "Like" }
);


module.exports = mongoose.model("Like", Like);
