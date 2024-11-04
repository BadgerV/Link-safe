// importing relevant module
import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import path from "path";
import dotenv from "dotenv";

// importing routes
import { router } from "./routes/router";

// importing cors settings
import { corsSettings } from "./config/config";

// start an express server
export const app = express();

// config dotenv
dotenv.config();

// middlewares
app.set("trust proxy", true);
app.use(express.json());
app.use(morgan("combined"));
app.use(cors());
app.use(helmet());
app.use(cors(corsSettings));
app.options("*", cors(corsSettings));

// routes
app.use("/api/v1", router);
