const dotenv = require("dotenv");
const cloudinaryModule = require("cloudinary");

dotenv.config();
const cloudinary = cloudinaryModule.v2;

cloudinary.config({
  cloud_name: "howardkacloudinary",
  api_key: "338216139686919",
  api_secret: "-8KSfCh-RTRSz5D-W9zoPkpz8eI"
});


module.exports = cloudinary;
