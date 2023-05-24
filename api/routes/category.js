import express from "express";
import {
  createCategory,
  deleteCategory,
  getAllCategories,
  singleCategory,
  updateCategory,
} from "../controllers/categoryControllers.js";
import { categoryMulter } from "../utils/multer.js";

// router init
const router = express.Router();

// routes
router.get("/", getAllCategories);
router.post("/", categoryMulter, createCategory);
router.get("/:slug", singleCategory);
router.delete("/:id", deleteCategory);
router.patch("/:id", categoryMulter, updateCategory);

// export
export default router;
