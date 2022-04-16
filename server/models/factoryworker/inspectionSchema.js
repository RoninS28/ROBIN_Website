const { Schema, model } = require("mongoose");

const modelSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    managerName: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    // completed = 1, Pending = 0
    status: {
      type: Number,
      enum: [0, 1, 2, 3],
      required: true,
    },
    startDate: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model("Model", modelSchema);
