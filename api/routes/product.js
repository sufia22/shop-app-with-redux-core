import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
} from "../controllers/productController.js";
import { productMulter } from "../utils/multer.js";

// init router
const router = express.Router();

// routes
router.route("/").get(getAllProducts).post(productMulter, createProduct);
router.route("/:slug").get(getSingleProduct);
router.route("/:id").delete(deleteProduct).patch(productMulter, updateProduct);

// export
export default router;
