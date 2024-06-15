import mongoose from "mongoose";

const reservationPrice = new mongoose.Schema({
  room_type_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "RoomType",
    required: true,
  },
  reservation_type_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ReservationType",
    required: true,
  },
  price: {
    type: String,
    required: true
  }
});
export default mongoose.model("Price", reservationPrice);