import express from "express";

import authRouter from "../routes/auth.route.js";
import messageRouter from "../routes/message.route.js";

import cors from "cors";

import { environmentsConfig } from "../config/environments.config.js";
import cookieParser from "cookie-parser";


// all access middleware goes here
export const accessMiddleware = (app) => {
  const { UILocal } = environmentsConfig.development;

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
};
