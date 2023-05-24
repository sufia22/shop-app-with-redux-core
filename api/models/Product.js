import mongoose from "mongoose";

// product schema
const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    slug: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    reg_price: {
      type: Number,
      required: true,
    },
    sale_price: {
      type: Number,
    },
    stock: {
      type: Number,
      default: null,
    },
    photo: {
      type: String,
      trim: true,
      default: null,
    },
    gallery: {
      type: Array,
      trim: true,
      default: null,
    },
    short_desc: {
      type: String,
      trim: true,
    },
    long_desc: {
      type: String,
      trim: true,
    },
    categories: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Category",
      default: [],
    },
    brands: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Brand",
      default: null,
    },
    tags: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Tag",
      default: [],
    },
    status: {
      type: Boolean,
      default: true,
    },
    trash: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// export
export default mongoose.model("Product", productSchema);
