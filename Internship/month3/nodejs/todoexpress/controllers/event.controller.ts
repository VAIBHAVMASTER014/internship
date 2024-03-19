import { Request, Response } from "express";

// imported files
import {
  createTodoService,
  deleteTodoService,
  getAllTodoService,
  getByIdService,
  updateTodoService
} from "../services";

export const getAlltodo = (req: Request, res: Response) => {
  const userId = req.headers
  const response = getAllTodoService(userId);
  res.status(response.statusCode).json(response);
};

export const getById = (req: Request, res: Response) => {
  const {id} = req.params;
  const userId = req.headers
  const response = getByIdService(userId,parseInt(id));
  res.status(response.statusCode).json(response);
};

export const createTodo = (req: Request, res: Response) => {
  const {title, completed} = req.body;
  const userId = req.headers
  const response = createTodoService({title, completed}, userId);
  res.status(response.statusCode).send(response);
};

export const updateTodo = (req: Request, res: Response) => {
  const {id} = req.params;
  const userId = req.headers
  const {title , completed} = req.body;
  const response = updateTodoService( parseInt(id), {title , completed},userId);
  res.status(response.statusCode).send(response);
};

export const deleteTodo = (req: Request, res: Response) => {
  const {id} = req.params;
  const userId = req.headers
  const response = deleteTodoService(userId, parseInt(id) );
  res.status(response.statusCode).send(response);
};
