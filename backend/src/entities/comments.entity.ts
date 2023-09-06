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

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })

  created_at: string | Date;
  
  @ManyToOne(() => User, (user) => user.comment, {onDelete: 'CASCADE'})
  user: User;

  @ManyToOne(() => Car, (car) => car.comment, {onDelete: 'CASCADE'})
  car: Car;
}
export default Comment;
