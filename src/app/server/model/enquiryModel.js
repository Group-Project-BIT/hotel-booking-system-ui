import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema({
  email: { type: String, required: true },
  message: { type: String, required: true },
});

const enquiryModel = mongoose.models.Enquiry || mongoose.model('Enquiry', enquirySchema);
export default enquiryModel;