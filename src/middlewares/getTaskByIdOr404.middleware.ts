import { NextFunction, Request, Response } from "express";
import { taskRepository, userRepository } from "../repositories";

const getTaskByIdOr404 = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const task = await taskRepository.findOneBy({ id });

    if (!task) {
      throw new Error();
    }

    req.task = task;

    next();
  } catch (err: any) {
    if (err instanceof Error) {
      return res.status(404).json({ error: "Task not found" });
    }
  }
};

export default getTaskByIdOr404;
