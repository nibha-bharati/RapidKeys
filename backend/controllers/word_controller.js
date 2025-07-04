import Word from "../models/word_model.js"

export const addWordController = async(req,res)=>{
    try {
        const {word} = req.body
        const existingWord = await Word.findOne({word})
        if(existingWord){
            return res.status(403).json({
                success:false,
                message:"Word Already Exists"
            })
        }

        const newWord = await Word.create({word:word})

        res.status(201).json({
            success:true,
            message:"Word added Successfully",
            word:newWord
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }
}

export const getRandomWordsController = async (req, res) => {
    try {
      const words = await Word.aggregate([{ $sample: { size: 40 } }]);
  
      const wordList = words.map(w => w.word.toLowerCase());

      const sentence = wordList.join(" ");
  
      res.status(200).json({
        success: true,
        message: "Sentence formed",
        sentence: sentence       
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  };

  export const getTenRandomWordsController = async (req, res) => {
    try {
      const words = await Word.aggregate([{ $sample: { size: 10 } }]);
  
      const wordList = words.map(w => w.word.toLowerCase());

      const sentence = wordList.join(" ");
  
      res.status(200).json({
        success: true,
        message: "Sentence formed",
        sentence: sentence       
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  };

  export const getTwentyFiveRandomWordsController = async (req, res) => {
    try {
      const words = await Word.aggregate([{ $sample: { size: 25 } }]);
  
      const wordList = words.map(w => w.word.toLowerCase());

      const sentence = wordList.join(" ");
  
      res.status(200).json({
        success: true,
        message: "Sentence formed",
        sentence: sentence       
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  };

  export const getFiftyRandomWordsController = async (req, res) => {
    try {
      const words = await Word.aggregate([{ $sample: { size: 50 } }]);
  
      const wordList = words.map(w => w.word.toLowerCase());

      const sentence = wordList.join(" ");
  
      res.status(200).json({
        success: true,
        message: "Sentence formed",
        sentence: sentence       
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  };

  export const getHundredRandomWordsController = async (req, res) => {
    try {
      const words = await Word.aggregate([{ $sample: { size: 100 } }]);
  
      const wordList = words.map(w => w.word.toLowerCase());

      const sentence = wordList.join(" ");
  
      res.status(200).json({
        success: true,
        message: "Sentence formed",
        sentence: sentence       
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  };