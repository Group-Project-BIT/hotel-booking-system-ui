import mongoose from "mongoose";

const guestSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: false },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  nic_number: { type: String, required: true },
});

const guestModel = mongoose.models.Guest || mongoose.model('Guest', guestSchema);
export default guestModel;
