import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import User from "./users.entity";

@Entity("addresses")
class Address {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 50 })
  street: string;

  @Column({ type: "varchar" })
  number: string;

  @Column({ type: "varchar", length: 70 })
  complement: string;

  @Column({ type: "varchar", length: 50})
  city: string;

  @Column({ type: "varchar", length: 50})
  state: string;

  @Column({ type: "varchar", length: 10 })
  postal_code: string;

  @OneToOne(() => User, {onDelete: 'CASCADE'})
  @JoinColumn()
  user: User;
}
export default Address;
