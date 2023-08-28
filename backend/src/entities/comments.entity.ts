import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm';
import User from './users.entity';
import Car from './cars.entity';

@Entity('comments')
class Comment {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'text' })
  comment: string;

  @CreateDateColumn({ type: 'date' })
  created_at: string | Date;

  @ManyToOne(() => User, (user) => user.comment)
  user: User;

  @ManyToOne(() => Car, (car) => car.comment)
  car: Car;
}
export default Comment;
