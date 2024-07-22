import express from "express";
import { signup, login, verifyOtp, logout } from "../controllers/authcontroller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/verify-otp", verifyOtp);
router.post("/logout", logout);

export default router;
