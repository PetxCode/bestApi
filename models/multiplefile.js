const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mulitipleFileSchema = new Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    schoolname: {
      type: String,
      required: true,
    },
    schoollocation: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },

    files: [Object],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Schools", mulitipleFileSchema);
