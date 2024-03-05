import { Router } from "express";
import { userController } from "../controllers";
import {
  getUserByIdOr404,
  validateEmailAvailability,
  validateAuthToken,
  validadeSchema,
} from "../middlewares";
import {
  createUserSchema,
  loginUserSchema,
  updateUserSchema,
} from "../schemas";

const userRouter = Router();

userRouter.post(
  "/users",
  validadeSchema(createUserSchema),
  validateEmailAvailability,
  userController.insertUserController
);
userRouter.post(
  "/login",
  validadeSchema(loginUserSchema),
  userController.loginController
);
userRouter.get(
  "/users",
  validateAuthToken,
  userController.getAllUserController
);
userRouter.get(
  "/users/:id",
  validateAuthToken,
  getUserByIdOr404,
  userController.getUserByIdController
);
userRouter.patch(
  "/users/:id",
  validateAuthToken,
  getUserByIdOr404,
  validadeSchema(updateUserSchema),
  validateEmailAvailability,
  userController.updateUserController
);
userRouter.delete(
  "/users/:id",
  validateAuthToken,
  getUserByIdOr404,
  userController.deleteUserController
);

export default userRouter;
