import { createQuoteController, getAllQuotesController, getRandomQuoteController } from "../controllers/quote_controller.js";
import express from "express";
import {verifyToken} from '../middleware/verify_token.js';

const router = express.Router();

router.post("/add", createQuoteController);
router.get("/getAll", getAllQuotesController);
router.get("/get", getRandomQuoteController);

export default router;