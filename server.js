import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
dotenv.config();
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
const port = process.env.PORT || 4000;
import userRoutes from './routes/userRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import postRoutes from './routes/postRoutes.js';
const app = express();

const connectDB = async () => {
  try {
   await mongoose.connect(process.env.URI);
    console.log("MongoDB connected");
  } catch (err) {
    console.log(`Error : ${err.message}`);
  }
};
connectDB();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ encoded: true }));
app.use(cookieParser());






app.use('/api/users', userRoutes);
app.use('/api/viewer', contactRoutes);
app.use('/api/posts',postRoutes);


app.listen(port, () => console.log(`Connected to ${port}`));
