import mongoose from "mongoose";

import { environmentsConfig } from "../config/environments.config.js";

export const connectDB = async () => {
  const { mongodb_url } = environmentsConfig.development;
  try {
    const connect = await mongoose.connect(mongodb_url);
    console.log(`MongoDB connected: ${connect.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection error: ", error);
  }
};
