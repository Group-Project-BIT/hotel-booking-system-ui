import mongoose from "mongoose";

const roomTypeSchema = new mongoose.Schema({
  type_name: { type: String, required: true },
  adults_count: { type: String, required: true },
  children_count: { type: String, required: true },
  description: {type: String, required: false},
  room_type_imageUrl: {type: String, required: true}
});
const roomType = mongoose.models.RoomType || mongoose.model('RoomType', roomTypeSchema);
export default roomType;
