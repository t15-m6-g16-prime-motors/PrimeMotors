import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import User from "./users.entity";

@Entity("addresses")
class Address {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 50, nullable: false })
  street: string;

  @Column({ type: "int", nullable: false })
  number: number;

  @Column({ type: "varchar", length: 70 })
  complement: string;

  @Column({ type: "varchar", length: 50, nullable: false })
  city: string;

  @Column({ type: "varchar", length: 50, nullable: false })
  state: string;

  @Column({ type: "varchar", length: 50, default: "Brasil" })
  country: string;

  @Column({ type: "varchar", length: 10 })
  postal_code: string;

  @OneToOne(() => User, (user) => user.address)
  @JoinColumn()
  user: User;
}
export default Address;
