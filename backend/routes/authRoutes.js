import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public Routes
router.post("/register", registerUser);
router.post("/login", loginUser);

// Protected Route
router.get("/me", protect, (req, res) => {
  res.json({
    message: "Access granted to protected route ✅",
    user: req.user,
  });
});

export default router;
