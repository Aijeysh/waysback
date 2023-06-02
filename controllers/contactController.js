import asyncHandler from 'express-async-handler';
import Contact from '../models/contactUs.js';

const registerContact = asyncHandler(async (req, res) => {
  const { contactmail,
    contactnumber,
    subject,
    enquiry } = req.body;
  
  const contact =await Contact.create({
    contactmail,
    contactnumber,
    subject,
    enquiry
  });
  res.status(200).json({ message: `Enquiry Submitted` });
});

export default registerContact;

