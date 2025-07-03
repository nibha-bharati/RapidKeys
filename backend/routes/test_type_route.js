import express from "express";
import { createTestTypeController } from "../controllers/test_type_controller.js";

const router = express.Router();

router.post("/create", createTestTypeController);

export default router;
