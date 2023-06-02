import mongoose from "mongoose";


const contactSchema = mongoose.Schema({
  contactmail: {
    type: String,
    required: true
  },
  contactnumber: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  enquiry: {
    type: String,
    required: true
  }
  
}, { timestamps: true });

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;