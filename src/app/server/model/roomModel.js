import mongoose from "mongoose";
import roomType from "./roomType";

const roomSchema = new mongoose.Schema({
  // room_name: {
  //   type: String,
  //   required: true,
  // },
  // room_price: {
  //   type: String,
  //   required: true
  // },
  room_maintenance: {
    type: Boolean,
    required: true
  },
  room_type: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "RoomType",
    required: true,
  },

});
const roomModel = mongoose.models.Room || mongoose.model('Room', roomSchema);
export default roomModel;
