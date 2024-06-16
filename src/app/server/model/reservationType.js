import mongoose from "mongoose";

const reservationTypeSchema = new mongoose.Schema({
  reservation_type_name: {
    type: String,
    required: true,
    enum: ["full_board", "half_board", "bed_and_breakfirst"],
  },
});
const reservation_Type = mongoose.models.ReservationType || mongoose.model('ReservationType', reservationTypeSchema);
export default reservation_Type;