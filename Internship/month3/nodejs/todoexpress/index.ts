import express, { Express, Request, Response } from "express";
var cookieParser = require("cookie-parser");
import authRouter from "./routes/auth.routes";
import eventRouter from "./routes/event.routes";
import { authentication } from "./middleware/auth.middleware";
require('dotenv').config()

const cors = require("cors");
const app: Express = express();
const port = process.env.PORT;

app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use("/auth", authRouter);
app.use("/todos",authentication,eventRouter)

app.listen(port, ()=>{
    console.log(`[server]: Server is running at http://localhost:${port}`)
});
