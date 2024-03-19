import { Request, Response } from "express";
import path from "path";

// imported files
import { authDataType } from "../types";
import { loginService, signupService, readFromJson } from "../services";


let registrationData: authDataType[] = readFromJson(path.join(__dirname, "../data/registerData.json"))

export const signupController = (req: Request, res: Response) => {
  const body = req.body;
  const response = signupService(registrationData, body);
  res.status(response.statusCode).send(response);
};

export const loginController = (req: Request, res: Response) => {
  const body: authDataType = req.body;
  const response = loginService(registrationData, body);
  res.cookie("token", response.data);
  res.status(response.statusCode).send(response);
};
