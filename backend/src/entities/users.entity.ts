import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

import { getRounds, hashSync } from 'bcryptjs';
import Car from './cars.entity';
import Address from './addresses.entity';
import Comment from './comments.entity';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 70})
  full_name: string;

  @Column({ type: 'varchar', length: 14, unique: true })
  cpf: string;

  @Column({ type: 'varchar', length: 70, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 120})
  password: string;

  @Column({ type: 'date' })
  birthdate: Date | string;

  @Column({ type: 'boolean', default: false })
  is_seller: boolean;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'varchar', length: 70})
  phone_number: string;

  @Column({ type: 'varchar', default: null })
  reset_token: null | string;

  @CreateDateColumn({ type: 'date' })
  created_at: string | Date;

  @UpdateDateColumn({ type: 'date' })
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
