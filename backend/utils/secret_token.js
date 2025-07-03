import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });

import jwt from 'jsonwebtoken';

export const createSecretToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.TOKEN_KEY, {
    expiresIn: "30d",
  });
};