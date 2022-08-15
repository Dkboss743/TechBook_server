const mongoose = require("mongoose");
var ObjectId = mongoose.ObjectId;
const linkSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      max: 32,
    },
    url: {
      type: String,
      trim: true,
      required: true,
      max: 256,
    },
    slug: {
      type: String,
      lowercase: true,
      unique: true,
      required: true,
      index: true,
    },
    postedBy: {
      type: ObjectId,
      ref: "User",
    },
    categories: [
      {
        type: ObjectId,
        ref: "Category",
        required: true,
      },
    ],
    type: {
      type: String,
      default: "Free",
    },
    medium: {
      type: String,
      default: "Video",
    },
    clicks: {
      type: Number,
      defalult: 0,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Link", linkSchema);
