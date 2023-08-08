import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Car from "./cars.entity";

@Entity("pictures")
class Picture {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "text", nullable: false })
  picture: string;

  @ManyToOne(() => Car, (car) => car.picture)
  car: Car;
}
export default Picture;
