import { login, signUp } from "../controllers/user_contoller.js";
import express from "express";

const router = express.Router();

router.post("/signup", signUp);
router.post("/login", login);

export default router;