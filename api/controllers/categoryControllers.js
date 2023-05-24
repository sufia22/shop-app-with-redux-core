import { createSlug } from "../helper/createSlug.js";
import Category from "../models/Category.js";
import { createError } from "../utils/createError.js";
import { unlinkSync } from "fs";

/**
 * get all categories
 * route get "/"
 */
export const getAllCategories = async (req, res, next) => {
  try {
    // get all data
    const categories = await Category.find();
    res.status(200).json({
      categories,
      message: "Get all categories successfully",
    });
  } catch (error) {
    next(error);
  }
};

/**
 * create category
 * route post "/"
 */
export const createCategory = async (req, res, next) => {
  try {
    const { name } = req.body;

    //get data
    const category = await Category.create({
      name,
      slug: createSlug(name),
      photo: req.file.filename,
    });

    // validate
    if (!name) {
      res.status(400).json({ mseesage: "Fields are required" });
    } else {
      res.status(201).json({
        category,
        message: "category created successfully",
      });
    }
  } catch (error) {
    next(error);
  }
};

/**
 * single category
 * route post "/:slug"
 */
export const singleCategory = async (req, res, next) => {
  try {
    // get slug
    const { slug } = req.params;

    // get single data
    const category = await Category.findOne({ slug });
    res.status(200).json({
      category,
      message: "get single Category",
    });
  } catch (error) {
    next(createError("Category not found", 404));
  }
};

/**
 * delete category
 * route delete "/:id"
 */
export const deleteCategory = async (req, res, next) => {
  try {
    // get id
    const { id } = req.params;
    const category = await Category.findByIdAndDelete(id);

    res.status(200).json({
      message: "Category deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

/**
 * edit category
 * route patch "/:id"
 */
export const updateCategory = async (req, res, next) => {
  try {
    // get id
    const { id } = req.params;
    const { name } = req.body;

    const category = await Category.findById(id);

    // photo update
    let photo = category.photo;
    if (req.file.filename) {
      photo = req.file.filename;
      unlinkSync(`api/public/categories/${category.photo}`);
    }

    const data = await category.updateOne(
      {
        name,
        slug: createSlug(name),
        photo,
      },
      { new: true }
    );

    res.status(200).json({
      category: data,
      message: "Category updated successfully",
    });
  } catch (error) {
    next(error);
  }
};
