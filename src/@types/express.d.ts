import { Task } from "../entities";
import { User } from "../entities/User";

declare global {
  namespace Express {
    interface Request {
      user: User;
      decoded: User;
      task: Task;
    }
  }
}
