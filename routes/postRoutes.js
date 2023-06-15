import express from 'express';
import { createPost, deletePost, getAllPosts, updatePost } from '../controllers/blogController.js';

const router = express.Router();

router.route('/').post(createPost);
router.route('/update').put(updatePost);
router.get('/get', getAllPosts);
router.delete('/delete/:id',deletePost);

export default router;
