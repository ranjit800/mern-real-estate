import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.route.js";
import authRouter from './routes/auth.route.js'
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

// ranjit9734
// mongodb+srv://ranjit800:<db_password>@mern-real-estate.wnlinch.mongodb.net/?retryWrites=true&w=majority&appName=mern-real-estate

const app = express();

app.use(express.json())

app.use("/api/user", userRouter);
app.use('/api/auth', authRouter);

app.listen(3000, () => {
  console.log("Server running on PORT 3000");
});
