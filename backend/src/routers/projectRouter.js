const express = require("express");

const router = express.Router();

const projectController = require("../controllers/projectController");
const validateProjectInfo = require("../middlewares/validators/projectValidator");

/**
 * TODO: add authentication wall...
 */
router.get("/", projectController.getAll);
router.get("/:id", projectController.getById);
router.put("/:id", validateProjectInfo, projectController.editById);
router.delete("/:id", projectController.remove);
router.post("/", validateProjectInfo, projectController.post);

module.exports = router;
