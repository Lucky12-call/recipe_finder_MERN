import express from "express";
import {
  userLogin,
  userLogout,
  userSignUp,
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/signup", userSignUp);
router.post("/login", userLogin);
router.post("/logout", userLogout);

export default router;
