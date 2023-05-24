import { createSlug } from "../helper/createSlug.js";
import Product from "../models/Product.js";
import { unlinkSync } from "fs";

// get all products
export const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      products,
      message: "Get all products successfully",
    });
  } catch (error) {
    next(error);
  }
};

/**
 * create a new product
 */
export const createProduct = async (req, res, next) => {
  try {
    const {
      name,
      reg_price,
      sale_price,
      stock,
      short_desc,
      long_desc,
      categories,
      tags,
      brands,
    } = req.body;

    // get feature photo name
    const photo = req.files["product-photo"][0].filename;

    // get gallery file name
    const gallery = [];
    [...req.files["product-gallery-photo"]].forEach((item) => {
      gallery.push(item.filename);
    });

    const products = await Product.create({
      name,
      slug: createSlug(name),
      reg_price,
      sale_price,
      stock,
      short_desc,
      long_desc,
      photo,
      gallery,
    });
    res.status(201).json({
      products,
      message: "Product created successfully",
    });
  } catch (error) {
    next(error);
  }
};

/**
 * get a single product
 */
export const getSingleProduct = async (req, res, next) => {
  try {
    const { slug } = req.params;
    const product = await Product.findOne({ slug });
    res.status(200).json({
      product,
      message: "Get single product successfully",
    });
  } catch (error) {
    next(error);
  }
};

/**
 * delete product
 */
export const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);

    // delete related files
    unlinkSync(`api/public/products/${product.photo}`);

    product.gallery.forEach((item) => {
      unlinkSync(`api/public/products/${item}`);
    });

    res.status(200).json({
      product,
      meesage: "Product deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

/**
 * update product
 */
export const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      name,
      regular_price,
      sale_price,
      stock,
      short_desc,
      long_desc,
      del_gall,
    } = req.body;

    const product = await Product.findById(id);

    // feature photo update
    let photo = product.photo;
    if (req.files["product-photo"]) {
      photo = req.files["product-photo"][0].filename;
      unlinkSync(`api/public/products/${product.photo}`);
    }

    // if (del_gall.length > 0) {
    //   del_gall.forEach((item) => {
    //     unlinkSync(`api/public/products/${item}`);
    //   });
    // }

    // gallery photo update
    let gallery_old = product.gallery;
    let new_gallery = [];
    if (req.files["product-gallery-photo"]) {
      req.files["product-gallery-photo"].forEach((item) => {
        new_gallery.push(item.filename);
      });
    }

    const final_gallery = gallery_old.concat(new_gallery);

    const data = await product.updateOne(
      {
        name,
        slug: createSlug(name),
        regular_price,
        sale_price,
        stock,
        short_desc,
        long_desc,
        photo,
        gallery: final_gallery,
        // del_gall,
      },
      { new: true }
    );

    res.status(200).json({
      data,
      message: "Product updated successfully",
    });
  } catch (error) {
    next(error);
  }
};
