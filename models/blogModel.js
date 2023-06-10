import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
  image: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  directorRole: {
    type: String,
    required: true
  },
  director: {
    type: String,
    required: true
  },
  directorlink: {
    type: String,
    required: true
  },
  writerRole: {
    type: String,
    required: true
  },
  writer: {
    type: String,
    required: true
  },
  writerlink: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }

}, { timestamps: true });

const Blog = mongoose.model('Blog', blogSchema);
export default Blog;