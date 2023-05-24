import { createSlug } from "../helper/createSlug.js";
import Brand from "../models/Brand.js";
import { unlinkSync } from "fs";

/**
 * get all brands
 */
export const getAllBrands = async (req, res, next) => {
  try {
    const brands = await Brand.find();
    res.status(200).json({
      brands,
      message: "Get all brands successfully",
    });
  } catch (error) {
    next(error);
  }
};

/**
 * create a brand
 */
export const createBrand = async (req, res, next) => {
  try {
    const { name, slug } = req.body;
    const brand = await Brand.create({
      name,
      slug: createSlug(name),
      photo: req.file.filename,
    });

    if (!name) {
      res.status(400).json({ message: "fields are required" });
    } else {
      res.status(201).json({
        brand,
        message: "Brand created successfully",
      });
    }
  } catch (error) {
    next(error);
  }
};

/**
 * get single brand
 */
export const getSingleBrand = async (req, res, next) => {
  try {
    const { slug } = req.params;
    const brand = await Brand.findOne({ slug });

    res.status(200).json({
      brand,
      message: "Get single brand successfully",
    });
  } catch (error) {
    next(error);
  }
};

/**
 * delete brand
 */
export const deleteBrand = async (req, res, next) => {
  try {
    const { id } = req.params;
    const brand = await Brand.findByIdAndDelete(id);

    res.status(200).json({
      brand,
      message: "Brand deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

/**
 * update brand
 */
export const updateBrand = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const brand = await Brand.findById(id);

    // brand photo update
    let photo = brand.photo;
    if (req.file.filename) {
      photo = req.file.filename;
      unlinkSync(`api/public/brands/${brand.photo}`);
    }

    const data = await brand.updateOne(
      {
        name,
        slug: createSlug(name),
        photo,
      },
      { new: true }
    );

    res.status(200).json({
      brand: data,
      message: "Brand updated successfully",
    });
  } catch (error) {
    next(error);
  }
};
