import express from 'express';
import registerContact from '../controllers/contactController.js';

const router = express.Router();
router.post('/contact', registerContact);

export default router;