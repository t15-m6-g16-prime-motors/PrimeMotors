import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import { getRounds, hashSync } from "bcryptjs";
import Car from "./cars.entity";
import Address from "./addresses.entity";
import Comment from "./comments.entity";

@Entity("users")
class User {
  [x: string]: any;
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 70, nullable: false })
  full_name: string;

  @Column({ type: "varchar", length: 14, nullable: false, unique: true })
  cpf: string;

  @Column({ type: "varchar", length: 70, nullable: false, unique: true })
  email: string;

  @Column({ type: "varchar", length: 120, nullable: false })
  password: string;

  @Column({ type: "date" })
  birthdate: Date;

  @Column({ type: "boolean", default: false })
  is_seller: boolean;

  @Column({ type: "varchar", length: 255 })
  description: string;

  @Column({ type: "varchar", length: 70, nullable: false })
  phone_number: string;

  @Column({ type: "varchar", nullable: true })
  reset_token?: string;

  @CreateDateColumn({ type: "date" })
  created_at: string | Date;

  @UpdateDateColumn({ type: "date" })
  updated_at: string | Date;

  @OneToMany(() => Car, (car) => car.user)
  cars: Car[];

  @OneToOne(() => Address, (address) => address.user)
  address: Address;

  @OneToMany(() => Comment, (comment) => comment.user)
  comment: Comment[];

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    const isEncrypted: number = getRounds(this.password);

    if (!isEncrypted) {
      this.password = hashSync(this.password, 10);
    }
  }
}
export default User;
