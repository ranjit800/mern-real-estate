// import express from "express";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import userRouter from "./routes/user.route.js";
// import authRouter from "./routes/auth.route.js";
// import listingRouter from "./routes/listing.route.js";
// import cookieParser from "cookie-parser";
// import path from 'path';
// dotenv.config();

// mongoose
//   .connect(process.env.MONGO)
//   .then(() => {
//     console.log("Connected to MongoDB!");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//   const __dirname = path.resolve();

// const app = express();

// app.use(express.json());

// app.use(cookieParser());

// app.listen(3000, () => {
//   console.log("Server is running on port 3000!");
// });

// app.use("/api/user", userRouter);
// app.use("/api/auth", authRouter);
// app.use("/api/listing", listingRouter);

// app.use(express.static(path.join(__dirname, '/client/dist')));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
// })


// app.use((err, req, res, next) => {
//   const statusCode = err.statusCode || 500;
//   const message = err.message || "Internal Server Error";
//   return res.status(statusCode).json({
//     success: false,
//     statusCode,
//     message,
//   });
// });


import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import listingRouter from "./routes/listing.route.js";

dotenv.config();
const __dirname = path.resolve();
const app = express();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("Connected to MongoDB!"))
  .catch((err) => console.error(err));

// Middleware
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/listing", listingRouter);

// 🛑 Serve static files ONLY in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/dist")));

  app.get(/^\/(?!api).*/, (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
  });
}

// Error handler
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});
