import express from "express";
import {
  registerUser,
  logoutUser,
  updateUserProfile,
  getUserProfile,
  authUser,
} from "../controllers/userController.js";
const router = express.Router();
import { protect } from "../middleware/authMiddleware.js";



router.post('/', registerUser);
router.post('/logout', logoutUser);
router.post('/auth', authUser);
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);

export default router;