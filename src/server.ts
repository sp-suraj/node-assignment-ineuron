import express from "express";
import mongoose from "mongoose";
import fs from "fs";
import { config } from "./config/config";
import router from "./routes/route";
import swaggerUi from "swagger-ui-express";

const app = express();

const swaggerDocument = require("../swagger.json");
const customCss = fs.readFileSync(process.cwd() + "/swagger.css", "utf8");

//Database Connection
mongoose
  .connect(config.url)
  .then(() => console.log("Connected to database"))
  .catch((e) => console.log(e));

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/books", router);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, { customCss })
);

//Server Listening
app.listen(config.port, () => console.log(`Listening on port ${config.port}`));
