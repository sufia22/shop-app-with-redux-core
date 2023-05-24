import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import cors from "cors";
import categoryRoute from "./routes/category.js";
import brandRoute from "./routes/brand.js";
import tagRoute from "./routes/tag.js";
import productRoute from "./routes/product.js";
import mongoDBConnect from "./config/db.js";
import { errorHandler } from "./middlewares/errorHandler.js";

// init express
const app = express();
dotenv.config();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// static folder
app.use(express.static("api/public"));

// routes
app.use("/api/v1/product/category", categoryRoute);
app.use("/api/v1/product/brand", brandRoute);
app.use("/api/v1/product/tag", tagRoute);
app.use("/api/v1/product", productRoute);

// environment variable
const PORT = process.env.PORT || 9000;

// error handle
app.use(errorHandler);

// listen server
app.listen(PORT, () => {
  mongoDBConnect();
  console.log(`server is running on port ${PORT}`.bgGreen.black);
});
