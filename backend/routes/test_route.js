import { addTest, getTests } from "../controllers/test_controller.js";
import express from "express";
import {verifyToken} from '../middleware/verify_token.js';

const router = express.Router();

router.post("/add", addTest);
router.post("/get",verifyToken, getTests);

export default router;