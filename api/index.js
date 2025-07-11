
import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import dotenv from "dotenv";
import cors from "cors"; // ✅ Import cors
import cookieParser from "cookie-parser";
import listingRouter from "./routes/listing.route.js"
// ✅ Load environment variables
dotenv.config();

// ✅ Connect to MongoDB
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDb");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

// ✅ Set up CORS for your frontend origin
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));



// ✅ Parse JSON bodies
app.use(express.json());

app.use(cookieParser());



// Routes
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/listing", listingRouter);




// Error handling middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

app.listen(3000, () => {
  console.log("Server running on PORT 3000");
});
