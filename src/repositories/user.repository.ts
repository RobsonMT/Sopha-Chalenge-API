import { Repository, DeleteResult, UpdateResult } from "typeorm";
import { AppDataSource } from "../data-source";
import { IUserRepository } from "../interfaces";
import { User } from "../entities";

export interface IUserRepository {
  save: (user: User) => Promise<User>;
  findAll: () => Promise<Array<User>>;
  findOneBy: (payload: object) => Promise<User | null>;
  update: (id: string, payload: Partial<User>) => Promise<UpdateResult>;
  delete: (id: string) => Promise<DeleteResult>;
}

class UserRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = AppDataSource.getRepository(User);
  }

  save = async (user: User) => {
    return await this.repository.save(user);
  };

  findAll: () => Promise<Array<User>> = async () => {
    return await this.repository.find();
  };

  findOneBy = async (payload: object) => {
    return await this.repository.findOneBy({ ...payload });
  };

  update = async (id: string, payload: Partial<User>) => {
    return await this.repository.update(id, { ...payload });
  };

  delete = async (id: string) => {
    return await this.repository.delete(id);
  };
}

export default new UserRepository();
