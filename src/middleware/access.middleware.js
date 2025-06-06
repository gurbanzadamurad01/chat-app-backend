import express from "express";

import authRouter from "../routes/auth.route.js";
import messageRouter from "../routes/message.route.js";

import cors from "cors";

import path from "path";

import { environmentsConfig } from "../config/environments.config.js";
import cookieParser from "cookie-parser";


// all access middleware goes here
export const accessMiddleware = (app) => {
  const { UILocal } = environmentsConfig.development;

  const __dirname = path.resolve();

  app.use(
    express.json({
      limit: "20mb",
    })
  );
  app.use(
    express.urlencoded({
      extended: true,
      limit: "20mb",
    })
  );
  app.use(
    cors({
      origin: UILocal,
      credentials: true,
    })
  );
  app.use(cookieParser());

  app.use("/api/auth", authRouter);
  app.use("/api/message", messageRouter);

  if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    app.get("/*", (req,res) => {
      res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    })
  }

};
