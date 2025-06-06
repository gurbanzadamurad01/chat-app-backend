import jwt from "jsonwebtoken";

import {environmentsConfig} from '../config/environments.config.js';

export const generateToken = (userId, res) => {
   const {json_secret_key,development} = environmentsConfig.development;

   const token = jwt.sign({userId}, json_secret_key, {
      expiresIn: '7d'
   });   

   res.cookie("jwt", token, {
      maxAge: 7 * 24 * 60 * 60 * 1000, // MS
      httpOnly: true, // prevent XSS attacks cross-site request forgery attacks
      sameSite: "strict", // prevent CSRF attacks
      secure: development !== "development"
   })

   return token;
}