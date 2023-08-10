import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import User from "./users.entity";
import Comment from "./comments.entity";
import Picture from "./pictures.entity";

export enum Status {
  GASOLINE = "GASOLINE",
  ETHANOL = "ETHANOL",
  FLEX = "FLEX",
  ELECTRIC = "ELECTRIC",
}

@Entity("cars")
class Car {
  [x: string]: any;
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 70, nullable: false })
  brand: string;

  @Column({ type: "varchar", length: 70, nullable: false })
  model: string;

  @Column({ type: "text" })
  description: string;

  @Column({ type: "varchar", length: 70, nullable: false })
  color: string;

  @Column({ type: "int", nullable: false })
  year: number;

  @Column({ type: "enum", enum: Status, default: Status.GASOLINE })
  fuel_type: Status;

  @Column({ type: "int", nullable: false })
  kilometrage: number;

  @Column({ type: "decimal", precision: 8, scale: 2, nullable: false })
  price: number;

  @Column({ type: "date" })
  published_in: string | Date;

  @CreateDateColumn({ type: "date" })
  created_at: string | Date;

  @ManyToOne(() => User, (user) => user.car)
  user: User;

  @OneToMany(() => Comment, (comment) => comment.car)
  comment: Comment[];

  @OneToMany(() => Picture, (picture) => picture.car)
  picture: Picture[];
}
export default Car;
