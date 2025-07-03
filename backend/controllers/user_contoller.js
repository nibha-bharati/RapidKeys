import User from "../models/user_model.js";
import { createSecretToken } from "../utils/secret_token.js";
import bcrypt from 'bcryptjs';


export const signUp = async (req, res) => {
  try {
    const { email,name} = req.body;
    const role='user';
    const existingUser = await User.findOne({ email });
  
    if (existingUser) {
       console.log(existingUser);
      return res.status(403).json({ message: "User already exists" });
    }
    const user = await User.create({email: req.body.email,
        password: req.body.password,
        ...(name && { name }),
        role: role
  });
    const token = createSecretToken(user._id, role);

    res
      .status(201)
      .json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: token,
      });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      
      res.json({ user, token: createSecretToken(user._id, user.role) });
    } else {
      res.status(400).json({"msg":"Invalid credentials"})
    }
};
