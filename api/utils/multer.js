import multer from "multer";

// create category storage
const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + file.originalname);
  },
  destination: (req, file, cb) => {
    if (file.fieldname == "category-photo") {
      cb(null, "api/public/categories");
    }
    if (file.fieldname == "brand-photo") {
      cb(null, "api/public/brands");
    }
    if (
      file.fieldname == "product-photo" ||
      file.fieldname == "product-gallery-photo"
    ) {
      cb(null, "api/public/products");
    }
  },
});

// category middleware
export const categoryMulter = multer({
  storage,
}).single("category-photo");

// brand middleware
export const brandMulter = multer({
  storage,
}).single("brand-photo");

// product middleware
export const productMulter = multer({
  storage,
}).fields([
  {
    name: "product-photo",
    maxCount: 1,
  },
  {
    name: "product-gallery-photo",
    maxCount: 10,
  },
]);
