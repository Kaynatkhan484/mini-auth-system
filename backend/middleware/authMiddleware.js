// middleware/authMiddleware.js
import jwt from "jsonwebtoken";

export const protect = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    console.log("🔹 Auth Header:", authHeader);

    if (!authHeader || !authHeader.startsWith("Bearer")) {
      return res
        .status(401)
        .json({ success: false, message: "No token provided ❌" });
    }

    // ✅ Trim and handle extra spaces
    const token = authHeader.replace("Bearer", "").trim();
    console.log("🔹 Token Extracted:", token);

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("✅ Token Decoded:", decoded);

    req.user = decoded;
    next();

  } catch (error) {
    console.error("🔥 Auth Middleware Error:", error.message);

    if (error.name === "TokenExpiredError") {
      return res
        .status(401)
        .json({ success: false, message: "Token expired, please log in again ❌" });
    }

    return res
      .status(401)
      .json({ success: false, message: "Invalid or expired token ❌" });
  }
};
