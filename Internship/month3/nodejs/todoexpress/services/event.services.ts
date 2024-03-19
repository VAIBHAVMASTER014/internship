import { IncomingHttpHeaders } from "http";
import { todoDataType } from "../types/event.types";
import fs from "fs";
import path from "path";
import { ERROR, SUCCESS } from "../utils/rest-responses";
import {
  HTTP_STATUS_CODES,
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
} from "../assets/constants";

export const getAllTodoService = (todoData: todoDataType[]) => {
  try {
    if (todoData.length > 0) {
      const successMessage = SUCCESS_MESSAGES._Ok("fetched all todo operation");
      const statusCode = HTTP_STATUS_CODES.OK;
      return SUCCESS(successMessage, statusCode, todoData);
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

export const getByIdService = (id: number, todoData: todoDataType[]) => {
  try {
    const data = todoData.find((todo) => todo.id === id);
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
  userId: IncomingHttpHeaders,
  todoData: todoDataType[],
  clientData: todoDataType
) => {
  try {
    if (clientData) {
      let id = todoData[todoData.length - 1].id + 1 || 1;
      const newTodo = { ...clientData, id: id, userId: userId };
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
  userId: IncomingHttpHeaders,
  id: number,
  todoData: todoDataType[],
  clientData: todoDataType
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

export const deleteTodoService = (
  userId: IncomingHttpHeaders,
  id: number,
  todoData: todoDataType[]
) => {
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
