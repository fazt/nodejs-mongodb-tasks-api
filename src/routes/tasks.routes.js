import * as tasksCtrl from "../controllers/task.controller";
import { Router } from "express";

const router = Router();

router.post("/", tasksCtrl.createTask);

router.get("/", tasksCtrl.findAllTasks);

router.get("/done", tasksCtrl.findAllDoneTasks);

router.get("/:id", tasksCtrl.findOneTask);

router.put("/:id", tasksCtrl.updateTask);

router.delete("/:id", tasksCtrl.deleteTask);

router.delete("/", tasksCtrl.deleteAllTask);

export default router;
