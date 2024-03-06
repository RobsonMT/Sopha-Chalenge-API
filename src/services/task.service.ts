import { Request } from "express";
import { Task, User } from "../entities";
import { taskRepository } from "../repositories";
import { AppDataSource } from "../data-source";

class TaskService {
  insertTaskService = async ({
    body,
    decoded,
  }: Request): Promise<Partial<Task>> => {
    body.user = decoded.id;
    return await taskRepository.save({ ...body });
  };

  getAllTasksService = async ({ decoded }: Request): Promise<Task[]> => {
    return await taskRepository.findAll(decoded);
  };

  updateTaskService = async ({ task, body }: Request) => {
    await taskRepository.update(task.id, { ...body });
    return await taskRepository.findOneBy(task);
  };

  deleteTaskService = async ({ task }: Request) => {
    return await taskRepository.delete(task.id);
  };
}

export default new TaskService();
