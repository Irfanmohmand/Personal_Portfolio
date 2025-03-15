import express from 'express';
const app = express();
import mongoose from 'mongoose';
import userRouter from "./routers/user_router.js"
import dotenv from "dotenv";
import cors from "cors";
dotenv.config({});



app.use(express.json());


// Enable CORS for all domains (for development)
app.use(cors());

app.use(cors({
  origin: process.env.FRONTEND_URL,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}))

// User router 
app.use("/", userRouter);

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Stop the server if DB connection fails
  }
};


const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
  connectDb()
})