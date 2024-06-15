import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema({
  guest_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Guest",
    required: true,
  },
  room_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Room",
    required: true,
  },
  check_in: { type: String, required: true },
  check_out: { type: String, required: true },
  status: {
    type: String,
    required: true,
    default: "confirmed",
    enum: ["confirmed", "cancel", "pending"],
  },
  payment_id: { type: mongoose.Schema.Types.ObjectId, ref: "Payment" },
  reservation_type: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ReservationType",
    required: true,
  },
});
const reservationModel = mongoose.models.Reservation || mongoose.model('Reservation', reservationSchema);
export default reservationModel;
