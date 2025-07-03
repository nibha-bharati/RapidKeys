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

export const getTestTypeController=async(req,res)=>{
    try{
        const testType= await TestType.findById(req.params.id);
        res.json({testType});
     } catch (error) {
        console.log(error);
        res.status(500).json({
          success: false,
          message: "Internal Server Error",
        });
      }
}
export const updateTestTypeController = async (req, res) => {
    try {
      const id = req.params.id; 
      const { newTestType } = req.body;
  
      const existingTestType = await TestType.findById(id);
  
      if (!existingTestType) {
        return res.status(404).json({
          success: false,
          message: "Test Type not found",
        });
      }
  
      const updatedTestType = await TestType.findByIdAndUpdate(
        id,
        req.body,  
        { new: true }               
      );
  
      res.status(200).json({
        success: true,
        message: "Test Type Updated Successfully",
        testType: updatedTestType,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  };
  