import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "events" })
export class EventEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "varchar", length: 250 })
    name!: string;

    @Column({ name: "total_seats", type: "int" })
    totalSeats!: number;
}