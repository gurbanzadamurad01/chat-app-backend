import jwt from "jsonwebtoken";

import User from "../models/user.model.js";

import { environmentsConfig } from "../config/environments.config.js";

export const protectRoute = async (req, res, next) => {
   const {json_secret_key} = environmentsConfig.development;

   try {
      const token = req.cookies.jwt;      

      if(!token) {
         return res.status(401).json({
            message: "Unauthorized - No Token Provided"
         });
      }

      const decoded = jwt.verify(token, json_secret_key);

      if(!decoded) {
         return res.status(401).json({
            message: "Unauthorized - Invalid Token"
         });
      }

      const user = await User.findById(decoded.userId).select("-password");

      if(!user) {
         return res.status(404).json({
            message: "Unauthorized - User Not Found"
         });
      }

      req.user = user;
      
      next();
   } catch (error) {
      console.error("Error in protectRoute: ", error);
      res.status(500).json({
         message: "Internal Server Error"
      });
      
   }
}