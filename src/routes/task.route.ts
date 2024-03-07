import { Router } from "express";
import { taskController } from "../controllers";
import { createTaskSchema, updateTaskSchema } from "../schemas";
import {
  validateAuthToken,
  validadeSchema,
  getTaskByIdOr404,
} from "../middlewares";

const taskRouter = Router();

// taskRouter.post(
//   "/tasks",
//   validadeSchema(createTaskSchema),
//   validateAuthToken,
//   taskController.insertTaskController
// );
// taskRouter.get(
//   "/tasks",
//   validateAuthToken,
//   taskController.getAllTaskController
// );
// taskRouter.patch(
//   "/tasks/:id",
//   validateAuthToken,
//   getTaskByIdOr404,
//   validadeSchema(updateTaskSchema),
//   taskController.updateTaskController
// );
// taskRouter.delete(
//   "/tasks/:id",
//   validateAuthToken,
//   getTaskByIdOr404,
//   taskController.deleteTaskController
// );

export default taskRouter;
