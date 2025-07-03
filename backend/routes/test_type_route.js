import express from "express";
import { createTestTypeController, getTestTypeController, updateTestTypeController } from "../controllers/test_type_controller.js";

const router = express.Router();

router.post("/create", createTestTypeController);

router.put("/update/:id",updateTestTypeController);
router.get("/get/:id",getTestTypeController);

export default router;
