import express from "express";
import { signupController,loginController, getAlltodo, getById, createTodo, updateTodo, deleteTodo } from "../controllers";
const eventRouter = express.Router();

eventRouter.get("/all", getAlltodo);

eventRouter.get("/:id", getById);

eventRouter.post("/", createTodo);

eventRouter.put("/:id", updateTodo);

eventRouter.delete("/:id", deleteTodo);

export default eventRouter;