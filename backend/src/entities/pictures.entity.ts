import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn
} from 'typeorm';
import Car from './cars.entity';

@Entity('pictures')
class Picture {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'text' })
  coverImage: string;

  @Column({ type: 'text' })
  image01: string;

  @Column({ type: 'text' })
  image02: string;

  @Column({ type: 'text', nullable: true })
  image03: string;

  @Column({ type: 'text', nullable: true })
  image04: string;

  @Column({ type: 'text', nullable: true })
  image05: string;

  @Column({ type: 'text', nullable: true })
  image06: string;

  @OneToOne(() => Car, (car) => car.picture, { onDelete: 'CASCADE' })
  @JoinColumn()
  car: Car;
}
export default Picture;
