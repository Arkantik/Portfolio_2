const express = require("express");

const router = express.Router();

const projectRouter = require("./projectRouter");
const technoRouter = require("./technoRouter");
const projectTechnoRouter = require("./technoRouter");
const authRouter = require("./authRouter");
const userRouter = require("./userRouter");

router.use("/project", projectRouter);
router.use("/techno", technoRouter);
router.use("/project-techno", projectTechnoRouter);
router.use("/auth", authRouter);
router.use("/users", userRouter);

module.exports = router;
