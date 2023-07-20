const express = require("express");

const router = express.Router();
const multer = require("multer");

const technoController = require("../controllers/technoController");
const {
  validateTechnoInfo,
  validateTechnoUpdateInfo,
} = require("../middlewares/validators/technoValidator");
const checkForExistingTechno = require("../middlewares/technoMiddleware");

// public folder destination for images upload
const THUMB_DEST = "./public/uploads/images";
const uploadTechnoImage = multer({ dest: `${THUMB_DEST}/technos/` });

router.get("/", technoController.getAll);
router.put(
  "/:id",
  uploadTechnoImage.single("techno_image"),
  validateTechnoUpdateInfo,
  technoController.editById
);
router.post(
  "/",
  uploadTechnoImage.single("techno_image"),
  validateTechnoInfo,
  checkForExistingTechno,
  technoController.post
);
router.delete("/:id", technoController.remove);

module.exports = router;
