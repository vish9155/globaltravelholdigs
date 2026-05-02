import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "./cloudinary.js";

/* multer fileFilter ke liye mime types */
let allowedMimeTypes = [
  "image/jpeg",
  "image/png",
  "image/jpg",
  "image/webp"
];

/* cloudinary allowed_formats ke liye extensions */
let allowedFormats = [
  "jpg",
  "jpeg",
  "png",
  "webp"
];

let storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "user_profiles",
    allowed_formats: allowedFormats,
    transformation: [
      {
        width: 500,
        height: 500,
        crop: "limit"
      },
      {
        quality: "auto"
      }
    ]
  }
});

/* file validation */
let fileFilter = (req, file, cb) => {
  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(
      new Error(
        "Only images (jpeg, jpg, png, webp) are allowed"
      ),
      false
    );
  }
};

/* export upload */
export let upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 2 * 1024 * 1024
  }
});