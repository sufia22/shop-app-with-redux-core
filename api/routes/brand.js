import express from "express";
import {
  createBrand,
  deleteBrand,
  getAllBrands,
  getSingleBrand,
  updateBrand,
} from "../controllers/brandController.js";
import { brandMulter } from "../utils/multer.js";

// init router
const router = express.Router();

// routes
router.route("/").get(getAllBrands).post(brandMulter, createBrand);
router.route("/:slug").get(getSingleBrand);
router.route("/:id").delete(deleteBrand).patch(brandMulter, updateBrand);

// export
export default router;
