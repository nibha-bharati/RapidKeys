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
  
      res.status(200).json({
        success: true,
        message: "Fetched random 40 words",
        words,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  };