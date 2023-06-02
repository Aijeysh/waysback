import asyncHandler from 'express-async-handler';
import Blog from '../models/blogModel.js';


//Create new Blog

const createPost = asyncHandler(async (req, res) => {
  const { image, title, director, writer, description } = req.body;
   await Blog.create({
    image,
    title,
    director,
    writer,
    description
  });

  res.status(200).json({ message: "Post Uploaded Successfully" });
});


// Update an existing blog post
const updatePost = asyncHandler(async (req, res) => {
  const { postId, image, title, director, writer, description } = req.body;
  const post = await Blog.findById(postId);
  console.log(postId);

  if (!post) {
    res.status(404).json({ message: 'Post not found' });
    return;
  }

  // Update the post fields
  post.image = image;
  post.title = title;
  post.director = director;
  post.writer = writer;
  post.description = description;

  // Save the updated post
  await post.save();
  res.status(200).json({ message: "Post updated successfully" });
});





// Delete a blog post
const deletePost = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const post = await Blog.findById(id);

  if (!post) {
    res.status(404).json({ message: 'Post not found' });
    return;
  }

  // Delete the post
  await post.deleteOne();
  res.status(200).json({ message: 'Post deleted successfully' });
});



// Get all blog posts
const getAllPosts = asyncHandler(async (req, res) => {
  const posts = await Blog.find({});
  res.status(200).json(posts);
});





export {
  createPost,
  updatePost,
  deletePost,
  getAllPosts
};