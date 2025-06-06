import jwt from "jsonwebtoken";

import {environmentsConfig} from '../config/environments.config.js';

export const generateToken = (userId, res) => {
   const {json_secret_key,development,NODE_BACKEND} = environmentsConfig.development;

   const token = jwt.sign({userId}, json_secret_key, {
      expiresIn: '7d'
   });   

   res.cookie("jwt", token, {
      maxAge: 7 * 24 * 60 * 60 * 1000, // MS
      httpOnly: true, // prevent XSS attacks cross-site request forgery attacks
      path: "/",
      ...(development === "development" && {
         sameSite: "none",
         domain: NODE_BACKEND, // replace with your domain
         secure: true // use secure cookies in production
      })
      
   })

   return token;
}