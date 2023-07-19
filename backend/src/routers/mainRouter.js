const express = require("express");

const router = express.Router();

const projectRouter = require("./projectRouter");
const technoRouter = require("./technoRouter");
const projectTechnoRouter = require("./technoRouter");

router.use("/project", projectRouter);
router.use("/techno", technoRouter);
router.use("/project-techno", projectTechnoRouter);

module.exports = router;
