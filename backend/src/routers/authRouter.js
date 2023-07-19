const express = require("express");

const router = express.Router();

const authController = require("../controllers/authController");
const {
  verifyEmail,
  verifyPassword,
} = require("../middlewares/authMiddleware");

router.post("/login", verifyEmail, verifyPassword, authController.login);
router.get("/logout", authController.logout);

module.exports = router;
