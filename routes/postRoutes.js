import express from 'express';
import { createPost, deletePost, getAllPosts, updatePost } from '../controllers/blogController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').post(protect ,createPost);
router.route('/update').put(protect, updatePost);
router.get('/get', getAllPosts);
router.delete('/delete/:id',protect, deletePost);

export default router;