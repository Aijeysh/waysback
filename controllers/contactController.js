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


// Delete a Contact
const deleteContact = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const contact = await Contact.findById(id);

  if (!contact) {
    res.status(404).json({ message: 'Contact not found' });
    return;
  }

  // Delete the Contact
  await contact.deleteOne();
  res.status(200).json({ message: 'Contact deleted successfully' });
});


//Get all Contacts
const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.find({});
  res.status(200).json(contact);
});


export {
  registerContact,
  getContact,
  deleteContact
};

