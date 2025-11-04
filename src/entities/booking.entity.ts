import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { EventEntity } from "./event.entity";

@Entity({ name: "bookings"})
export class BookingEntity {
    @PrimaryGeneratedColumn()
    id!: number;
    
    @ManyToOne(() => EventEntity)
    @JoinColumn({ name: "event_id" })
    event!: EventEntity;

    @Column({ name: "user_id", type: "varchar" })
    userId!: string;
    
    @CreateDateColumn({ name: "created_at", type: "timestamp" })
    createdAt!: Date;
}
