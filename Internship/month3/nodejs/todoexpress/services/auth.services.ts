import fs from "fs"
import path from "path";
import  jwt  from "jsonwebtoken";
import { authDataType } from "../types";
import { ERROR, SUCCESS } from "../utils/rest-responses";
import { HTTP_STATUS_CODES,ERROR_MESSAGES,SUCCESS_MESSAGES } from "../assets/constants";

export const signupService = (
  availableData: authDataType[],
  clientData: authDataType
) => {
  try {
    availableData.sort(
      (a: authDataType, b: authDataType) => a.userId - b.userId
    );
    let userId = availableData[availableData.length - 1].userId + 1 || 1;
    let emailExist =
      availableData.find(
        (data: authDataType) => data.email === clientData.email
      ) || false;
    if (emailExist) {
      const statusCode = HTTP_STATUS_CODES.CONFLICT;
      const errorMessage = ERROR_MESSAGES._Conflict("Email");
      return ERROR(errorMessage, statusCode);
    } else {
      availableData.push({
        email: clientData.email,
        password: clientData.password,
        userId: userId,
      });
      fs.writeFileSync(
        path.join(__dirname, "../data/registerData.json"),
        JSON.stringify(availableData, null, 2)
      );
      const statusCode = HTTP_STATUS_CODES.OK;
      const successMessage = SUCCESS_MESSAGES._Ok("Registration operation");
      return SUCCESS(successMessage, statusCode);
    }
  } catch (error) {
    const errorMessage = ERROR_MESSAGES._Internal_Server_Error();
    const statusCode = HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR;
    return ERROR(errorMessage, statusCode);
  }
};

export const loginService = (
  availableData: authDataType[],
  clientData: authDataType
) => {
  try{
    let isValid =
    availableData.find(
      (data: authDataType) =>
        data.email === clientData.email && data.password === clientData.password
    ) || false;
  if (!isValid) {
    const errorMessage = ERROR_MESSAGES._Unauthorized("perform login");
    const statusCode = HTTP_STATUS_CODES.UNAUTHORIZED;
    return ERROR(errorMessage, statusCode);
  } else {
    var token = jwt.sign(
      {
        id: isValid.userId,
      },
      process.env.JWT_SECRET||"secretKey",
      {
        expiresIn: 86400,
      }
    );
    const successMessage = SUCCESS_MESSAGES._Ok("login ");
    const statusCode = HTTP_STATUS_CODES.OK;
    return SUCCESS(successMessage, statusCode,token);
  }
  }catch (error) {
    const errorMessage = ERROR_MESSAGES._Internal_Server_Error();
    const statusCode = HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR;
    return ERROR(errorMessage, statusCode);
  }
};
