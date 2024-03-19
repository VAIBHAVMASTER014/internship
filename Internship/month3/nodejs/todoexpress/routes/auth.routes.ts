import express from "express";
import { signupController,loginController } from "../controllers";
const authRouter = express.Router();

authRouter.post("/signup", signupController);

authRouter.post("/login", loginController);

export default authRouter;