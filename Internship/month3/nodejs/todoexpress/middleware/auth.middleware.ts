import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

// imported files
const {
  HTTP_STATUS_CODES,
  ERROR_MESSAGES,
} = require("../assets/constants/index");

export const authentication = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const token = request.cookies.token;
  try {
    if (!token) {
      throw new Error("authentication error: ");
    }
    const id: any = jwt.verify(token, process.env.JWT_SECRET!);
    request.headers = id.id;
    next();
  } catch (err) {
    response.statusCode = HTTP_STATUS_CODES.UNAUTHORIZED;
    response.end(ERROR_MESSAGES._Unauthorized("perform event opearations."));
  }
};
