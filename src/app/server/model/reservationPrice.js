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
const reservation_price = mongoose.models.ReservationPrice || mongoose.model('ReservationPrice', reservationPrice);
export default reservation_price;