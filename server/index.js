import express from "express";
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import mongoose from "mongoose";

const app = express();
app.use(express.json());
app.use(cors());

const connectMongoDB = async () => {
    const connection = await mongoose.connect(process.env.MONGODB_URL);
  
    if (connection) {
      console.log('Connected to MongoDB');
    }
  }
  connectMongoDB();



const PORT=process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});