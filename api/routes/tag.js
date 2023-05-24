import express from "express";
import {
  createTag,
  deleteTag,
  getAllTags,
  getSingleTag,
  updateTag,
} from "../controllers/tagController.js";

// init router
const router = express.Router();

// routes
router.route("/").get(getAllTags).post(createTag);
router.route("/:slug").get(getSingleTag);
router.route("/:id").delete(deleteTag);
router.route("/:id").patch(updateTag);

// export
export default router;
