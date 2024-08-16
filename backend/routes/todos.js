import express from "express";
import { addTodo, deleteTodo, getTodos, updateTodo } from "../controllers/todo.js";

const router = express.Router();

router.get("/get", getTodos);
router.post("/add", addTodo);
router.post("/delete", deleteTodo);
router.post("/update", updateTodo);

export default router;
