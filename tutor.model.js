const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let TutorSchema = new Schema({
  name: { type: String, required: true },
  thumb: { type: String, required: true },
  desc: { type: String, required: true },
  lessons: { type: Number, required: true },
  type: { type: String, required: true }
});

// Export the model
module.exports = mongoose.model("Tutor", TutorSchema);
