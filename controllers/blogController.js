import asyncHandler from 'express-async-handler';
import Blog from '../models/blogModel.js';


//Create new Blog

const createPost = asyncHandler(async (req, res) => {
  const { image, title, directorRole, director, directorlink,writerRole , writer, writerlink, description } = req.body;
   await Blog.create({
    image,
    title,
    directorRole,
    director,
    directorlink,
    writerRole,
    writer,
    writerlink,
    description
  });

  res.status(200).json({ message: "Post Uploaded Successfully" });
});


// Update an existing blog post
const updatePost = asyncHandler(async (req, res) => {
  const { id, image, title,directorRole, director,directorlink,writerRole,  writer, writerlink, description } = req.body;
  const post = await Blog.findById(id);
  console.log(id);

  if (!post) {
    res.status(404).json({ message: 'Post not found' });
    return;
  }

  // Update the post fields
  post.image = image;
  post.title = title;
  post.directorRole = directorRole;
  post.director = director;
  post.directorlink = directorlink;
  post.writerRole = writerRole;
  post.writer = writer;
  post.writerlink = writerlink;
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