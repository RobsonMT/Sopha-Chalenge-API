import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { compare } from "bcrypt";
import { Task } from "./Task";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 20 })
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @CreateDateColumn({ type: "timestamp" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updatedAt: Date;

  comparePwd = async (recievedPwd: string): Promise<boolean> => {
    return await compare(recievedPwd, this.password);
  };

  @OneToMany(() => Task, (task) => task.user, { onDelete: "CASCADE" })
  tasks: Task[];
}
