import TestType from "../models/test_type_model.js";

export const createTestTypeController = async (req, res) => {
  try {
    const { testType } = req.body;

    const existingTestType = await TestType.findOne({ testType });

    if (existingTestType) {
      return res.status(403).json({
        success: false,
        message: "Test Type already exists",
      });
    }

    const newTestType = await TestType.create({ testType });

    res.status(201).json({
      success: true,
      message: "Test Type Created Successfully",
      testType: newTestType,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
