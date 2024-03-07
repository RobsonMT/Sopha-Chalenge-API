import { Repository, DeleteResult, UpdateResult } from "typeorm";
import { AppDataSource } from "../data-source";
import { Task, User } from "../entities";

interface ITaskRepository {
  save: (task: Task) => Promise<Task>;
  findAll: (decoded: User) => Promise<Task[] | null>;
  findOneBy: (payload: object) => Promise<Task | null>;
  update: (id: string, payload: Partial<Task>) => Promise<UpdateResult>;
  delete: (id: string) => Promise<DeleteResult>;
}

class TaskRepository implements ITaskRepository {
  private repository: Repository<Task>;

  constructor() {
    this.repository = AppDataSource.getRepository(Task);
  }

  save = async (task: Task) => {
    return await this.repository.save(task);
  };

  findAll = async (decoded: User) => {
    const repo = await AppDataSource.getRepository(User)
      .createQueryBuilder("user")
      .leftJoinAndSelect("user.tasks", "task")
      .where({ id: decoded.id })
      .getMany();

    return repo[0].tasks;
  };

  findOneBy = async (payload: object) => {
    return await this.repository.findOneBy({ ...payload });
  };

  update = async (id: string, payload: Partial<Task>) => {
    return await this.repository.update(id, { ...payload });
  };

  delete = async (id: string) => {
    return await this.repository.delete(id);
  };
}

export default new TaskRepository();
