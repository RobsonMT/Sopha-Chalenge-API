import { Request, Response } from "express";
import { taskService } from "../services";

class TaskController {
  insertTaskController = async (req: Request, res: Response) => {
    const task = await taskService.insertTaskService(req);
    return res.status(201).json(task);
  };

  getAllTaskController = async (req: Request, res: Response) => {
    const tasks = await taskService.getAllTasksService(req);
    return res.status(200).json(tasks);
  };

  updateTaskController = async (req: Request, res: Response) => {
    const updatedTask = await taskService.updateTaskService(req);
    return res.status(204).json(updatedTask);
  };

  deleteTaskController = async (req: Request, res: Response) => {
    const deletedTask = await taskService.deleteTaskService(req);
    return res.status(204).json(deletedTask);
  };
}

export default new TaskController();
