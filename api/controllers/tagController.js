import { createSlug } from "../helper/createSlug.js";
import Tag from "../models/Tag.js";

/**
 * get all tags
 */
export const getAllTags = async (req, res, next) => {
  try {
    const tags = await Tag.find();
    res.status(200).json({
      tags,
      message: "Get all tags successfuuly",
    });
  } catch (error) {
    next(error);
  }
};

/**
 * create a tag
 */
export const createTag = async (req, res, next) => {
  try {
    const { name } = req.body;
    const tag = await Tag.create({
      name,
      slug: createSlug(name),
    });

    if (!name) {
      res.status(400).json({
        message: "fields are required",
      });
    } else {
      res.status(201).json({
        tag,
        message: "Tag created successfully",
      });
    }
  } catch (error) {
    next(error);
  }
};

/**
 * get a single tag
 */
export const getSingleTag = async (req, res, next) => {
  try {
    const { slug } = req.params;
    const tag = await Tag.findOne({ slug });

    res.status(200).json({
      tag,
      message: "get single tag successfully",
    });
  } catch (error) {
    next(error);
  }
};

/**
 * delete a tag
 */
export const deleteTag = async (req, res, next) => {
  try {
    const { id } = req.params;
    const tag = await Tag.findByIdAndDelete(id);

    res.status(200).json({
      tag,
      message: "Tag deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

/**
 * update a tag
 */
export const updateTag = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const updatedTag = await Tag.findByIdAndUpdate(
      id,
      { name, slug: createSlug(name) },
      {
        new: true,
      }
    );

    res.status(200).json({
      tag: updatedTag,
      message: "Tag update successfully",
    });
  } catch (error) {
    next(error);
  }
};
