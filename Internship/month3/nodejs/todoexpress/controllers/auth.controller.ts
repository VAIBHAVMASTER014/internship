import { Request, Response } from "express";

// imported files
import { authDataType } from "../types";
import { loginService, signupService } from "../services";

export const signupController = (req: Request, res: Response) => {
  const body = req.body;
  const response = signupService( body);
  res.status(response.statusCode).send(response);
};

export const loginController = (req: Request, res: Response) => {
  const body: authDataType = req.body;
  const response = loginService( body);
  res.cookie("token", response.data);
  res.status(response.statusCode).send(response);
};
