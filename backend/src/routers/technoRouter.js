const express = require("express");

const router = express.Router();

const technoController = require("../controllers/technoController");
const validateTechnoInfo = require("../middlewares/validators/technoValidator");
const checkForExistingTechno = require("../middlewares/technoMiddleware");

router.get("/", technoController.getAll);
router.put("/:id", validateTechnoInfo, technoController.editById);
router.delete("/:id", technoController.remove);
router.post(
  "/",
  validateTechnoInfo,
  checkForExistingTechno,
  technoController.post
);

module.exports = router;
