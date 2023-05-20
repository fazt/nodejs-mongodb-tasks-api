import { Router } from "express";
import {
  createTask,
  deleteAllTask,
  deleteTask,
  findAllDoneTasks,
  findAllTasks,
  findOneTask,
  updateTask,
} from "../controllers/task.controller.js";

const router = Router();

router.post("/", createTask);

router.get("/", findAllTasks);

router.get("/done", findAllDoneTasks);

router.get("/:id", findOneTask);

router.put("/:id", updateTask);

router.delete("/:id", deleteTask);

router.delete("/", deleteAllTask);

export default router;
