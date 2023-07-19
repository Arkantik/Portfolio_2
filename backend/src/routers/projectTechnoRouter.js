const express = require("express");

const router = express.Router();

const projectTechnoController = require("../controllers/projectTechnoController");

router.get("/", projectTechnoController.getAll);

router.post("/", projectTechnoController.post);
router.delete("/:id", projectTechnoController.remove);

module.exports = router;
