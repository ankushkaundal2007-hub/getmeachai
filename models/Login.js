

import mongoose from "mongoose";

const LoginSchema = new mongoose.Schema({
  name: String,
  username: String,
  email: {
    type: String,
    unique: true,
  },
  image: String,
});

export default mongoose.models.Login ||
  mongoose.model("Login", LoginSchema);