import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn
} from 'typeorm';
import User from './users.entity';
import Comment from './comments.entity';
import Picture from './pictures.entity';

@Entity('cars')
class Car {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 70 })
  brand: string;

  @Column({ type: 'varchar', length: 70 })
  model: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'varchar', length: 70 })
  color: string;

  @Column({ type: 'int' })
  year: number;

  @Column({ type: 'varchar', length: 15 })
  fuel_type: string;

  @Column({ type: 'int' })
  kilometrage: number | string;

  @Column({ type: 'decimal', precision: 8, scale: 2 })
  price: number | string;

  @Column({ type: 'boolean', default: true })
  published: boolean

  @Column({ type: 'boolean', default: false })
  good_deal: boolean

  @CreateDateColumn({ type: 'date' })
  created_at: string | Date;

  @ManyToOne(() => User, (user) => user.cars)
  user: User;

  @OneToMany(() => Comment, (comment) => comment.car)
  comment: Comment[];

  @OneToOne(() => Picture, (picture) => picture.car)
  picture: Picture;
}
export default Car;
