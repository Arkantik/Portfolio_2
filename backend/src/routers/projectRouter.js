const express = require("express");

const router = express.Router();
const multer = require("multer");

const projectController = require("../controllers/projectController");
const validateProjectInfo = require("../middlewares/validators/projectValidator");
const validateImageInfo = require("../middlewares/validators/imageValidator");

// public folder destination for images upload
const THUMB_DEST = "./public/uploads/images";
const uploadProjectImage = multer({ dest: `${THUMB_DEST}/projects/` });

router.get("/", projectController.getAllInfo);
router.get("/:id", projectController.getById);
router.put("/:id", validateProjectInfo, projectController.editById);
router.post(
  "/",
  uploadProjectImage.single("project_image"),
  validateImageInfo,
  validateProjectInfo,
  projectController.post
);
router.delete("/:id", projectController.remove);

module.exports = router;
