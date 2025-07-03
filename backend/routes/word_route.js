import express from 'express'
import { addWordController, getRandomWordsController } from '../controllers/word_controller.js'

const router = express.Router()

router.post("/add",addWordController)

router.get("/get-random", getRandomWordsController)

export default router;