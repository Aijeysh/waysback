import express from 'express';
import {registerContact, getContact, deleteContact } from '../controllers/contactController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();
router.post('/contact', registerContact);
router.get('/getcontact', protect, getContact)
router.delete('/delete/:id', protect, deleteContact)

export default router;