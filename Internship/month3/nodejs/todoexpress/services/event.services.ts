import fs from "fs";
import path from "path";

// imported files
import { clientDataType, todoDataType } from "../types/event.types";
import { ERROR, SUCCESS } from "../utils/rest-responses";
import {
  HTTP_STATUS_CODES,
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
} from "../assets/constants";
import { readFromJson } from "./file.services";
import { IncomingHttpHeaders } from "http";

let todoData: todoDataType[] = readFromJson(
  path.join(__dirname, "../data/todos.json")
);

export const getAllTodoService = (userId: IncomingHttpHeaders) => {
  try {
    const data = todoData.filter((data) => data.userId === userId);
    if (todoData.length > 0) {
      const successMessage = SUCCESS_MESSAGES._Ok("fetched all todo operation");
      const statusCode = HTTP_STATUS_CODES.OK;
      return SUCCESS(successMessage, statusCode, data);
    } else {
      const errorMessage = ERROR_MESSAGES._NotFound("Data");
      const statusCode = HTTP_STATUS_CODES.NOT_FOUND;
      return ERROR(errorMessage, statusCode);
    }
  } catch (err) {
    const errorMessage = ERROR_MESSAGES._Internal_Server_Error();
    const statusCode = HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR;
    return ERROR(errorMessage, statusCode);
  }
};

export const getByIdService = (userId: IncomingHttpHeaders, id: number) => {
  try {
    const data = todoData
      .filter((data) => data.userId === userId)
      .find((todo) => todo.id === id);
    if (data) {
      console.log(data);
      const successMessage = SUCCESS_MESSAGES._Ok("Fetch todo by Id operation");
      const statusCode = HTTP_STATUS_CODES.OK;
      return SUCCESS(successMessage, statusCode, data);
    } else {
      const errorMessage = ERROR_MESSAGES._NotFound("Id");

      const statusCode = HTTP_STATUS_CODES.NOT_FOUND;
      return ERROR(errorMessage, statusCode);
    }
  } catch (err) {
    const errorMessage = ERROR_MESSAGES._Internal_Server_Error();
    const statusCode = HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR;
    return ERROR(errorMessage, statusCode);
  }
};

export const createTodoService = (
  clientData: clientDataType,
  userId: IncomingHttpHeaders
) => {
  try {
    if (clientData) {
      let todoId = todoData[todoData.length - 1].id + 1 || 1;
      const newTodo = { ...clientData, id: todoId, userId: userId };
      todoData.push(newTodo);
      fs.writeFileSync(
        path.join(__dirname, "../data/todos.json"),
        JSON.stringify(todoData)
      );
      const successMessage = SUCCESS_MESSAGES._Ok("Create Todo operation");
      const statusCode = HTTP_STATUS_CODES.OK;
      return SUCCESS(successMessage, statusCode);
    } else {
      const errorMessage = ERROR_MESSAGES._Conflict("Data");
      const statusCode = HTTP_STATUS_CODES.CONFLICT;
      return ERROR(errorMessage, statusCode);
    }
  } catch (err) {
    const errorMessage = ERROR_MESSAGES._Internal_Server_Error();
    const statusCode = HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR;
    return ERROR(errorMessage, statusCode);
  }
};

export const updateTodoService = (
  id: number,
  clientData: clientDataType,
  userId: IncomingHttpHeaders
) => {
  try {
    const data = todoData
      .filter((data) => data.userId === userId)
      .find((data) => data.id === id);
    if (data) {
      todoData[todoData.findIndex((todo) => todo === data)] = {
        ...clientData,
        id: id,
        userId: userId,
      };
      fs.writeFileSync(
        path.join(__dirname, "../data/todos.json"),
        JSON.stringify(todoData)
      );
      const successMessage = SUCCESS_MESSAGES._Ok("Update Todo operation");
      const statusCode = HTTP_STATUS_CODES.OK;
      return SUCCESS(successMessage, statusCode);
    } else {
      const errorMessage = ERROR_MESSAGES._NotFound("Id");
      const statusCode = HTTP_STATUS_CODES.NOT_FOUND;
      return ERROR(errorMessage, statusCode);
    }
  } catch (err) {
    const errorMessage = ERROR_MESSAGES._Internal_Server_Error();
    const statusCode = HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR;
    return ERROR(errorMessage, statusCode);
  }
};

export const deleteTodoService = ( userId: IncomingHttpHeaders, id: number) => {
  try {
    const data = todoData
      .filter((data) => data.userId === userId)
      .find((data) => data.id === id);
    if (data) {
      const todoIndex = todoData.findIndex((todo) => todo === data);
      todoData.splice(todoIndex, 1);
      fs.writeFileSync(
        path.join(__dirname, "../data/todos.json"),
        JSON.stringify(todoData)
      );
      const successMessage = SUCCESS_MESSAGES._Ok("Delete Todo operation");
      const statusCode = HTTP_STATUS_CODES.OK;
      return SUCCESS(successMessage, statusCode);
    } else {
      const errorMessage = ERROR_MESSAGES._NotFound("Id");
      const statusCode = HTTP_STATUS_CODES.NOT_FOUND;
      return ERROR(errorMessage, statusCode);
    }
  } catch (err) {
    const errorMessage = ERROR_MESSAGES._Internal_Server_Error();
    const statusCode = HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR;
    return ERROR(errorMessage, statusCode);
  }
};
