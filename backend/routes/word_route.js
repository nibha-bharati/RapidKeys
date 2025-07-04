import express from 'express'
import { addWordController, getFiftyRandomWordsController, getHundredRandomWordsController, getRandomWordsController, getTenRandomWordsController, getTwentyFiveRandomWordsController } from '../controllers/word_controller.js'

const router = express.Router()

router.post("/add",addWordController)

router.get("/get-random", getRandomWordsController)

router.get("/get-random-10", getTenRandomWordsController)

router.get("/get-random-25", getTwentyFiveRandomWordsController)

router.get("/get-random-50", getFiftyRandomWordsController)

router.get("/get-random-100", getHundredRandomWordsController)







export default router;