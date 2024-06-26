import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: false, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true, enum: ["admin", "receptionist"] },
});
export default mongoose.model("User", userSchema);
