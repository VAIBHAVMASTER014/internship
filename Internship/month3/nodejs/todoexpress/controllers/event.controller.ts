import { Request, Response } from "express";
import path from "path";

// imported files
import { todoDataType } from "../types/event.types";
import {
  createTodoService,
  deleteTodoService,
  getAllTodoService,
  getByIdService,
  updateTodoService,
  readFromJson,
} from "../services";

let todoData: todoDataType[] = readFromJson(
  path.join(__dirname, "../data/todos.json")
);

export const getAlltodo = (req: Request, res: Response) => {
  const response = getAllTodoService(todoData);
  res.status(response.statusCode).json(response);
};

export const getById = (req: Request, res: Response) => {
  const response = getByIdService(parseInt(req.params.id), todoData);
  res.status(response.statusCode).json(response);
};

export const createTodo = (req: Request, res: Response) => {
  const todo: todoDataType = req.body;
  const userId = req.headers;
  const response = createTodoService(userId, todoData, todo);
  res.status(response.statusCode).send(response);
};

export const updateTodo = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const data: todoDataType = req.body;
  const userId = req.headers;
  const response = updateTodoService(userId, id, todoData, data);
  res.status(response.statusCode).send(response);
};

export const deleteTodo = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const data: todoDataType = req.body;
  const userId = req.headers;
  const response = deleteTodoService(userId, id, todoData);
  res.status(response.statusCode).send(response);
};
