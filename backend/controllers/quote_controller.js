import Quote from "../models/quote_model.js";

export const createQuoteController = async (req, res) => {
  try {
    const { quote } = req.body;

    const existingQuote = await Quote.findOne({ quote });

    if (existingQuote) {
      return res.status(403).json({
        success: false,
        message: "Quote already exists",
      });
    }

    const newQuote = await Quote.create({ quote });

    res.status(201).json({
      success: true,
      message: "Quote Created Successfully",
      quote: newQuote,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const getAllQuotesController = async (req, res) => {
  try {
    const quotes = await Quote.find({});
    res.send(quotes);
  } catch {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const getRandomQuoteController = async (req, res) => {
  try {
    const [quote] = await Quote.aggregate([{ $sample: { size: 1 } }]);

    if (!quote) {
      return res.status(404).json({
        success: false,
        message: "No quotes found",
      });
    }

    res.json(quote);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

