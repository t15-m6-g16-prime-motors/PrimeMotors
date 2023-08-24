import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import Car from "./cars.entity";

@Entity("pictures")
class Picture {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "text", nullable: false })
  coverImage: string;

  @Column({ type: "text", nullable: false })
  image01: string;
  
  @Column({ type: "text", nullable: false })
  image02: string;

  @Column({ type: "text", nullable: true})
  image03: string;

  @Column({ type: "text", nullable: true})
  image04: string;

  @Column({ type: "text", nullable: true})
  image05: string;

  @Column({ type: "text", nullable: true})
  image06: string;

  @OneToOne(() => Car, (car) => car.picture)
  @JoinColumn()
  car: Car;
}
export default Picture;
