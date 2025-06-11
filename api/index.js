import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import dotenv from "dotenv";
dotenv.config();
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDb");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(express.json());


app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

//middleware
app.use((err, rea, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "internam Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});


app.listen(3000, () => {
  console.log("Server running on PORT 3000");
});
