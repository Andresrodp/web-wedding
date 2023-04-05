import  Express from "express";
import cors from "cors";
import morgan from "morgan";

import router from "./routes/index.js";
const server = Express();

server.use(cors());
server.use(morgan("dev"));
server.use(Express.json());

server.use("/api", router);

export default server;