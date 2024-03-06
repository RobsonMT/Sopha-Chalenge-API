import getUserByIdOr404 from "./getUserByIdOr404.middleware";
import getTaskByIdOr404 from "./getTaskByIdOr404.middleware";
import validateAuthToken from "./validateAuthToken.middleware";
import validateEmailAvailability from "./validateEmailAvailability.middleware";
import validadeSchema from "./validateSchema.middleware";

export {
  getUserByIdOr404,
  getTaskByIdOr404,
  validateAuthToken,
  validateEmailAvailability,
  validadeSchema,
};
