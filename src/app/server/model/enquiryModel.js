import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema({
  username: {type: String, required: true},
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdDate: {
    type: Date,
    default: new Date(), // Automatically set createdDate to the current date
  },
});

const enquiryModel = mongoose.models.Enquiry || mongoose.model('Enquiry', enquirySchema);
export default enquiryModel;