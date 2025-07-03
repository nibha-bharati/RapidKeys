import Test from "../models/test_model.js";

export const addTest = async (req, res) => {
  try {
    //    const {userId, testTypeId, speed, accuracy}=req.body;
    const test = await Test.create(req.body);
    res.status(201).json({ success: true, message: "New test added" });
  } catch (error) {
    res.status(500).json({ success: false,message: error.message });
  }
};

export const getTests = async (req, res) => {
  try {
    const role = req.user.role;
    if (role.toString() == "user") {
      const tests = await Test.find({ user: req.user._id });
      res.send(tests);
    } else if (role.toString() == "admin") {
      const tests = await Test.find({});
      res.send(tests);
    } else {
      res
        .status(403)
        .json({ success: false, message: "Access to tests forbidden" });
    }
  } catch (error) {
     res.status(500).json({ success: false,message: error.message });
  }
};
