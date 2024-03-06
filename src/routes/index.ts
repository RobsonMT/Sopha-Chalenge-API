import { Express } from "express";
import userRouter from "./user.route";
import taskRouter from "./task.route";

const registerRouters = (app: Express): void => {
  // init_app
  app.use(userRouter);
  app.use(taskRouter);
};

export default registerRouters;
