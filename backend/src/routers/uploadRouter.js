const express = require("express");
const multer = require("multer");

const uploadController = require("../controllers/uploadController");
const validateImageInfo = require("../middlewares/validators/imageValidator");

const router = express.Router();

// public folder destination for images upload
const THUMB_DEST = "./public/uploads/images";
const uploadTechnoImage = multer({ dest: `${THUMB_DEST}/technos/` });
const uploadProjectImage = multer({ dest: `${THUMB_DEST}/projects/` });

router.post(
  "/images/technos",
  uploadTechnoImage.single("techno_image"),
  validateImageInfo,
  uploadController.post
);

router.post(
  "/images/projects",
  uploadProjectImage.single("project_image"),
  validateImageInfo,
  uploadController.post
);

module.exports = router;
